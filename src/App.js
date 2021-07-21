import { CKEditor } from "ckeditor4-react";
import React from "react";

function App() {
  return (
    <div className="App">
      <h2>Using CKEditor 4 in React</h2>
      <CKEditor
        config={{
          toolbar: [
            ["Source"],
            ["Styles", "Format", "Font", "FontSize"],
            ["Bold", "Italic"],
            ["Undo", "Redo"],
            ["EasyImageUpload"],
            ["About"]
          ],
          extraPlugins: ["easyimage", "ckeditor_wiris"],
          removePlugins: "image",
          cloudServices_uploadUrl: "https://33333.cke-cs.com/easyimage/upload/",
          cloudServices_tokenUrl:
            "https://33333.cke-cs.com/token/dev/ijrDsqFix838Gh3wGO3F77FSW94BwcLXprJ4APSp3XQ26xsUHTi0jcb1hoBt"
        }}
        initData={<p>Hello from CKEditor 4!</p>}
        onInstanceReady={() => {
          alert("Editor is ready!");
        }}
      />
    </div>
  );
}

export default App;
