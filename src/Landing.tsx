import { RoughNotation } from "react-rough-notation"
import Navbar from './components/navbar.tsx'
import AnimatedArrow from "./components/animatedarrow.tsx"
import Background from "./components/background.tsx"
import Editor from "react-simple-code-editor"
import Prism from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism.css'
import React from "react"

function Landing() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Background />

      <div className="bg-white w-screen h-screen">
        <div className="bg-white h-full w-full flex justify-center items-center -mt-40">
          <RoughNotation type="box" show={true} padding={20}>
            <div className="flex flex-col items-center">
              <RoughNotation type="underline" show={true} color="#6700c9" strokeWidth={3}>
                <p
                  style={{ fontFamily: '"Gochi Hand", cursive', marginBottom: '-0.3em' }}
                  className="text-8xl"
                >
                  Sketchy
                </p>
              </RoughNotation>
              <p className="text-lg mt-14 text-center">
                Ad-free markdown preview and a lot more things!
              </p>
            </div>
          </RoughNotation>
          <AnimatedArrow />
        </div>
      </div>

      <div className="bg-white h-screen w-screen">
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code =>
            Prism.highlight(code, Prism.languages.javascript, 'javascript')
          }
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>
    </div>
  );
}

export default Landing;
