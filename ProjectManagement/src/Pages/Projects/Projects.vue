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
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              </svg>
              <h3 class="font-bold text-xl">Project Zero</h3>
              <h2>Software project</h2>
            </router-link>
           
            <div class="my-4"></div>
            <div class="my-4"></div>
            <div class="my-4"></div>
            <hr class="my-4 border-dashed border-gray-300">
            <div class="my-4"></div>
            <div class="my-4"></div>
            <div class="my-4"></div>
            <router-link to="/backlog" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                <img class="w-10 h-10  border-gray-50" src="../../assets/backlog.png" alt="">
                <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  
                </svg>
                BACKLOG
              </router-link>
              <router-link to="/timeline" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                <img class="w-10 h-10  border-gray-50" src="../../assets/timeline.png" alt="">
                <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                </svg>
                OŚ CZASU
              </router-link>
              <router-link to="/table" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                <img class="w-10 h-10  border-gray-50" src="../../assets/table.png" alt="">
                  <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                </svg>
                TABLICA
              </router-link>
              <router-link to="/reports" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                <img class="w-10 h-10  border-gray-50" src="../../assets/backlog.png" alt="">
                   <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                </svg>
                ZGŁOSZENIA
              </router-link>
              <router-link to="/list" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                <img class="w-10 h-10  border-gray-50" src="../../assets/list.png" alt="">
                   <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                </svg>
                LISTA
              </router-link>
              <hr class="my-4 border-dashed border-gray-300">
              <div class="my-4"></div>
            <div class="my-4"></div>
            <div class="my-4"></div>
            <router-link to="/user" class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800  transition duration-400 ease-in-out">
               <img class="w-10 h-10  border-gray-50" src="../../assets/users.png" alt="">
                   <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        </svg>
             UŻYTKOWNICY
           </router-link>
            <router-link to="/projects" class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
              <img class="w-10 h-10 border-gray-50" src="../../assets/details.png" alt="">
              <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              </svg>
              USTAWIENIA PROJEKTU
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full bg-gray-400">
      <div class="h-[60px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b ">
        <!-- Przycisk do ukrywania/odkrywania bocznego menu -->
        <div class="cursor-pointer w-[30px] flex items-center justify-center" @click="toggleSideBar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px]"></svg>
          <img class="w-20 h-10 border-gray-50" src="../../assets/menu.png" alt="">
        </div>
        <!-- Logo i nazwa aplikacji -->
        <div class="px-[20px]">
          <router-link to="/home" class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200   transition duration-400 ease-in-out">
                 
                 <h3 class="font-bold text-xl">VaultProject</h3>
    </router-link>
    
        </div>
        <img class="w-10 h-10  border-gray-50" src="../../assets/vault.png" alt="">
        <!-- Przyciski z lewej strony paska narzędziowego -->
        <div class="w-[calc(100%-30px)] flex">
          <div class="w-[calc(100%-200px)] flex justify-center ">
            <!-- Formularz wyszukiwania -->
            <form class="flex items-center w-[500px]">
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <img class="w-10 h-10 border-gray-50" src="../../assets/lupa.png" alt="">
                  <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  </svg>
                </div>
                <input type="text" id="voice-search" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
                <router-link to="/" class="flex absolute inset-y-0 right-0 items-center pr-3">
                  <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  </svg>
                </router-link>
              </div>
            </form>
          </div>
          <!-- Ikona dzwonka i dropdown z powiadomieniami -->
          <div class="w-[50px]">
            <div class="flex items-center justify-start space-x-2" @click="toggleDrop2">
              <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../../assets/bell.png" alt="">
            </div>
            <div v-show="showDropDown2" class="absolute right-[100px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-2">
              <div class="py-1 text-left" role="none">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Pośpiesz się z zadaniem 5 numer 2</a>
                <form method="POST" action="#" role="none">
                  <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Dokończ zadanie 6 ze scrum 3</button>
                </form>
              </div>
            </div>
          </div>
          <!-- Ikona profilu i dropdown z opcjami profilu -->
          <div class="w-[200px]">
            <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
              <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../../assets/profil.png" alt="">
              <div class="font-semibold dark:text-black text-left">
                <div>Jarek</div>
                <div class="text-xs text-gray-500 dark:text-gray-400">User</div>
              </div>
            </div>
            <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1 text-left" role="none">
                <router-link to="/profile" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Ustawienia konta</a>
            </router-link>
                
            <router-link to="/login" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Wyloguj się</a>
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
            <!-- Formularz wyszukiwania -->
            <form class="flex items-center w-[500px]">
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <img class="w-10 h-10  border-gray-50 mr-2" src="../../assets/lupa.png" alt="">
            <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            </svg>
        </div>
        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-16 p-2.5 dark:bg-cyan-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
        <router-link to="/" class="flex absolute inset-y-0 right-0 items-center pr-3">
            <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            </svg>
        </router-link>
    </div>
            </form>
            <div class="my-20"></div>
          </div>
          <!-- Tabela z listą projektów -->
          <router-view></router-view>
          <table class="w-full border-collapse">
            <thead>
              <tr>
                <th @click="sortByColumn('name')" class="cursor-pointer">Nazwa</th>
                <th @click="sortByColumn('key')" class="cursor-pointer">Klucz</th>
                <th @click="sortByColumn('type')" class="cursor-pointer">Typ</th>
                <th @click="sortByColumn('leader')" class="cursor-pointer">Lider</th>
                <th @click="sortByColumn('users')" class="cursor-pointer">Użytkownicy przypisani</th>
                <th @click="sortByColumn('more')" class="cursor-pointer float-right">Więcej</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="project in sortedProjects" :key="project.key">
                <td class="border px-4 py-2">{{ project.name }}</td>
                <td class="border px-4 py-2">{{ project.keyProject }}</td>
                <td class="border px-4 py-2">{{ project.type }}</td>
                <td class="border px-4 py-2">{{ project.leader.username }}</td>
                <td class="border px-4 py-2">
  <ul>
    <li v-for="user in project.users" :key="user.id">{{ user.username }}</li>
  </ul>
