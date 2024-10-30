
import './App.css'
import AboutMdei from './Component/AboutMedi'
import Banner from './Component/Banner'
import DonateBlood from './Component/DonateBlood'
import Faq from './Component/Faq'
import Footer from './Component/Footer'
import Header from './Component/Header'
import MembershipPlan from './Component/MembershipPlan'
import OurServices from './Component/OurServices'
import Testimonial from './Component/Testimonial'

function App() {


  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <AboutMdei></AboutMdei>
      <OurServices></OurServices>
      <DonateBlood></DonateBlood>
      <MembershipPlan></MembershipPlan>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Footer></Footer>
    </>
  )
}

export default App
