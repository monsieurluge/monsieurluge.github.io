Vue.component('LevelCard', {
  template: `
    <TooltipRight class="level-card" :label="createdBy">
      <div class="level-card-content">
        <div class="level-card-first-line">
          <h2>{{ code }}</h2>
          <LevelIcons class="level-card-icons" :id="id" v-bind="userInfos" />
        </div>

        <p class="level-card-title">{{ title }}</p>
      </div>
    </TooltipRight>
  `,
  props: {
    code: { type: String, required: true },
    by: { type: String, required: true },
    done: { type: Boolean, required: false, default: false },
    fav: { type: Boolean, required: false, default: false },
    id: { type: Number, required: true },
    mine: { type: Boolean, required: false, default: false },
    title: { type: String, required: true }
  },
  computed: {
    createdBy () {
      return `par @${this.by}`
    },
    userInfos () {
      console.log('userInfos.done', this.id, this.done)
      return {
        done: this.done,
        fav: this.fav,
        mine: this.mine
      }
    }
  }
})
