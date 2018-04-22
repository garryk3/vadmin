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
    <v-list>
      <v-list-group
        v-model="item.active"
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.action"
        no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :v-if="item.hasCreateLink">
          <v-list-tile-action>
            <v-icon>note add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Добавить</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="a-sidebar__subitem" v-for="subItem in item.items" :key="subItem.title">
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'a-sidebar',
  data() {
    return {
      drawer: true,
      items: [
        {
          action: 'local_activity',
          title: 'Категории',
          hasCreateLink: true,
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'restaurant',
          title: 'Настройки',
          active: true,
          items: [
            { title: 'Шаблоны' },
            { title: 'Редактор шаблонов' }
          ]
        }
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
  .a-sidebar {
    &__link-wrapper {
      cursor: pointer;
    }
    &__subitem {
      margin-left: 28px;
    }
    &__link {
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
