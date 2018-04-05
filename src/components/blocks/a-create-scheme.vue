<template>
  <div class="a-create-scheme">
    <h1 class="headline a-create-scheme__header">Создать шаблон страницы</h1>
    <v-form v-model="templateValid">
      <v-text-field
        name="header"
        label="Название шаблона"
        id="testing"
        v-model="nameValue"
        :rules="nameValueRules"
      ></v-text-field>
      <v-select
        :items="elements"
        v-model="selectValue"
        label="Выберите тип элемента"
        single-line
        clearable
      ></v-select>
      <a-element v-if="selectValue"></a-element>
    </v-form>
  </div>
</template>

<script>
import AdminSchemeElement from 'blocks/a-scheme-element';

export default {
  name: 'a-create-scheme',
  data: () => ({
    templateValid: false,
    nameValue: '',
    selectValue: null,
    nameValueRules: [
      v => !!v || 'Имя обязательно',
      v => v.length > 1 || 'Не менее 2х символов'
    ],
    elements: [
      'v-text-field',
      'fileInput',
      'textarea'
    ],
    activeElement: null
  }),
  methods: {},
  components: {
    'a-element': AdminSchemeElement
  }
};
</script>

<style scoped>
  .a-create-scheme {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;

    &__header {
      margin: 24px 0;
    }
  }
</style>
