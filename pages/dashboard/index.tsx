import type { ReactElement } from "react";

import LayoutMain from "../../components/layout/layout-main";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Dashboard">{page}</LayoutMain>;
};

export default Dashboard;
