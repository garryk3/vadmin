<template>
    <div class="a-template">
      <h2 class="display-1 a-template__header">Шаблоны</h2>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(item,i) in arraySchemas" :key="i">
          <div slot="header" class="title">{{ item[0] }}</div>
          <v-card>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'a-template',
  created() {
    console.log('sc', this.arraySchemas, this.schemasNames);
  },
  computed: {
    arraySchemas() {
      return Object.entries(this.schemas);
    },
    schemasNames() {
      return this.arraySchemas.map(item => item[0]);
    },
    ...mapState({
      schemas: state => state.admin.schemas
    })
  }
};
</script>

<style scoped>
  .a-template {
    margin: 24px;

    &__header {
      margin-bottom: 24px;
    }
  }
</style>
