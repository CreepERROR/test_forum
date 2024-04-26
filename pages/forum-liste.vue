<script>
export default {
  data(){
    return {
      forum: [],
      user:null
    }
  },
  async mounted() {
    this.user=sessionStorage.getItem("user");
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
  },
  methods:{
    goToCreate(){
      if(this.user!='null'){
        this.$router.push("/forum/create");
      }else{
        this.$router.push("/connexion");
      }
    },
  }
}
</script>

<template>
  <div class="grandTitre"><h1> Liste des Forums</h1></div>
  <div v-for="item in forum">
    <Case :data=item></Case>
  </div>
  <input v-if="user!='null'" class="added" type="button" value="créé une nouvelle discussion" @click="goToCreate">
</template>

<style>
.added{
  font-size:1.5em;
  padding:20px;
}

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