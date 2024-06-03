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

      <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px] relative">
        <div class="border border-gray-300 rounded-md p-[20px] h-full overflow-auto">
          <div class="px-[20px]">
            <h3 class="font-bold text-left text-xl">TWOJA PRACA</h3>
            <div class="my-4"></div>
            <form class="flex items-center w-[500px]">
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <img class="w-10 h-10  border-gray-50 mr-2" src="../../assets/lupa.png" alt="">
                  <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor"
                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  </svg>
                </div>
                <input type="text" id="voice-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-16 p-2.5 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..." required>
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
          <router-view></router-view>
          <div class="grid grid-cols-4 gap-4">
            <div v-if="sprints.length > 0" class="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div v-for="sprint in sprints" :key="sprint.id" class="bg-white rounded-lg overflow-hidden shadow-md">
                <div class="bg-cyan-700 hover:bg-cyan-900 py-4 px-6">
                  <h3 class="font-bold text-lg text-white">{{ sprint.name }}</h3>
                </div>
                <div @click="showTimeForm(sprint.id)" class="p-6">
                  <p class="text-sm">Typ sprintu: {{ sprint.type }}</p>
                  <p class="text-sm">Data rozpoczęcia: {{ sprint.dataRozpoczecia }}</p>
                  <p class="text-sm">Data zakończenia: {{ sprint.dataZakonczenia }}</p>
                </div>
              </div>
            </div>
            <div v-else>
              <p>Brak dostępnych sprintów dla tego projektu.</p>
            </div>
          </div>
          <hr class="my-10 border-dashed border-gray-300">
          <div class="overflow-x-auto">
            <h3 class="font-bold text-left text-xl mb-4">WSZYSTKIE CZASY</h3>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col"
                    class="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">Sprint</th>
                  <th scope="col"
                    class="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">Użytkownik
                  </th>
                  <th scope="col"
                    class="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">Czas
                    rozpoczęcia</th>
                  <th scope="col"
                    class="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">Czas
                    zakończenia</th>
                  <th scope="col"
                    class="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">Czas spędzony
                    (h)</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="time in times" :key="time.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ time.sprintName }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ time.userName }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ time.startTime }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ time.endTime }}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ time.timeSpent ?
                    time.timeSpent.toFixed(2) : '0.00' }}</td>
                </tr>
              </tbody>
            </table>

            <h3 class="font-bold text-left text-xl mt-6 mb-4">Łączny czas dla każdego sprintu</h3>
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sprint</th>
                  <th scope="col"
                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Łączny czas
                    (h)</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(totalTime, sprintName) in sprintTimes" :key="sprintName">
                  <td class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{{ sprintName }}</td>
                  <td class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900">{{ totalTime ? totalTime.toFixed(2) :
                    '0.00' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-[20px]">
            <div class="my-4"></div>
            <div v-if="showTimeFormFlag" class="fixed inset-0 flex items-center justify-center z-50">
              <div class="bg-white rounded-md shadow-md p-4 w-1/4">
                <form @submit.prevent="addTime(selectedSprintId)" class="p-4">
                  <div class="flex flex-col mb-4">
                    <label for="start-time" class="font-semibold mb-1">Czas rozpoczęcia:</label>
                    <input type="datetime-local" id="start-time" v-model="startTime"
                      class="border border-gray-300 rounded-md p-2">
                  </div>
                  <div class="flex flex-col mb-4">
                    <label for="end-time" class="font-semibold mb-1">Czas zakończenia:</label>
                    <input type="datetime-local" id="end-time" v-model="endTime"
                      class="border border-gray-300 rounded-md p-2">
                  </div>
                  <div class="flex flex-col mb-4">
                    <label for="sprintId" class="font-semibold mb-1">Id sprintu:</label>
                    <input type="text" id="sprintId" v-model="selectedSprintId"
                      class="border border-gray-300 rounded-md p-2">
                  </div>
                  <div class="flex flex-col mb-4">
                    <label for="userId" class="font-semibold mb-1">Id Użytkownika:</label>
                    <input type="text" id="userId" v-model="userData.id" class="border border-gray-300 rounded-md p-2">
                  </div>
                  <button type="submit"
                    class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Dodaj
                    czas</button>
                </form>
              </div>
            </div>
            <div class="my-20"></div>
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
      times: [],
      showDropDown: false,
      sprintTimes: {},
      showDropDown2: false,
      showSide: true,
      sprints: [],
      times: {
        endTime: '',
        startTime: '',
        sprintId: '',
        userId: ''
      },
      startTime: '',
      endTime: '',
      userId: '',
      sprintId: '',
      userData: {
        email: '',
        username: '',
        passowrd: '',
        publicName: '',
        firstName: '',
        lastName: '',
        positionName: '',
        adress: '',
        number: '',
        location: '',
        organization: '',
      },
      sprinter: {
        name: '',
      },

      selectedSprintId: null,
      showTimeFormFlag: false,
      searchQuery: '',
      selectedProject: ''
    }
  },

  async created() {
    this.times = await this.fetchTime();
  },

  mounted() {
    this.fetchSprints();
    this.fetchUserData();
    this.fetchProjects();
    this.fetchTime();
    this.fetchSprint();
  },

  computed: {
    ...mapGetters(['selectedProjectId']),
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
    filteredSprints() {
      return this.sprints.filter(sprint => sprint.projectId === this.selectedProjectId);
    },
  },

  methods: {
    async fetchTime() {
      try {
        const response = await axios.get('http://localhost:8000/api/auth/time');
        console.log('API response:', response.data);
        const sprintTimes = {};
        const mappedData = response.data.map(time => {
          const sprintName = time.sprint ? time.sprint.name : 'Unknown Sprint';
          const userName = time.user ? time.user.username : 'Unknown User';
          if (!this.sprints.some(sprint => sprint.name === sprintName)) {
            return null;
          }
          const startTime = new Date(time.startTime.replace(' ', 'T'));
          const endTime = new Date(time.endTime.replace(' ', 'T'));
          if (isNaN(startTime) || isNaN(endTime)) {
            console.warn('Nieprawidłowy czas rozpoczęcia lub zakończenia dla wpisu:', time);
            return {
              ...time,
              sprintName,
              userName,
              timeSpent: 0
            };
          }
          const timeSpent = (endTime - startTime) / 1000 / 60 / 60;
          if (!sprintTimes[sprintName]) {
            sprintTimes[sprintName] = 0;
          }
          sprintTimes[sprintName] += timeSpent;
          return {
            ...time,
            sprintName,
            userName,
            timeSpent
          };
        }).filter(item => item !== null);
        console.log('Mapped data:', mappedData);
        console.log('Sprint times:', sprintTimes);
        this.times = mappedData.filter(time => this.sprints.some(sprint => sprint.name === time.sprintName));
        this.sprintTimes = sprintTimes;
      } catch (error) {
        console.error('Błąd pobierania czasów:', error);
      }
    },

    async fetchSprint() {
    try {
      const response = await axios.get(`http://localhost:8000/api/auth/sprints`);
      this.sprinter = response.data;
      console.log('dane sprintu',this.sprinter)
    } catch (error) {
      console.error('Błąd pobierania sprintów:', error);
      return [];
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

    showTimeForm(sprintId) {
      this.selectedSprintId = sprintId;
      this.showTimeFormFlag = true;
    },

    async addTime() {
      console.log('User ID:', this.userData.id);
      console.log('Selected Sprint ID:', this.selectedSprintId);
      try {
        const time = {
          startTime: this.startTime,
          endTime: this.endTime,
          sprint: { id: this.selectedSprintId },
          user: { id: this.userData.id }
        };
        console.log('Payload:', JSON.stringify(time));
        const response = await axios.post('http://localhost:8000/api/auth/time', time, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authToken}`
          }
        });
        console.log('Successfully added time:', response.data);
        this.showTimeFormFlag = false;
      } catch (error) {
        console.error('Error while adding time:', error);
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

    async fetchUserData() {
      try {
        const response = await axios.get('http://localhost:8000/api/auth/user');
        this.userData = response.data;
      } catch (error) {
        console.error('Błąd podczas pobierania danych użytkownika:', error);
      }
    },

    fetchSprints() {
      if (!this.$store.getters.selectedProjectId) {
        console.error('Nie wybrano żadnego projektu.');
        return;
      }
      axios.get(`http://localhost:8000/api/auth/sprints/${this.$store.getters.selectedProjectId}/project_id`)
        .then(response => {
          this.sprints = response.data;
        })
        .catch(error => {
          console.error('Błąd pobierania sprintów:', error);
        });
    },

    toggleSideBar() {
      this.showSide = !this.showSide
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