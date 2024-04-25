<script lang="ts">
export default {
  data() {
    return {
      id: 0,
      discussion:[]
    };
  },
  async mounted() {
    this.id = this.$route.params.id;
    try {
      const res = await $fetch('/api/discussionFull', {
        method: 'post',
        body:{
          id:this.id,
          page:1
        }
      });
      this.discussion = res.response.discussion;
      console.log(this.discussion)
    } catch (error) {
      alert(error.message)
    }
  }
}
</script>

<template>
  <h1> Je suis le Forum {{id}}</h1>
  <div v-for="item in discussion">
    <Case2 :data=item></Case2>
  </div>
</template>