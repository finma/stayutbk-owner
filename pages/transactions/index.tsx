import { ReactElement } from "react";

import LayoutMain from "@/components/layout/layout-main";
import PageTitle from "@/components/page-title";

const TransactionsPage = () => {
  return (
    <>
      <PageTitle title="Transactions" breadcrumbs="Home - Transactions" />
    </>
  );
};

TransactionsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Transactions">{page}</LayoutMain>;
};

export default TransactionsPage;
