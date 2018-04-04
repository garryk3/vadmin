<template>
    <div class="admin-main">
      <admin-sidebar @change-view="onEmitChangeView"></admin-sidebar>
      <div class="admin-main__content">
        <admin-create-scheme v-if="view==='creator'"></admin-create-scheme>
        <admin-template v-if="view==='template'"></admin-template>
      </div>
    </div>
</template>

<script>
import AdminSidebar from 'blocks/admin-sidebar';
import AdminCreateScheme from 'blocks/admin-create-scheme';
import AdminTemplate from 'blocks/admin-template';

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
    'admin-sidebar': AdminSidebar,
    'admin-create-scheme': AdminCreateScheme,
    'admin-template': AdminTemplate
  }
};
</script>

<style scoped>
  .admin-main {
    display: flex;
    height: 100%;
    flex-grow: 2;

    &__content {
      flex-grow: 2;
    }
  }
</style>
