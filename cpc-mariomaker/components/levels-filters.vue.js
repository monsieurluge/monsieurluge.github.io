Vue.component('LevelsFilters', {
  template: `
    <div class="levels-filters">
      <SelectorAll :active="isSelected('all')" :total=34 @clicked="select('all')" />
      <SelectorTodo :active="isSelected('todo')" :total=25 @clicked="select('todo')" />
      <SelectorFavs :active="isSelected('favs')" :total=5 @clicked="select('favs')" />
      <SelectorMine :active="isSelected('mine')" :total=2 @clicked="select('mine')" />
    </div>
  `,
  data () {
    return {
      selectors: [
        { name: 'all', selected: true },
        { name: 'favs', selected: false },
        { name: 'mine', selected: false },
        { name: 'todo', selected: false },
      ]
    }
  },
  computed: {
    isSelected () {
      return name => [...this.selectors, { name, selected: false }]
        .find(selector => selector.name === name)
        .selected
    }
  },
  methods: {
    select (name) {
      this.selectors.map(selector => (selector.selected = selector.name === name))
    }
  }
})
