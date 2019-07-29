Vue.component('LevelCard', {
  template: `
    <div class="level-card">
      <h2>{{ code }}</h2>

      <p class="level-card-infos"><span class="title">{{ title }}</span>, par <span class="by">{{ by }}</by></p>
    </div>
  `,
  props: {
    code: { type: String, required: true },
    by: { type: String, required: true },
    title: { type: String, required: true }
  }
})
