Vue.component('TooltipRight', {
  template: `
    <div class="tooltip-right" v-bind:data-tooltip="label">
      <slot></slot>
    </div>
  `,
  props: {
    label: { type: String, required: true },
  }
})
