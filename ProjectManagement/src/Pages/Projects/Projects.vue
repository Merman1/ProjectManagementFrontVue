<template>
  <div class="w-screen h-screen flex">

    <div class="w-[400px] h-full bg-gray-200 text-black" v-show="showSide">
      <div class="h-[80px] bg-cyan-700 flex justify-start items-center">
        <div class="px-[20px] text-white">
          <h3 class="font-bold text-xl">DASHBOARD</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-cyan-700 py-[20px] text-white">
        <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
          <div class="flex flex-col justify-between space-y-[10px]">
            <hr class="my-4 border-dashed border-gray-300">
            <router-link to="/projects"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out">
              <img class="w-10 h-10 border-gray-50" src="../../assets/project.png" alt="">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              </svg>
              <h3 class="font-bold text-xl">Wybierz projekt</h3>
            </router-link>
            <div class="my-4"></div>
            <div class="my-4"></div>
            <div class="my-4"></div>
            <hr class="my-4 border-dashed border-gray-300">
            <div class="my-4"></div>
            <div class="my-4"></div>
            <div class="my-4"></div>
            <router-link v-if="showBacklogLink" to="/backlog"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
              <img class="w-10 h-10  border-gray-50" src="../../assets/backlog.png" alt="">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              </svg>
              BACKLOG
            </router-link>
            <router-link to="/timeline"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <img class="w-10 h-10  border-gray-50" src="../../assets/calendar.png" alt="">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              </svg>
              KALENDARZ
            </router-link>
            <router-link to="/table"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <img class="w-10 h-10  border-gray-50" src="../../assets/table.png" alt="">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              </svg>
              TABLICA
            </router-link>
            <router-link to="/reports"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              <img class="w-10 h-10  border-gray-50" src="../../assets/checklist.png" alt="">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              </svg>
              ZGŁOSZENIA
            </router-link>
            <router-link v-if="showListLink" to="/list"
          class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
          <img class="w-10 h-10  border-gray-50" src="../../assets/list.png" alt="">
          <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          </svg>
          LISTA
        </router-link>
            <hr class="my-4 border-dashed border-gray-300">
            <div class="my-4"></div>
            <div class="my-4"></div>
            <div class="my-4"></div>
            <router-link v-if="showUsersLink" to="/user"
          class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
          <img class="w-10 h-10  border-gray-50" src="../../assets/users.png" alt="">
          <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          </svg>
          UŻYTKOWNICY
        </router-link>
            <router-link v-if="showSettingsLink" to="/projects"
          class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
          <img class="w-10 h-10 border-gray-50" src="../../assets/details.png" alt="">
          <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          </svg>
          USTAWIENIA PROJEKTU
        </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full h-full bg-gray-400">
      <div class="h-[60px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
        <div class="cursor-pointer w-[30px] flex items-center justify-center" @click="toggleSideBar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px]"></svg>
          <img class="w-20 h-10 border-gray-50" src="../../assets/menu.png" alt="">
        </div>
        <div class="px-[20px]">
          <router-link :to="homeLink" class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 transition duration-400 ease-in-out">
  <h3 class="font-bold text-xl">VaultProject</h3>
