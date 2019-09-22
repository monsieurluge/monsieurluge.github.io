Vue.component('LevelCard', {
  template: `
    <TooltipRight class="level-card" :label="createdBy">
      <div class="level-card-content">
        <div class="level-card-first-line">
          <h2>{{ code }}<IconMineMini v-if="mine" class="level-card-mine-icon" /></h2>
          <div class="level-icons level-card-icons">
            <ButtonFav :state="fav ? 'on' : 'off'" @clicked="onFavClicked" />
            <ButtonDone :state="done ? 'on' : 'off'" @clicked="onDoneClicked" />
          </div>
        </div>

        <p class="level-card-title">{{ title }}</p>
      </div>
    </TooltipRight>
  `,
  props: {
    by: { type: String, required: true },
    code: { type: String, required: true },
    done: { type: Boolean, required: false, default: false },
    fav: { type: Boolean, required: false, default: false },
    id: { type: Number, required: true },
    mine: { type: Boolean, required: false, default: false },
    title: { type: String, required: true }
  },
  computed: {
    createdBy () {
      return this.mine ? 'par moi' : `par @${this.by}`
    },
    userInfos () {
      return {
        done: this.done,
        fav: this.fav,
        mine: this.mine
      }
    }
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
