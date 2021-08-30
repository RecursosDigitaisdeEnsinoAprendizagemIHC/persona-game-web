import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUserToken } from "../../store/actions/user.action";

const AppWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const userToken = useSelector((state) => state.user.userToken);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(addUserToken())
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [setLoading]);

  if (loading) {
    return <div />;
  }

  if (!loading && !userToken) {
    return <div>Error loading user!</div>;
  }

  return <>{children}</>;
};

export default AppWrapper;
