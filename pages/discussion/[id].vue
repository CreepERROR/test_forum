<script lang="ts">
export default {
  data() {
    return {
      id: 0,
      reponse:[]
    };
  },
  async mounted() {
    this.id = this.$route.params.id;
    try {
      const res = await $fetch('/api/reponse', {
        method: 'post',
        body:{
          id:this.id,
          page:1
        }
      });
      this.reponse = res.response.reponse;
      console.log(res.response)
    } catch (error) {
      alert(error.message)
    }
  }
}
</script>

<template>
  <h1> Je suis la discussion {{id}}</h1>
  <div v-for="item in reponse">
    <Case3 :data=item></Case3>
  </div>
</template>