<template>
  <div class="profil-container">
    <h1>Profil</h1>
    <div v-if="user">
      <p>Nom d'utilisateur : {{ user.Name }}</p>
      <p>Rôle : {{ user.Admin === 1? 'Administrateur' : 'Utilisateur' }}</p>
    </div>
    <div v-else>
      <p>Aucun utilisateur connecté</p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const user = JSON.parse(sessionStorage.getItem('user'));

    return {
      user
    };
  }
}
</script>

<style>
.profil-container {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.profil-container h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.profil-container p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
}
</style>