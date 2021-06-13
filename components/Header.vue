<template>
  <div>
    <HeaderMweb :menus="menus" :submenus="submenus" class="block lg:hidden" />
    <HeaderDweb :menus="menus" :submenus="submenus" class="hidden lg:block" />
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
      menus,
      submenus: {
        menuProducts,
        menuSolutions,
        menuSupport,
        menuPartners,
        menuCommunities,
        menuAbout,
      },
    };
  },
};
</script>
