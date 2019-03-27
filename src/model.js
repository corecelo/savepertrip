import { action, thunk } from "easy-peasy";
import axios from "axios";
import { URI } from "./utils/serverProxy";

const uiModel = {
  userSetting: false,
  notification: false,
  loading: false,
  toggleUserSetting: action(state => {
    state.userSetting = !state.userSetting;
  }),
  toggleUserSettingFalse: action(state => {
    state.userSetting = false;
  }),

  toggleNotification: action(state => {
    state.notification = !state.notification;
  }),
  toggleNotificationFalse: action(state => {
    state.notification = false;
  })
};

const searchModel = {
  searchResult: {},
  getSearch: thunk(async (actions, payload, { getStoreState }) => {
    getStoreState().ui.loading = true;
    payload.history.push("/search");
    const response = await axios.post(`${URI}/api/search`, payload.searchReq);
    getStoreState().search.searchResult = response.data;
    getStoreState().ui.loading = false;
  }),
  saveSearch: action((state, payload) => {
    state.searchResult = payload;
  })
};

export default {
  ui: uiModel,
  search: searchModel
};
