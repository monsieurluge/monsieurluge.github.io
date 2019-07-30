Vue.component('Levels', {
  template: `
  <div class="levels">
    <LevelsSelectors v-bind="totals" @selected="displayLevelsUsing" />

    <LevelCard v-for="level in filteredLevels" :key="level.id" v-bind="level" />
  </div>
  `,
  data () {
    return {
      activeFilter: 'all',
      filters: [
        { name: 'all', method: () => true },
        { name: 'favs', method: level => this.favs.includes(level.id) },
        { name: 'mine', method: level => this.mine.includes(level.id) },
        { name: 'todo', method: level => !this.done.includes(level.id) },
      ]
    }
  },
  props: {
    done: { type: Array, required: false, default: [1, 2, 3] },
    favs: { type: Array, required: false, default: [2, 3, 1] },
    levels: { type: Array, required: true },
    mine: { type: Array, required: false, default: [6, 7] }
  },
  computed: {
    filteredLevels () {
      return this.levels.filter(this.filteringMethod)
    },
    filteringMethod () {
      const fallback = { name: this.activeFilter, method: () => true }
      return [...this.filters, fallback]
        .find(filter => filter.name === this.activeFilter)
        .method
    },
    totals () {
      return {
        total: 34,
        favs: 5,
        mine: 2,
        todo: 8
      }
    }
  },
  methods: {
    displayLevelsUsing (filter) {
      this.activeFilter = filter
    }
  }
})
