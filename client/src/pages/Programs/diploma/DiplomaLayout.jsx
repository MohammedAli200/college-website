import ProgramBaseLayout from "../../../components/ProgramBaseLayout";

const DiplomaLayout = ({ children, title }) => {
  const menu = [
    { name: "Programs Offered", href: "/programs/diploma/offered" },
    { name: "Admission Procedure", href: "/programs/diploma/admission" },
    { name: "Eligibility Criteria", href: "/programs/diploma/eligibility" },
    { name: "Fee Structure", href: "/programs/diploma/fees" },
  ];
  return <ProgramBaseLayout children={children} title={title} menuItems={menu} categoryName="Diploma" />;
};
export default DiplomaLayout;