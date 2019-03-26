import { action, thunk } from 'easy-peasy';
import axios from 'axios';
import { URI } from './utils/serverProxy';

const uiModel = {
  userSetting: false,
  notification: false,
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
  getSearch: thunk(async (actions, payload) => {
    const response = await axios.post(`${URI}/api/search`, payload);
    actions.saveSearch(response.data);
  }),
  saveSearch: action((state, payload) => {
    state.searchResult = payload;
  })
};

export default {
  ui: uiModel,
  search: searchModel
};
