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
        
        <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px] flex">
    <!-- Lewa sekcja z trzema sekcjami kafelków -->
    <div class="border border-gray-300 rounded-md p-[20px] w-4/5 flex flex-col space-y-[20px] overflow-y-auto">
      <div class="grid grid-cols-3 gap-4">
        <!-- Sekcja zadaniami do zrobienia -->
        <div class="border-b border-gray-300 pb-4">
          <h3 class="font-bold text-left text-xl">Zadania do zrobienia</h3>
          <div class="flex flex-col space-y-4">
            <!-- Przykładowe kafelki zadaniami do zrobienia -->
            <div class="bg-blue-200 p-4 rounded-md shadow-md cursor-pointer" @click="showTaskDetails(task, 'toDo')" v-for="(task, index) in tasksToDo" :key="index">
              <h3 class="font-semibold text-sm">{{ task.title }}</h3>
            </div>
          </div>
        </div>

        <!-- Sekcja zadaniami w trakcie realizacji -->
        <div class="border-b border-gray-300 pb-4">
          <h3 class="font-bold text-left text-xl">Zadania w trakcie realizacji</h3>
          <div class="flex flex-col space-y-4">
            <!-- Przykładowe kafelki zadaniami w trakcie realizacji -->
            <div class="bg-green-200 p-4 rounded-md shadow-md cursor-pointer" @click="showTaskDetails(task, 'inProgress')" v-for="(task, index) in tasksInProgress" :key="index">
              <h3 class="font-semibold text-sm">{{ task.title }}</h3>
            </div>
          </div>
        </div>

        <!-- Sekcja z gotowymi zadaniami -->
        <div>
          <h3 class="font-bold text-left text-xl">Gotowe zadania</h3>
          <div class="flex flex-col space-y-4">
            <!-- Przykładowe kafelki z gotowymi zadaniami -->
            <div class="bg-yellow-200 p-4 rounded-md shadow-md cursor-pointer" @click="showTaskDetails(task, 'done')" v-for="(task, index) in tasksDone" :key="index">
              <h3 class="font-semibold text-sm">{{ task.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Prawa sekcja ze szczegółami zadania -->
    <div class="border border-gray-300 rounded-md p-[20px] ml-4 flex-1">
      <div class="px-[20px] text-left">
        <h3 class="font-bold text-left text-xl">Szczegóły zadania</h3>
        <hr class="my-4 border-dashed border-gray-300">
        <!-- Tu będą wyświetlane szczegóły zadania po kliknięciu na kafelek -->
        <div v-if="selectedTask">
          <h3 class="font-semibold text-lg">{{ selectedTask.title }}</h3>
          <p>{{ selectedTask.sprint }}</p>
          <p>{{ selectedTask.description }}</p>
          <hr class="my-4 border-dashed border-gray-300">
          <div class="mt-4">
            <label for="assignedTo" class="block font-semibold">Osoba przypisana:</label>
            <input type="text" id="assignedTo" :value="selectedTask.assignedTo" class="border border-gray-300 rounded-md p-2 w-full mt-1" disabled>
          </div>
          <hr class="my-4 border-dashed border-gray-300">
          <div class="mt-4">
            <label class="block font-semibold">Status:</label>
            <div>
              <input type="radio" id="toDo" name="status" value="toDo" v-model="selectedTask.status">
              <label for="toDo">Do zrobienia</label><br>
              <input type="radio" id="inProgress" name="status" value="inProgress" v-model="selectedTask.status">
              <label for="inProgress">W trakcie</label><br>
              <input type="radio" id="done" name="status" value="done" v-model="selectedTask.status">
              <label for="done">Gotowe</label><br>
            </div>
          </div>
          <hr class="my-4 border-dashed border-gray-300">
          <div class="mt-8">
            <h3 class="font-bold text-left text-xl">Komentarze</h3>
            <div v-for="(comment, index) in selectedTask.comments" :key="index" class="mt-4 border rounded-md p-2 bg-gray-100">
              <p><strong>{{ comment.author }}</strong>: {{ comment.text }}</p>
            </div>
            <textarea v-model="newComment" class="mt-4 border border-gray-300 rounded-md p-2 w-full" placeholder="Dodaj nowy komentarz"></textarea>
            <button @click="addComment" class="mt-2 px-4 py-2 bg-cyan-700 text-white rounded-md">Dodaj komentarz</button>
          </div>
          <button @click="confirmSave" class="mt-4 px-4 py-2 bg-cyan-700 text-white rounded-md">Zapisz zmiany</button>
        </div>
        <div v-else>
          <p>Wybierz zadanie, aby zobaczyć szczegóły</p>
        </div>
      </div>
    </div>
  </div>
        
      </div>
      
 
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        showDropDown: false,
        showDropDown2: false,
        showSide: true,
        newComment: '',
        tasksToDo: [
                { title: 'Zadanie 1', sprint: 'Sprint 1', description: 'Opis zadania 1', status: 'toDo', assignedTo: 'Jan Kowalski' },
                { title: 'Zadanie 2', sprint: 'Sprint 2', description: 'Opis zadania 2', status: 'toDo', assignedTo: 'Anna Nowak' },
                { title: 'Zadanie 3', sprint: 'Sprint 3', description: 'Opis zadania 3', status: 'toDo', assignedTo: 'Tomasz Nowak' }
            ],
            tasksInProgress: [
                { title: 'Zadanie 4', sprint: 'Sprint 1', description: 'Opis zadania 4', status: 'inProgress', assignedTo: 'Marcin Kowalczyk' },
                { title: 'Zadanie 5', sprint: 'Sprint 2', description: 'Opis zadania 5', status: 'inProgress', assignedTo: 'Karolina Malinowska' }
            ],
            tasksDone: [
                { title: 'Zadanie 6', sprint: 'Sprint 3', description: 'Opis zadania 6', status: 'done', assignedTo: 'Michał Nowak' },
                { title: 'Zadanie 7', sprint: 'Sprint 4', description: 'Opis zadania 7', status: 'done', assignedTo: 'Natalia Wiśniewska' },
                { title: 'Zadanie 8', sprint: 'Sprint 4', description: 'Opis zadania 8', status: 'done', assignedTo: 'Piotr Kowalski' },
                { title: 'Zadanie 9', sprint: 'Sprint 4', description: 'Opis zadania 9', status: 'done', assignedTo: 'Katarzyna Kowalczyk' },
                { title: 'Zadanie 10', sprint: 'Sprint 5', description: 'Opis zadania 10', status: 'done', assignedTo: 'Wojciech Nowak' }
            ],
            selectedTask: null
      }
    },
    methods: {
        showTaskDetails(task, section) {
            this.selectedTask = task;
        },
        confirmSave() {
            if (confirm('Czy na pewno chcesz zapisać zmiany?')) {
                this.saveTask();
            }
        },
        addComment() {
      // Dodaj logikę dodawania komentarza do wybranego zadania
      if (this.selectedTask) {
        if (!this.selectedTask.comments) {
          this.selectedTask.comments = [];
        }
        this.selectedTask.comments.push({ author: 'Autor', text: this.newComment });
        this.newComment = ''; // Wyczyść pole tekstowe po dodaniu komentarza
      }
    },
        saveTask() {
            // Tutaj można dodać logikę zapisu zmian w zadaniu
            console.log('Zapisano zmiany w zadaniu:', this.selectedTask);
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
  
  <style>
  
  </style>