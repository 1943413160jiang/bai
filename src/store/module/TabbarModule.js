const module = {
    namespaced: true,
    state: {
        isShowTabbar: true,
    },
    mutations: {
        hiddenTabbar(state) {
            state.isShowTabbar = false
        },
        showTabbar(state) {
            state.isShowTabbar = true
        },
    },
    actions: {

    },
}
export default module;