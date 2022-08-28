import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Layout, List } from "antd";
import { HiOutlineUsers } from "react-icons/hi";

import styles from "../../styles/Sidebar.module.scss";

const { Sider } = Layout;

const UserSidebar = () => {
  const [activeItem, setActiveItem] = useState("");

  const router = useRouter();

  const userMenu = [
    {
      title: "User Management",
      icon: <HiOutlineUsers width="20" height="20" />,
      subMenu: [
        {
          subTitle: "User",
          id: "user",
          link: "/users/user",
        },
        {
          subTitle: "Student",
          id: "student",
          link: "/users/student",
        },
        {
          subTitle: "Roles",
          id: "roles",
          link: "/users/roles",
        },
      ],
    },
  ];

  useEffect(() => {
    const path = router.asPath;
    const arrPath = path.split("/");

    setActiveItem(arrPath[2]);
  }, [router.asPath]);

  const handleChangeSub = (subData: any) => {
    if (subData.id === activeItem) return;
    setActiveItem(subData.id);
    router.push(subData.link);
  };

  return (
    <Sider width={260} className={styles["setting-sidebar"]}>
      <List
        itemLayout="horizontal"
        dataSource={userMenu}
        renderItem={(item) => (
          <List.Item title={item.title}>
            <div className={styles["setting-sub-item"]}>
              <span className={styles["sub-item-title"]}>
                {item.icon} {item.title}
              </span>
              <List
                itemLayout="horizontal"
                dataSource={item.subMenu}
                renderItem={(sub) => (
                  <List.Item
                    onClick={() => handleChangeSub(sub)}
                    className={activeItem === sub.id ? "active-item" : ""}
                  >
                    {sub.subTitle}
                  </List.Item>
                )}
              />
            </div>
          </List.Item>
        )}
      />
    </Sider>
  );
};

export default UserSidebar;
