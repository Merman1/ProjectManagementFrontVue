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
          <router-link :to="homeLink"
            class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 transition duration-400 ease-in-out">
            <h3 class="font-bold text-xl">VaultProject</h3>
          </router-link>
        </div>
        <img class="w-10 h-10  border-gray-50" src="../../assets/vault.png" alt="">

        <div class="w-[calc(100%-30px)] flex">
          <div class="w-[calc(100%-200px)] flex justify-center ">
            <form @submit.prevent="search">
              <label for="search" class="sr-only">Search</label>
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

      <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px] flex justify-center items-center">
        <div class="border border-gray-300 rounded-md p-[20px] w-full h-full overflow-auto">
          <div class="px-[20px]">
            <div class="my-20"></div>
            <FullCalendar :options="calendarOptions">
              <template v-slot:eventContent="arg">
                <div>
                  <b>{{ arg.timeText }}</b>
                  <div>{{ arg.event.title }}</div>
                  <div>Typ: {{ arg.event.extendedProps.type }}</div>
                </div>
              </template>
            </FullCalendar>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import plLocale from '@fullcalendar/core/locales/pl';
export default {
  components: {
    FullCalendar
  },

  data() {
    return {
      showDropDown: false,
      showDropDown2: false,
      showSide: true,
      sprints: [],
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: false,
        events: [],
        locale: plLocale
      },
      userData: [],
      selectedProject: '',
      searchQuery: ''
    }
  },

  computed: {
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

  },

  mounted() {
    this.fetchSprints();
    this.fetchProjects();
    this.fetchUserData();
  },

  methods: {
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

    fetchSprints() {
      axios.get('http://localhost:8000/api/auth/sprints')
        .then(response => {
          this.sprints = response.data;
          this.updateCalendarEvents();
        })
        .catch(error => {
          console.error("Błąd podczas pobierania sprintów:", error);
        });
    },

    updateCalendarEvents() {
      this.calendarOptions.events = this.sprints.map(sprint => ({
        title: sprint.name,
        start: sprint.dataRozpoczecia,
        end: sprint.dataZakonczenia,
        color: this.getRandomColor(),
        extendedProps: {
          type: sprint.type
        }
      }));
    },

    toggleSideBar() {
      this.showSide = !this.showSide
    },

    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },

    toggleDrop() {
      this.showDropDown = !this.showDropDown

    },
    toggleDrop2() {
      this.showDropDown2 = !this.showDropDown2
    }

  }
}
</script>