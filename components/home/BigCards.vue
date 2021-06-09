<template>
  <div class="lg:grid lg:grid-cols-2">
    <div
      v-for="(item, index) in items"
      :key="`grid-${index}`"
      :class="item.cssBox"
      class="lg:p-0"
    >
      <img
        v-if="item.type === 'image'"
        :src="item.src"
        :alt="item.title"
        class="w-full"
      />
      <div
        v-else
        class="
          lg:h-full lg:flex lg:flex-col lg:justify-between
          container-grid
          lg:py-12
        "
        :class="item.cssBoxGrid"
      >
        <p class="text-3xl lg:text-4xl font-medium">{{ item.title }}</p>
        <div>
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
          cssBox: {
            'order-2': true,
          },
        },
        {
          type: 'box',
          title: 'To infinity, and beyond!',
          desc: `Check out how Hypergiant has worked with SUSE RGS to put K3s in orbit! It's out of this world...`,
          cta: 'https://www.suse.com/success/hypergiant/',
          ctaText: 'See how',
          cssBox: {
            'order-1': true,
            'p-6': true,
            'bg-blue': true,
            'text-white': true,
          },
          cssBoxGrid: {
            'lg:ml-auto': true,
            'lg:pr-12': true,
            'lg:text-right': true,
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
          cssBox: {
            'order-3': true,
          },
        },
        {
          type: 'box',
          title:
            'Say Goodbye to Downtime for your mission critical SAP solutions',
          desc: ' Downtime is never an option. Discover how to achieve continuous uptime of your mission critical SAP HANA and other SAP applications.',
          cta: 'https://www.suse.com/campaigns/goodbye-downtime/',
          ctaText: 'Read more',
          cssBox: {
            'p-6': true,
            'order-4': true,
          },
          cssBoxGrid: {
            'lg:pl-12': true,
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
          cssBox: {
            'order-6': true,
          },
        },
        {
          type: 'box',
          title:
            'One platform, infinite innovations. Step into the future with SUSE edge Computing.',
          desc: ` Read how SUSE enables you to create smart edge infrastructure so you can bring the next generation of intelligent products and applications.`,
          cta: 'https://www.suse.com/solutions/innovate-at-the-edge/',
          ctaText: 'Learn more',
          cssBox: {
            'order-5': true,
            'p-6': true,
            'bg-green-light': true,
            'text-black': true,
          },
          cssBoxGrid: {
            'lg:ml-auto': true,
            'lg:pr-12': true,
            'lg:text-right': true,
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
