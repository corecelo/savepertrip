import { action } from "easy-peasy";

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
}

export default {
  ui: uiModel
};
