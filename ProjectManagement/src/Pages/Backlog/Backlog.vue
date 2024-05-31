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
                <router-link to="/projects" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                <img class="w-10 h-10  border-gray-50" src="../../assets/project.png" alt="">
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
           <router-link to="/projects" class="inline-flex relative items-center py-[0px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800  transition duration-400 ease-in-out">
               <img class="w-10 h-10  border-gray-50" src="../../assets/details.png" alt="">
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
        
            <div class="cursor-pointer w-[30px] flex items-center justify-center" @click="toggleSideBar">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-[25px] h-[25px]"></svg>
    <img class="w-20 h-10 border-gray-50" src="../../assets/menu.png" alt="">
</div>

<div class="px-[20px]">
            <router-link to="/home"><h3 class="font-bold text-xl">VaultProject</h3></router-link>
            
               
          </div>
          <img class="w-10 h-10  border-gray-50" src="../../assets/vault.png" alt="">
        
  
          <div class="w-[calc(100%-30px)] flex">
            <div class="w-[calc(100%-200px)] flex justify-center ">
  
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
            </div>
            <div class="w-[50px] ">
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
            <div class="w-[200px] ">
              <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
                <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="../../assets/profil.png" alt="">
                <div class="font-semibold dark:text-black text-left">
                  <div>{{userData.username}}</div>
                  <div class="text-xs text-gray-500 dark:text-gray-400">User</div>
                </div>
              </div>
           
              <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1 text-left" role="none">
              
                  <router-link to="/profile" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
              
              <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Ustawienia konta</a>
            </router-link>
                  <form method="POST" action="#" role="none">
                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Wyloguj się</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
    <div class="border border-gray-300 rounded-md p-[20px] h-full w-full overflow-auto mx-auto">
      <div class="px-[20px]">
        

        <div v-for="sprint in sprints" :key="sprint.id" class="border border-gray-300 w-[70%] rounded-md p-[10px] mb-4 ">
    <div class="flex justify-between items-center ">

      

        <div class="flex justify-between ">
          <button @click="toggleTasks(sprint.id)" class="text-white font-bold py-2 px-4 rounded flex items-center">
        <img class="w-3 h-3 mr-2 border-gray-50" src="../../assets/arrow.png" alt="">
        <h3 class="font-bold text-left text-xl text-black">{{ sprint.name }}</h3>
      </button>

      <div>
  <button v-if="!sprint.started" @click="startSprint(sprint)" class="bg-amber-300 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded">Rozpocznij sprint </button>
  <button v-else @click="endSprint(sprint)" class="bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Zakończ sprint</button>
</div>




<!-- Formularz edycji sprintu -->
<div v-if="editMode2 === sprint.id" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
  <h2 class="text-2xl font-semibold mb-4">Edytuj Sprint</h2>
  <form @submit.prevent="updateSprint(sprint)">
    <div class="mb-4">
      <label for="name" class="block text-gray-700 font-bold mb-2">Nazwa Sprintu:</label>
      <input v-model="sprint.name" type="text" id="name" name="name" class="block w-full border-gray-300 rounded-md p-2">
    </div>
    <div class="mb-4">
      <label for="type" class="block text-gray-700 font-bold mb-2">Typ Sprintu:</label>
      <select v-model="sprint.type" id="type" name="type" class="block w-full border-gray-300 rounded-md p-2">
        <option value="Feature">Funkcjonalność</option>
        <option value="Bug Fix">Poprawa błędów</option>
        <option value="Maintenance">Utrzymanie</option>
        <option value="Research">Badania</option>
      </select>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2">Czas trwania:</label>
      <select v-model="sprint.czasTrwania" class="block w-full border-gray-300 rounded-md p-2">
        <option value="1 tydzień">1 tydzień</option>
        <option value="2 tygodnie">2 tygodnie</option>
        <option value="3 tygodnie">3 tygodnie</option>
        <option value="4 tygodnie">4 tygodnie</option>
      </select>
    </div>
    <div class="mb-4">
      <label for="dataRozpoczecia" class="block text-gray-700 font-bold mb-2">Data rozpoczęcia:</label>
      <input v-model="sprint.dataRozpoczecia" type="date" id="dataRozpoczecia" name="dataRozpoczecia" class="block w-full border-gray-300 rounded-md p-2">
    </div>
    <div class="mb-4">
      <label for="dataZakonczenia" class="block text-gray-700 font-bold mb-2">Data zakończenia:</label>
      <input v-model="sprint.dataZakonczenia" type="date" id="dataZakonczenia" name="dataZakonczenia" class="block w-full border-gray-300 rounded-md p-2">
    </div>
    <div class="mb-4">
      <label for="celSprintu" class="block text-gray-700 font-bold mb-2">Cel Sprintu:</label>
      <textarea v-model="sprint.celSprintu" id="celSprintu" name="celSprintu" rows="4" class="block w-full border-gray-300 rounded-md p-2"></textarea>
    </div>
    <button type="submit" class="bg-amber-300 text-white px-4 py-2 rounded-md hover:bg-amber-500">Zapisz zmiany</button>
    <button @click="cancelStart" type="button" class="ml-2 text-gray-600 hover:text-gray-800">Anuluj</button>
  </form>
