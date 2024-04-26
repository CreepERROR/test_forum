<template>
  <div class="login-container">
    <h1>Connexion</h1>
    <form @submit.prevent="testq">
      <div>
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div>
        <button type="submit">Se connecter</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const testq = async () => {
      try {
        if (!username.value || !password.value) {
          console.error('Nom d\'utilisateur ou mot de passe non défini.');
          return;
        }

        const response = await fetch('/api/connexion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: username.value, password: password.value})
        });

        const data = await response.json();
        console.log(data.response.message);
        console.log(data.response.user)

        if (data.response.message === "conexion réussi") {
          sessionStorage.setItem('user', JSON.stringify(data.response.user));
          router.push('/');
        } else {
          console.error('Erreur lors de l\'inscription:', data.message);
        }
      } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
      }
    };

    return {
      username,
      password,
      testq
    };
  }
}
</script>

<style>
/* votre style ici */
</style>