export default {
    state: {
        information: []
    },
    getters: {
        validInformation(state) {
            return state.information.filter(i => {
                return i.nameInformation && i.valueInformation
            })
        }
    },
    mutations: {
        createInformation(state, info) {
            if (info.nameInformation && info.valueInformation) {
                state.information.push(info)
            }
        },
        UPDATE_INFORMATION(state, info) {
            let index = state.information.filter(item => item.id === info.id)
            console.log(index[0].id);
            state.information.splice(index[0].id ,1, info)
        }
    },
    actions: {},
}
