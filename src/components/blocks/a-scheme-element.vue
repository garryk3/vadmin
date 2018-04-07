<template>
  <v-card class="a-scheme-element">
    <v-form v-model="elementValid">
      <v-card-title primary-title class="a-scheme-element__body">
        <h3 class="title">Заполните атрибуты поля</h3>
        <v-text-field
          name="name"
          label="Название поля"
          id="testing"
          v-model="nameValue"
          :rules="nameValueRules"
          required
        ></v-text-field>
      </v-card-title>
      <v-card-actions>
        <v-btn @click="onCreateElement">Добавить поле</v-btn>
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
    onCreateElement() {
      if (this.elementValid) {
        const values = {
          name: this.nameValue
        };
        this.$emit('create', values);
      }
    },
    onResetElement() {
      this.$emit('close');
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
