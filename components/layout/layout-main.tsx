import Head from "next/head";
import { FC } from "react";
import { Layout } from "antd";
import { useRouter } from "next/router";

import styles from "../../styles/Layout.module.scss";
import BaseHeader from "./base-header";
import BaseSidebar from "./base-sidebar";
import UserSidebar from "./user-sidebar";

const { Content } = Layout;

interface LayoutProps {
  children: any;
  title: any;
  pageOrigin?: string;
}

const LayoutMain: FC<LayoutProps> = ({ children, title }) => {
  const router = useRouter();
  const currentPage = router.pathname.split("/")[1];

  return (
    <>
      <Head>
        <title>{title || "StayUTBK"}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
        ></link>
      </Head>

      <Layout>
        <BaseSidebar />
        <Layout>
          <BaseHeader />
          {currentPage && currentPage === "users" ? (
            <Layout>
              <UserSidebar />
              <Content
                style={{ padding: "24px" }}
                className={styles["main-layout"]}
              >
                {children}
              </Content>
            </Layout>
          ) : (
            <Content
              style={{ padding: "24px" }}
              className={styles["main-layout"]}
            >
              {children}
            </Content>
          )}
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutMain;