</router-link>

        </div>
        <img class="w-10 h-10  border-gray-50" src="../../assets/vault.png" alt="">
        <div class="w-[calc(100%-30px)] flex">
          <div class="w-[calc(100%-200px)] flex justify-center ">
            <form @submit.prevent="search">
              <label for="search" class="sr-only">Szukaj</label>
              <div class="relative">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <img class="w-10 h-10 border-gray-50 mr-2" src="../../assets/lupa.png" alt="">
                </div>
                <input v-model="searchQuery" type="text" id="search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-16 p-2.5 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Szukaj..." required>
                <button type="submit" class="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg aria-hidden="true"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div class="w-[50px]">
            <div class="flex items-center justify-start space-x-2" @click="toggleDrop2">
              <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../../assets/bell.png" alt="">
            </div>
            <div v-show="showDropDown2"
              class="absolute right-[100px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-2">
              <div class="py-1 text-left" role="none">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                  id="menu-item-0">Pośpiesz się z zadaniem 5 numer 2</a>
                <form method="POST" action="#" role="none">
                  <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem"
                    tabindex="-1" id="menu-item-3">Dokończ zadanie 6 ze scrum 3</button>
                </form>
              </div>
            </div>
          </div>
          <div class="w-[200px]">
            <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
              <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../../assets/profil.png" alt="">
              <div class="font-semibold dark:text-black text-left">
                <div>{{ userData.username }}</div>
              </div>
            </div>
            <div v-show="showDropDown"
              class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1 text-left" role="none">
                <router-link to="/profile"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-0">Ustawienia konta</a>
                </router-link>
                <router-link to="/login"
                  class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
                    id="menu-item-0">Wyloguj się</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
        <div class="border border-gray-300 rounded-md p-[20px] h-full">
          <div class="px-[20px]">
            <h3 class="font-bold text-left text-xl">Projekty</h3>
            <div class="my-4"></div>
            <form class="flex items-center w-[500px]">
              <label for="voice-search" class="sr-only">Szukaj</label>
              <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <img class="w-10 h-10  border-gray-50 mr-2" src="../../assets/lupa.png" alt="">
                  <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  </svg>
                </div>
                <input type="text" id="voice-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-16 p-2.5 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Szukaj..." required>
                <router-link to="/" class="flex absolute inset-y-0 right-0 items-center pr-3">
                  <svg aria-hidden="true"
                    class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  </svg>
                </router-link>
              </div>
            </form>
            <div class="my-20"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <div v-for="project in sortedProjects" :key="project.id" class=" p-4 flex flex-col relative ">
              <router-link :to="homeLink" @click.native="selectProject(project.id)">
                <h3 class="font-bold text-xl p-2 shadow-md " :style="{ backgroundColor: generateColor(project.id) }">{{
                  project.name }}</h3>
                <p class="bg-white shadow-md">Klucz: {{ project.keyProject }}</p>
                <p class="bg-white shadow-md">Typ: {{ project.type }}</p>
                <p class="bg-white shadow-md">Lider: {{ project.leader.adress }} {{ project.leader.lastName }}</p>
              </router-link>
              <div class="mt-auto flex justify-end absolute top-0 right-0">
                <button v-if="isAdmin" @click="toggleOptions(project.id)" class="px-4 py-2 bg-transparent text-gray-700 rounded-md">
                  <img class="w-6 h-6" src="../../assets/more.png" alt="Więcej opcji">
                </button>
                <div v-if="showOptionsId === project.id"
                  class="absolute top-[100%] right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg py-1 z-10">
                  <button @click="editProject(project); showOptionsId = null"
                    class="block w-full px-4 py-2 text-gray-700 hover:bg-gray-200">Edytuj</button>
                  <button @click="deleteProject(project.id); showOptionsId = null"
                    class="block w-full px-4 py-2 text-gray-700 hover:bg-gray-200">Usuń</button>
                </div>
              </div>
              <div v-if="editProjectId === project.id"
                class="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 z-50">
                <div class="bg-white p-8 rounded-lg shadow-lg">
                  <h3 class="font-bold text-xl mb-4">Edytuj projekt</h3>
                  <form @submit.prevent="updateProject(project.id, editedProject)">
                    <div class="mb-4">
                      <label for="editedName" class="block font-semibold mb-1">Nazwa projektu:</label>
                      <input type="text" id="editedName" v-model="editedProject.name"
                        class="border border-gray-300 rounded-md p-2 w-full">
                    </div>
                    <div class="mb-4">
                      <label for="editedKeyProject" class="block font-semibold mb-1">Klucz projektu:</label>
                      <input type="text" id="editedKeyProject" v-model="editedProject.keyProject"
                        class="border border-gray-300 rounded-md p-2 w-full">
                    </div>
                    <div class="mb-4">
                      <label for="editedType" class="block font-semibold mb-1">Typ projektu:</label>
                      <input type="text" id="editedType" v-model="editedProject.type"
                        class="border border-gray-300 rounded-md p-2 w-full">
                    </div>
                    <div class="flex justify-end">
                      <button type="submit"
                        class="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out">Zapisz
                        zmiany</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="my-8"></div>
          <div class="my-8"></div>
          <hr class="col-span-full border-dashed border-t border-gray-400 my-8">
          <div v-if="isAdmin"
            class="absolute left-1/2 transform -translate-x-1/2 bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex-inline flex-col items-center justify-center">
            <h3 class="font-bold text-xl mb-4">Dodaj nowy projekt</h3>
            <input v-model="newProjectName" type="text" class="border border-gray-400 rounded-md px-3 py-2 w-64 mb-4"
              placeholder="Nazwa projektu">
            <input v-model="newProjectKey" type="text" class="border border-gray-400 rounded-md px-3 py-2 w-64 mb-4"
              placeholder="Klucz projektu">
            <input v-model="newProjectType" type="text" class="border border-gray-400 rounded-md px-3 py-2 w-64 mb-4"
              placeholder="Typ projektu">
            <button @click="addProject"
              class="bg-amber-300 hover:bg-amber-500 text-white font-semibold rounded-md px-4 py-2">Dodaj
              projekt</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      showSide: true,
      sortBy: 'name',
      projects: [],
      showDropDown: false,
      editProjectId: null,
      showDropDown2: false,
      assignedUser: '',
      showDropDown3: false,
      newProjectName: '',
      newProjectName: '',
      newProjectKey: '',
      newProjectType: '',
      selectedLeader: null,
      selectedUsers: [],
      users: [],
      editedProject: {
        name: '',
        keyProject: '',
        type: '',
        leader: ''
      },
      userData: {
        email: '',
        username: '',
        password: '',
        publicName: '',
        firstName: '',
        lastName: '',
        positionName: '',
        adress: '',
        number: '',
        location: '',
        organization: '',
      },
      searchQuery: '',
      showOptionsId: null,
    }
  },


  mounted() {
    axios.get('http://localhost:8000/api/auth/users')
      .then(response => {
        this.users = response.data;
      })
      .catch(error => {
        console.error("Błąd podczas pobierania użytkowników:", error);
      });
    this.fetchProjects();
    this.fetchUserData();
    this.fetchUsers();
  },

  computed: {
    ...mapGetters(['loggedInUser']),
    isAdmin() {
    return this.userData && this.userData.roles && this.userData.roles.some(role => role.name === 'ROLE_ADMIN');
  },
    homeLink() {
    if (this.userData && this.userData.roles) {
      if (this.userData.roles.some(role => role.name === 'ROLE_ADMIN')) {
        return '/homeMaster';
      } else if (this.userData.roles.some(role => role.name === 'ROLE_USER')) {
        return '/homeUser';
      }
    }
    return '/home';
  }, 

    showBacklogLink() {
      return this.userData && this.userData.roles && this.userData.roles.some(role => role.name === 'ROLE_ADMIN' || role.name === 'ROLE_MODERATOR');
    },

    showSettingsLink() {
    return this.userData && this.userData.roles && this.userData.roles.some(role => role.name === 'ROLE_ADMIN' || role.name === 'ROLE_MODERATOR');
  },

  showUsersLink() {
    return this.userData && this.userData.roles && this.userData.roles.some(role => role.name === 'ROLE_ADMIN' || role.name === 'ROLE_MODERATOR');
  },

    showListLink() {
      return this.userData && this.userData.roles && this.userData.roles.some(role => role.name === 'ROLE_ADMIN' || role.name === 'ROLE_MODERATOR');
    },

    sortedProjects() {
      let projectsArray = Array.isArray(this.projects) ? this.projects : [];
      return projectsArray.slice().sort((a, b) => {
        if (a[this.sortBy] < b[this.sortBy]) return -1;
        if (a[this.sortBy] > b[this.sortBy]) return 1;
        return 0;
      });
    },
    loggedInUser() {
      return this.$store.getters.loggedInUser;
    }
  },

  methods: {

    addUserToSelected(user) {
      this.selectedUsers.push(user);
    },
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:8000/api/auth/user');
        this.users = response.data;
        console.log("dane", this.users)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },

    async addProject() {
      try {
        console.log('loggedInUser:', this.loggedInUser);
        if (this.loggedInUser) {
          const assignedUserId = this.loggedInUserId;
          const project = {
            name: this.newProjectName,
            keyProject: this.newProjectKey,
            type: this.newProjectType,
            leader_id: this.loggedInUser ? this.loggedInUser.id : null,
          };
          console.log('dane wysylane: ', project);
          await this.createProject(project);
          this.resetForm();
        } else {
          console.error('Użytkownik niezalogowany.');
        }
      } catch (error) {
        console.error('Error adding project:', error);
      }
    },

    resetForm() {
      this.newProjectName = '';
      this.newProjectKey = '';
      this.newProjectType = '';
      this.selectedUsers = [];
    },

    search() {
      const routeName = this.searchQuery.toLowerCase();
      if (routeName === 'strona główna') {
        this.$router.push({ name: 'HomePageUser' });
      } else if (routeName === 'profil') {
        this.$router.push({ name: 'profile' });
      } else if (routeName === 'backlog') {
        this.$router.push({ name: 'backlog' });
      } else if (routeName === 'edycja kontaktu') {
        this.$router.push({ name: 'editContact' });
      } else if (routeName === 'edycja loginu') {
        this.$router.push({ name: 'editLogin' });
      } else if (routeName === 'edycja użytkownika') {
        this.$router.push({ name: 'editUser' });
      } else if (routeName === 'kalendarz') {
        this.$router.push({ name: 'timeline' });
      } else if (routeName === 'lista') {
        this.$router.push({ name: 'list' });
      } else if (routeName === 'zgłoszenia') {
        this.$router.push({ name: 'reports' });
      } else if (routeName === 'tabela') {
        this.$router.push({ name: 'table' });
      } else if (routeName === 'użytkownik') {
        this.$router.push({ name: 'user' });
      } else {
        this.$router.push({ name: 'searchResults', params: { query: this.searchQuery } });
      }
    },

    ...mapActions(['selectProject']),

    toggleOptions(id) {
      if (this.showOptionsId === id) {
        this.showOptionsId = null;
      } else {
        this.showOptionsId = id;
      }
    },

    toggleOptions(id) {
      if (this.showOptionsId === id) {
        this.showOptionsId = null;
      } else {
        this.showOptionsId = id;
      }
    },

    generateColor(id) {
      const hue = (id * 137) % 360;
      return `hsl(${hue}, 70%, 80%)`;
    },
    async fetchUserData() {
      try {
        const response = await axios.get('http://localhost:8000/api/auth/user');
        this.userData = response.data;
      } catch (error) {
        console.error('Błąd podczas pobierania danych użytkownika:', error);
      }
    },

    async fetchProjects() {
      try {
        const response = await axios.get('http://localhost:8000/api/auth/projects');
        this.projects = response.data;
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    },

    async deleteProject(id) {
      try {
        await axios.delete(`http://localhost:8000/api/auth/projects/${id}`);
        this.projects = this.projects.filter(project => project.id !== id);
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    },
    async createProject(project) {
      try {
        const loggedInUserId = this.userData.id;
        project.leader = { id: loggedInUserId };
        const response = await axios.post('http://localhost:8000/api/auth/projects', project);
        this.projects.push(response.data);
      } catch (error) {
        console.error('Error creating project:', error);
      }
    },

    editProject(project) {
      this.editProjectId = project.id;
      this.editedProject = { ...project };
    },

    async updateProject(id, project) {
      try {
        const response = await axios.put(`http://localhost:8000/api/auth/projects/${id}`, project);
        const index = this.projects.findIndex(p => p.id === id);
        if (index !== -1) {
          this.projects.splice(index, 1, response.data);
          this.editProjectId = null;
        }
      } catch (error) {
        console.error('Error updating project:', error);
      }
    },

    sortByColumn(column) {
      if (this.sortBy === column) {
        this.sortBy = '';
      } else {
        this.sortBy = column;
      }
    },

    toggleSideBar() {
      this.showSide = !this.showSide
    },

    toggleDrop() {
      this.showDropDown = !this.showDropDown
    },

    toggleDrop2() {
      this.showDropDown2 = !this.showDropDown2
    },

    toggleDrop3() {
      this.showDropDown3 = !this.showDropDown3
    }

  }
}
</script>
