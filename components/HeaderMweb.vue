<template>
  <div class="bg-green fixed z-20 w-full overflow-hidden">
    <div class="container">
      <div class="flex justify-between items-center">
        <div class="w-28">
          <img
            src="/svg/suse-white-logo-green.svg"
            alt="Suse"
            style="margin-left: -13px"
          />
        </div>
        <div class="ml-auto p-3 h-14">
          <div class="flex gap-1 h-full relative">
            <input
              id="search"
              type="text"
              class="w-32 h-full px-2 bg-green text-white"
            />
            <label for="search" class="absolute top-1 right-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#FE7C3F"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                /></svg
            ></label>
          </div>
        </div>
        <div class="h-14 w-14 p-3 bg-green-light -mr-6" @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=""
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="menu" :class="{ 'menu-active': openMenu }">
      <div
        v-for="(menu, index) in menus"
        :key="menu.title"
        class="text-white text-lg font-bold"
      >
        <a
          v-if="menu.type === 'link'"
          class="block px-6 py-4 border-b border-gray-light"
          :href="menu.href"
          target="_blank"
          >{{ menu.title }}</a
        >
        <div
          v-else
          class="px-6 py-4 border-b border-gray-light flex justify-between"
          :class="{ 'border-t': index === 0 }"
          @click="toggleSubmenu(menu.title)"
        >
          <p>{{ menu.title }}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <div class="submenu bg-white" :class="{ 'submenu-active': openSubmenu }">
        <div
          class="
            fixed
            w-full
            h-14
            flex
            items-center
            bg-green
            border-t border-gray-light
          "
          @click="toggleSubmenu"
        >
          <p class="container text-white">BACK</p>
        </div>
        <div class="py-14 container">
          <div v-for="(menu, index) in listSubmenu" :key="menu.title">
            <p
              class="font-medium text-lg pb-3 pt-6 border-b border-green-light"
              :class="{ 'mt-10': index > 0 }"
            >
              {{ menu.title }}
            </p>

            <div v-for="item in menu.items" :key="item.title" class="mt-3">
              <p
                v-if="item.type === 'category'"
                class="text-green-light font-bold"
              >
                {{ item.title }}
              </p>
              <div v-else-if="item.type === 'divider'" class="mt-10"></div>
              <a
                v-else
                href="#!"
                target="_blank"
                class="block gap-4"
                :class="{ flex: item.icon }"
              >
                <img
                  v-if="item.icon"
                  :src="item.icon"
                  alt="item.title"
                  class="w-10"
                />
                <div>
                  <span>{{ item.title }}</span>
                  <span v-if="item.subtitle"><br />{{ item.subtitle }}</span>
                  <span v-if="item.desc" class="text-xs block">{{
                    item.desc
                  }}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true,
    },
    submenus: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      openMenu: false,
      openSubmenu: false,
      activeSubmenu: 'Products',
    };
  },
  computed: {
    listSubmenu() {
      return this.submenus[`menu${this.activeSubmenu}`];
    },
  },
  methods: {
    toggleMenu() {
      this.openMenu = !this.openMenu;
      this.openSubmenu = false;
    },
    toggleSubmenu(submenu) {
      if (submenu) {
        this.activeSubmenu = submenu;
      }

      this.openSubmenu = !this.openSubmenu;
    },
  },
};
</script>

<style scoped>
.menu {
  height: 0;
  overflow: hidden;
  transition-duration: 0.2s;
  position: relative;
}

.menu-active {
  height: calc(100vh - 3.5rem);
}

.submenu {
  transition-duration: 0.2s;
  overflow-y: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -100%;
  width: 100%;
}

.submenu-active {
  right: 0;
}
</style>
