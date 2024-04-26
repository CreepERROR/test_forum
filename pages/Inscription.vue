<template>
  <div class="login-container">
    <h1>Inscription</h1>
    <form @submit.prevent="login">
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

<script setup>
import { ref } from 'vue';
import { useSession } from 'vue-auth';

const username = ref('');
const password = ref('');

const login = async () => {
  try {
    // Envoyer la requête de connexion à l'API
    const response = await fetch('/api/inscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: username.value, password: password.value})
    });
    console.log(response)
    const data = await response.json();

    if (data.status=200) {
      navigateTo('/');
    } else {
      // Afficher un message d'erreur si la connexion a échoué
      console.error('Erreur lors de la connexion:', data.message);
    }
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
  }
};

</script>
<style>
.login-container {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.login-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
}

button {
  background-color: midnightblue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: lightskyblue;
}
</style>