import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interest"
import Footer from "./components/Footer"


export default function App(){
  return(
    <main className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </main>
  )
}