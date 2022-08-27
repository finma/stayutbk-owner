import { ReactElement } from "react";
import LayoutMain from "../../components/layout/layout-main";

const TransactionsPage = () => {
  return (
    <>
      <h1>Transactions Page</h1>
    </>
  );
};

TransactionsPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Transactions">{page}</LayoutMain>;
};

export default TransactionsPage;
