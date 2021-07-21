import React, { useRef } from "react";

import { Editor } from "@tinymce/tinymce-react";

export default function App1() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      {console.log(window.location.hostname)}
      <Editor
        apiKey="vsht72cj4x8ksxnunt7e1dyi63fzm5iy2htza9kgohhe0pza"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          selector: "#editor",
          file_picker_types: "image",
          external_plugins: {
            tiny_mce_wiris:
              "https://cdn.jsdelivr.net/npm/@wiris/mathtype-tinymce4@7.26.2/plugin.min.js"
          },
          /* enable title field in the Image dialog*/
          image_title: true,
          /* enable automatic uploads of images represented by blob or data URIs*/
          automatic_uploads: true,

          height: 500,
          image_advtab: true,
          menubar: "file edit view insert format tools table tc help",
          plugins: [
            "advlist autolink lists link charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount image code"
          ],
          file_picker_callback: function (callback, value, meta) {
            // Provide file and text for the link dialog
            if (meta.filetype === "file") {
              callback("mypage.html", { text: "My text" });
            }

            // Provide image and alt text for the image dialog
            if (meta.filetype === "image") {
              callback("myimage.jpg", { alt: "My alt text" });
            }

            // Provide alternative source and posted for the media dialog
            if (meta.filetype === "media") {
              callback("movie.mp4", {
                source2: "alt.ogg",
                poster: "image.jpg"
              });
            }
          },
          toolbar:
            "undo redo |  tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry |bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile link image  code media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={(content, editor) => {
          console.log(content);
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}
