<template>
  <div class="py-20">
    <div class="container text-center">
      <p class="text-4xl font-medium">Become an Innovation Hero</p>
      <p class="mt-2">
        Thousands of customers globally trust SUSE with their most
        mission-critical needs.
      </p>

      <div class="grid grid-cols-3 items-center gap-y-6 my-8">
        <img
          v-for="brand in brands"
          :key="brand"
          :src="`/svg/brands/${brand}.svg`"
          :alt="brand"
          class="w-1/2 mx-auto"
          loading="lazy"
        />
      </div>

      <a
        href="https://www.suse.com/success/"
        target="_blank"
        class="bg-orange inline-block py-2 px-14"
      >
        View all Customer Stories
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        'Airbus',
        'BASF-Logo_bw',
        'BMW',
        'Bosch-brand',
        'DaimlerLogo',
        'Dell_EMC_logo',
        'Deutsche_Telekom_Logo_2013',
        'Ericsson_(2018)',
        'Fujitsu-Logo',
        'HSBC_logo_(2018)',
        'Indian_Oil_Logo',
        'Intel_logo_(2020,_dark_blue)',
        'Marriott_hotels_logo14',
        'Merck_Logo',
        'Nestle',
        'Office_Depot_Logo',
        'Phillips_66_logo',
        'Samsung_wordmark',
        'SAP_2011_logo',
        'Walmart_logo',
      ],
    }
  },
}
</script>
