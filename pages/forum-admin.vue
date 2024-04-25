<script>
export default {
  data() {
    return {}
  },
  methods: {
    async submit() {
  await $fetch('/api/forum', {
    method: 'post',
    body: {
      title: 'Jeux Vidéo',
      description: 'La où vous poucez parler de vos jeux vidéo préférés'
    }
  }).then((res) => {
    if(res.error) {
      alert(res.error)
    } else {
      alert("Forum Ajouté avec succès")
    }
  })
    }
  }
}
</script>

<template>
  <h1> Je suis le Forum</h1>
  <button @click="submit">Créer un forum</button>
</template>