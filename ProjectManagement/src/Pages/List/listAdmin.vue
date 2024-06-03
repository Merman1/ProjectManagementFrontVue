<template>
  <div class="w-screen h-screen flex">

    <div class="w-[400px] h-full bg-gray-200 text-black" v-show="showSide">
      <div class="h-[80px] bg-cyan-700 flex justify-start  items-center ">
        <div class="px-[20px] text-white">
          <h3 class="font-bold text-xl">DASHBOARD</h3>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-cyan-700 py-[20px] text-white">
        <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">

          <div class=" flex flex-col justify-between space-y-[10px]">
            <hr class="my-4 border-dashed border-gray-300">
            <router-link to="/projects"
              class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
              <img class="w-10 h-10  border-gray-50" src="../../assets/project.png" alt="">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              </svg>
              <h3 class="font-bold text-xl" v-if="selectedProject">{{ selectedProject }}</h3>
            </router-link>
            <div class="my-4"></div>
            <div class="my-4"></div>
            <div class="my-4"></div>
            <hr class="my-4 border-dashed border-gray-300">
            <div class="my-4"></div>
            <div class="my-4"></div>
            <div class="my-4"></div>
            <router-link to="/backlog"
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
            <router-link to="/list"
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
            <router-link to="/user"
              class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800  transition duration-400 ease-in-out">
              <img class="w-10 h-10  border-gray-50" src="../../assets/users.png" alt="">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor"
                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              </svg>
              UŻYTKOWNICY
            </router-link>
            <router-link to="/projects"
              class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800  transition duration-400 ease-in-out">
              <img class="w-10 h-10  border-gray-50" src="../../assets/details.png" alt="">
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
          <router-link to="/home">
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
          <div class="w-[50px] ">
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

          <div class="w-[200px] ">
            <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
              <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../../assets/profil.png" alt="">
              <div class="font-semibold dark:text-black text-left">
                <div>{{ users.username }}</div>
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
        <div
          class="border border-gray-300 rounded-md p-[20px] h-full overflow-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-gray scrolling-touch">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Lista zadań</h2>
            <form @submit.prevent="searchByName" class="flex items-center">
              <label for="taskName" class="sr-only">Szukaj po nazwie</label>
              <input v-model="searchNameQuery" type="text" id="taskName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Szukaj po nazwie..." required>
              <button type="submit"
                class="ml-2 bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">Szukaj</button>
            </form>
          </div>
          <div class="overflow-auto">
            <table class="table-auto w-full">
              <thead>
                <tr>
                  <th @click="sortByColumn('id')" class="px-4 py-2">Id</th>
                  <th @click="sortByColumn('Scrum')" class="px-4 py-2">Sprint</th>
                  <th @click="sortByColumn('Scrum')" class="px-4 py-2">Scrum</th>
                  <th @click="sortByColumn('nazwa')" class="px-4 py-2">Nazwa</th>
                  <th @click="sortByColumn('etap')" class="px-4 py-2">Etap</th>
                  <th @click="sortByColumn('Lider')" class="px-4 py-2">Lider</th>
                  <th @click="sortByColumn('OsobaPrzypisana')" class="px-4 py-2">Osoba przypisana</th>
                  <th class="px-4 py-2">Edytuj</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(task, index) in filteredTasks || tasks" :key="index">
                  <td class="border px-4 py-2">
                    <span class="mr-2"></span>
                    <input v-model="task.id" class="w-full px-4 py-2" type="text">
                  </td>
                  <td class="border px-4 py-2">
                    <span v-if="task.sprint">{{ task.sprint.name }}</span>
                    <span v-else>-</span>
                  </td>
                  <td class="border px-4 py-2">
                    <span class="mr-2"></span>
                    <input v-model="task.scrum" class="w-full px-4 py-2" type="text">
                  </td>
                  <td class="border px-4 py-2">
                    <input v-model="task.nazwa" class="w-full px-4 py-2" type="text">
                  </td>
                  <td class="border px-4 py-2">
                    <input v-model="task.etap" class="w-full px-4 py-2" type="text">
                  </td>
                  <td class="border px-4 py-2">
                    <span class="mr-2"></span>
                    <input v-model="assignedUser" class="w-full px-4 py-2" type="text">
                  </td>
                  <td class="border px-4 py-2">
                    <span class="mr-2">{{ getAssignedUsers(task.users) }}</span>
                    <select v-model="selectedUser" class="w-full px-4 py-2">
                      <option value="">Wybierz użytkownika</option>
                      <option v-for="user in users" :key="user.id" :value="user.id">{{ user.username }}</option>
                    </select>
                  </td>
                  <td class="border px-4 py-2">
                    <button @click="saveTask(index)"
                      class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-slate-700">Zapisz</button>
                    <button @click="deleteTask(task.id)">Usuń</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
