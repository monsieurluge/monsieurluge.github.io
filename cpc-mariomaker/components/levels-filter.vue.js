Vue.component('LevelsFilter', {
  template: `
    <div>{{ label }}</div>
  `,
  props: {
    active: { type: Boolean, required: false, default: false },
    label: { type: String, required: true }
  }
})
