import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    jwt: null,
    selectedProjectId: null,
      tasks: {
      toDo: [],
      inProgress: [],
      done: []
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_JWT(state, jwt) {
      state.jwt = jwt;
      // Ustawienie tokenu JWT w nagłówkach Axiosa
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    },
    SET_SELECTED_PROJECT_ID(state, projectId) {
      state.selectedProjectId = projectId; // Ustawienie ID wybranego projektu
    },
    SET_TASKS(state, tasks) {
      state.tasks.toDo = tasks.filter(task => task.etap === 'Do zrobienia');
      state.tasks.inProgress = tasks.filter(task => task.etap === 'W trakcie');
      state.tasks.done = tasks.filter(task => task.etap === 'Gotowe');
    }
    
  },
  actions: {
    login({ commit }, { user, jwt }) {
      commit('SET_USER', user);
      commit('SET_JWT', jwt);
    },
    selectProject({ commit }, projectId) {
      commit('SET_SELECTED_PROJECT_ID', projectId); // Akcja do ustawienia ID wybranego projektu
    }
  },
  getters: {
    isAuthenticated: state => !!state.jwt,
    loggedInUser: state => state.user,
    selectedProjectId: state => state.selectedProjectId,
  }
});

export default store;
