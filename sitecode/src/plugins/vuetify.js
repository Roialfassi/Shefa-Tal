import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#ffa500",
                secondary: "#ffc04d",
                accent: "#4de5ff"
            }
        }
    }
});
