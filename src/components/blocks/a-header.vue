<template>
  <v-toolbar dark class="a-header">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Панель редактора</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'a-header'
};
</script>

<style scoped>
  .a-header {}
</style>
