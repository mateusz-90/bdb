<template>
  <div id="wrapper">
    <system-information></system-information>

    <button class="alt" @click="open('https://electron.atom.io/docs/')">Electron</button>
    <button class="alt" @click="open('https://vuejs.org/v2/guide/')">Vue.js</button>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>

</style>
