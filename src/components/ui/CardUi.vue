<template lang="pug">
  .CardUi.card
    template(v-if='title')
      .card-header
        .card-header-title.
          {{ title }}
      .card-header-icon
        i(class="fa fa-angle-down", aria-hidden="true", )

    template(v-if='image')
      .card-image
        figure.image()
          img(src="https://bulma.io/images/placeholders/1280x960.png", alt="Placeholder image")

    template(v-if='content')
      .card-content
        .content
          p {{content}}

    template(v-if='footer')
      .card-footer
        .card-footer-item Save
        .card-footer-item Edit
        .card-footer-item Delete
</template>

<script>
export default {
  name: 'CardUi',

  props: {
    content: {
      default: '',
      type: String,
      required: false,
    },

    footer: {
      default: '',
      type: String,
      required: false,
    },

    image: {
      default: '',
      type: String,
      required: false,
    },

    title: {
      default: '',
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="stylus">
// .CardUi
</style>
