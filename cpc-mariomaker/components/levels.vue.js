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
      levelsStore: levelsStore,
      userStore: userStore
    }
  },
  computed: {
    filteredLevels () {
      const filter = new Map([
        [ 'all', () => this.levelsStore.all() ],
        [ 'todo', () => this.levelsStore.todo() ],
        [ 'favs', () => this.levelsStore.favorites() ],
        [ 'mine', () => this.levelsStore.mine() ],
      ])
      return filter.get(this.activeFilter)()
    },
    totals () {
      return {
        total: this.levelsStore.all().length,
        favs: this.userStore.favorites().length,
        mine: this.userStore.mine().length,
        todo: this.levelsStore.all().length - this.userStore.done().length
      }
    }
  },
  methods: {
    displayLevelsUsing (filter) {
      this.activeFilter = filter
    }
  }
})
