import { ReactElement } from "react";

import LayoutMain from "../../components/layout/layout-main";
import PageTitle from "../../components/page-title";

const QuizPage = () => {
  return (
    <>
      <PageTitle title="Quiz" breadcrumbs="Home - Quiz" />
    </>
  );
};

QuizPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Quiz">{page}</LayoutMain>;
};

export default QuizPage;
