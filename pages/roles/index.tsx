import { ReactElement } from "react";
import LayoutMain from "../../components/layout/layout-main";

const RolesPage = () => {
  return (
    <div>
      <h1>Roles</h1>
    </div>
  );
};

RolesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Roles">{page}</LayoutMain>;
};

export default RolesPage;
