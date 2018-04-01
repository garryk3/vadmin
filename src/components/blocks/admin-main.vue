<template>
    <div class="admin-main">
      <admin-sidebar></admin-sidebar>
      <div class="admin-main__content">
        <admin-create-scheme v-if="view='create-scheme'"></admin-create-scheme>
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
      view: 'create-scheme'
    };
  },
  components: {
    'admin-sidebar': AdminSidebar,
    'admin-create-scheme': AdminCreateScheme
  }
};
</script>

<style scoped lang="postcss">
  .admin-main {
    display: flex;
    height: 100%;
    flex-grow: 2;

    &__content {
      flex-grow: 2;
    }
  }
</style>
