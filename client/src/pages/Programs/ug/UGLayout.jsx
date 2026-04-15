import ProgramBaseLayout from "../../../components/ProgramBaseLayout";

const UGLayout = ({ children, title }) => {
  const menu = [
    { name: "B.Tech Programs", href: "/programs/ug/offered" },
    { name: "UG Admission", href: "/programs/ug/admission" },
    { name: "Eligibility", href: "/programs/ug/eligibility" },
    { name: "Fee Structure", href: "/programs/ug/fees" },
  ];
  return <ProgramBaseLayout children={children} title={title} menuItems={menu} categoryName="Undergraduate" />;
};
export default UGLayout;