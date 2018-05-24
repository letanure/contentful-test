<template lang="pug">
  .HomePage()
    h1.
      {{ msg }}
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Nice Home Page',
    }
  },
}
</script>

<style lang="stylus">
// .HomePage
</style>
