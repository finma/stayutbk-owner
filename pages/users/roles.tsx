import { ReactElement } from "react";
import { Button, Table } from "antd";
import cx from "classnames";
import type { ColumnsType } from "antd/lib/table";

import LayoutMain from "@/components/layout/layout-main";
import PageTitle from "@/components/page-title";

interface DataType {
  roleName: string;
}

const dataTable = [
  { id: 1, roleName: "Super Admin" },
  { id: 2, roleName: "Admin" },
  { id: 3, roleName: "User" },
  { id: 4, roleName: "Student" },
];

const RolesPage = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: "30px",
      render: (text, record, index) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: "Role Name",
      dataIndex: "roleName",
      key: "roleName",
      sorter: (a, b) => (a?.roleName ?? "").localeCompare(b?.roleName ?? ""),
    },
  ];

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

      <section style={{ marginTop: 24 }}>
        <Table columns={columns} dataSource={dataTable} pagination={false} />
      </section>
    </>
  );
};

RolesPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Roles">{page}</LayoutMain>;
};

export default RolesPage;
