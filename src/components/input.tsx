import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/themes/prism.css";
import { useState } from "react";
import "prismjs/components/prism-markdown";

const Input = () => {
  const [code, setCode] = useState(
    `# Hey\n input here`
  );

  return (
    <div className="flex bg-black text-white font-mono text-sm h-[500px] w-[800px] rounded overflow-hidden">
      <div className="px-4 py-4 bg-gray-900 text-gray-400 text-right select-none">
        {code.split("\n").map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>

      <div className="flex-1 overflow-auto p-4">
        <Editor 
          value={code}
          onValueChange={setCode}
          highlight={code =>
            Prism.highlight(code, Prism.languages.markdown, "markdown")
          }
          padding={0}
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: 14,
            minHeight: "100%",
            width: "100%",
            whiteSpace: "pre-wrap", 
            wordWrap: "break-word", 
            outline: "none",
            color: "white",
            backgroundColor: "transparent"
          }}
          textareaClassName="focus:outline-none"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Input;