</td>
                <td class="border px-4 py-2"> 
         
             
                  <!-- Dropdown z opcjami dla każdego projektu -->
                  <div class="w-[50px] float-right ">
                    <div class="flex items-center  justify-start space-x-2" @click="toggleDrop3">
                      <img class="w-10 h-10 rounded-full  border-2 border-gray-50" src="../../assets/more.png" alt="">
                    </div>
                    <div v-show="showDropDown3" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-2">
                      <div class="py-1 text-left" role="none">
                        <router-link :to="{ name: 'edit', params: { id: project.id } }" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Ustawienia projektu</router-link>
      <form method="POST" action="#" role="none">
                          <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Usuń</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tr>
              <td colspan="4" class="border-t"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showSide: true,
      sortBy: 'name',
      projects: [],
      showDropDown: false,
      showDropDown2: false,
      showDropDown3: false,
    }
  },
  mounted() {
    this.fetchProjects();
  },
  computed: {
  sortedProjects() {
    let projectsArray = Array.isArray(this.projects) ? this.projects : [];
    return projectsArray.slice().sort((a, b) => {
      if (a[this.sortBy] < b[this.sortBy]) return -1;
      if (a[this.sortBy] > b[this.sortBy]) return 1;
      return 0;
    });
  }
},

  methods: {
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
        await axios.delete(`/api/auth/projects/${id}`);
        this.projects = this.projects.filter(project => project.id !== id);
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    },
    async createProject(project) {
      try {
        const response = await axios.post('/api/auth/projects', project);
        this.projects.push(response.data);
      } catch (error) {
        console.error('Error creating project:', error);
      }
    },
    async updateProject(id, project) {
      try {
        const response = await axios.put(`/api/auth/projects/${id}`, project);
        const index = this.projects.findIndex(p => p.id === id);
        if (index !== -1) {
          this.projects.splice(index, 1, response.data);
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

<style>
/* Stylizacja */
</style>
