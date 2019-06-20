import Vue from "vue";
import Vuex from "vuex";

import projects from '@/data/projects.json'


Vue.use(Vuex);



export default new Vuex.Store({

    state: {
        projects: [],

    },
    //Metodos modificadores del State::
    mutations: {
        FILL_PROJECTS(state, projects) {
            state.projects = projects
        },


    },
    //Ejecutara Metodos de Mutations a traves de metodos Commit::
    actions: {
        getProjects({ commit }) {
            commit("FILL_PROJECTS",projects)
        }
    }


}); 