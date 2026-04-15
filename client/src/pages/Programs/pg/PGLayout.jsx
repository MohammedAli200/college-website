import ProgramBaseLayout from "../../../components/ProgramBaseLayout";

const PGLayout = ({ children, title }) => {
  const menu = [
    { name: "Specializations", href: "/programs/pg/offered" },
    { name: "MBA Admission", href: "/programs/pg/admission" },
    { name: "Eligibility", href: "/programs/pg/eligibility" },
    { name: "Fee Structure", href: "/programs/pg/fees" },
  ];
  return <ProgramBaseLayout children={children} title={title} menuItems={menu} categoryName="MBA / PG" />;
};
export default PGLayout;
