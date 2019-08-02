Vue.component('LevelIcons', {
  template: `
    <div class="level-icons">
      <IconMine v-if="mine" />
      <ButtonFav :state="fav ? 'on' : 'off'" />
      <ButtonDone :state="done ? 'on' : 'off'" />
    </div>
  `,
  props: {
    done: { type: Boolean, required: false, default: false },
    fav: { type: Boolean, required: false, default: false },
    mine: { type: Boolean, required: false, default: false }
  }
})
