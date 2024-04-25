<script>
export default {
  data(){
    return {
      forum: []
    }
  },
  async mounted() {
    try {
      const res = await $fetch('/api/forum', {
        method: 'get'
      });
      this.forum = res.response.forums;
      console.log(this.forum)
    } catch (error) {
      alert(error.message)
    }
  }
}
</script>

<template>
  <h1> Je suis le Forum</h1>
  <div v-for="item in forum">
    <Case :data=item></Case>
  </div>
</template>