</div>



  </div>



  <div class="relative">
      <img @click="toggleDrop3(sprint.id)" class="w-10 h-10 rounded-full border-2 border-gray-50 cursor-pointer" src="../../assets/more.png" alt="">
      
      <div v-show="showDropDown3 === sprint.id" class="absolute top-10 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-2">
        <div class="py-1 text-left" role="none">
          <a href="#" @click="editSprint(sprint.id)" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Edytuj sprint
          
          </a>
       <form @click="deleteSprint" method="POST" action="#" role="none">
            <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Usuń sprint</button>
          </form>
        </div>
      </div>
  </div>
</div>
 <!-- Formularz edycji sprintu -->
 <div v-if="editMode === sprint.id" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
 
    <h2 class="text-2xl font-semibold mb-4">Edytuj Sprint "{{ sprint.name }}"</h2>
    <form @submit.prevent="updateSprint(sprint.id)">
      <div class="mb-4">
        <label for="sprintName" class="block text-gray-700 font-bold mb-2">Nazwa Sprintu:</label>
        <input v-model="editedSprintName" type="text" id="sprintName" name="sprintName" class="block w-full border-black rounded-md p-2">
      </div>
      <div class="mb-4">
        <label for="startDate" class="block text-gray-700 font-bold mb-2">Data rozpoczęcia:</label>
        <input v-model="startDate" type="date" id="startDate" name="startDate" class="block w-full border-gray-300 rounded-md p-2">
      </div>
      <div class="mb-4">
        <label for="endDate" class="block text-gray-700 font-bold mb-2">Data zakończenia:</label>
        <input v-model="endDate" type="date" id="endDate" name="endDate" class="block w-full border-gray-300 rounded-md p-2">
      </div>
      <div class="mb-4">
        <label for="goal" class="block text-gray-700 font-bold mb-2">Cel Sprintu:</label>
        <textarea v-model="goal" id="goal" name="goal" rows="4" class="block w-full border-gray-300 rounded-md p-2"></textarea>
      </div>
      <button type="submit" class="bg-amber-300 text-white px-4 py-2 rounded-md hover:bg-amber-500">Zapisz zmiany</button>
      <button @click="cancelEdit" type="button" class="ml-2 text-gray-600 hover:text-gray-800">Anuluj</button>
    </form>
  </div>


  <div class="my-4 "></div>
  <div v-if="showTasks === sprint.id" class="overflow-y-auto max-h-[300px]">
  <div v-for="(task, taskIndex) in tasks.filter(t => t.sprint && t.sprint.id === sprint.id)" :key="taskIndex" class="border border-gray-300 rounded-md p-[10px] mb-4">
    <h4 class="font-medium text-left text-lg text-black">Nazwa: {{ task.nazwa }}</h4>
    <p class="text-gray-600">Identyfikator sprintu: {{ task.sprint.id }}</p>
    <p class="text-gray-600">Etap: {{ task.etap }}</p>
    <p class="text-gray-600">Lider: {{ task.lider }}</p>
  </div>
</div>




    <div class="flex justify-center">
      <input v-model="newTaskName" @keyup.enter="addIssue" type="text" placeholder="Dodaj nowe zadanie..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
<!-- Dodajemy pole wyboru etapu zadania -->
<div class="flex items-center mt-2">
  <label for="taskStage">Etap zadania:</label>
  <select v-model="newTaskStage" id="taskStage" class="ml-2 border border-gray-300 rounded-md p-1">
    <option value="Do zrobienia">Do zrobienia</option>
    <option value="W trakcie">W trakcie</option>
    <option value="Gotowe">Gotowe</option>
  </select>
