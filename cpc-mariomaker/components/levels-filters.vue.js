Vue.component('LevelsFilters', {
  template: `
    <div class="levels-filters">
      <SelectorAll :active="isSelected('all')" @clicked="select('all')" />
      <SelectorTodo :active="isSelected('todo')" @clicked="select('todo')" />
      <SelectorFavs :active="isSelected('favs')" @clicked="select('favs')" />
      <SelectorMine :active="isSelected('mine')" @clicked="select('mine')" />
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
