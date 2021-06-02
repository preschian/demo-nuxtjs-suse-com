<template>
  <div class="container py-20">
    <p class="text-4xl font-medium text-center text-green">
      We help customer to
    </p>

    <div
      class="
        flex flex-wrap
        justify-center
        gap-y-4
        text-green text-center text-xl
        mt-12
      "
    >
      <a
        v-for="item in items"
        :key="item.title"
        :href="item.link"
        target="_blank"
        class="block w-1/2"
      >
        <img :src="item.icon" :title="item.title" class="w-20 inline-block" />
        <p class="mt-1">{{ item.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: '/svg/managing_hybrid_clouds-2021.svg',
          title: 'Hybrid Cloud IT',
          link: 'https://www.suse.com/solutions/managing-hybrid-clouds/',
        },
        {
          icon: '/svg/running_sap_solutions-2021.svg',
          title: 'Run SAP',
          link: 'https://www.suse.com/solutions/run-sap-solutions/',
        },
        {
          icon: '/svg/harness_the_data_explosion-2021.svg',
          title: 'Cloud-native Transformation',
          link: 'https://www.suse.com/solutions/cloud-native-transformation/',
        },
        {
          icon: '/svg/innovate-at-the-edge.svg',
          title: 'IT Operations at the Edge',
          link: 'https://www.suse.com/solutions/edge-computing/',
        },
        {
          icon: '/svg/try_and_buy.svg',
          title: 'Try and Buy',
          link: 'https://www.suse.com/download/',
        },
      ],
    }
  },
}
</script>
