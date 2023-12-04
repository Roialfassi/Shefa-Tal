<template>
  <section id="hero" class="text-center">
    <v-parallax dark src="@/assets/img/taliHero.png"  height="1000">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <div id ="transparentTop">
              <h1 class="display-2 font-weight-bold mb-4">קייטרינג שפע טל</h1>
              <h1 class="font-weight-light">
                בביתנו, בית ירושלמי עתיק יש לנו מטבח קסום
שמתחיל לבשל
              </h1>
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#contact')"
                class="mt-5"
              >
                להזמנה
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
              <!-- <div class="video d-flex align-center py-4">
                <a @click.stop="dialog = true" class="playBut">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                    x="0px"
                    y="0px"
                    width="60px"
                    height="60px"
                    viewBox="0 0 213.7 213.7"
                    enable-background="new 0 0 213.7 213.7"
                    xml:space="preserve"
                  >
                    <polygon
                      class="triangle"
                      id="XMLID_18_"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      points="73.5,62.5 148.5,105.8 73.5,149.1 "
                    />

                    <circle
                      class="circle"
                      id="XMLID_17_"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    />
                  </svg>
                </a>
                <p class="subheading ml-2 mb-0">סרטון הסברה</p>
              </div> -->
            </div>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/borderWaves.svg" />
      </div>
    </v-parallax>
    <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">שפע טל</h1>
              <h1 class="font-weight-light">
                בחרו את האירוע שמתאים לכם
              </h1>
            </v-col>
            <v-col
              cols="12"
              sm="5"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="300px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                  <br>
                    <v-btn :href=feature.link
                    target="_blank"
                     rounded
                        outlined
                        color="orange"
                        class="mt-6"  >להזמנה</v-btn>
                  <!-- <v-btn
                        rounded
                        outlined
                        color="orange"
                        class="mt-6"
                        href={{ feature.link }}
                  >להזמנה</v-btn> -->
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <youtube
          :video-id="videoId"
          @ready="ready"
          @playing="playing"
        ></youtube>
      </v-card>
    </v-dialog>
    <div class="svg-border-waves">
      <img src="~@/assets/img/wave2.svg" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: require("@/assets/img/feature1.jpg"),
          title: "אירוע חלבי",
          text: "לברית, לבר-מצוה או לכל מטרה אחרת זה כבר מזמן טרנד לקחת תפריט חלבי ממליצה לעדכן את האוחרים שלא יהיו בשריים",
          link:"https://docs.google.com/forms/d/15knPf5w6XyfA40NEPdDWoAYjuuLnMBoPTn95TFPo_no/viewform?edit_requested=true"
        },
        {
          img: require("@/assets/img/feature2.jpg"),
          title: "אירוע בשרי",
          text: "בחירה קלאסית לאירוע מכובד ומכבד אחרי הכל אין שמחה אלא בבשר ויין",
          link:"https://docs.google.com/forms/d/1z6WVJUzK62X1e-K8kWsaFNRrAnnpduF-NUzX-WLgflo/viewform?edit_requested=true"
        },
        {
          img: require("@/assets/img/feature4.jpg"),
          title: "הנחת תפילין בכותל",
          text: "אירוע חוויתי איכותי מלא תוכן וארוחה טובה רגע לפני שיוצאים לסיור מתחילים בבר בוקר מקייטרינג שפע טל",
          link:"https://docs.google.com/forms/u/0/d/1BTFHGvZbac53KCXzmFTmYdm_i1_a6n0HzQsC2tMgxZY/viewform?edit_requested=true"
        },
        {
          img: require("@/assets/img/feature3.jpg"),
          title: "!!בנה תפריט בעצמך",
          text: "תפריט מגשים אטקטיבי בבנייה אישית לאירועים בגדלים שונים",
          link:"https://docs.google.com/forms/d/165o1NEK1yrR_ryZXS0WGMwshDtglOZZMW2sijQCALPU/viewform?edit_requested=true"
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style lang="scss">
#transparentTop{
  background-color: rgba(0, 0, 0, 0.7); /* Black with 70% transparency */
  border-radius: 10px; /* Rounded corners, adjust as needed */
  padding: 20px; /* Add padding as needed */
  color: white; /* Text color, you can change this */
}
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
#features{
  background-color: #ffdf9e;
  border-radius: 10%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}
</style>

<style>
section {
  position: relative;
}
</style>
