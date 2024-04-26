<script>
export default {
  data(){
    return {
      forum: []
    }
  },
  async mounted() {
    try {
      const res = await $fetch('/api/forumFull', {
        method: 'post',
        body:{
          page:1
        }
      });
      this.forum = res.response.forums;
    } catch (error) {
      alert(error.message)
    }
  }
}
</script>

<template>
  <div><h1> Je suis le Forum</h1></div>
  <div v-for="item in forum">
    <Case :data=item></Case>
  </div>
</template>