<template>
  <v-footer dark padless>
    <v-card flat tile class="secondary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        זמינים גם בטלפון וגם בוואטסאפ
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Roi WEB</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    number: '1234567890',
    icons: [
      {
        text: "mdi-whatsapp",
        link: "https://wa.me/1234567890",
      },
      {
        text: "mdi-phone",
        link: "tel:1234567890",
      },
      {
        text: "mdi-facebook",
        link: "https://www.facebook.com/tali.shefatal/",
      },
      {
        text: "mdi-waze",
        link: "https://maps.app.goo.gl/RUAtQouqxJdwJb3a7",
      },
    ],
  }),
};
</script>
