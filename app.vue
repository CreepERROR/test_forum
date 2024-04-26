<template>
  <div>
    <header class="head">
      <NuxtLink to="/" class="button">Accueil </NuxtLink>
      <NuxtLink to="/forum-liste" class="button">Forum </NuxtLink>
      <NuxtLink to="/" class="button" v-if="connected">Profil </NuxtLink>
      <NuxtLink to="Connexion" class="button" v-if="!connected">Connexion </NuxtLink>
      <NuxtLink to="Inscription" class="button" v-if="!connected">Inscription</NuxtLink>
      <NuxtLink to="/" class="button" v-if="connected">Deconnexion </NuxtLink>
    </header>
    <button class="button" @click="swap">SWAP</button>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    connected: false,
    user: 0,
  };
},
  mounted() {
  this.connected=true;
  this.user=1;
  },
  methods: {
    swap() {
      this.connected = !this.connected;
      if(this.user==0){
        this.user=1;
      }else{
        this.user=0;
      }
    }
  }
}
</script>

<style>
  .head {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f0f0f0;
  }

  .button{
    display: flex;
    background-color: red;
    height: 7.5vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    text-decoration: none;
    color: #fff;
  }

  .button:hover {
    background-color: #ff7300;
  }
</style>