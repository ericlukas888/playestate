import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Landing } from './pages/Landing/landing'
import {Membership} from './pages/Membership/mebership'
import {ComingSoon} from './pages/ComingSoon/comingsoon'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <BrowserRouter>
     <AnimatedCursor
          innerSize={12}
          outerSize={24}
          color="17, 163, 231"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={4}
        />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
