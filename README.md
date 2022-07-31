# @flexcodelabs/use-drag-drop-hook

[![npm](https://img.shields.io/npm/v/@flexcodelabs/use-drag-drop-hook)](https://www.npmjs.com/package/@flexcodelabs/use-drag-drop-hook) [![NPM](https://img.shields.io/npm/l/@flexcodelabs/use-drag-drop-hook)](https://www.npmjs.com/package/@flexcodelabs/use-drag-drop-hook)

[Package Name](#@flexcodelabs/use-drag-drop-hook)

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)

## Features

- List of features

## Installation

`npm install @flexcodelabs/use-drag-drop-hook`

or

`yarn add @flexcodelabs/use-drag-drop-hook`

## Usage

```js
...
import useDragAndDrop from '@flexcodelabs/use-drag-drop-hook';

// inside React Fn
const {
  dragOver, // returns true if drag over event triggered
  setDragOver, // update drag over state
  onDragOver, // a function to be called onDrag event
  onDragLeave, // a function to be called on drag leave
  fileDropError, // returns error if there is any on file drop
  setFileDropError, // set errors especially used on validation
} = useDragAndDrop()
```

```js
...
import useDragAndDrop from '@flexcodelabs/use-drag-drop-hook';

const Test = () => {
  const {
    dragOver,
    onDragOver,
    onDragLeave,
    fileDropError,
    setFileDropError,
  } = useDragAndDrop();
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

```

## Examples

[Source code](https://github.com/flexcodelabs/hooks-use-drag-drop-hook/example)
