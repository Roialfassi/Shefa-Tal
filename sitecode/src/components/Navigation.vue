<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logo.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title"></v-list-item-title>
            <v-list-item-subtitle>שפע טל</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <!-- <v-img src="@/assets/img/logo.png" max-width="50px" /> -->
        <v-btn class= "opposite" rounded outlined text href="tel:0523304074">
          <span class="opposite">052-3304074 <i class="mdi mdi-phone"></i></span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#hero')">
          <span class="mr-2">בית</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#features')">
          <span class="mr-2">סוגי האירועים</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#about')">
          <span class="mr-2">קצת עלינו</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#pricing')">
          <span class="mr-2">מחירים</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#qna')">
          <span class="mr-2">שאלות ותשובות</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#testimonials-slider')">
          <span class="mr-2">לקוחות ממליצים</span>
        </v-btn>
        <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">צרו קשר</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "בית", "#hero"],
      ["mdi-information-outline", "קצת עלינו", "#about"],
      ["mdi-information-outline", "סוגי האירועים", "#features"],
      ["mdi-download-box-outline", "מחירים", "#pricing"],
      ["mdi-currency-usd", "שאלות ותשובות", "#qna"],
      ["mdi-email-outline", "לקוחות ממליצים", "#testimonials-slider"],
      ["mdi-email-outline", "צרו קשר", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
<style>
.opposite{
  color: rgb(165, 108, 23);
  background-color:white;
}

</style>