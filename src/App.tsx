import './App.css'
import { Explorer } from "./feature/explorer/Explorer";

import { AnimatedIcon } from "./Component/AnimatedIcon";

function App() {
  return (
    <div className="main-container w-full h-full z-10 absolute flex p-10">
      <Explorer></Explorer>
      <div className="main">
        <AnimatedIcon activeSVGIconPath="M9.39 4.29a4.3 4.3 0 0 0-6.13-.02 4.4 4.4 0 0 0 .02 6.2l6.27 6.33c.26.27.69.27.95 0l6.24-6.3a4.4 4.4 0 0 0-.02-6.19 4.3 4.3 0 0 0-6.13-.01l-.6.6-.6-.61Z" deActiveSVGIconPath="m10.5 16.8 6.24-6.3a4.4 4.4 0 0 0-.02-6.19 4.3 4.3 0 0 0-6.13-.01l-.6.6-.6-.61a4.3 4.3 0 0 0-6.13-.02 4.4 4.4 0 0 0 .02 6.2l6.27 6.33c.26.27.69.27.95 0ZM11.3 5a3.3 3.3 0 0 1 4.71.02 3.4 3.4 0 0 1 .02 4.78l-6 6.06-6.04-6.1a3.4 3.4 0 0 1-.02-4.78 3.3 3.3 0 0 1 4.7.01l.97.97c.2.2.51.2.7 0L11.3 5Z" size="200" trigger="hover" active={false}></AnimatedIcon>
      </div>
    </div>
  )
}

export default App
