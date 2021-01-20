export default {
    state: {
        information: [],
        requiredFields: {},
        contacts: []
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
        }
    },
    mutations: {
        CREATE_INFORMATION(state, info) {
            if (info.nameInformation && info.valueInformation) {
                state.information.push(info)
            }
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
        SET_REQUIRE_FIELDS(state, value) {
            state.requiredFields = value
        },
        SET_ALL_CONTACTS(state, value) {
            state.contacts.push(value)
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
