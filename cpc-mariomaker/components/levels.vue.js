Vue.component('Levels', {
  template: `
    <div class="levels">
      <LevelsSelectors v-bind="totals" @selected="changeActiveFilter" />

      <div class="levels-cards">
        <LevelCard v-for="level in filteredLevels" :key="level.id" v-bind="level" />
      </div>
    </div>
  `,
  props: {
    levels: { type: Array, required: false, default: () => [] },
    userLevels: { type: Array, required: false, default: () => ({ done: [], favorites: [] }) }
  },
  data () {
    return {
      activeFilter: 'all'
    }
  },
  computed: {
    filteredLevels () {
      const filter = new Map([
        [ 'all', () => true ],
        [ 'todo', level => !this.userLevels.favorites.includes(level.id) ],
        [ 'favs', level => this.userLevels.favorites.includes(level.id) ],
        [ 'mine', () => false ], // fixme
      ])
      return this.levels.filter(filter.get(this.activeFilter))
    },
    totals () {
      return {
        total: this.levels.length,
        // favs: this.userLevels.favorites.length,
        favs: 0,
        // mine: this.userLevels.mine().length,
        mine: 0,
        // todo: this.userLevels.all().length - this.userStore.done().length
        todo: 0
      }
    }
  },
  methods: {
    changeActiveFilter (filter) {
      this.activeFilter = filter
    }
  }
})
