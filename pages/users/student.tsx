import { ReactElement } from "react";

import LayoutMain from "@/components/layout/layout-main";
import PageTitle from "@/components/page-title";

const StudentPage = () => {
  return (
    <>
      <PageTitle
        title="Stundent"
        breadcrumbs="Home - User Management - Stundent"
      />
    </>
  );
};

StudentPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Student">{page}</LayoutMain>;
};

export default StudentPage;
