<template>
  <div class="a-create-scheme">
    <h1 class="headline a-create-scheme__header">Создать шаблон страницы</h1>
    <v-alert
      transition="scale-transition"
      v-if="successMessage"
      outline
      color="success"
      icon="check_circle"
      :value="true"
    >
      Шаблон успещно сохранен.
    </v-alert>
    <v-form v-model="templateValid" ref="form" lazy-validate>
      <v-text-field
        name="header"
        label="Название шаблона"
        id="testing"
        v-model="nameValue"
        :rules="nameValueRules"
        required
      ></v-text-field>
      <v-select
        :items="elements"
        v-model="selectValue"
        label="Выберите тип элемента"
        single-line
        clearable
      ></v-select>
      <a-element
        v-if="selectValue"
        @close="onCloseElement"
        @create="onCreateElement"
      ></a-element>
      <v-list
        two-line
        subheader
        v-if="scheme.length"
      >
        <v-subheader inset>Выбранные поля</v-subheader>
        <v-list-tile
          avatar
          v-for="item in scheme"
          :key="item.name">
          <v-list-tile-avatar>
            <v-icon>info</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-btn
        @click="onCreateTemplate"
        :disabled="!templateValid || !scheme.length"
        class="a-create-scheme__btn-submit"
      >Создать шаблон</v-btn>
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
    successMessage: false,
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
    scheme: [],
    timeout: null
  }),
  methods: {
    resetTemplateData() {
      this.scheme = [];
      this.selectValue = null;
      this.$refs.form.reset();
    },
    onCloseElement() {
      this.selectValue = null;
    },
    onCreateElement(data) {
      this.selectValue = null;
      this.scheme = [...this.scheme, data];
    },
    onCreateTemplate() {
      if (this.templateValid && this.scheme.length) {
        const schemeData = {
          [this.nameValue]: this.scheme
        };

        this.successMessage = true;
        this.resetTemplateData();
        this.clearMessage();
        console.log('store', this.$store, schemeData)
        // this.$store.commit('saveSchema', schemeData).then(() => { console.log('store', this.$store); });
      }
    },
    clearMessage() {
      this.timeout = setTimeout(() => {
        this.successMessage = false;
      }, 5000);
    }
  },
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

    &__btn-submit {
      margin-top: 40px;
    }
  }
</style>
