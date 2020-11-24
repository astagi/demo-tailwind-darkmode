<template>
  <div class="text-gray-400 flex items-center">
    <o-icon pack="fas" icon="sun" size="medium" :class="{'text-highlight-background' : !darkMode}"></o-icon>
    <o-switch class="m-2" v-model="darkMode"></o-switch>
    <o-icon pack="fas" icon="moon" size="medium" :class="{'text-highlight-background-dark' : darkMode}"></o-icon>
  </div>
</template>
<script>
import Vue from "vue";

const MODE = {
  DARK: 'dark',
  LIGHT: 'light'
};

export default Vue.extend({
  name: "DarkModeSwitch",
  data() {
    return {
      darkMode: null,
    };
  },
  mounted() {
    this.darkMode =
      localStorage.theme == MODE.DARK
        ? true
        : localStorage.theme == MODE.LIGHT
        ? false
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
  },
  watch: {
    darkMode(isDarkNow, wasDarkBefore) {
      let html = document.querySelector('html');
      if (wasDarkBefore !== null) {
        localStorage.theme = isDarkNow ? MODE.DARK : MODE.LIGHT;
      }
      if (isDarkNow) {
        html.classList.add(MODE.DARK);
      } else {
        html.classList.remove(MODE.DARK);
      }
    },
  },
});
</script>
