<template>
  <div>
    <div class="footer-line bg-repeat-x"></div>

    <div class="bg-green text-white py-6">
      <div class="container">
        <div class="lg:flex lg:justify-between lg:items-center">
          <div
            class="
              flex flex-wrap
              justify-between
              gap-3
              lg:justify-start lg:items-center lg:gap-x-8
            "
          >
            <img
              src="/svg/suse-white-logo-green.svg"
              alt="Suse"
              class="hidden lg:block w-40"
              style="margin-left: -13px"
            />
            <a
              v-for="(link, text) in links"
              :key="text"
              :href="link"
              target="_blank"
              class="font-bold text-sm lg:text-base"
              >{{ text }}</a
            >
          </div>

          <div class="flex justify-center gap-x-4 mt-6 lg:mt-0">
            <!-- twitter -->
            <a href="https://twitter.com/SUSE" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z"
                />
              </svg>
            </a>

            <!-- facebook -->
            <a href="https://www.facebook.com/SUSEWorldwide" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
                />
              </svg>
            </a>

            <!-- linkedin -->
            <a href="https://www.linkedin.com/company/suse" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-divider my-12"></div>

        <div
          class="text-xs font-medium lg:flex lg:justify-between lg:items-center"
        >
          <div class="lg:flex lg:gap-x-6">
            <p class="text-center">Sales Number: 1-800-796-3700</p>
            <a
              href="https://www.suse.com/support/handbook/#open"
              target="_blank"
              class="block text-center mt-2 lg:mt-0"
              >Open a Support Case</a
            >
          </div>

          <div
            class="flex flex-wrap justify-between mt-8 gap-2 lg:mt-0 lg:gap-x-6"
          >
            <p>© {{ year }} SUSE, All Rights Reserved</p>
            <p>For demo purposes only</p>
            <a
              href="https://www.suse.com/company/policies/privacy/"
              target="_blank"
              >Privacy and Cookie Policy</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: {
        Careers: 'https://www.suse.com/company/careers/',
        Legal: 'https://www.suse.com/company/legal/',
        About: 'https://www.suse.com/company/about/',
        'Communications Preferences': 'https://www.suse.com/company/subscribe/',
        'Contact Us': 'https://www.suse.com/contact/',
      },
    };
  },
  computed: {
    year() {
      const d = new Date();
      return d.getFullYear();
    },
  },
};
</script>

<style scoped>
.footer-line {
  background-image: url('/images/footer-start-line.png');
  height: 35px;
}

.footer-divider {
  height: 1px;
  background: transparent url('/images/dotted_border_bg.png') left bottom
    repeat-x;
  opacity: 0.66;
}
</style>
