<template lang="pug">
  .HomePage()
    .columns
      .column
        TitleUi(:title='title')

    .columns.is-multiline
      template(v-for='(movie, index) in movies', )
        .column.is-3(:key='`movie-${index}`', )
          CardUi(:title='movie.name')
</template>

<script>
import { CardUi, TitleUi } from '@/components/ui/'

export default {
  name: 'HomePage',

  components: {
    CardUi,
    TitleUi,
  },

  data () {
    return {
      title: 'Favorite Movies',
    }
  },

  computed: {
    movies () {
      return this.$store.state.movies.list
    },
  },

  mounted () {
    this.loadMovies()
  },

  methods: {
    loadMovies () {
      this.$store.dispatch('loadMovies')
    },
  },
}
</script>

<style lang="stylus">
// .HomePage
</style>