</div>
<!-- Przycisk wyboru użytkownika -->
<div>
  <label for="assignedUser">Przypisz użytkownika:</label>
  <select v-model="assignedUser" id="assignedUser" class="border border-gray-300 rounded-md p-1">
    <option value="">Wybierz użytkownika</option>
    <option v-for="user in users" :key="user.id" :value="user.id">{{ user.username }}</option>
  </select>
</div>
    </div>
    <div class="my-4 flex items-center">
      <button @click="addIssue(sprint.id, sprint.name)" class="bg-white text-black font-bold py-2 px-4 rounded flex items-center space-x-2">
        <img class="w-5 h-5 mr-2 border-gray-50" src="../../assets/plus.png" alt="">
        Dodaj zadanie
      </button>
    </div>
 </div>
</div>

        <div class="my-20"></div>
        <div class="border border-gray-300 w-[70%] rounded-md p-[10px] mb-4">
       
          <div class="flex justify-between">
  <button @click="toggleTasks" class="text-white font-bold py-2 px-4 rounded flex items-center">
    <img class="w-3 h-3 mr-2 border-gray-50" src="../../assets/arrow.png" alt="">
    <h3 class="font-bold text-left text-xl text-black">Backlog</h3>
  </button>

  <button @click="createNewSprint" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Utwórz sprint
</button>
</div>
<div v-if="showTasksBacklog === sprint.id" class="overflow-y-auto max-h-[300px]">
  <div v-for="(task, taskIndex) in tasks.filter(t => !t.sprint)" :key="taskIndex" class="border border-gray-300 rounded-md p-[10px] mb-4">
    <h4 class="font-medium text-left text-lg text-black">Nazwa: {{ task.nazwa }}</h4>
    <p class="text-gray-600">Etap: {{ task.etap }}</p>
    <p class="text-gray-600">Lider: {{ task.lider }}</p>
  </div>
</div>

<input v-model="newTaskName" @keyup.enter="addIssue" type="text" placeholder="Dodaj nowe zadanie..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
<!-- Dodajemy pole wyboru etapu zadania -->
<div class="flex items-center mt-2">
  <label for="taskStage">Etap zadania:</label>
  <select v-model="newTaskStage" id="taskStage" class="ml-2 border border-gray-300 rounded-md p-1">
    <option value="Do zrobienia">Do zrobienia</option>
    <option value="W trakcie">W trakcie</option>
    <option value="Gotowe">Gotowe</option>
  </select>
</div>
<!-- Przycisk wyboru użytkownika -->
<div>
  <label for="assignedUser">Przypisz użytkownika:</label>
  <select v-model="assignedUser" id="assignedUser" class="border border-gray-300 rounded-md p-1">
    <option value="">Wybierz użytkownika</option>
    <option v-for="user in users" :key="user.id" :value="user.id">{{ user.username }}</option>
  </select>