export default {
  name: 'Tasks',
  data() {
    return {
      showSide: true,
      selectedUser: '',
      showDropDown: false,
      searchNameQuery: '',
      users: [],
      showDropDown2: false,
      searchQuery: '',
      tasks: [],
      sprints: [],
      searchNameQuery: '',
      sortColumn: '',
      sortOrder: 1,
      assignedUser: '',
      filteredTasks: '',
      userData: [],
      selectedProject: ''
    };
  },

  computed: {
    ...mapState(['user'])
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

    searchByName() {
      const query = this.searchNameQuery.toLowerCase().trim();
      this.filteredTasks = this.tasks.filter(task => {
        const taskName = task.nazwa.toLowerCase();
        return taskName.includes(query);
      });
      if (query === '') {
        this.filteredTasks = null;
      }
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

    deleteTask(id) {
      if (confirm('Czy na pewno chcesz usunąć to zadanie?')) {
        axios.delete(`http://localhost:8000/api/auth/issues/${id}`)
          .then(response => {
            console.log('Zadanie zostało pomyślnie usunięte:', response.data);
            this.fetchIssues();
          })
          .catch(error => {
            console.error('Błąd podczas usuwania zadania:', error);
          });
      }
    },

    saveTask(index) {
      const task = this.tasks[index];
      task.OsobaPrzypisana = this.selectedUser;
      axios.put(`http://localhost:8000/api/auth/issues/${task.id}`, task)
        .then(response => {
          console.log("Zaktualizowane zadanie zostało pomyślnie zapisane:", response.data);
        })
        .catch(error => {
          console.error("Błąd podczas zapisywania zaktualizowanego zadania:", error);
        });
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

    fetchIssues() {
      axios.get('http://localhost:8000/api/auth/issues')
        .then(response => {
          console.log(response.data);
          this.tasks = response.data;
        })
        .catch(error => {
          console.error("Błąd podczas ładowania zadań:", error);
        });
    },

    fetchSprints() {
      axios.get('http://localhost:8000/api/auth/sprints')
        .then(response => {
          this.sprints = response.data;
        })
        .catch(error => {
          console.error("Błąd podczas ładowania zadań:", error);
        });
    },

    getAssignedUsers(users) {
      if (!Array.isArray(users)) {
        console.error('Dane użytkowników nie są w formacie tablicy.');
        return '';
      }
      return users.map(user => user.username).join(', ');
    },

    async fetchUserData() {
      try {
        const response = await axios.get('http://localhost:8000/api/auth/user');
        this.assignedUser = response.data.username;
        this.users = response.data;
      } catch (error) {
        console.error('Błąd podczas pobierania danych użytkownika:', error);
      }
    },

    sortByColumn(column) {
      this.sortOrder = this.sortColumn === column ? -this.sortOrder : 1;
      this.sortColumn = column;
      this.tasks.sort((a, b) => {
        if (a[column] > b[column]) return 1 * this.sortOrder;
        if (a[column] < b[column]) return -1 * this.sortOrder;
        return 0;
      });
    }

  },

  mounted() {
    this.fetchIssues();
    this.fetchUserData();
    this.fetchProjects();
  }
};
</script>