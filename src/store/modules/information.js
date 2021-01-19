export default {
    state: {
        information: []
    },
    getters: {
        ADD_INFORMATION(state) {
            return state.information
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
                    state.information.splice(i ,1, info)
                }
            })
        },
        DELETE_INFORMATION(state, info) {
            let index = state.information.filter(item => item.id === info.id)
            state.information.forEach((el, i) => {
                if (el.id === index[0].id) {
                    state.information.splice(i ,1)
                }
            })
        }
    },
    actions: {},
}
