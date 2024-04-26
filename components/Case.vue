<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    // Définition de la prop 'data'
    data: {
      type: Object, // Spécifiez le type si nécessaire
      required: true // Si 'data' est obligatoire ou non
    }
  },
  data() {
    return {
      donnees: [],
      admin:null,
      user:null
    }
  },
  mounted() {
    this.donnees=this.data;
    this.user=JSON.parse(sessionStorage.getItem('user'));
    if(this.user!=null && this.user!='null'){
      this.admin=this.user.Admin;
    }
  },
  methods:{
    async deleted(){
      try {
        const res = await $fetch('/api/forumDelete', {
          method: 'post',
          body:{
            id:this.donnees.ID
          }
        });
        this.forum = res.response.forums;
      } catch (error) {
        alert(error.message)
      }
      this.$router.push("/forum-liste");
    }
  }
}
</script>

<template>
  <div class="pack">
    <NuxtLink :to="`/forum/${donnees.ID}`">{{donnees.Titre}}</NuxtLink>
    <p>{{donnees.Description}}</p>
    <input type="button" value="supprimer" v-if="admin!=null" @click="deleted()">
  </div>
</template>

<style scoped>
.pack {
  justify-content: center;
  align-items: center;
  background-color: red;
  padding: 5px;
  margin: 5px;
  font-size:1.2em;
}
</style>