import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './LandingPage/Home/Home'
import Courses from './LandingPage/Courses/Courses'
import Services from './LandingPage/Services/Services'
import UpcomingActivity from './LandingPage/UpcomingActivities/SeminarCard'
import Beforeafter from './LandingPage/beforeafter/beforeafter'
import StatsSection from './LandingPage/StatsSection/StatsSection'
import Footer from './LandingPage/Footer/Footer'
import ScrollToTop from './ScrollToTop'
import Review from './LandingPage/Review'
import About from './Pages/Aboutall/About_all'
import Contact from './Pages/ContactPage/ContactPage'
import Page from './Pages/Photos/photo'
import Viewphotos from './Pages/Photos/viewphotos'
import Framer from './framer'
import Servicesall from './Pages/Servicesbanner/Servicebanner'

import CourseList from './Pages/CourseList/CourseList'
function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Framer delay={0.1}><Services /></Framer>
              <Framer delay={0.2}><Courses /></Framer>
              <Framer delay={0.3}><UpcomingActivity /></Framer>
              <Framer delay={0.4}><Beforeafter /></Framer>
              <Framer delay={0.5}><StatsSection /></Framer>
              <Framer delay={0.6}><Review /></Framer>
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photos" element={<Page />} />
        <Route path="/viewphotos/:id" element={<Viewphotos />} />
        
        <Route path="/courselist" element={<CourseList />} />
        <Route path="/servicesall" element={<Servicesall />} />
      </Routes>
    </Router>
  )
}

export default App
