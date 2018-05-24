<template lang="pug">
  .TitleUi
    template(v-if='title', )
      .title(:is='titleTag', :class='titleClasses', ).
        {{ title }}
    template(v-if='subtitle', )
      .subtitle(:is='subtitleTag', :class='subtitleClasses').
        {{ subtitle }}
</template>

<script>
import { inRange } from 'lodash'

export default {
  name: 'TitleUi',
  props: {
    title: {
      default: '',
      type: String,
      required: false,
    },

    titleTag: {
      default: 'h1',
      type: String,
      required: false,
    },

    titleSize: {
      default: null,
      type: String,
      required: false,
      validator (num) {
        return inRange(num, 1, 6)
      },
    },

    subtitle: {
      default: null,
      type: String,
      required: false,
    },

    subtitleTag: {
      default: 'h2',
      type: String,
      required: false,
    },

    subtitleSize: {
      default: null,
      type: Number,
      required: false,
      validator (num) {
        return inRange(num, 1, 6)
      },
    },

    spaced: {
      default: false,
      type: Boolean,
      required: false,
    },
  },
  methods: {
    titleClasses () {
      const spacedClass = this.spaced ? 'is-spaced' : ''
      return [`is-${this.titleSize}`, spacedClass]
    },

    subtitleClasses () {
      return [`is-${this.subtitleSize}`]
    },
  },
}
</script>

<style lang="stylus">
// .TitleUi
</style>
