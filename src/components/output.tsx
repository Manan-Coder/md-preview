import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface OutputProps {
  markdown?: string;
}

const Output = ({ markdown }: OutputProps) => {
  const [localMarkdown] = useState(markdown || `# Heading

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
      <article className="prose">
        <Markdown remarkPlugins={[remarkGfm]}>
          {markdown || localMarkdown}
        </Markdown>
      </article>
    </div>
  );
};

export default Output;  