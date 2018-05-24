<template lang="pug">
  .HomePage()
    .columns
      .column
        TitleUi(:title='title')

    .columns.is-multiline
      template(v-for='movie in movies')
        .column.is-3
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
      movies: [
        {
          name: 'aa',
        },
        {
          name: 'bb',
        },
        {
          name: 'cc',
        },
        {
          name: 'dd',
        },
        {
          name: 'ee',
        },
      ],
    }
  },
}
</script>

<style lang="stylus">
// .HomePage
</style>
