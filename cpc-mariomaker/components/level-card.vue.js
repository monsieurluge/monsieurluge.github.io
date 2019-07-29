Vue.component('LevelCard', {
  template: `
  <div>
      <strong>{{ code }}</strong><br />
      {{ title }} - par <strong>{{ by }}</strong>
  </div>
  `,
  props: {
    code: { type: String, required: true },
    by: { type: String, required: true },
    title: { type: String, required: true }
  }
})
