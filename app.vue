<template>
  <div>
    <header class="head">
      <NuxtLink to="/" class="button" @click="test()">Accueil </NuxtLink>
      <NuxtLink to="/forum-liste" class="button" @click="test()">Forum </NuxtLink>
      <NuxtLink to="/Profil" class="button" v-if="connected" @click="test()">Profil </NuxtLink>
      <NuxtLink to="Connexion" class="button" v-if="!connected" @click="test()">Connexion </NuxtLink>
      <NuxtLink to="Inscription" class="button" v-if="!connected" @click="test()">Inscription</NuxtLink>
      <NuxtLink to="/" class="button" v-if="connected" @click="test()">Deconnexion </NuxtLink>
    </header>
    <button class="button" @click="swap">Test Socket</button>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>

<script>
export default {
  name:'App',
data() {
  return {
    connected: false,
  };
},
  mounted() {
  this.connected=false;
  sessionStorage.setItem('user',null);
   this.test();
    this.$router.beforeEach((to, from, next) => {
      // Appeler la fonction à chaque changement de route
      this.test();
      next();
    });
  },
  methods: {
    swap() {
      this.$router.push("/socket");
    },
    test(){
      if(sessionStorage.getItem('user')!="null"){
        this.connected=true;
      }else{
        this.connected=false;
      }
    }
  },
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