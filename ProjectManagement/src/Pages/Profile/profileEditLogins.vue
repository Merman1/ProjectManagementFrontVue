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
              <router-link to="/home" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                <img class="w-10 h-10  border-gray-50" src="../../assets/backlog.png" alt="">
                <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  
                </svg>
                BACKLOG
              </router-link>
              <router-link to="/profile" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                <img class="w-10 h-10  border-gray-50" src="../../assets/timeline.png" alt="">
                <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                </svg>
                OŚ CZASU
              </router-link>
              <router-link to="/message" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
                <img class="w-10 h-10  border-gray-50" src="../../assets/table.png" alt="">
                  <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                </svg>
                TABLICA
              </router-link>
              <router-link to="/download" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300  hover:text-gray-800 transition duration-400 ease-in-out">
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
      <h3 class="font-bold text-left text-xl mb-4">EDYTUJ HASŁO</h3>
      <div class="flex space-x-4">
                <router-link to="/profile" class="bg-amber-300 text-white px-4 py-2 rounded-md shadow-md transition duration-300 hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Wróć do profilu</router-link>
               
                </div>
      
      <div class="flex justify-center items-center h-full space-x-8">
       
        <div class="bg-gray-50 px-6 py-8 rounded-md shadow-md w-full space-y-8 max-w-md text-left">
        
     
    <!-- Formularz edycji hasła -->
    <form @submit.prevent="updatePassword2">
        <div class="mb-6">
          <label for="old-password" class="block text-lg font-medium text-gray-700 mb-2">Stare hasło</label>
          <input type="password" v-model="editedPassword.oldPassword" id="old-password" name="old-password" autocomplete="current-password" class="mt-1 focus:ring-gray-50 focus:border-green-500 block w-full shadow-sm sm:text-sm border-green-500 rounded-md px-4 py-3">
        </div>
        <div class="mb-6">
          <label for="new-password" class="block text-lg font-medium text-gray-700 mb-2">Nowe hasło</label>
          <input type="password" v-model="editedPassword.newPassword" id="new-password" name="new-password" autocomplete="new-password" class="mt-1 focus:ring-gray-50 focus:border-gray-50 block w-full shadow-sm sm:text-sm border-gray-50 rounded-md px-4 py-3">
        </div>
        <div class="mb-6">
          <label for="confirm-password" class="block text-lg font-medium text-gray-700 mb-2">Powtórz nowe hasło</label>
          <input type="password" v-model="editedPassword.confirmPassword" id="confirm-password" name="confirm-password" autocomplete="new-password" class="mt-1 focus:ring-gray-50 focus:border-gray-50 block w-full shadow-sm sm:text-sm border-gray-50 rounded-md px-4 py-3">
        </div>

        <div class="flex justify-center">
          <button type="submit" @click="showAlert = true" class="bg-amber-300 hover:bg-amber-500 text-white font-semibold rounded-md px-6 py-3">Zapisz</button>
          <button type="submit" class="text-black font-semibold rounded-md px-6 py-3">Anuluj</button>
        </div>
      </form>

  <div class="relative">
  

    <!-- Alert -->
    <div v-if="showAlert" class="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50 z-50">
      <div class="bg-white p-8 rounded-md shadow-md max-w-md">
        <p class="text-lg mb-4">Czy na pewno chcesz zapisać?</p>
        <div class="flex justify-center">
          <button @click="saveChanges" class="bg-amber-300 hover:bg-amber-500 text-white font-semibold rounded-md px-6 py-3 mr-4">Zapisz</button>
          <button @click="showAlert=false" class="text-black font-semibold rounded-md px-6 py-3">Anuluj</button>
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
        showAlert: false,
        editedPassword: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      }
      }
    },
    methods: {
      updatePassword() {
console.log("Dane do aktualizacji:", this.editedPassword);
},



  
    saveChanges() {
      axios.put('http://localhost:8000/api/auth/user/update-password', this.editedPassword)
    .then(response => {
      console.log("Odpowiedź z serwera:", response);
      console.log("Dane z odpowiedzi:", response.data);
      // Obsłuż odpowiedź z serwera
    })
    .catch(error => {
      console.error("Błąd podczas aktualizacji hasła:", error);
      console.error("Wiadomość błędu:", error.response.data);
      // Obsłuż błędy zapytania
    });
      this.showAlert = false; // Ukryj alert po zapisaniu zmian
    },
    cancelChanges() {
      // Tutaj możesz dodać logikę anulowania zmian
      this.showAlert = false; // Ukryj alert po anulowaniu zmian
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