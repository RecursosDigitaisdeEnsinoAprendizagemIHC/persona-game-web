import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Container from "../components/ui/Container/Container";
import PageHeader from "../components/ui/PageHeader/PageHeader";
import Personas from "../components/ui/rewards/personas/Personas";
import Medals from "../components/ui/rewards/medals/Medals";
import Tabs from "../components/ui/Tabs/Tabs";
import ModalSystemError from "../components/ModalSystemError/ModalSystemError";

// redux
import { getAllRewards, getUserRewards } from "../store/actions/reward.action";

const tabs = [
  {
    name: "Personas",
  },
  {
    name: "Medalhas",
  },
];

const Rewards = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const rewards = useSelector((state) => state.reward.rewards);
  const userRewards = useSelector((state) => state.reward.userRewards);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getAllRewards());
  }, []);

  const goBack = ()=>{
    dispatch({ type: 'GET_ALL_REWARDS' , rewards: []});
    router.push("./")
  }
  return (
    <Container>
      <PageHeader onBack={() => goBack()} title="Recompensas" />
      {rewards.code === undefined ?  <Tabs
        items={tabs}
        value={selectedTab}
        onChange={(newValue) => setSelectedTab(newValue)}
      >
        {selectedTab === 0 && (
          <Personas
            rewards={rewards.filter((item) => item.type === "CARD")}
            userRewards={userRewards}
          />
        )}
        {selectedTab === 1 && (
          <Medals
            rewards={rewards.filter((item) => item.type !== "CARD")}
            userRewards={userRewards}
          />
        )}
      </Tabs>: <ModalSystemError openModal error={rewards.code} message={rewards.message} />}
     
    </Container>
  );
};

export default Rewards;
