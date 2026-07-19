import About from "./component/About/About"
import Cta from "./component/Cta/Cta"
import DataSet from "./component/DataSet/DataSet"
import Footer from "./component/Footer/Footer"
import Hero from "./component/Hero/Hero"
import HohItWorks from "./component/HowItWorks/HohItWorks"
import Impact from "./component/Impact/Impact"
import Navbar from "./component/Navbar/Navbar"
import PartnerShip from "./component/PartnerShip/PartnerShip"
import Problem from "./component/Problem/Problem"
import Solution from "./component/Solution/Solution"
import Team from "./component/Team/Team"
import Technology from "./component/Technology/Technology"

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Problem />
    <Solution />
    <HohItWorks />
    <Technology />
    <DataSet />
    <Impact />
    <Team />
    <PartnerShip />
    <Cta />
    <About />
    <Footer />
    </>
  )
}

export default App
