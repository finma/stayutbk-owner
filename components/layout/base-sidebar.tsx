import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Layout, Menu } from "antd";
import { HiOutlineUsers, HiOutlineViewGrid } from "react-icons/hi";

import styles from "../../styles/Sidebar.module.scss";

const { Sider } = Layout;

const BaseSidebar = () => {
  const router = useRouter();
  const items = [
    {
      label: "Dashboard",
      key: "dashboard",
      icon: <HiOutlineViewGrid />,
    },
    {
      label: "User",
      key: "user",
      icon: <HiOutlineUsers />,
    },
  ];

  const [activeMenu, setActiveMenu] = useState("/dashboard");

  useEffect(() => {
    let currentRoute = router.asPath.split("/");
    if (currentRoute.length > 1) {
      setActiveMenu(currentRoute[1]);
    } else {
      setActiveMenu("dashboard");
    }
  }, [router.asPath]);

  const handleRoute = (e: any) => {
    if (e.key === "user") {
      router.push("/user/user");
    } else {
      router.push("/" + e.key);
    }
  };

  return (
    <Sider width={112} className={styles["main-sidebar"]}>
      <Menu
        className={styles["sidebar-wrapper"]}
        selectedKeys={[activeMenu]}
        mode="inline"
        items={items}
        onClick={handleRoute}
      ></Menu>
    </Sider>
  );
};

export default BaseSidebar;