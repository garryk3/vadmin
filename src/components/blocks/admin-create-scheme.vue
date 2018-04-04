<template>
  <div class="admin-create-scheme">
    <h1 class="headline admin-create-scheme__header">Создать шаблон страницы</h1>
    <v-form v-model="templateValid">
      <v-text-field
        name="header"
        label="Название шаблона"
        id="testing"
        v-model="name"
        :rules="nameRules"
      ></v-text-field>
      <v-select
        :items="elements"
        v-model="activeElement"
        label="Выберите тип элемента"
        single-line
      ></v-select>
      <div
        class="admin-create-scheme__element"
        v-if="activeElement"
      >
        <v-btn @click="onCreateElement">Создать элемент</v-btn>
        <v-btn @click="onResetElement">Отмена</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'admin-create-scheme',
  data: () => ({
    templateValid: false,
    name: '',
    nameRules: [
      v => !!v || 'Имя обязательно',
      v => v.length > 1 || 'Не менее 2х символов'
    ],
    elements: [
      'textInput',
      'fileInput',
      'textarea'
    ],
    activeElement: []
  }),
  methods: {
    onCreateElement: () => {
      console.log('create', this);
      this.activeElement = [];
    },
    onResetElement: (e) => {
      this.activeElement = [];
    }
  }
};
</script>

<style scoped>
  .admin-create-scheme {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;

    &__header {
      margin: 24px 0;
    }
  }
</style>
