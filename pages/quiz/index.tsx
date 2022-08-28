import { ReactElement } from "react";
import { Button } from "antd";
import { useRouter } from "next/router";
import cx from "classnames";

import LayoutMain from "@/components/layout/layout-main";
import PageTitle from "@/components/page-title";

const QuizPage = () => {
  const router = useRouter();
  return (
    <>
      <section className="page-header">
        <PageTitle title="Quiz" breadcrumbs="Home - Quiz" />

        <Button
          onClick={() => router.push("/quiz/create")}
          className={cx("button", "success")}
        >
          Add Quiz
        </Button>
      </section>
    </>
  );
};

QuizPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Quiz">{page}</LayoutMain>;
};

export default QuizPage;
