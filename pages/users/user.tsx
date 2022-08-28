import { ReactElement } from "react";

import LayoutMain from "../../components/layout/layout-main";
import PageTitle from "../../components/page-title";

const UserPage = () => {
  return (
    <>
      <PageTitle title="Users" breadcrumbs="Home - Users - User" />
    </>
  );
};

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - User">{page}</LayoutMain>;
};

export default UserPage;
