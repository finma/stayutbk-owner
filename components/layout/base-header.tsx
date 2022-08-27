import { useRouter } from "next/router";
import { Button, Dropdown, Menu, PageHeader, Space, Input } from "antd";
import { HiOutlineLogout } from "react-icons/hi";
import cx from "classnames";

import styles from "../../styles/Header.module.scss";

const BaseHeader = () => {
  const router = useRouter();

  const handleLogout = async () => {
    console.log("logout");
  };

  const renderProfile = () => {
    return (
      <div className={styles["profile-section"]}>
        <Space size={16} style={{ alignItems: "center" }}>
          <div className={styles["profile-img"]}>
            <span className={styles["user-initial"]}>F</span>
          </div>
          <Space size={0} direction="vertical">
            <p className={styles["profile-name"]}>Firman Maulana</p>
            <p className={styles["profile-email"]}>firman@gmail.com</p>
          </Space>
        </Space>
      </div>
    );
  };

  // Menu Dropdown
  const menu = (
    <Menu
      items={[
        {
          key: 1,
          label: renderProfile(),
        },
        {
          type: "divider",
        },
        {
          key: 2,
          label: (
            <a
              onClick={handleLogout}
              className={cx(styles["menu-item"], styles["item-logout"])}
            >
              <HiOutlineLogout width="20" height="20" />
              Logout
            </a>
          ),
        },
      ]}
    />
  );

  return (
    <>
      <PageHeader
        className={styles["base-header"]}
        title="StayUTBK"
        extra={[
          <Dropdown
            overlayClassName={styles["dropdown-profile"]}
            key={1}
            trigger={["click"]}
            overlay={menu}
            placement="bottomRight"
          >
            <Button className={styles["header-button"]}>F</Button>
          </Dropdown>,
        ]}
      ></PageHeader>
    </>
  );
};

export default BaseHeader;
