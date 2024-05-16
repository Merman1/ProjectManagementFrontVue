<template>
    <div class="w-screen h-screen flex items-center justify-center bg-cyan-700">
        <img class="w-140 h-150 mr-8 border-gray-50" src="../../assets/vault.png" alt=""><h1 class="text-8xl mr-8 font-bold text-amber-500 text-center mb-8">VaultProject</h1>
      <div class="bg-white p-8 rounded-lg shadow-lg">
        
        <h2 class="text-2xl font-bold mb-4">Logowanie</h2>
        <form @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-gray-700">Email:</label>
            <input v-model="email" type="email" id="email" name="email" class="border border-gray-300 rounded-md p-2 w-full">
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-700">Hasło:</label>
            <input v-model="password" type="password" id="password" name="password" class="border border-gray-300 rounded-md p-2 w-full">
          </div>
          <div class="flex justify-between items-center">
        
                
            <router-link to="/profile" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg transition duration-400 ease-in-out">
              
                <button type="submit" class="bg-amber-300 mr-2 text-white font-bold py-2 px-4 rounded hover:bg-amber-500 transition duration-300 ease-in-out">Zaloguj się</button>
            </router-link>
            
            <a href="#" class="text-gray-600 hover:underline">Zapomniałeś hasła?</a>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Tutaj możesz dodać logikę logowania
        console.log('Logowanie...');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Stylowanie dla tego komponentu */
  </style>
  