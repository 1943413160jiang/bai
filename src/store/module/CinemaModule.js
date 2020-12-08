import http from '@/util/http'
const module = {
    namespaced: true,
    state: {
        cinemalist: []
    },
    mutations: {
        setcinemaList(state, cinemalist) {
            state.cinemalist = cinemalist;
        },
        clearCinemaList(state) {
            state.cinemalist = [];
        }
    },
    actions: {
        getcinemaList(store, cityId) {
            return http({
                url: `/gateway?cityId=${cityId}&ticketFlag=1&k=8450279`,
                headers: {
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then(res => {
                // console.log(res.data.data.cinemas);
                store.commit("setcinemaList", res.data.data.cinemas)
            })
        }
    },
}
export default module;