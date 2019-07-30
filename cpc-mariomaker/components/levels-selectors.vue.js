Vue.component('LevelsSelectors', {
  template: `
    <div class="levels-selectors">
      <SelectorAll :active="isSelected('all')" :total="total" @clicked="select('all')" />
      <SelectorTodo :active="isSelected('todo')" :total="todo" @clicked="select('todo')" />
      <SelectorFavs :active="isSelected('favs')" :total="favs" @clicked="select('favs')" />
      <SelectorMine :active="isSelected('mine')" :total="mine" @clicked="select('mine')" />
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
  props: {
    total: { type: Number, required: false, default: 0 },
    favs: { type: Number, required: false, default: 0 },
    mine: { type: Number, required: false, default: 0 },
    todo: { type: Number, required: false, default: 0 }
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
      this.$emit('selected', name)
    }
  }
})
