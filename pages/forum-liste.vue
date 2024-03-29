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
  <NuxtLink to="/forum/1" class="button">Forum 1 </NuxtLink>
  <NuxtLink to="/forum/2" class="button">Forum 2 </NuxtLink>
  <NuxtLink to="/forum/3" class="button">Forum 3 </NuxtLink>
</template>