import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    jwt: null,
    userRoles: [],
    selectedProjectId: null,
      tasks: {
      toDo: [],
      inProgress: [],
      done: []
    },
    selectedProject: {
      id: null,
      name: '',
      type: ''
    }
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_JWT(state, payload) {
      console.log('Przekazane role:', payload.roles);
      state.jwt = payload.jwt;
      state.userRoles = payload.roles;
      axios.defaults.headers.common['Authorization'] = `Bearer ${payload.jwt}`;
    },
    SET_SELECTED_PROJECT_ID(state, projectId) {
      state.selectedProjectId = projectId; // Ustawienie ID wybranego projektu
    },
    SET_TASKS(state, tasks) {
      state.tasks.toDo = tasks.filter(task => task.etap === 'Do zrobienia');
      state.tasks.inProgress = tasks.filter(task => task.etap === 'W trakcie');
      state.tasks.done = tasks.filter(task => task.etap === 'Gotowe');
    },
    setSelectedProject(state, project) {
      state.selectedProject = project;
    }
    
  },
  actions: {
    login({ commit }, payload) {
      commit('SET_USER', payload.user);
      commit('SET_JWT', { jwt: payload.jwt, roles: payload.roles });
    },
    selectProject({ commit }, projectId) {
      commit('SET_SELECTED_PROJECT_ID', projectId); // Akcja do ustawienia ID wybranego projektu
    },
    updateSelectedProject({ commit }, project) {
      commit('setSelectedProject', project);
    }
  },
  getters: {
    isAuthenticated: state => !!state.jwt,
    loggedInUserRoles: state => state.userRoles, 
    loggedInUser: state => state.user,
    selectedProjectId: state => state.selectedProjectId,
  }
});

export default store;
