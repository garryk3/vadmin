<template>
  <v-navigation-drawer stateless hide-overlay :mini-variant.sync="mini" v-model="drawer">
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        class="admin-sidebar__link-wrapper"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title
            :data-name="item.view"
            @click="onClickLink"
            class="admin-sidebar__menu-link"
          >{{ item.title }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'admin-sidebar',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Редактор шаблонов', icon: 'dashboard', view: 'creator' },
        { title: 'About', icon: 'question_answer', view: 'template' }
      ],
      mini: true,
      right: null
    };
  },
  methods: {
    onClickLink(e) {
      this.$emit('change-view', e.currentTarget.dataset.name);
    }
  }
};
</script>

<style scoped>
  .admin-sidebar {
    &__link-wrapper {
      cursor: pointer;
    }
    &__link {
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
