Vue.component('LevelCard', {
  template: `
    <div class="level-card">
      <div class="tooltip" v-bind:data-tooltip="createdBy">
        <div class="level-card-content">
          <div class="level-card-first-line">
            <h2>{{ code }}</h2>
            <LevelIcons class="level-card-icons" v-bind="userInfos"/>
          </div>

          <p class="level-card-title">{{ title }}</p>
        </div>
      </div>
    </div>
  `,
  props: {
    code: { type: String, required: true },
    by: { type: String, required: true },
    done: { type: Boolean, required: false, default: false },
    fav: { type: Boolean, required: false, default: false },
    mine: { type: Boolean, required: false, default: false },
    title: { type: String, required: true }
  },
  computed: {
    createdBy () {
      return `par @${this.by}`
    },
    userInfos () {
      return {
        done: this.done,
        fav: this.fav,
        mine: this.mine
      }
    }
  }
})