</div>

  <!-- Przycisk dodawania zadania -->
  <div class="my-4 flex items-center">
      <button @click="addIssueBacklog()" class="bg-white text-black font-bold py-2 px-4 rounded flex items-center space-x-2">
        <img class="w-5 h-5 mr-2 border-gray-50" src="../../assets/plus.png" alt="">
        Dodaj zadanie
      </button>
    </div>


        <div class="my-4"></div>
      </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</div>

      
 
    
  </template>
  <script>

  import { mapGetters } from 'vuex';
  import axios from 'axios';

  export default {
    data() {
  return {
    showDropDown: false,
    showDropDown2: false,
    showDropDown3: false,
    showSide: true,
    editMode: false,
    showTasksBacklog:null,
    editMode2:false,
    showTasks: null,
    sprint: {
      id: null,
      name: '',
      dataRozpoczecia: '',
      dataZakonczenia: '',
      celSprintu: '',
      czasTrwania:'',
      type:'',
      projects_id:'',
    },
    editedSprintName: '', // Przechowuje edytowaną nazwę sprintu
    sprintName: '', // Przechowuje nazwę sprintu, który będzie edytowany
    issues:'',
    tasks: [],
    newTaskName: '',
    newTaskStage: 'Do zrobienia', // Domyślny etap zadania
    assignedUser: '', // Przechowuje ID przypisanego użytkownika
    tasks2: [],
    newTaskName2: '',
    showTasks: true,
    showTasks2: true,
    sprints: [],
    userData: [],
    duration: null, // Dodajemy właściwość duration do przechowywania wybranego czasu trwania
  
    users: [], // Tablica użytkowników
    filteredSprints: [],
  }
},

created() {
    this.fetchSprints();
  },
mounted() {
  
  // Pobierz dane z localStorage przy ładowaniu komponentu
  const sprintsData = localStorage.getItem('sprints');
  if (sprintsData) {
    this.sprints = JSON.parse(sprintsData);
  }

  // Załaduj użytkowników z API
  axios.get('http://localhost:8000/api/auth/users')
    .then(response => {
      this.users = response.data;
    })
    .catch(error => {
      console.error("Błąd podczas pobierania użytkowników:", error);
    });
    this.fetchUsers();
    this.fetchSprints();
    this.fetchUserData();
    this.fetchIssues();
},
computed:{
  ...mapGetters(['selectedProjectId'])
},

methods: {
 

  fetchIssues() {
      axios.get('http://localhost:8000/api/auth/issues')
        .then(response => {
          this.tasks = response.data;
        })
        .catch(error => {
          console.error("Błąd podczas ładowania zadań:", error);
        });
    },
  async fetchUserData() {
      try {
        const response = await axios.get('http://localhost:8000/api/auth/user');
        this.userData = response.data;
      } catch (error) {
        console.error('Błąd podczas pobierania danych użytkownika:', error);
      }
    },
 

  updateFilteredSprints() {
      this.filteredSprints = this.sprints.filter(sprint => sprint.type === 'Sprint');
    },
    addIssue(sprintId, sprintName) {
    if (this.newTaskName.trim() !== '') {
        const currentUserId = this.$store.getters.loggedInUser?.id;
        if (!currentUserId) {
            console.error("Błąd: Użytkownik nie jest zalogowany lub nie ma ID.");
            return;
        }

        // Sprawdź, czy assignedUser jest prawidłowo przypisany
        const assignedUserId = this.assignedUser; 
        console.log("Id przypisanego użytkownika:", assignedUserId);

        // Logowanie danych nowego zadania
        console.log("Nazwa nowego zadania:", this.newTaskName);
        console.log("Etap nowego zadania:", this.newTaskStage);
        console.log("Przypisany użytkownik:", assignedUserId);

        // Utwórz obiekt nowego zadania
        const newIssue = {
            nazwa: this.newTaskName,
            etap: this.newTaskStage || 'Do zrobienia',
            users: [{ id: assignedUserId }], 
            comments: [],
            creator: { id: currentUserId },
            sprint: { id: sprintId, name: sprintName },
            sprintId: sprintId 
        };

        // Wyślij zapytanie POST do backendu
        axios.post(`http://localhost:8000/api/auth/issues`, newIssue)
            .then(response => {
                console.log("Nowe zadanie zostało dodane:", response.data);
                // Dodaj nowe zadanie do odpowiedniego sprintu
             // Dodaj nowe zadanie do odpowiedniego sprintu
const sprint = this.sprints.find(s => s.id === sprintId);
if (sprint) {
    if (!sprint.tasks) {
        sprint.tasks = []; // Usunięto wywołanie $set
    }
    sprint.tasks.push(response.data);
}

            })
            .catch(error => {
                console.error("Błąd podczas dodawania nowego zadania:", error);
            });

        // Zresetuj pola po dodaniu zadania
        this.newTaskName = '';
        this.newTaskStage = 'Do zrobienia';
        this.assignedUser = null; 
    }
},

addIssueBacklog() {

      if (this.newTaskName.trim() !== '') {
        const currentUserId = this.$store.getters.loggedInUser?.id;
        if (!currentUserId) {
          console.error("Błąd: Użytkownik nie jest zalogowany lub nie ma ID.");
          return;
        }

        const assignedUserId = this.assignedUser;
        console.log("Id przypisanego użytkownika:", assignedUserId);
        console.log("Nazwa nowego zadania:", this.newTaskName);
        console.log("Etap nowego zadania:", this.newTaskStage);
        console.log("Przypisany użytkownik:", assignedUserId);

        const newIssue = {
          nazwa: this.newTaskName,
          etap: this.newTaskStage || 'Do zrobienia',
          users: [{ id: assignedUserId }],
          comments: [],
          creator: { id: currentUserId },
          sprint: null
        };

        axios.post(`http://localhost:8000/api/auth/issues/CreateBacklog`, newIssue)
          .then(response => {
            console.log("Nowe zadanie zostało dodane:", response.data);
            this.tasks.push(response.data);
          })
          .catch(error => {
            console.error("Błąd podczas dodawania nowego zadania:", error);
          });

        this.newTaskName = '';
        this.newTaskStage = 'Do zrobienia';
        this.assignedUser = null;
      }
    
},













fetchUsers() {
      axios.get('http://localhost:8000/api/auth/users')
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error("Błąd podczas pobierania użytkowników:", error);
        });
    },



  fetchSprints() {
      axios.get('http://localhost:8000/api/auth/sprints')
        .then(response => {
          this.sprints = response.data;
        })
        .catch(error => {
          console.error("Błąd podczas pobierania sprintów:", error);
        });
    },
    createNewSprint() {
  const newSprintName = `Sprint ${this.sprints.length + 1}`; // Generowanie nazwy na podstawie liczby istniejących sprintów
  const newSprint = { 
    name: newSprintName, 
    projectId: this.$store.getters.selectedProjectId,
    tasks: []
  };

  console.log("Próba utworzenia nowego sprintu:", newSprint);

  axios.post('http://localhost:8000/api/auth/sprints', newSprint)
    .then(response => {
      console.log("Nowy sprint został utworzony:", response.data);
      this.sprints.push(response.data); // Aktualizacja listy sprintów po utworzeniu nowego sprintu
    })
    .catch(error => {
      console.error("Błąd podczas tworzenia nowego sprintu:", error);
      if (error.response) {
        console.error("Odpowiedź serwera:", error.response.data);
      }
    });
},



    deleteSprint(sprintId) {
      axios.delete(`http://localhost:8000/api/auth/sprints/${sprintId}`)
        .then(response => {
          console.log("Sprint został usunięty:", response.data);
          this.sprints = this.sprints.filter(sprint => sprint.id !== sprintId);
        })
        .catch(error => {
          console.error("Błąd podczas usuwania sprintu:", error);
        });
    },




