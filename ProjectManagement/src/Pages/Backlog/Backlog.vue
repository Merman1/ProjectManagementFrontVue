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
                  <div>Jarek</div>
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
        <div class="border border-gray-300 w-[70%] rounded-md p-[10px] mb-4">
          <div class="flex justify-between items-center">
  <div class="flex justify-between">
    <button @click="toggleTasks" class="text-white font-bold py-2 px-4 rounded flex items-center">
      <img class="w-3 h-3 mr-2 border-gray-50" src="../../assets/arrow.png" alt="">
      <h3 class="font-bold text-left text-xl text-black">Sprint 1</h3>
    </button>

    <button class="bg-amber-300 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded">Ukończ sprint</button>
  </div>



  <div class="relative">
      <img @click="toggleDrop3" class="w-10 h-10 rounded-full border-2 border-gray-50 cursor-pointer" src="../../assets/more.png" alt="">
      
      <div v-show="showDropDown3" class="absolute top-10 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-2">
        <div class="py-1 text-left" role="none">
          <a href="#" @click="editSprint" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Edytuj sprint
          
          </a>
       <form method="POST" action="#" role="none">
            <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Usuń sprint</button>
          </form>
        </div>
      </div>
  </div>
</div>
 <!-- Formularz edycji sprintu -->
 <div v-if="editMode" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md">
 
    <h2 class="text-2xl font-semibold mb-4">Edytuj Sprint "{{ sprintName }}"</h2>
    <form @submit.prevent="updateSprint">
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


  <div class="my-4"></div>
  <div v-if="showTasks">
    <div v-for="(task, index) in tasks" :key="index" class="border border-gray-300 rounded-md p-[10px] mb-4">
    <h4 class="font-medium text-left text-lg text-black">{{ task.name }}</h4>
    <p class="text-gray-600">{{ task.description }}</p>
    <!-- Pole wyboru pracownika -->
    <div class="flex items-center mt-2">
      <label for="employee">Pracownik:</label>
      <select v-model="task.employee" id="employee" class="ml-2 border border-gray-300 rounded-md p-1">
        <option value="">Jarosław Kot</option>
        <option value="">Michał Probierz</option>
        <option value="">Karol Michniewicz</option>
        <option value="">Elżbieta Konieczna</option>
        <!-- Tutaj umieść opcje wyboru pracowników -->
      </select>
    </div>
  </div>
    <div class="flex justify-center">
      <input v-model="newTaskName" @keyup.enter="addTask" type="text" placeholder="Dodaj nowe zadanie..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div class="my-4 flex items-center">
      <button @click="addTask" class="bg-white text-black font-bold py-2 px-4 rounded flex items-center space-x-2">
        <img class="w-5 h-5 mr-2 border-gray-50" src="../../assets/plus.png" alt="">
        Dodaj zadanie
      </button>
    </div>
  </div>
</div>

        <div class="my-20"></div>
        <div class="border border-gray-300 w-[70%] rounded-md p-[10px] mb-4">
       
          <div class="flex justify-between">
  <button @click="toggleTasks2" class="text-white font-bold py-2 px-4 rounded flex items-center">
    <img class="w-3 h-3 mr-2 border-gray-50" src="../../assets/arrow.png" alt="">
    <h3 class="font-bold text-left text-xl text-black">Backlog</h3>
  </button>

  <button class="bg-amber-300 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded">Utwórz sprint</button>
</div>
<div v-if="showTasks2">
  <div class="my-4"></div>
  <!-- Wyświetlanie zadań -->
  <div v-for="(task2, index) in tasks2" :key="index" class="border border-gray-300 rounded-md p-[10px] mb-4">
    <h4 class="font-medium text-left text-lg text-black">{{ task2.name }}</h4>
    <p class="text-gray-600">{{ task2.description }}</p>
    <!-- Pole wyboru pracownika -->
    <div class="flex items-center mt-2">
      <label for="employee2">Pracownik:</label>
      <select v-model="task2.employee" id="employee2" class="ml-2 border border-gray-300 rounded-md p-1">
        <option value="">Wybierz pracownika</option>
        <option v-for="employee in employees" :value="employee">{{ employee }}</option>
        <option value="">Jarosław Kot</option>
        <option value="">Michał Probierz</option>
        <option value="">Karol Michniewicz</option>
        <option value="">Elżbieta Konieczna</option>
      </select>
    </div>
  </div>

  <!-- Dodawanie nowego zadania -->
  <div class="flex justify-center">
    <input v-model="newTaskName2" @keyup.enter="addTask2" type="text" placeholder="Dodaj nowe zadanie..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
  </div>

  <!-- Przycisk dodawania zadania -->
  <div class="my-4 flex items-center">
    <button @click="addTask2" class="bg-white text-black font-bold py-2 px-4 rounded flex items-center space-x-2">
      <img class="w-5 h-5 mr-2 border-gray-50" src="../../assets/plus.png" alt="">
      Dodaj zadanie
    </button>
  </div>
</div>

        <div class="my-4"></div>
      </div>
      </div>
      <router-view></router-view>
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
        showDropDown3: false,
        showSide: true,
        editMode: false,
      editedSprintName: '', // Przechowuje edytowaną nazwę sprintu
      sprintName: '', // Przechowuje nazwę sprintu, który będzie edytowany
        tasks: [],
      newTaskName: '',
      tasks2: [],
      newTaskName2: '',
      showTasks: true,
      showTasks2: true
      }
    },
    methods: {

toggleSideBar() {
  this.showSide = !this.showSide

},
addTask() {
      if (this.newTaskName.trim() !== '') {
        this.tasks.push({ name: this.newTaskName, description: 'Opis nowego zadania...' });
        this.newTaskName = ''; // Resetowanie pola tekstowego po dodaniu zadania
      }
    },
    addTask2() {
      if (this.newTaskName2.trim() !== '') {
        this.tasks2.push({ name: this.newTaskName2, description: 'Opis nowego zadania...' });
        this.newTaskName2 = ''; // Resetowanie pola tekstowego po dodaniu zadania
      }
    },
    toggleTasks() {
        this.showTasks = !this.showTasks;
      },
      toggleTasks2() {
        this.showTasks2 = !this.showTasks2;
      },
      editSprint() {
      this.editMode = true;
      // Tutaj można ustawić nazwę sprintu, który ma być edytowany
      // this.sprintName = ...;
      // Możesz również wczytać nazwę z argumentu funkcji, jeśli chcesz
      // this.sprintName = ...;
      // Na potrzeby przykładu ustawiłem pustą nazwę
      this.sprintName = '';
      this.editedSprintName = this.sprintName; // Wypełniamy pole formularza aktualną nazwą sprintu
    },

    // Funkcja anulująca edycję sprintu i zamykająca formularz
    cancelEdit() {
      this.editMode = false;
    },

    // Funkcja aktualizująca dane sprintu
    updateSprint() {
      // Tutaj dodaj logikę aktualizacji danych sprintu
      // Po zakończeniu aktualizacji, zakończ edycję i ukryj formularz
      this.editMode = false;
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
  
  </style>