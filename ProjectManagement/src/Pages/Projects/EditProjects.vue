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
            <router-link to="/projects" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out">
              <img class="w-10 h-10 border-gray-50" src="../../assets/project.png" alt="">
              <h3 class="font-bold text-xl" v-if="selectedProject">{{ selectedProject }}</h3>
            </router-link>
            <hr class="my-4 border-dashed border-gray-300">
            <router-link to="/projects" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
              <img class="w-10 h-10 border-gray-50" src="../../assets/back.png" alt="">
              WRÓĆ DO PROJEKTU
            </router-link>
            <hr class="my-4 border-dashed border-gray-300">
            <router-link to="/user" class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
              <img class="w-10 h-10 border-gray-50" src="../../assets/users.png" alt="">
              UŻYTKOWNICY
            </router-link>
            <router-link :to="{ name: 'edit', params: { id: 1 }}" class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
              <img class="w-10 h-10 border-gray-50" src="../../assets/details.png" alt="">
              USTAWIENIA PROJEKTU
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400">
      <div class="h-[60px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
        <div class="cursor-pointer w-[30px] flex items-center justify-center" @click="toggleSideBar">
          <img class="w-20 h-10 border-gray-50" src="../../assets/menu.png" alt="">
        </div>
        <div class="px-[20px]">
          <router-link to="/homeMaster">
            <h3 class="font-bold text-xl">VaultProject</h3>
          </router-link>
        </div>
        <img class="w-10 h-10 border-gray-50" src="../../assets/vault.png" alt="">
        <div class="w-[calc(100%-30px)] flex">
          <div class="w-[calc(100%-200px)] flex justify-center">
            <form @submit.prevent="search">
      <label for="search" class="sr-only">Search</label>
      <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <img class="w-10 h-10 border-gray-50 mr-2" src="../../assets/lupa.png" alt="">
        </div>
        <input v-model="searchQuery" type="text" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-16 p-2.5 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
        <button type="submit" class="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          </svg>
        </button>
      </div>
    </form>
          </div>
          <div class="w-[50px]">
            <div class="flex items-center justify-start space-x-2" @click="toggleDrop2">
              <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../../assets/bell.png" alt="">
            </div>
            <div v-show="showDropDown2" class="absolute right-[100px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div class="py-1 text-left">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm">Pośpiesz się z zadaniem 5 numer 2</a>
                <form method="POST" action="#">
                  <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm">Dokończ zadanie 6 ze scrum 3</button>
                </form>
              </div>
            </div>
          </div>
          <div class="w-[200px]">
            <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
              <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../../assets/profil.png" alt="">
              <div class="font-semibold text-left">
                <div>Jarek</div>
                <div class="text-xs text-gray-500">User</div>
              </div>
            </div>
            <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div class="py-1 text-left">
                <router-link to="/profile" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm">Ustawienia konta</a>
                </router-link>
                <router-link to="/login" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                  <a href="#" class="text-gray-700 block px-4 py-2 text-sm">Wyloguj się</a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
        <div class="border border-gray-300 rounded-md p-[20px] h-full">
          <div class="px-[20px]">
            <h3 class="font-bold text-left text-xl mb-4">Szczegóły</h3>
            <div class="flex justify-center items-center h-full">
              <div class="bg-gray-50 px-6 py-8 rounded-md shadow-md w-full max-w-md text-left">
                <form @submit.prevent="updateProject">
                  <div class="mb-6">
                    <label for="name" class="block text-lg font-medium text-gray-700 mb-2">Nazwa:</label>
                    <input type="text" v-model="editedProject.name" id="name" name="name" autocomplete="name" class="mt-1 focus:ring-gray-50 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-500 rounded-md px-4 py-3">
                  </div>
                  <div class="mb-6">
                    <label for="key" class="block text-lg font-medium text-gray-700 mb-2">Klucz:</label>
                    <input type="text" v-model="editedProject.keyProject" id="keyProject" name="keyProject" autocomplete="keyProject" class="mt-1 focus:ring-gray-50 focus:border-gray-50 block w-full shadow-sm sm:text-sm border-gray-50 rounded-md px-4 py-3">
                  </div>
                  <div class="mb-6">
                    <label for="type" class="block text-lg font-medium text-gray-700 mb-2">Typ:</label>
                    <input type="text" v-model="editedProject.type" id="type" name="type" autocomplete="type" class="mt-1 focus:ring-gray-50 focus:border-gray-50 block w-full shadow-sm sm:text-sm border-gray-50 rounded-md px-4 py-3">
                  </div>
                  <div class="mb-6">
                    <label for="leader" class="block text-lg font-medium text-gray-700 mb-2">Lider:</label>
                    <input type="text" v-model="editedProject.leader.username" id="leader" name="leader" autocomplete="leader" class="mt-1 focus:ring-gray-50 focus:border-gray-50 block w-full shadow-sm sm:text-sm border-gray-50 rounded-md px-4 py-3">
          </div>
          <div class="mb-6">
                <label for="assignedUsers" class="block text-lg font-medium text-gray-700 mb-2">Użytkownicy przypisani:</label>
                <input type="text" :value="assignedUsersString" id="assignedUsers" name="assignedUsers" autocomplete="assignedUsers" class="mt-1 focus:ring-gray-50 focus:border-gray-50 block w-full shadow-sm sm:text-sm border-gray-50 rounded-md px-4 py-3" readonly>
              </div>
                  <div class="flex justify-center">
                    <button type="submit" class="bg-amber-300 hover:bg-amber-500 text-white font-semibold rounded-md px-6 py-3">Zapisz</button>
                    <button type="button" class="text-black font-semibold rounded-md px-6 py-3" @click="cancelEdit">Anuluj</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      showDropDown: false,
      showDropDown2: false,
      showSide: true,
      editedProject: {
        name: '',
        keyProject: '',
        type: '',
        leader: { username: '' },
        users: []
      },
      selectedProject:''
    };
  },
  props: ['id'],

  computed: {
    ...mapGetters(['loggedInUser']),
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
    projectId() {
      return this.id;
    },
    assignedUsersString() {
      return this.editedProject.users.map(user => user.username).join(', ');
    }
  },

  methods: {
    async fetchProjects() {
  try {
    const response = await axios.get('http://localhost:8000/api/auth/projects');
    this.projects = response.data;

    const selectedProjectId = this.$store.state.selectedProjectId;

    const selectedProject = this.projects.find(project => project.id === selectedProjectId);
    if (selectedProject) {
      console.log('Nazwa aktualnie wybranego projektu:', selectedProject.name);
      this.selectedProject = selectedProject.name; 
    } else {
      console.log('Nie znaleziono projektu o podanym ID');
    }
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
},
    search() {
        const routeName = this.searchQuery.toLowerCase(); 
  if (routeName === 'strona główna') {
    this.$router.push({ name: 'HomePageUser' });
  } else if (routeName === 'profil') {
    this.$router.push({ name: 'profile' });
  }else if (routeName === 'backlog') {
    this.$router.push({ name: 'backlog' });
  }else if (routeName === 'edycja kontaktu') {
    this.$router.push({ name: 'editContact' });
  }else if (routeName === 'edycja loginu') {
    this.$router.push({ name: 'editLogin' });
  }else if (routeName === 'edycja użytkownika') {
    this.$router.push({ name: 'editUser' });
  }else if (routeName === 'kalendarz') {
    this.$router.push({ name: 'timeline' });
  }else if (routeName === 'lista') {
    this.$router.push({ name: 'list' });
  }else if (routeName === 'zgłoszenia') {
    this.$router.push({ name: 'reports' });
  }else if (routeName === 'tabela') {
    this.$router.push({ name: 'table' });
  }else if (routeName === 'użytkownik') {
    this.$router.push({ name: 'user' });
  } else {
    this.$router.push({ name: 'searchResults', params: { query: this.searchQuery }});
  }
    },
    async loadProject() {
      const projectId = this.$route.params.id;
      try {
        const response = await axios.get(`http://localhost:8000/api/auth/projects/${projectId}`);
        this.editedProject = response.data;
      } catch (error) {
        console.error("Error loading project", error);
      }
    },

    async updateProject() {
      const projectId = this.$route.params.id;
      try {
        await axios.put(`http://localhost:8000/api/auth/projects/${projectId}`, this.editedProject);
        alert("Project updated successfully");
        this.$router.push('/projects');
      } catch (error) {
        console.error("Error updating project", error);
      }
    },
    toggleSideBar() {
      this.showSide = !this.showSide;
    },
    toggleDrop() {
      this.showDropDown = !this.showDropDown;
    },
    toggleDrop2() {
      this.showDropDown2 = !this.showDropDown2;
    },
    cancelEdit() {
      this.$router.push('/projects');
    }
  },
  mounted() {
    this.loadProject();
    this.fetchProjects();
  }
};
</script>