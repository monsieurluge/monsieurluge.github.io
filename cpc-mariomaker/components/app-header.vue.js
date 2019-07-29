Vue.component('app-header', {
  template: `
    <header>
      <h1>{{ title }}<span class="game-version">{{ version }}</span></h1>
      <p class="subtitle">{{ subtitle }}</p>
    </header>
  `,
  props: {
    subtitle: { type: String, required: true },
    title: { type: String, required: true },
    version: { type: Number, required: true }
  }
})
