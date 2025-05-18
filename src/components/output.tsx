import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Output = () => {
  const [markdown, setMarkdown] = useState(`# Heading

*Italic*

**Bold**

~~Strikethrough~~

> Blockquote

\`\`\`js
console.log("code block");
\`\`\`
`);

  return (
    <div className="flex flex-col bg-white text-black h-full w-full rounded overflow-auto p-4 border-2">
      <div className="prose prose-slate prose-headings:font-bold prose-blockquote:font-normal prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded max-w-none">
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
      </div>
    </div>
  );
};

export default Output;