Vue.component('LevelsSelectors', {
  template: `
    <div class="levels-selectors" v-if="user.logged()">
      <SelectorAll :total="total" :active="isSelected('all')" @clicked="select('all')" />
      <SelectorTodo :total="todo" :active="isSelected('todo')" @clicked="select('todo')" />
      <SelectorFavs :total="favs" :active="isSelected('favs')" @clicked="select('favs')" />
      <SelectorMine :total="mine" :active="isSelected('mine')" @clicked="select('mine')" />
    </div>

    <div class="levels-selectors" v-else>
      <SelectorAll :total="total" active="true" />
    </div>
  `,
  data () {
    return {
      selectors: [
        { name: 'all', selected: true },
        { name: 'favs', selected: false },
        { name: 'mine', selected: false },
        { name: 'todo', selected: false },
      ],
      user: userStore
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
