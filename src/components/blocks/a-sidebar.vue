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
        class="a-sidebar__group"
      >
        <v-list-tile slot="activator" class="a-sidebar__list-tile">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="item.hasCreateLink">
          <v-icon class="a-sidebar__icon-add">add</v-icon>
          <v-list-tile-title>
            Добавить
          </v-list-tile-title>
        </v-list-tile>
        <v-list-tile class="a-sidebar__subitem" v-for="subItem in item.items" :key="subItem.title">
          <v-list-tile-content>
            <v-list-tile-title class="a-sidebar__subitem-content">
              {{ subItem.title }}
            </v-list-tile-title>
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
          action: 'folder',
          title: 'Категории',
          hasCreateLink: true,
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'settings',
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

    &__subitem {}

    &__subitem-content {
      font-size: 12px;
      padding-left: 10px;
      color: #848181;
    }

    &__link {
      &:hover {
        text-decoration: underline;
      }
    }

    &__group {
      &::before,
      &::after {
        left: 70px;
        width: calc(100% - 90px);
      }
    }

    &__list-tile {}
  }
</style>
