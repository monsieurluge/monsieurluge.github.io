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
        { name: 'favs', method: level => level.fav },
        { name: 'mine', method: level => level.mine },
        { name: 'todo', method: level => !level.done },
      ]
    }
  },
  props: {
    levels: { type: Array, required: true }
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
