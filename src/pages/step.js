import React, { useEffect, useState } from "react";
import { withRouter, useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

// components
import Container from "../components/ui/Container/Container";
import QuestionItem from "../components/questions/QuestionItem/QuestionItem";
import QuestionAnswerModal from "../components/ui/modal/QuestionAnswerModal/QuestionAnswerModal";
import FinishedStepModal from "../components/ui/modal/FinishedStepModal/FinishedStepModal";

// redux
import {
  finishStep,
  setQuestionAnswer,
  startNewStep,
} from "../store/actions/step.action";
import { getAllPhases } from "../store/actions/phase.action";

const Step = (props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [finishedModalOpen, setFinishedModalOpen] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const stepNumber = props.router.query.stepNumber;
  const stepId = props.router.query.stepId;
  const questions = useSelector((state) => state.step.questions);
  const questionAnswer = useSelector((state) =>
    state.step.answeredQuestions.find(
      (questionAnswer) =>
        questionAnswer.questionId === questions[questionIndex].id
    )
  );

  useEffect(() => {
    if (stepNumber) {
      dispatch(startNewStep(stepId));
    }
  }, [stepNumber]);

  const previousQuestionHandler = () => {
    if (questionIndex === 0) return;
    setQuestionIndex((curIndex) => curIndex - 1);
  };

  const nextQuestionHandler = (answer) => {
    dispatch(setQuestionAnswer(questions[questionIndex].id, answer));
    setModalOpen(true);
  };

  const continueModal = () => {
    setModalOpen(false);

    if (questionIndex + 1 === questions.length) {
      dispatch(finishStep(stepId));
      setFinishedModalOpen(true);
    } else {
      setQuestionIndex((curIndex) => curIndex + 1);
    }
  };

  const completedStepHandler = () => {
    dispatch(getAllPhases());
    router.push("/phases-menu");
  };

  if (questions.length === 0) {
    return <div />;
  }

  return (
    <Container>
      <QuestionAnswerModal
        data={questionAnswer}
        open={modalOpen}
        onContinue={continueModal}
        onClose={() => {}}
      />
      <FinishedStepModal
        open={finishedModalOpen}
        onContinue={completedStepHandler}
        onClose={() => {}}
      />
      <QuestionItem
        questionNumber={questionIndex + 1}
        question={questions[questionIndex]}
        onConfirm={nextQuestionHandler}
        onPrevious={previousQuestionHandler}
      />
    </Container>
  );
};

export default withRouter(Step);
