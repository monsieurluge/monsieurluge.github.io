Vue.component('IconDone', {
  template: `
    <div class="standard-icon icon" v-bind:class="done ? 'icon-checkmark' : 'icon-checkmark2'" />
  `,
  props: {
    done: { type: Boolean, required: false, default: false }
  }
})
