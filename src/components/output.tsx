import Markdown from "react-markdown";

const Output = () => {
  const markdown = `# Hey
hello
`;

  return (
    <div className="flex bg-white text-black font-mono text-sm h-[500px] w-[800px] rounded overflow-auto p-4 border-2">
      <Markdown>{markdown}</Markdown>
    </div>
  );
};

export default Output;
