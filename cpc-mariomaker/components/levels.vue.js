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
    all () {
      return this.levels
    },
    favorites () {
      return this.levels.filter(level => this.userLevels.favorites.includes(level.id))
    },
    filteredLevels () {
      const filters = new Map([
        [ 'all', () => this.all ],
        [ 'todo', () => this.todo ],
        [ 'favs', () => this.favorites ],
        [ 'mine', () => this.all ], // fixme
      ])
      return filters.get(this.activeFilter)()
    },
    todo () {
      return this.levels.filter(level => !this.userLevels.favorites.includes(level.id))
    },
    totals () {
      return {
        total: this.all.length,
        favs: this.favorites.length,
        mine: 0, // fixme
        todo: this.todo.length
      }
    }
  },
  methods: {
    changeActiveFilter (filter) {
      this.activeFilter = filter
    }
  }
})
