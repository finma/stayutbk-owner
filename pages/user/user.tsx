import { ReactElement } from "react";
import LayoutMain from "../../components/layout/layout-main";

const UserPage = () => {
  return (
    <div>
      <h1>User Page</h1>
    </div>
  );
};

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - User">{page}</LayoutMain>;
};

export default UserPage;
