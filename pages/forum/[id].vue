<script lang="ts">
export default {
  data() {
    return {
      id: 0,
      discussion:[],
      forum:[]
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
    } catch (error) {
      alert(error.message)
    }
    this.forumInfo();
  },
  methods:{
    async forumInfo(){
      try {
        const res = await $fetch('/api/forum', {
          method: 'post',
          body:{
            id:this.id
          }
        });
        this.forum = res.response.forum;
      } catch (error) {
        alert(error.message)
      }
    }
}
}
</script>

<template>
  <div class="grandTitre">
  <h1>{{this.forum.Titre}}</h1>
  <p>{{this.forum.Description}}</p>
  </div>
  <div v-for="item in discussion">
    <Case2 :data=item></Case2>
  </div>
</template>

<style>
.grandTitre{
  background-color:orange;
  font-size:1.5em;
  text-align: center;
  align-items: center;
  vertical-align: center;
  padding:20px;
  margin-top:20px;
}
</style>