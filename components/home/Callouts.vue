<template>
  <div class="container pb-6 lg:flex lg:gap-7 lg:relative lg:-top-32">
    <a
      v-for="item in list"
      :key="item.title"
      class="mt-6 bg-gray-100 p-6 block lg:flex-1"
      :href="item.link"
      target="_blank"
    >
      <div class="lg:flex lg:flex-col lg:h-full">
        <p class="text-2xl font-medium">{{ item.title }}</p>
        <p class="mt-3 lg:my-3">{{ item.desc }}</p>
        <p
          class="mt-3 border-2 p-1 text-center font-medium lg:mt-auto"
          :class="item.border"
        >
          {{ item.cta }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: 'Best Practices for Secure IT Transformation',
          desc: 'Harness the strengths of your people, processes, and technology',
          link: 'https://www.suse.com/lp/6-best-practices-secure-it-transformation/',
          cta: 'Learn more',
          border: 'border-orange',
        },
        {
          title: 'Need One Platform for Kubernetes Management?',
          desc: 'See how SUSE Rancher can support your containers strategy',
          link: 'https://www.suse.com/products/suse-rancher/',
          cta: 'Find out more',
          border: 'border-gray',
        },
        {
          title: 'SUSE Goes Public',
          desc: 'Watch our Listing Celebration',
          link: 'https://www.suse.com/listing-celebration/',
          cta: 'Watch now',
          border: 'border-blue',
        },
      ],
    };
  },
};
</script>