toggleSideBar() {
  this.showSide = !this.showSide

},

toggleTasks(sprintId) {
        this.showTasks = this.showTasks === sprintId ? null : sprintId;
    },
    toggleTasksBacklog() {
        this.showTasks = this.showTasks;
    },
    toggleDrop3(sprintId) {
      this.showDropDown3 = this.showDropDown3 === sprintId ? null : sprintId;
    },
        editSprint(sprintId) {
      this.editMode2 = sprintId;
    },
    cancelStart() {
      this.editMode2 = null;
    },
 
 

    fetchSprintDetails(id) {
    // Pobierz szczegóły sprintu do edycji (użyj axios lub fetch)
    axios.get(`http://localhost:8000/api/auth/sprints/${id}`)
      .then(response => {
        this.sprint = response.data;
        this.editMode2 = true;
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  },
  startSprint(sprint) {
      axios.put(`http://localhost:8000/api/auth/sprints/${sprint.id}/start`)
        .then(response => {
          sprint.isStarted = true;
          this.editMode2 = sprint.id; // Ustawia tryb edycji dla konkretnego sprintu
          console.log('Sprint rozpoczęty:', response.data);
        })
        .catch(error => {
          console.error('Błąd rozpoczynania sprintu:', error);
        });
    },
    endSprint(sprint) {
   // Usuń najpierw zadania powiązane z danym sprintem

      
      // Następnie usuń sprint
      axios.delete(`http://localhost:8000/api/auth/sprints/${sprint.id}`)
        .then(response => {
          console.log('Sprint został usunięty:', response.data);
          
          // Aktualizuj listę sprintów po usunięciu sprintu
          this.sprints = this.sprints.filter(s => s.id !== sprint.id);
        })
        .catch(error => {
          console.error('Błąd podczas usuwania sprintu:', error);
        });
   
    },
  updateSprint(sprint) {
    axios.put(`http://localhost:8000/api/auth/sprints/${sprint.id}`, sprint)
      .then(response => {
        console.log('Sprint zaktualizowany:', response.data);
          this.editMode2 = null; // Wyłącz tryb edycji po zapisaniu zmian
        // lub wyłączenie trybu edycji
      })
      .catch(error => {
        console.error("Błąd podczas aktualizacji sprintu:", error);
      });
},


toggleDrop() {
  this.showDropDown = !this.showDropDown

},
toggleDrop2() {
  this.showDropDown2 = !this.showDropDown2

},

}
  
  }
  </script>
  
  <style>

  </style>