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
    <!-- <div class="bg-green-light">
      <div class="container">not menu</div>
    </div> -->
  </div>
</template>

<script>
const menus = [
  {
    title: 'Products',
  },
  {
    title: 'Solutions',
  },
  {
    title: 'Support',
  },
  {
    title: 'Partners',
  },
  {
    title: 'Communities',
  },
  {
    title: 'About',
  },
  {
    title: 'Shop',
    type: 'link',
    href: 'https://www.suse.com/shop/',
  },
  {
    title: 'Free Downloads',
    type: 'link',
    href: 'https://www.suse.com/download/',
  },
];
const menuProducts = [
  {
    title: 'SUSE Linux Enterprise',
    items: [
      {
        type: 'category',
        title: 'SERVER',
      },
      {
        type: 'link',
        title: 'SUSE Linux Enterprise Server',
      },
      {
        type: 'link',
        title: 'SUSE Linux Enterprise Server for IBM Z and LinuxONE',
      },
      {
        type: 'link',
        title: 'SUSE Linux Enterprise Server for POWER',
      },
      {
        type: 'link',
        title: 'SUSE Linux Enterprise for Arm',
      },
      {
        type: 'divider',
      },
      {
        type: 'category',
        title: 'ENVIRONMENTS',
      },
      {
        type: 'link',
        title: 'SUSE Linux Enterprise Server for SAP Applications',
      },
      {
        type: 'link',
        title: 'SUSE Linux Enterprise Real Time',
      },
      {
        type: 'link',
        title: 'SUSE Linux Enterprise Micro (Edge)',
      },
      {
        type: 'link',
        title: 'SUSE Linux Enterprise Desktop',
      },
      {
        type: 'link',
        title: 'SUSE Linux Enterprise High Performance Computing',
      },
      {
        type: 'link',
        title: 'SUSE for Public Cloud',
      },
      {
        type: 'divider',
      },
      {
        type: 'category',
        title: 'Management & Extensions',
      },
      {
        type: 'link',
        title: 'SUSE Manager',
      },
      {
        type: 'link',
        title: 'SUSE Linux Enterprise Live Patching',
      },
      {
        type: 'link',
        title: 'SUSE Linux Enterprise Server for High Availability Extension',
      },
    ],
  },
  {
    title: 'SUSE Rancher',
    items: [
      {
        type: 'category',
        title: 'Kubernetes Management',
      },
      {
        type: 'link',
        title: 'SUSE Rancher',
        subtitle: 'Kubernetes Management',
      },
      {
        type: 'link',
        title: 'RKE',
        subtitle: 'Rancher Kubernetes Engine',
      },
      {
        type: 'link',
        title: 'K3s',
        subtitle: 'Lightweight Kubernetes',
      },
      {
        type: 'link',
        title: 'Longhorn',
        subtitle: 'Block Storage',
      },
    ],
  },
];
const menuSolutions = [
  {
    title: 'Solutions',
    items: [
      {
        type: 'link',
        title: 'Hybrid Cloud IT',
        desc: 'Run workloads across cloud and on-premises',
        icon: '/svg/managing_hybrid_clouds-2021.svg',
      },
      {
        type: 'link',
        title: 'Run SAP',
        desc: 'Deliver mission-critical  SAP solutions',
        icon: '/svg/running_sap_solutions-2021.svg',
      },
      {
        type: 'link',
        title: 'Cloud-native Transformation',
        desc: 'Orchestrate containerized applications',
        icon: '/svg/harness_the_data_explosion-2021.svg',
      },
      {
        type: 'link',
        title: 'IT Operations at the Edge',
        desc: 'Deploy intelligent devices to the edge',
        icon: '/svg/innovate-at-the-edge.svg',
      },
    ],
  },
  {
    title: 'Industries',
    items: [
      {
        type: 'link',
        title: 'Automotive',
      },
      {
        type: 'link',
        title: 'Telecom',
      },
      {
        type: 'link',
        title: 'Banking and Financial Services',
      },
      {
        type: 'link',
        title: 'Healthcare',
      },
      {
        type: 'link',
        title: 'Manufacturing',
      },
      {
        type: 'link',
        title: 'Retail',
      },
      {
        type: 'link',
        title: 'Technology & Software',
      },
      {
        type: 'link',
        title: 'Federal',
      },
    ],
  },
];
const menuSupport = [
  {
    title: 'Support',
    items: [
      {
        title: 'Product Support',
      },
      {
        title: 'Premium Support Services',
        desc: 'Dedicated support services from a premium team',
      },
      {
        title: 'Long Term Service Support',
        desc: 'Stay on your existing product version',
      },
      {
        title: 'Expanded Support',
        desc: 'Support for common Linux platforms',
      },
      {
        title: 'Renew Your Support Subscription',
      },
    ],
  },
  {
    title: 'Services',
    items: [
      {
        title: 'Consulting Services',
      },
      {
        title: 'Blended Services',
        desc: 'Consulting plus direct support to fast track your implementation',
      },
      {
        title: 'Training & Certification',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'SUSE Support User Guide',
      },
      {
        title: 'Patches & Updates',
      },
      {
        title: 'Product Documentation',
      },
      {
        title: 'Knowledgebase',
      },
      {
        title: 'SUSE Customer Center',
      },
      {
        title: 'Product Support Life Cycle',
      },
      {
        title: 'Licensing',
      },
      {
        title: 'Package Hub',
        desc: 'Community packages for SUSE Linux Enterprise Server',
      },
      {
        title: 'Driver Search',
      },
      {
        title: 'Support Forums',
      },
      {
        title: 'Developer Services',
      },
      {
        title: 'Beta Program',
      },
      {
        title: 'Security',
      },
    ],
  },
];
const menuPartners = [
  {
    title: 'Partners',
    items: [
      {
        title: 'Find a Partner',
      },
      {
        title: 'Become a Partner',
      },
      {
        title: 'Login to the SUSE Partner Portal',
      },
    ],
  },
];
const menuCommunities = [
  {
    title: 'Communities',
    items: [
      {
        title: 'Blog',
      },
      {
        title: 'SUSE & Rancher Community',
      },
      {
        title: 'Forum',
      },
      {
        title: 'Academic',
      },
      {
        title: 'Open Source Projects',
      },
      {
        title: 'openSUSE.org',
      },
    ],
  },
];
const menuAbout = [
  {
    title: 'About',
    items: [
      {
        title: 'About Us',
      },
      {
        title: 'Leadership',
      },
      {
        title: 'Careers',
      },
      {
        title: 'Newsroom',
      },
      {
        title: 'Success Stories',
      },
      {
        title: 'Investor Relations',
      },
      {
        title: 'Social Impact',
      },
      {
        title: 'SUSE Logo and Brand',
      },
      {
        title: 'Events',
      },
      {
        title: 'Merchandise Store',
      },
      {
        title: 'Communications Preferences',
      },
    ],
  },
];

export default {
  data() {
    return {
      openMenu: false,
      openSubmenu: false,
      activeSubmenu: 'Products',
      menus,
      menuProducts,
      menuSolutions,
      menuSupport,
      menuPartners,
      menuCommunities,
      menuAbout,
    };
  },
  computed: {
    listSubmenu() {
      return this[`menu${this.activeSubmenu}`];
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
