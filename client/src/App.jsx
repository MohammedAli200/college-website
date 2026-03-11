import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// Departments
import Cse from "./pages/Cse";
import Civil from "./pages/Civil";
import Ece from "./pages/Ece";
import Eee from "./pages/Eee";
import Mech from "./pages/Mech";
import Aiml from "./pages/Aiml";
import Mba from "./pages/Mba";
import Mca from "./pages/Mca";
// About
import Trustees from "./pages/Trustees";
import GoverningBody from "./pages/GoverningBody";
import Vision from "./pages/Vision";
import PrincipalDesk from "./pages/PrincipalDesk";
import Disclosures from "./pages/Disclosures";
// Programs
import Diploma from "./pages/Diploma";
import Ug from "./pages/Ug";
import Pg from "./pages/Pg";
// Admissions
import Procedure from "./pages/Procedure";
import FeeStructure from "./pages/FeeStructure";
import Prospectus from "./pages/Prospectus";
// Facilities
import Library from "./pages/Library";
import Auditorium from "./pages/Auditorium";
import DigitalRooms from "./pages/DigitalRooms";
import Hostels from "./pages/Hostels";
import Sports from "./pages/Sports";
// Placements
import PlacementCell from "./pages/PlacementCell";
import Statistics from "./pages/Statistics";
import TopRecruiters from "./pages/TopRecruiters";
// Exams
import Syllabus from "./pages/Syllabus";
import Results from "./pages/Results";
import AcademicCalendar from "./pages/AcademicCalendar";
// Contact
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about/trustees" element={<Trustees />} />
          <Route path="/about/governing-body" element={<GoverningBody />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/principal" element={<PrincipalDesk />} />
          <Route path="/about/disclosures" element={<Disclosures />} />

          <Route path="/programs/diploma" element={<Diploma />} />
          <Route path="/programs/ug" element={<Ug />} />
          <Route path="/programs/pg" element={<Pg />} />

          <Route path="/admissions/procedure" element={<Procedure />} />
          <Route path="/admissions/fee-structure" element={<FeeStructure />} />
          <Route path="/admissions/prospectus" element={<Prospectus />} />

          <Route path="/departments/cse" element={<Cse />} />
          <Route path="/departments/civil" element={<Civil />} />
          <Route path="/departments/ece" element={<Ece />} />
          <Route path="/departments/eee" element={<Eee />} />
          <Route path="/departments/mech" element={<Mech />} />
          <Route path="/departments/aiml" element={<Aiml />} />
          <Route path="/departments/mba" element={<Mba />} />
          <Route path="/departments/mca" element={<Mca />} />

          <Route path="/facilities/library" element={<Library />} />
          <Route path="/facilities/auditorium" element={<Auditorium />} />
          <Route path="/facilities/digital-rooms" element={<DigitalRooms />} />
          <Route path="/facilities/hostels" element={<Hostels />} />
          <Route path="/facilities/sports" element={<Sports />} />

          <Route path="/placements/cell" element={<PlacementCell />} />
          <Route path="/placements/statistics" element={<Statistics />} />
          <Route path="/placements/recruiters" element={<TopRecruiters />} />

          <Route path="/exams/syllabus" element={<Syllabus />} />
          <Route path="/exams/results" element={<Results />} />
          <Route path="/exams/calendar" element={<AcademicCalendar />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
