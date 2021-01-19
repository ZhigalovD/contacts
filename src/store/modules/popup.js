export default {
    state: {
        isShowPopup: false,
        thisArr: [],
        nameEvent: []
    },
    getters: {
        IS_SHOW_POPUP(state) {
            return state.isShowPopup
        },
        GET_ARR(state) {
            return state.thisArr
        },
        GET_NAME_EVENT(state) {
            return state.nameEvent
        }
    },
    mutations: {
        SHOW_POPUP(state, value) {
            state.isShowPopup = value
        },
        SET_ARR(state, value) {
            state.thisArr = value
        },
        SET_NAME_EVENT(state, name) {
            state.nameEvent = name
        }
    },
    actions: {},
}
