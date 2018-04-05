<template>
   <div class="admin">
     <a-header></a-header>
     <a-main></a-main>
     <a-footer></a-footer>
   </div>
</template>

<script>
import AdminHeader from 'blocks/a-header';
import AdminFooter from 'blocks/a-footer';
import AdminMain from 'blocks/a-main';

export default {
  name: 'admin',
  components: {
    'a-footer': AdminFooter,
    'a-header': AdminHeader,
    'a-main': AdminMain
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
