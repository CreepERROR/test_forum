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
      nom: " ",
      admin:null,
      user:null
    }
  },
  async mounted() {
    this.donnees=this.data;
    let id=this.donnees.User;
    this.user=JSON.parse(sessionStorage.getItem('user'));
    if(this.user!=null && this.user!='null'){
      this.admin=this.user.Admin;
    }
    try {
      const res = await $fetch('/api/user', {
        method: 'post',
        body:{
          id:id
        }
      });
      this.nom = res.response.discussion;
    } catch (error) {
      //alert(error.message)
    }
  },
  methods:{
    async deleted(){
      try {
        const res = await $fetch('/api/reponseDelete', {
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
    <h1>Par : {{nom}}</h1>
    <p>{{donnees.Contenu}}</p>
    <p>Envoyer le : {{donnees.Date}}</p>
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
}
</style>