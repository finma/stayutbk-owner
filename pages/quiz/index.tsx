import { ReactElement } from "react";
import LayoutMain from "../../components/layout/layout-main";

const QuizPage = () => {
  return (
    <div>
      <h1>Quiz</h1>
      <p>This is the Quiz page</p>
    </div>
  );
};

QuizPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutMain title="StayUTBK - Quiz">{page}</LayoutMain>;
};

export default QuizPage;
