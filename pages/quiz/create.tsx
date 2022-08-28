import type { ReactElement } from "react";

import LayoutMain from "@/components/layout/layout-main";
import PageTitle from "@/components/page-title";

const CreateQuizPage = () => {
  return (
    <>
      <PageTitle title="Create Quiz" breadcrumbs="Home - Quiz - Create" />
    </>
  );
};

CreateQuizPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Create Quiz">{page}</LayoutMain>;
};

export default CreateQuizPage;
