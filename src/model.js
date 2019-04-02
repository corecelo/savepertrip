import { action, thunk } from "easy-peasy";
import axios from "axios";
import { URI } from "./utils/serverProxy";

const uiModel = {
  userSetting: false,
  notification: false,
  loading: false,
  showOverlay: false,
  toggleUserSetting: action(state => {
    state.userSetting = !state.userSetting;
  }),
  toggleUserSettingFalse: action(state => {
    state.showOverlay = false;
  }),
  toggleShowOverlayTrue: action(state => {
    state.showOverlay = true;
  }),
  toggleShowOverlayFalse: action(state => {
    state.showOverlay = false;
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
  bufferResult: {},
  getSearch: thunk(async (actions, payload, { getStoreState }) => {
    getStoreState().ui.loading = true;
    payload.history.push("/search");
    const response = await axios.post(`${URI}/api/search`, payload.searchReq);
    getStoreState().search.searchResult = response.data;
    getStoreState().search.bufferResult = response.data;
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
