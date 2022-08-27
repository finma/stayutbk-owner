import { Button, Divider } from "antd";
import Link from "next/link";
import type { NextPage } from "next";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1>StayUTBK</h1>
          <Divider />
          <div className={styles.space}>
            <Link href="/login">
              <Button block className="basic">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
