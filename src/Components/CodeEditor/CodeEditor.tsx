import React from "react";
import CodeMirror from "@uiw/react-codemirror";

function CodeEditor() {
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback(
    (val: React.SetStateAction<string>, viewUpdate: any) => {
      console.log("val:", val);
      setValue(val);
    },
    []
  );
  return <CodeMirror value={value} height="200px" onChange={onChange} />;
}
export default CodeEditor;
