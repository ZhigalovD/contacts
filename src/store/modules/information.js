export default {
  state: {
    id_contact: "",
    contacts: [],
    otherInfo: [],
    mainInfo: {},
  },
  getters: {
    GET_CONTACTS(state) {
      return state.contacts;
    },
    GET_ID_CONTACT(state) {
      return state.id_contact;
    },
    GET_OTHER_INFO(state) {
      return state.otherInfo;
    },
    GET_MAIN_INFO(state) {
      return state.mainInfo;
    },
  },
  mutations: {
    SET_CONTACT_ID(state, payload) {
      state.id_contact = payload;
    },
    GET_STORE_CONTACTS(state) {
      if (localStorage.getItem("contacts")) {
        state.contacts = [];
        let data = JSON.parse(localStorage.getItem("contacts"));
        data.forEach((el) => {
          state.contacts.push(el);
        });
      }
    },
    SET_OTHER_INFO(state, payload) {
      if (payload.nameInformation && payload.valueInformation) {
        state.otherInfo.push(payload);
      }
    },
    SET_MAIN_INFO(state, payload) {
      state.mainInfo = payload;
    },
    SET_FULL_CONTACT(state, payload) {
      if (state.contacts.length === 0) {
        state.contacts.push(payload);
      } else {
        let i = state.contacts.findIndex(
          (o) => o.id_contact === payload.id_contact
        );

        if (state.contacts[i]) {
          state.contacts.splice(i, 1, payload);
        } else {
          state.contacts.push(payload);
        }
      }
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    DELETE_CONTACT(state, payload) {
      let i = state.contacts.findIndex(
        (o) => o.id_contact === payload.id_contact
      );
      if (state.contacts[i]) {
        state.contacts.splice(i, 1);
      }
      let data = JSON.parse(localStorage.getItem("contacts"));
      data.forEach((el, index) => {
        if (el.id_contact === payload.id_contact) {
          data.splice(index, 1);
          localStorage.setItem("contacts", JSON.stringify(data));
        }
      });
    },
    SET_INFORMATION_FROM_CONTACTS(state, payload) {
      state.otherInfo = payload;
    },
    UPDATE_INFO(state, payload) {
      let index = state.otherInfo.filter((item) => item.id === payload.id);
      state.otherInfo.forEach((el, i) => {
        if (el.id === index[0].id) {
          state.otherInfo.splice(i, 1, payload);
        }
      });
    },
    DELETE_INFO(state, payload) {
      let index = state.otherInfo.filter((item) => item.id === payload.id);
      state.otherInfo.forEach((el, i) => {
        if (el.id === index[0].id) {
          state.otherInfo.splice(i, 1);
        }
      });
    },
    CLEAR_MAIN_INFO(state, payload) {
      state.mainInfo = payload;
    },
    CLEAR_OTHER_INFO(state, payload) {
      state.otherInfo = payload;
    },
  },
  actions: {},
};
