Vue.component('LevelIcons', {
  template: `
    <div class="level-icons">
      <IconMine v-if="mine" />
      <ButtonFav :state="fav ? 'on' : 'off'" />
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
        ? userStore.levelUndone(this.id)
        : userStore.levelDone(this.id)
    }
  }
})
