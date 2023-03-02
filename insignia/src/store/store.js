import { createStore } from 'vuex'

export default createStore({
    state: {
        userData: "USER!",
        optionProject: 'GIFT IDEAS',
        scroll: 0,
        cuestionario: [],

    }, mutations: {
        addOptionProject(state, payload) {
            state.optionProject = payload;
        },
        addScrollPosition(state, payload) {
            state.scroll = payload;
        },
        addOptionCuestionario(state, payload) {
            state.cuestionario.unshift(payload);
        },


    }, actions: {
        addOptionProjectAction({ commit }, payload) {
            commit('addOptionProject', payload)

        },
        addScrollPositionAction({ commit }, payload) {
            commit('addScrollPosition', payload)
        },
        addOptionCuestionarioAction({ commit }, payload) {
            commit('addOptionCuestionario', payload)
        },
    }, getters: {

    }
})