import React, { useEffect, useState } from "react";
import { withRouter, useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

// components
import Container from "../components/ui/Container/Container";
import Questions from "../components/questions/Questions/Questions";
import QuestionAnswerModal from "../components/ui/modal/QuestionAnswerModal/QuestionAnswerModal";
import FinishedStepModal from "../components/ui/modal/FinishedStepModal/FinishedStepModal";

// redux
import {
  clearFinishedStep,
  failStep,
  finishStep,
  setQuestionAnswer,
  startNewStep,
} from "../store/actions/step.action";
import { getAllPhases } from "../store/actions/phase.action";

const Step = (props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [finishedModalOpen, setFinishedModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);

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
  const finishedStep = useSelector((state) => state.step.finishedStep);

  useEffect(() => {
    if (questions && !startDate) setStartDate(Date.now());
  }, [questions, startDate]);

  useEffect(() => {
    if (stepNumber) {
      dispatch(startNewStep(stepId));
    }
  }, [stepNumber]);

  useEffect(() => {
    if (finishedStep) {
      setFinishedModalOpen(true);
    }
  }, [finishedStep]);

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
    } else {
      setQuestionIndex((curIndex) => curIndex + 1);
    }
  };

  const completedStepHandler = () => {
    dispatch(clearFinishedStep());
    dispatch(getAllPhases());
    setFinishedModalOpen(false);
    router.push("/phases-menu");
  };

  const failStepHandler = (reason) => {
    dispatch(failStep(reason));
  };

  return (
    <Container>
      <QuestionAnswerModal
        data={questionAnswer}
        open={modalOpen}
        onContinue={continueModal}
        onClose={() => {}}
      />
      {finishedModalOpen && (
        <FinishedStepModal
          data={finishedStep}
          open={finishedModalOpen}
          onContinue={completedStepHandler}
          onClose={() => {}}
        />
      )}

      {questions[questionIndex] && startDate && (
        <Questions
          questions={questions}
          questionNumber={questionIndex + 1}
          selectedQuestion={questions[questionIndex]}
          startDate={startDate}
          onConfirm={nextQuestionHandler}
          onPrevious={previousQuestionHandler}
          onFail={failStepHandler}
        />
      )}
    </Container>
  );
};

export default withRouter(Step);
