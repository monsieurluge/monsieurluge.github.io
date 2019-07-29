Vue.component('LevelCard', {
  template: `
    <div class="level-card">
      <div class="tooltip" v-bind:data-tooltip="createdBy">
        <div class="level-card-content">
          <h2>{{ code }}</h2>

          <p class="level-card-title">{{ title }}</p>
        </div>
      </div>
    </div>
  `,
  props: {
    code: { type: String, required: true },
    by: { type: String, required: true },
    title: { type: String, required: true }
  },
  computed: {
    createdBy () {
      return `par @${this.by}`
    }
  }
})
