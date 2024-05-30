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
        
        <div class="h-screen bg-gray-50 flex justify-center items-center">
    <div class="border border-gray-300 rounded-md p-[20px] w-[80vw] h-[80vh]  flex flex-row">
        
        <!-- Lewa sekcja z tytułem "Utworzone" -->
        <div class="border border-gray-300 rounded-md p-[30px] w-[30%] ">
            <h3 class="text-xl font-semibold mb-4">Utworzone</h3>
            <!-- Suwak dla kafelków zgłoszeń -->
            <div class="overflow-y-auto" style="max-height: 60vh;">
                <!-- Każdy kafelek zgłoszenia -->
                <div v-for="(task, index) in tasks" :key="index" class="bg-gray-100 p-4 rounded-md shadow-md cursor-pointer mb-4" @click="selectReport(task)">
                    <h3 class="text-lg font-semibold">{{ task.nazwa }}</h3>
                    <div>{{ task.etap }}</div>
                </div>
            </div>
        </div>
        
        <!-- Prawa sekcja z opisem zgłoszenia i komentarzami -->
        <div class=" w-[60%] ml-[20px] flex-1 overflow-auto">
            <!-- Informacja o wyborze kafelka -->
            <div class="mb-4 text-left">
                <p class="font-semibold">Wybierz kafelek, aby zobaczyć opis</p>
            

            <!-- Tytuł i opis zgłoszenia (wyświetlany po wybraniu kafelka) -->
            <div class='my-10'v-if="selectedReport">
                <div class="space-y-2">
                    <h2 class="text-2xl font-semibold text-left">{{ selectedReport?.nazwa }}</h2>
                    <p class="text-left">{{ selectedReport?.etap }}</p>
                </div>
       
                <!-- Formularz komentarza -->
                <div class="space-y-2 my-10 ">
                    <h3 class="text-lg font-semibold text-left ">Aktywność</h3>
                    <!-- Lista komentarzy -->
                  
                    <textarea class="border border-gray-300 rounded-md p-2" v-model="commentText" placeholder="Dodaj komentarz"></textarea>
                </div>
                <!-- Przycisk do dodawania komentarza -->
                <button @click="addComment" class="px-4 py-2 bg-amber-300 hover:bg-amber-500 text-white rounded-md mt-2">Dodaj komentarz</button>
                <div class="mt-4 w-full" style="width: 40%;">
                    <div v-if="selectedReport.comments">
    <div v-for="(comment, index) in selectedReport.comments" :key="index" class="border border-gray-300 rounded-md p-2 text-left">
        <div class="font-semibold">{{ comment.user }}</div>
        <div>{{ comment.text }}</div>
        <button class="px-4 py-2 bg-amber-300 hover:bg-amber-500 text-white rounded-md mt-2 mr-2">Edytuj</button>
        <button class="px-4 py-2 bg-amber-300 hover:bg-amber-500 text-white rounded-md mt-2">Usuń</button>
    </div>
</div>

                    </div>
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
  export default {
    data() {
      return {
        showDropDown: false,
        showDropDown2: false,
        showSide: true,
        tasks:{
          id:'',
          etap:'',
          nazwa:'',
          creator_id:'',
          sprint_id:'',
          scrum:'',

        },
        reports: [
        { scrum: 'Scrum 1', issue: 'Issue 1', description: 'Description 1', comments: [] },
        { scrum: 'Scrum 2', issue: 'Issue 2', description: 'Description 2', comments: [] },
        { scrum: 'Scrum 3', issue: 'Issue 3', description: 'Description 3', comments: [] },
        { scrum: 'Scrum 4', issue: 'Issue 1', description: 'Description 1', comments: [] },
        { scrum: 'Scrum 5', issue: 'Issue 2', description: 'Description 2', comments: [] },
        { scrum: 'Scrum 6', issue: 'Issue 3', description: 'Description 3', comments: [] },
        { scrum: 'Scrum 7', issue: 'Issue 1', description: 'Description 1', comments: [] },
        { scrum: 'Scrum 8', issue: 'Issue 2', description: 'Description 2', comments: [] },
        { scrum: 'Scrum 9', issue: 'Issue 3', description: 'Description 3', comments: [] }
      ],
      selectedReport: null,
      comment: ''
      }
    },
    mounted() {
this.fetchIssues();
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
toggleSideBar() {
  this.showSide = !this.showSide

},
addComment() {
      if (this.selectedReport && this.commentText.trim() !== '') {
        // Dodaj komentarz do zgłoszenia
        this.selectedReport.comments.push({ user: 'User', text: this.commentText })
        // Wyczyść pole komentarza
        this.commentText = ''
      }
    },
    selectReport(task) {
      this.selectedReport = task
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
  
  <style>
  
  </style>