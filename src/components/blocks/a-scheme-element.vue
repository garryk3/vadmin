<template>
  <v-card class="a-scheme-element">
    <v-form v-model="elementValid">
      <v-card-title primary-title class="a-scheme-element__body">
        <h3 class="title">Заполните атрибуты элемента</h3>
        <v-text-field
          name="name"
          label="Название шаблона"
          id="testing"
          v-model="nameValue"
          :rules="nameValueRules"
          required
        ></v-text-field>
      </v-card-title>
      <v-card-actions>
        <v-btn @click="onCreateElement">Создать элемент</v-btn>
        <v-btn @click="onResetElement">Отмена</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>


<script>
export default {
  name: 'a-scheme-element',
  data() {
    return {
      elementValid: false,
      nameValue: '',
      nameValueRules: [
        v => !!v || 'Имя обязательно',
        v => v.length > 1 || 'Не менее 2х символов'
      ]
    };
  },
  methods: {
    onCreateElement: () => {
      console.log('create', this);
      this.activeElement = [];
    },
    onResetElement: () => {
      this.activeElement = [];
    }
  }
};
</script>

<style scoped>
  .a-scheme-element {
    &__body {
      display: flex;
      flex-direction: column;
    }
  }
</style>
