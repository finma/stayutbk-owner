import { ReactElement } from "react";
import LayoutMain from "../../components/layout/layout-main";

const StudentPage = () => {
  return (
    <div>
      <h1>Student Page</h1>
    </div>
  );
};

StudentPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Student">{page}</LayoutMain>;
};

export default StudentPage;
