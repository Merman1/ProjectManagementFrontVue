import { createStore } from 'vuex';
import axios from 'axios';

let userRoles = [];
try {
  const userRolesFromStorage = localStorage.getItem('userRoles');
  if (userRolesFromStorage) {
    userRoles = JSON.parse(userRolesFromStorage);
  }
} catch (error) {
  console.error('Error parsing user roles from localStorage:', error);
}

const store = createStore({
  state: {
    user: null,
    jwt: localStorage.getItem('jwt') || null,
    userRoles: userRoles,


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
      state.jwt = payload.jwt;
      state.userRoles = payload.roles;
      axios.defaults.headers.common['Authorization'] = `Bearer ${payload.jwt}`;
      // Save JWT and roles to localStorage
      localStorage.setItem('jwt', payload.jwt);
      localStorage.setItem('userRoles', JSON.stringify(payload.roles));
    },
    SET_SELECTED_PROJECT_ID(state, projectId) {
      state.selectedProjectId = projectId;
    },
    SET_TASKS(state, tasks) {
      state.tasks.toDo = tasks.filter(task => task.etap === 'Do zrobienia');
      state.tasks.inProgress = tasks.filter(task => task.etap === 'W trakcie');
      state.tasks.done = tasks.filter(task => task.etap === 'Gotowe');
    },
    setSelectedProject(state, project) {
      state.selectedProject = project;
    },
    CLEAR_AUTH(state) {
      state.jwt = null;
      state.user = null;
      state.userRoles = [];
      localStorage.removeItem('jwt');
      localStorage.removeItem('userRoles');
    }
  },

  actions: {
    login({ commit }, payload) {
      commit('SET_USER', payload.user);
      commit('SET_JWT', { jwt: payload.jwt, roles: payload.roles });
    },
    logout({ commit }) {
      commit('CLEAR_AUTH');
    },
    selectProject({ commit }, projectId) {
      commit('SET_SELECTED_PROJECT_ID', projectId);
    },
    updateSelectedProject({ commit }, project) {
      commit('setSelectedProject', project);
    },
    checkAuth({ commit }) {
      const jwt = localStorage.getItem('jwt');
      let userRoles = [];
      try {
        const userRolesFromStorage = localStorage.getItem('userRoles');
        if (userRolesFromStorage) {
          userRoles = JSON.parse(userRolesFromStorage);
        }
      } catch (error) {
        console.error('Error parsing user roles from localStorage:', error);
      }
  
      if (jwt && userRoles) {
        try {
          commit('SET_JWT', { jwt, roles: userRoles });
        } catch (error) {
          console.error('Error setting JWT and roles:', error);
          commit('CLEAR_AUTH');
        }
      } else {
        commit('CLEAR_AUTH');
      }
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
