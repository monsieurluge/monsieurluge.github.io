Vue.component('LevelIcons', {
  template: `
    <div class="level-icons">
      <IconMine v-if="mine" />
      <ButtonFav :state="fav ? 'on' : 'off'" @clicked="onFavClicked" />
      <ButtonDone :state="done ? 'on' : 'off'" @clicked="onDoneClicked" />
    </div>
  `,
  props: {
    done: { type: Boolean, required: false, default: false },
    fav: { type: Boolean, required: false, default: false },
    id: { type: Number, required: true },
    mine: { type: Boolean, required: false, default: false }
  },
  methods: {
    onDoneClicked () {
      this.done
        ? levelsStore.unmarkLevel({ id: this.id, state: 'done' })
        : levelsStore.markLevelAs({ id: this.id, state: 'done' })
    },
    onFavClicked () {
      this.fav
        ? levelsStore.unmarkLevel({ id: this.id, state: 'fav' })
        : levelsStore.markLevelAs({ id: this.id, state: 'fav' })
    }
  }
})
