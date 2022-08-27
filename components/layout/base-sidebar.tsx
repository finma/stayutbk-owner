import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Layout, Menu } from "antd";
import {
  HiOutlineBookOpen,
  HiOutlineCurrencyDollar,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineViewGrid,
} from "react-icons/hi";

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
      label: "Users",
      key: "users",
      icon: <HiOutlineUsers />,
    },
    {
      label: "Quiz",
      key: "quiz",
      icon: <HiOutlineBookOpen />,
    },
    {
      label: "Roles",
      key: "roles",
      icon: <HiOutlineUserGroup />,
    },
    {
      label: "Transactions",
      key: "transactions",
      icon: <HiOutlineCurrencyDollar />,
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
    if (e.key === "users") {
      router.push("/users/user");
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
