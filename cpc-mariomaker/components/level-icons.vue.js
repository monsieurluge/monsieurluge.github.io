Vue.component('LevelIcons', {
  template: `
    <div class="level-icons">
      <IconMine v-if="mine" />
      <IconFav :state="fav ? 'full' : 'empty'" />
      <IconDone :done="done" />
    </div>
  `,
  props: {
    done: { type: Boolean, required: false, default: false },
    fav: { type: Boolean, required: false, default: false },
    mine: { type: Boolean, required: false, default: false }
  }
})
