<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="`grid-${index}`"
      :class="item.cssBox"
    >
      <img
        v-if="item.type === 'image'"
        :src="item.src"
        :alt="item.title"
        class="w-full"
      />
      <div v-else>
        <p class="text-3xl font-medium">{{ item.title }}</p>
        <p class="text-xl mt-6">{{ item.desc }}</p>
        <a
          :href="item.cta"
          target="_blank"
          class="font-medium mt-6 inline-block border-2 py-1 px-14"
          :class="item.cssCta"
        >
          {{ item.ctaText }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          type: 'image',
          src: '/images/home/home01-new.jpg',
          title: 'To infinity, and beyond!',
        },
        {
          type: 'box',
          title: 'To infinity, and beyond!',
          desc: `Check out how Hypergiant has worked with SUSE RGS to put K3s in orbit! It's out of this world...`,
          cta: '#!',
          ctaText: 'See how',
          cssBox: {
            'p-6': true,
            'bg-blue': true,
            'text-white': true,
          },
          cssCta: {
            'border-white': true,
          },
        },
        {
          type: 'image',
          src: '/images/home/home02.jpg',
          title:
            'Say Goodbye to Downtime for your mission critical SAP solutions',
        },
        {
          type: 'box',
          title:
            'Say Goodbye to Downtime for your mission critical SAP solutions',
          desc: ' Downtime is never an option. Discover how to achieve continuous uptime of your mission critical SAP HANA and other SAP applications.',
          cta: '#!',
          ctaText: 'Read more',
          cssBox: {
            'p-6': true,
          },
          cssCta: {
            'border-black': true,
          },
        },
        {
          type: 'image',
          src: '/images/home/home03.jpg',
          title:
            'One platform, infinite innovations. Step into the future with SUSE edge Computing.',
        },
        {
          type: 'box',
          title:
            'One platform, infinite innovations. Step into the future with SUSE edge Computing.',
          desc: ` Read how SUSE enables you to create smart edge infrastructure so you can bring the next generation of intelligent products and applications.`,
          cta: '#!',
          ctaText: 'Learn more',
          cssBox: {
            'p-6': true,
            'bg-green-light': true,
            'text-black': true,
          },
          cssCta: {
            'border-black': true,
          },
        },
      ],
    }
  },
}
</script>
