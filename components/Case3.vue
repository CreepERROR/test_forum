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
      nom: " "
    }
  },
  async mounted() {
    this.donnees=this.data;
    console.log(this.donnees)
    let id=this.donnees.User;
    try {
      const res = await $fetch('/api/user', {
        method: 'post',
        body:{
          id:id
        }
      });
      this.nom = res.response.discussion;
    } catch (error) {
      alert(error.message)
    }
  }
}
</script>

<template>
  <div class="pack">
    <h1>Par : {{nom}}</h1>
    <p>{{donnees.Contenu}}</p>
    <p>Envoyer le : {{donnees.Date}}</p>
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