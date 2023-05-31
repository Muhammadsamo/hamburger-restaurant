// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // Using Tailwind CSS
    "@nuxtjs/tailwindcss",
    // Using NuxtImage
    "@nuxt/image-edge",
    // Using Google Fonts
    "@nuxtjs/google-fonts",
  ],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  image: {
    // Options
  },

  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
      display: "swap",
    },
  },
});
