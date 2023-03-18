import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { updateUserPreferences } from "../store/actions/preferences.action";

import { MenuItem, Select, Switch } from "@material-ui/core";
import Loading from "../components/loading/loading";
import PageHeader from "../components/ui/PageHeader/PageHeader";
import { Preference, PreferenceContainer } from "../components/ui/settings/Settings.styles";
import { updateFontSize } from "../services/preferences.service";

const Settings = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  const { preferences } = useSelector((state) => state.preferences);

  const dispatch = useDispatch();
  const router = useRouter();

  const goBack = () => {
    router.back()
  }

  const inputToRender = (preference, handleChange) => {
    const { inputType, value, options, id } = preference;

    const inputs = {
      'checkbox': (
        <Switch
          color="primary"
          defaultChecked={Number(value)}
          onChange={(e) => handleChange(+e.target.checked, id)}
        />
      ),
      'select': (
        <Select
          label="options"
          defaultValue={Number(value)}
          onChange={(e) => {
            updateFontSize(e.target.value)
            handleChange(e.target.value, id)
          }}
        >
          {options?.split(',').map(option => (
            <MenuItem key={Number(option)} value={Number(option)}>{option}x</MenuItem>
          ))}
        </Select>
      )
    }

    return inputs[inputType]
  }

  const handleChange = (value, preferenceId) => {
    dispatch(updateUserPreferences(preferenceId, value))
  }

  return (
    <PreferenceContainer>
      <PageHeader onBack={() => goBack()} title="Configurações" />
      {isLoading ?
        <Loading /> :
        preferences?.map(preference => (
          <Preference key={preference.id}>
            <span>{preference.name}</span>
            {inputToRender(preference, handleChange)}
          </Preference>
        ))
      }
    </PreferenceContainer>
  );
};

export default Settings;
