<template>
    <div class="admin-main">
      <admin-sidebar @change-view="onEmitChangeView"></admin-sidebar>
      <div class="admin-main__content">
        <admin-create-scheme v-if="view==='creator'"></admin-create-scheme>
      </div>
    </div>
</template>

<script>
import AdminSidebar from 'blocks/admin-sidebar';
import AdminCreateScheme from 'blocks/admin-create-scheme';

export default {
  name: 'admin-main',
  data() {
    return {
      view: 'creator'
    };
  },
  methods: {
    onEmitChangeView(view) {
      this.view = view;
    }
  },
  components: {
    'admin-sidebar': AdminSidebar,
    'admin-create-scheme': AdminCreateScheme
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
