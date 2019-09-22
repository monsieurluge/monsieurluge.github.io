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
        ? userStore.removeFromDoneLevels(this.id)
        : userStore.addToDoneLevels(this.id)
    },
    onFavClicked () {
      this.fav
        ? userStore.removeFromFavorites(this.id)
        : userStore.addToFavorites(this.id)
    }
  }
})
