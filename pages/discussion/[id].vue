<script lang="ts">
export default {
  data() {
    return {
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  }
}
</script>

<template>
  <h1> Je suis la discussion : {{id}}</h1>
</template>