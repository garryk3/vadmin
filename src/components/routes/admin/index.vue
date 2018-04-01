<template>
   <div class="admin">
     <admin-header></admin-header>
     <admin-main></admin-main>
     <admin-footer></admin-footer>
   </div>
</template>

<script>
import AdminHeader from 'blocks/admin-header';
import AdminFooter from 'blocks/admin-footer';
import AdminMain from 'blocks/admin-main';

export default {
  name: 'admin',
  components: {
    'admin-footer': AdminFooter,
    'admin-header': AdminHeader,
    'admin-main': AdminMain
  }
};
</script>

<style scoped>
  .admin {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
