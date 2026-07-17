import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BibleStudies from "../pages/BibleStudies/BibleStudies";
import ReadingPlan from "../pages/ReadingPlan/ReadingPlan";
import Prayer from "../pages/Prayer/Prayer";
import Contact from "../pages/Contact/Contact";
// import NotFound from "../pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bible-studies" element={<BibleStudies />} />
          <Route path="/reading-plan" element={<ReadingPlan />} />
          <Route path="/prayer" element={<Prayer />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} />    */}
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;