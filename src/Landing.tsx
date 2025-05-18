import { RoughNotation } from "react-rough-notation"
import Navbar from './components/navbar.tsx'

function Landing() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
<div className="bg-white w-screen h-screen">
  <div className="bg-white h-full w-full flex justify-center items-center">
    <RoughNotation type="underline" show={true} color="#6700c9" strokeWidth={3}>
    <p style={{ fontFamily: '"Gochi Hand",cursive' , marginBottom: '-0.3em'}} className="text-8xl">Sketchy</p>
</RoughNotation>
  </div>
</div>
<div className="bg-white h-screen w-screen">
</div>
</div>

  )
}

export default Landing
