import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Container from "../components/ui/Container/Container";

// redux
import { getAllRewards, getUserRewards } from "../store/actions/reward.action";

const Rewards = () => {
  const rewards = useSelector((state) => state.reward.rewards);
  const userRewards = useSelector((state) => state.reward.userRewards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRewards());
    dispatch(getUserRewards());
  }, []);
  console.log(rewards);
  console.log(userRewards);

  return <Container></Container>;
};

export default Rewards;
