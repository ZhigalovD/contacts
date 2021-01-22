export default {
    state: {
        information: [],
        requiredFields: {},
        contacts: [],
        otherInfo: [],
        id_user: {}
    },
    getters: {
        ADD_INFORMATION(state) {
            return state.information
        },
        GET_REQUIRE_FIELDS(state) {
            return state.requiredFields
        },
        GET_CONTACTS(state) {
            return state.contacts
        },
        GET_ID(state) {
            return state.id_user
        }
    },
    mutations: {
        SET_INFORMATION(state, info) {
            if (info.nameInformation && info.valueInformation) {
                state.information.push(info)
            }
        },
        SET_INFORMATION_FROM_CONTACTS(state, payout) {
            state.information = payout
        },
        UPDATE_INFORMATION(state, info) {
            let index = state.information.filter(item => item.id === info.id)
            state.information.forEach((el, i) => {
                if (el.id === index[0].id) {
                    state.information.splice(i, 1, info) //подумать может лучше reduce
                }
            })
        },
        DELETE_INFORMATION(state, info) {
            let index = state.information.filter(item => item.id === info.id)
            state.information.forEach((el, i) => {
                if (el.id === index[0].id) {
                    state.information.splice(i, 1) //подумать может лучше reduce
                }
            })
        },
        DELETE_CONTACT(state, payout) {
            let i = state.contacts.findIndex(o => o.id_user === payout.id_user);
            if (state.contacts[i]) {
                state.contacts.splice(i, 1)
            }
        },
        SET_ID(state, value) {
            state.id_user = value
        },
        SET_REQUIRE_FIELDS(state, value) {
            state.requiredFields = value
        },

        /* нужен полный рефакторинг */

        SET_ALL_CONTACTS(state, value) {
            if (state.contacts.length === 0) {
                state.contacts.push(value)
            } else {
                let i = state.contacts.findIndex(o => o.id_user === value.id_user);

                if (state.contacts[i]) {
                    state.contacts.splice(i, 1, value)
                } else {
                    state.contacts.push(value)
                }
            }
        },
        DEFAULT_INFO(state, value) {
            state.information = value
        },
        DEFAULT_REQUIRE_FIELDS(state, value) {
            state.requiredFields = value
        }
    },
    actions: {},
}
