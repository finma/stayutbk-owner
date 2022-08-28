import { ReactElement } from "react";
import { Button, Table } from "antd";
import { useRouter } from "next/router";
import cx from "classnames";
import type { ColumnsType } from "antd/lib/table";

import LayoutMain from "@/components/layout/layout-main";
import PageTitle from "@/components/page-title";

interface DataType {
  quiz: string;
  totalQuestion: number;
  totalTime: number;
}

const dataTable = [
  { id: 1, quiz: "Quiz 1", totalQuestion: 10, totalTime: 60 },
  { id: 2, quiz: "Quiz 2", totalQuestion: 10, totalTime: 60 },
  { id: 3, quiz: "Quiz 3", totalQuestion: 10, totalTime: 60 },
];

const QuizPage = () => {
  const router = useRouter();

  const columns: ColumnsType<DataType> = [
    {
      title: "Quiz",
      dataIndex: "quiz",
      key: "quiz",
    },
    {
      title: "Total Question",
      dataIndex: "totalQuestion",
      key: "totalQuestion",
      width: "200px",
    },
    {
      title: "Total Time (minute)",
      dataIndex: "totalTime",
      key: "totalTime",
      width: "200px",
    },
  ];

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

      <section style={{ marginTop: 24 }}>
        <Table columns={columns} dataSource={dataTable} />
      </section>
    </>
  );
};

QuizPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Quiz">{page}</LayoutMain>;
};

export default QuizPage;
