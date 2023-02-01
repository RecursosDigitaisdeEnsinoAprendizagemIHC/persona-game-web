import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { loadUserPreferences } from "../store/actions/preferences.action";

import { Switch } from "@material-ui/core";
import Loading from "../components/loading/loading";
import PageHeader from "../components/ui/PageHeader/PageHeader";
import { Preference, PreferenceContainer } from "../components/ui/settings/Settings.styles";

const Settings = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const { preferences } = useSelector((state) => state.preferences);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(loadUserPreferences());
  }, []);

  const goBack = ()=>{
    dispatch({ type: 'GET_ALL_PREFERENCES' , preferences: []});
    router.back()
  }

  return (
    <PreferenceContainer>
      <PageHeader onBack={() => goBack()} title="Configurações" />
      {isLoading ?
        <Loading /> :
        preferences?.map(preference => (
          <Preference key={preference.id}>
            <span>{preference.name}</span>
            <Switch defaultChecked color="primary"/>
          </Preference>
        ))
      }
    </PreferenceContainer>
  );
};

export default Settings;
