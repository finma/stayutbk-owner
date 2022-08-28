import type { ReactElement } from "react";

import LayoutMain from "../../components/layout/layout-main";
import PageTitle from "../../components/page-title";

const Dashboard = () => {
  return (
    <>
      <PageTitle title="Dashboard" breadcrumbs="Home - Dashboard" />
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Dashboard">{page}</LayoutMain>;
};

export default Dashboard;
