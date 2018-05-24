<template lang="pug">
  nav.MainHeader.navbar.has-shadow.is-fixed-top(role='navigation', aria-label='main navigation', )
    .navbar-brand
      router-link.navbar-item(to='/', )
        .logo
          | Test Contentful

</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style lang="stylus">
.MainHeader
  .logo
    text-transform uppercase
    font-weight bold
    position relative
    padding-left 10px
    &:before
      content ''
      display inline-block
      background-color #0085AD
      width 5px
      height 20px
      border-radius 8px
      position absolute
      top 2px
      left 0px
</style>
