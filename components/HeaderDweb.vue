<template>
  <div class="bg-green fixed z-20 w-full">
    <div class="container text-white flex justify-between">
      <div>
        <img src="/svg/suse-white-logo-green.svg" alt="Suse" :class="cssLogo" />
      </div>
      <div class="flex flex-col items-end">
        <!-- menu top section -->
        <div class="menu-top transition" :class="cssMenuTop">
          <div class="flex justify-center items-center h-full gap-10 text-sm">
            <a href="#!" target="_blank" class="flex gap-1">
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
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span
                class="border-b border-transparent hover:border-green-light"
              >
                Customer Center
              </span>
            </a>
            <a href="#!" target="_blank" class="flex gap-1">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span
                class="border-b border-transparent hover:border-green-light"
              >
                Contact Us
              </span>
            </a>
            <a href="#!" target="_blank" class="flex gap-1">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span
                class="border-b border-transparent hover:border-green-light"
              >
                Account
              </span>
            </a>
          </div>
        </div>

        <!-- menu bottom section -->
        <div class="h-16 flex items-center gap-5">
          <div
            v-for="menu in menus"
            :key="menu.title"
            class="menu h-full flex items-center cursor-pointer relative"
          >
            <a
              v-if="menu.type === 'link'"
              :href="menu.href"
              target="_blank"
              class="block bg-orange text-green font-medium px-3 py-1"
            >
              {{ menu.title }}
            </a>
            <p v-else class="font-bold px-3 py-1">{{ menu.title }}</p>

            <div
              v-if="submenus[`menu${menu.title}`]"
              class="submenu absolute top-full z-20 shadow"
              style="left: 50%; transform: translateX(-50%)"
              :style="{
                width: submenus[`menu${menu.title}`].length * 300 + 'px',
              }"
            >
              <div class="bg-white text-black flex gap-16 p-6">
                <div
                  v-for="submenu in submenus[`menu${menu.title}`]"
                  :key="submenu.title"
                  class="flex-1"
                >
                  <p class="font-medium pb-3 border-b border-green-light">
                    {{ submenu.title }}
                  </p>

                  <div
                    v-for="item in submenu.items"
                    :key="item.title"
                    class="text-sm"
                  >
                    <div class="mt-2">
                      <a
                        href="#!"
                        target="_blank"
                        class="
                          block
                          gap-4
                          border-b border-white
                          hover:border-green
                        "
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
                          <span v-if="item.subtitle"
                            ><br />{{ item.subtitle }}</span
                          >
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
      scrollPosition: 'up',
    };
  },
  computed: {
    cssLogo() {
      return {
        'h-16': this.scrollPosition === 'bottom',
        'h-32': this.scrollPosition === 'up',
      };
    },
    cssMenuTop() {
      if (this.scrollPosition === 'bottom') {
        return {
          'h-0': true,
          hidden: true,
        };
      }

      return {
        'h-16': true,
      };
    },
  },
  mounted() {
    let scrollBefore = 0;

    window.addEventListener('scroll', (e) => {
      const scrolled = window.scrollY;

      if (scrollBefore > scrolled) {
        this.scrollPosition = 'up';
        scrollBefore = scrolled;
      } else {
        scrollBefore = scrolled;
        this.scrollPosition = 'bottom';
      }
    });
  },
};
</script>

<style scoped>
.menu .submenu {
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition-duration: 0.2s;
}

.menu:hover .submenu {
  opacity: 1;
  visibility: visible;
}

.menu:hover > p {
  background-color: #fe7c3f;
  color: #0c322c;
}
</style>
