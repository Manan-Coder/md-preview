import 'github-markdown-css/github-markdown.css';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';

const Output = () => {
  const [markdown] = useState(`# Heading

*Italic*  
**Bold**  
~~Strikethrough~~

> Blockquote

\`\`\`js
console.log("code block");
\`\`\`
`);

  return (
    <div className="w-full h-full p-4 overflow-auto">
      <article className="markdown-body">
        <Markdown remarkPlugins={[remarkGfm]}>
          {markdown}
        </Markdown>
      </article>
    </div>
  );
};

export default Output;
