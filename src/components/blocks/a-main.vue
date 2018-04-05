<template>
    <div class="a-main">
      <a-sidebar @change-view="onEmitChangeView"></a-sidebar>
      <div class="a-main__content">
        <a-create-scheme v-if="view==='creator'"></a-create-scheme>
        <a-template v-if="view==='template'"></a-template>
      </div>
    </div>
</template>

<script>
import AdminSidebar from 'blocks/a-sidebar';
import AdminCreateScheme from 'blocks/a-create-scheme';
import AdminTemplate from 'blocks/a-template';

export default {
  name: 'admin-main',
  data() {
    return {
      view: 'creator'
    };
  },
  methods: {
    onEmitChangeView(view) {
      if (this.view !== view) {
        this.view = view;
      }
    }
  },
  components: {
    'a-sidebar': AdminSidebar,
    'a-create-scheme': AdminCreateScheme,
    'a-template': AdminTemplate
  }
};
</script>

<style scoped>
  .a-main {
    display: flex;
    height: 100%;
    flex-grow: 2;

    &__content {
      flex-grow: 2;
    }
  }
</style>
