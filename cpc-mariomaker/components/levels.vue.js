Vue.component('Levels', {
  template: `
  <div class="levels">
    <LevelsSelectors v-bind="totals" @selected="displayLevelsUsing" />

    <div class="levels-cards">
      <LevelCard v-for="level in filteredLevels" :key="level.id" v-bind="level" />
    </div>
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
      return this.levels.filter(this.filterBy(this.activeFilter))
    },
    totals () {
      return {
        total: this.levels.length,
        favs: this.levels.filter(this.filterBy('favs')).length,
        mine: this.levels.filter(this.filterBy('mine')).length,
        todo: this.levels.filter(this.filterBy('todo')).length
      }
    }
  },
  methods: {
    displayLevelsUsing (filter) {
      this.activeFilter = filter
    },
    filterBy (name) {
      const fallback = { name, method: () => true }
      return [...this.filters, fallback]
        .find(filter => filter.name === name)
        .method
    }
  }
})
