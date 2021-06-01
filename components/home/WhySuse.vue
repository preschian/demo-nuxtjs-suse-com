<template>
  <div>
    <div class="bg-gray-100">
      <div class="p-6">
        <p class="text-3xl font-medium">Why SUSE?</p>
        <p class="mt-6">
          Because we give you choice—unparalleled choice. With us, you have the
          power to innovate everywhere—from the data center, to the cloud, to
          the edge and beyond.
        </p>
      </div>
      <nuxt-img src="/images/home/points_left_img.png" />
    </div>

    <div class="bg-green px-6 pt-16 text-white">
      <div v-for="(item, index) in items" :key="item.title" class="pb-16">
        <p
          class="
            text-6xl text-green-light
            font-medium
            text-center
            border-t-4 border-green-light
            pt-2
          "
        >
          0{{ index + 1 }}
        </p>
        <p class="font-medium text-2xl mt-3">{{ item.title }}</p>
        <p class="mt-3">{{ item.desc }}</p>
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
          title: 'Innovate with Speed and Agility',
          desc: 'SUSE, now with Rancher, offers the industry’s most adaptable Linux operating system and the only open Kubernetes management platform. Together with our Edge solutions, you can innovate fast and transform according to your own priorities.',
        },
        {
          title: 'Truly Independent Approach',
          desc: 'We put the ‘open’ back in ‘open source’ software—giving you the choice to evolve your IT strategy based upon business requirements and innovation needs, not contractual obligations.',
        },
        {
          title: 'Enterprise Strength and Experience',
          desc: 'We introduced enterprise-grade Linux in 1994 and have served businesses around the world for more than 28 years. Working to earn and keep your trust is our number one priority.',
        },
      ],
    }
  },
}
</script>
