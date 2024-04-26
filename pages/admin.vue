<script>
export default {
  data(){
    return {
      admin: null,
      user:null,
      titre:"",
      contenu:""
    }
  },
  mounted() {
    this.user=JSON.parse(sessionStorage.getItem('user'));
    if(this.user==null || this.user=='null'){
      this.$router.push("/");
    }else{
      this.admin=this.user.Admin;
    }
  },
  methods:{
    async send(){
      if (this.titre.length<10){
        alert("Titre trop court")
      }else if(this.contenu.length<20){
        alert("description trop court")
      }
      else{
        try {
          this.forumList=[];
          const res = await $fetch('/api/forumCreate', {
            method: 'post',
            body:{
              user:1,
              title:this.titre,
              description:this.contenu
            }
          });
          console.log(res.response);
          this.$router.push({path:"/forum/"+res.response.forum.ID});
        } catch (error) {
          alert(error.message)
        }
      }
    }
  }
}
</script>

<template>
<h1>Page admin</h1>
  <div class="group">
    <input class="titre" v-model="titre" placeholder="Titre du Forum"/>
    <textarea class="contenu" v-model="contenu" placeholder="Description du Forum "/>
    <input class="titre" type="button" @click="send()" value="Créé la discussion">
  </div>
</template>

<style scoped>
.group{
  display:flex;
  flex-direction: column;
  width:60%;
}

.titre{
  width:40%;
  font-size: 1.5em;
  height:50px;
}

.contenu{
  font-size: 1.5em;
  height:150px;
}

.select{
  font-size: 1.2em;
  height:50px;
  width:150px;
}
</style>