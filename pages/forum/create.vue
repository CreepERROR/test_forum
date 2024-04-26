<script>

export default {
  data(){
    return {
      titre: "",
      forum: null,
      contenu:"",
      forumList:[]
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
    this.listForum();
  },
  methods:{
    async listForum() {
      try {
        this.forumList=[];
        const res = await $fetch('/api/forum', {
          method: 'get',
        });
        let listing = res.response.forum;
        listing.forEach(element=>{
          let valeur=element;
          this.forumList.push(valeur);
        });
      } catch (error) {
        alert(error.message)
      }
      console.log(this.forumList);
    },
    async send(){
      if(this.forum==null){
        alert("Aucun forum choisit")
      }else if(this.titre.length<10){
        alert("Titre trop court")
      }else if(this.contenu.length<20){
        alert("description trop court")
      }
      else{
        try {
          this.forumList=[];
          const res = await $fetch('/api/discussionCreate', {
            method: 'post',
            body:{
              user:1,
              forum:this.forum,
              title:this.titre,
              desc:this.contenu
            }
          });
          this.$router.push({path:"/forum/"+this.forum});
        } catch (error) {
          alert(error.message)
        }
      }
    },
  }
}
</script>

<template>
<h1>Création de discussion</h1>
  <div class="group">
  <input class="titre" v-model="titre" placeholder="Titre de la Discussion"/>
    <select  class="select" v-model="forum" placeholder="Choisir le Forum">
      <option v-for="item in this.forumList" :value="item.ID">{{ item.Titre }}</option>
    </select>
  <textarea class="contenu" type="" v-model="contenu" placeholder="Titre de la Discussion"/>
    <input class="titre" type="button" @click="send()" value="Créé la discussion">
  </div>
  <input type="button" value="acceuil" @click="reroute()">
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