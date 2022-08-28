import { ReactElement } from "react";

import LayoutMain from "@/components/layout/layout-main";
import PageTitle from "@/components/page-title";

const RolesPage = () => {
  return (
    <>
      <PageTitle title="Roles" breadcrumbs="Home - Roles" />
    </>
  );
};

RolesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Roles">{page}</LayoutMain>;
};

export default RolesPage;
