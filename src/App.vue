<template>
  <div id="app" class="flex items-center h-screen justify-center">
    <DarkModeSwitch />
  </div>
</template>

<script>
import DarkModeSwitch from './components/DarkModeSwitch.vue'

export default {
  name: 'App',
  components: {
    DarkModeSwitch
  }
}
</script>
