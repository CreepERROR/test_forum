<script lang="ts">
export default {
  data() {
    return {
      id: 0,
      reponse:[],
      writtenMessage:"",
      page:1,
      title:"",
      desc:"",
      date:null,
    };
  },
  async mounted() {
    this.id = this.$route.params.id;
    this.getTitle();
    this.loadMessage();
  },
  methods:{
    async postMessage(){
      if(this.writtenMessage.length<1){
        alert("Message vide")
      }else{
      try {
        const res = await $fetch('/api/reponseCreate', {
          method: 'post',
          body:{
            user:1,
            discussion:this.id,
            contenu:this.writtenMessage
          }
        });
      } catch (error) {
        alert(error.message)
      }
    }
      this.loadMessage();
    },
    async loadMessage(){
      try {
        const res = await $fetch('/api/reponse', {
          method: 'post',
          body:{
            id:this.id,
            page:this.page
          }
        });
        this.reponse = res.response.reponse;
      } catch (error) {
        alert(error.message)
      }
    },
    async getTitle(){
      try {
        const res = await $fetch('/api/discussion', {
          method: 'post',
          body:{
            id:this.id,
          }
        });
        this.title=res.response.discussion.Titre;
        this.desc=res.response.discussion.Description;
        console.log(res.response);
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>

<template>
  <div class="grandTitre">
  <h1>{{title}}</h1>
  <p>{{desc}}</p>
  </div>
  <div v-for="item in reponse">
    <Case3 :data=item></Case3>
  </div>
  <div class="response">
    <textarea class="contenu" v-model="writtenMessage" placeholder="Titre de la Discussion"/>
    <input class=textField type="button" value="Envoyer" @click="postMessage">
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

.contenu{
  height: 200px;
  width:90%;
  font-size:1.5em;
  margin-right:1%;
}

.textField{
  font-size:1.5em;
  height:200px;
  width:7%;
}

.response{
  display:flex;
}
</style>