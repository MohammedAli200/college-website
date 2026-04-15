import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Layout & Components
import Home from "./pages/Home";

// Departments
import Cse from "./pages/Department/Cse";
import Civil from "./pages/Department/Civil";
import Ece from "./pages/Department/Ece";
import Eee from "./pages/Department/Eee";
import Mech from "./pages/Department/Mech";
import Aiml from "./pages/Department/Aiml";
import Mba from "./pages/Department/Mba";
import Mca from "./pages/Department/Mca";

// About
import Trustees from "./pages/About/Trustees";
import GoverningBody from "./pages/About/GoverningBody";
import Vision from "./pages/About/Vision";
import PrincipalDesk from "./pages/About/PrincipalDesk";
import Disclosures from "./pages/About/Disclosures";
import AboutALTS from "./pages/About/AboutaALTS"; // Ensure this filename is correct in your folder
import Founder from "./pages/About/Founder";
import AcademicCouncil from "./pages/About/AcademicCouncil";
import ChairmansMessage from "./pages/About/ChairmanMessage";
import ViceChairmansMessage from "./pages/About/ViceChairmansmessage";

// Programs (Updated Path for Diploma Offered)
import DipPrograms from "./pages/Programs/diploma/DipPrograms";
import DipAdmissions from "./pages/Programs/diploma/DipAdmission";
import DipFee from "./pages/Programs/diploma/DipFee";
import DipEligibility from "./pages/Programs/diploma/DipEligibility";
import UgPrograms from "./pages/Programs/ug/UgPrograms";
import UGAdmissions from "./pages/Programs/ug/UGAdmissions";
import UGFee from "./pages/Programs/ug/UGFee";
import UGEligibility from "./pages/Programs/ug/UGEligibility";
import PGPrograms from "./pages/Programs/pg/PGPrograms";
import PGAdmissions from "./pages/Programs/pg/PGAdmissions";
import PGEligibility from "./pages/Programs/pg/PGEligibility";
import PGFee from "./pages/Programs/pg/PGFee";

// Admissions
import Procedure from "./pages/Procedure";
import FeeStructure from "./pages/FeeStructure";
import Prospectus from "./pages/Prospectus";

// Facilities
import Library from "./pages/Facilities/Library";
import Auditorium from "./pages/Facilities/Auditorium";
import DigitalRooms from "./pages/Facilities/DigitalRooms";
import Hostels from "./pages/Facilities/Hostels";
import Sports from "./pages/Facilities/Sports";

// Placements
import PlacementCell from "./pages/Placements/PlacementCell";
import Statistics from "./pages/Placements/Statistics";
import TopRecruiters from "./pages/Placements/TopRecruiters";
import PlacementCompanies from "./pages/Placements/PlacementCompanies";

// Alumni
import AlumniPortal from "./pages/Alumini/AlumniPortal";
import AlumniRegister from "./pages/Alumini/AlumniRegister";
import AlumniStories from "./pages/Alumini/AlumniStories";
import AlumniEvents from "./pages/Alumini/AlumniEvents";

// Exams
import Syllabus from "./pages/Exams/Syllabus";
import Results from "./pages/Exams/Results";
import AcademicCalendar from "./pages/Exams/AcademicCalendar";

// Contact
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about/aboutalts" element={<AboutALTS />} />
          <Route path="/about/founder" element={<Founder />} />
          <Route path="/about/trustees" element={<Trustees />} />
          <Route path="/about/governing-body" element={<GoverningBody />} />
          <Route path="/about/academic-council" element={<AcademicCouncil />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/chairmansmessage" element={<ChairmansMessage />} />
          <Route path="/about/vicechairmansmessage" element={<ViceChairmansMessage />} />
          <Route path="/about/principal" element={<PrincipalDesk />} />
          <Route path="/about/disclosures" element={<Disclosures />} />

          {/* Programs - FIXED ROUTES */}
          <Route path="/programs/diploma/offered" element={<DipPrograms />} />
          <Route path="/programs/diploma/admission" element={<DipAdmissions />} />
          <Route path="/programs/diploma/fees" element={<DipFee />} />
          <Route path="/programs/diploma/eligibility" element={<DipEligibility />} />
          <Route path="/programs/ug/offered" element={<UgPrograms />} />
          <Route path="/programs/ug/admission" element={<UGAdmissions />} />
          <Route path="/programs/ug/fees" element={<UGFee />} />
          <Route path="/programs/ug/eligibility" element={<UGEligibility />} />
          <Route path="/programs/pg/offered" element={<PGPrograms />} />
          <Route path="/programs/pg/admission" element={<PGAdmissions />} />
          <Route path="/programs/pg/eligibility" element={<PGEligibility />} />
          <Route path="/programs/pg/fees" element={<PGFee />} />

          {/* Admissions */}
          <Route path="/admissions/procedure" element={<Procedure />} />
          <Route path="/admissions/fee-structure" element={<FeeStructure />} />
          <Route path="/admissions/prospectus" element={<Prospectus />} />

          {/* Departments */}
          <Route path="/departments/cse" element={<Cse />} />
          <Route path="/departments/civil" element={<Civil />} />
          <Route path="/departments/ece" element={<Ece />} />
          <Route path="/departments/eee" element={<Eee />} />
          <Route path="/departments/mech" element={<Mech />} />
          <Route path="/departments/aiml" element={<Aiml />} />
          <Route path="/departments/mba" element={<Mba />} />
          <Route path="/departments/mca" element={<Mca />} />

          {/* Facilities */}
          <Route path="/facilities/library" element={<Library />} />
          <Route path="/facilities/auditorium" element={<Auditorium />} />
          <Route path="/facilities/digital-rooms" element={<DigitalRooms />} />
          <Route path="/facilities/hostels" element={<Hostels />} />
          <Route path="/facilities/sports" element={<Sports />} />

          {/* Placements */}
          <Route path="/placements/cell" element={<PlacementCell />} />
          <Route path="/placements/statistics" element={<Statistics />} />
          <Route path="/placements/recruiters" element={<TopRecruiters />} />
          <Route path="/placements/companies" element={<PlacementCompanies />} />

          {/* Alumni */}
          <Route path="/alumni/portal" element={<AlumniPortal />} />
          <Route path="/alumni/register" element={<AlumniRegister />} />
          <Route path="/alumni/stories" element={<AlumniStories />} />
          <Route path="/alumni/events" element={<AlumniEvents />} />

          {/* Exams */}
          <Route path="/exams/syllabus" element={<Syllabus />} />
          <Route path="/exams/results" element={<Results />} />
          <Route path="/exams/calendar" element={<AcademicCalendar />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;