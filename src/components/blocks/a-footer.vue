<template>
  <v-footer height="auto" class="a-footer grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        color="white"
        flat
        v-for="link in links"
        :key="link"
      >
        {{ link }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>garryk3</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>


<script>
export default {
  name: 'a-footer',
  data() {
    return {
      links: ['test']
    };
  }
};
</script>

<style scoped>
  .a-footer {}
</style>
