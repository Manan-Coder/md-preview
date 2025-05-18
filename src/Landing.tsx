import { RoughNotation } from "react-rough-notation"
import Navbar from "./components/navbar"
import AnimatedArrow from "./components/animatedarrow"
import Background from "./components/background"
import Input from "./components/input"
import Output from "./components/output"
function Landing() {
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

      <div className="bg-white h-screen w-screen flex items-center justify-center gap-8">
      <Input />
      <Output />



      </div>
    </div>
  );
}

export default Landing;