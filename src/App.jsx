import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Home from "./Pages/Home"

const App = () => {
  return (
    <div className="flex justify-center flex-col bg-black items-center ">
      <Navbar />
      <Home />
      <Products />
    </div>
  )
}

export default App
