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
      donnees: []
    }
  },
  mounted() {
    this.donnees=this.data;
  }
}
</script>

<template>
  <div class="pack">
    <NuxtLink :to="`/discussion/${donnees.ID}`">{{donnees.Titre}}</NuxtLink>
    <p>{{donnees.Description}}</p>
    <p>{{donnees.Date}}</p>
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