import React, { ReactElement, useState } from "react";
import ReactDOM from "react-dom";
import useDragAndDrop from "@flexcodelabs/use-drag-drop-hook";

const Test = () => {
  const { dragOver, onDragOver, onDragLeave, fileDropError, setFileDropError } =
    useDragAndDrop();
  const [file, setFile] = useState<any>(null);
  const onDrop = (e: any) => {
    e.preventDefault();
    if (e.dataTransfer.files[0]?.size > 10000) {
      setFileDropError("Invalid file size");
    }
    // do something with the file
    setFile(e.dataTransfer.files[0]);
  };

  return (
    <div>
      <label
        onDrag={onDragOver}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {file && <p>{file?.name}</p>}
        Drag and Drop your files here
        <input type="file" />
        {fileDropError && <p>{fileDropError}</p>}
        <p>{dragOver && "Drop your files here"}</p>
        <p>Max file size = 10Kb</p>
      </label>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById("root")
);
