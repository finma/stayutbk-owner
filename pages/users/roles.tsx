import { ReactElement } from "react";
import { Button } from "antd";
import cx from "classnames";

import LayoutMain from "@/components/layout/layout-main";
import PageTitle from "@/components/page-title";

const RolesPage = () => {
  return (
    <>
      <section className="page-header">
        <PageTitle title="Roles" breadcrumbs="Home - User Management - Roles" />
        <Button
          // onClick={() => setModal("add-role")}
          className={cx("button", "success")}
        >
          Add Role
        </Button>
      </section>
    </>
  );
};

RolesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Roles">{page}</LayoutMain>;
};

export default RolesPage;
