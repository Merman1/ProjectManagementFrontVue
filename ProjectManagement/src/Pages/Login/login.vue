<template>
  <div class="w-screen h-screen flex items-center justify-center bg-cyan-700">
    <img class="w-140 h-150 mr-8 border-gray-50" src="../../assets/vault.png" alt="">
    <h1 class="text-8xl mr-8 font-bold text-amber-500 text-center mb-8">VaultProject</h1>
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">Logowanie</h2>
      <form @submit.prevent="submitLogin">
        <div class="mb-4">
          <label for="username" class="block text-gray-700">Nazwa użytkownika:</label>
          <input v-model="username" type="text" id="username" name="username"
            class="border border-gray-300 rounded-md p-2 w-full">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700">Hasło:</label>
          <input v-model="password" type="password" id="password" name="password"
            class="border border-gray-300 rounded-md p-2 w-full">
        </div>
        <div class="flex justify-between items-center">
          <button type="submit"
            class="bg-amber-300 mr-2 text-white font-bold py-2 px-4 rounded hover:bg-amber-500 transition duration-300 ease-in-out">Zaloguj
            się</button>
          <a href="#" class="text-gray-600 hover:underline">Zapomniałeś hasła?</a>
        </div>
        <div v-if="errorMessage" class="text-red-500 mt-4">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    };
  },

  methods: {
    ...mapActions(['login']),
    async submitLogin() {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/signin', {
          username: this.username,
          password: this.password
        });

        if (response.data.accessToken) {
          await this.login({
            user: {
              id: response.data.id,
              username: response.data.username,
              email: response.data.email,
              roles: response.data.roles
            },
            jwt: response.data.accessToken
          });
          const roles = response.data.roles;
          if (roles.includes('ROLE_USER')) {
            this.$router.push('/projects');
          } else if (roles.includes('ROLE_MODERATOR') || roles.includes('ROLE_ADMIN')) {
            this.$router.push('/projects');
          } else {
            console.error('Nieznane role użytkownika');
          }
        } else {
          this.errorMessage = 'Nieprawidłowa nazwa użytkownika lub hasło';
        }
      } catch (error) {
        console.error('Błąd logowania:', error);
        this.errorMessage = 'Wystąpił błąd podczas logowania. Spróbuj ponownie.';
      }
    }
  }
};
</script>
