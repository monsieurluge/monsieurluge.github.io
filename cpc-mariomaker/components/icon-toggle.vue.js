Vue.component('IconToggle', {
  template: `
    <div class="tooltip" v-bind:data-tooltip="label">
      <div class="icon-toggle" v-bind:class="[ isActive ? 'active' : '', iconName ]" @click="onClick" />
    </div>
  `,
  props: {
    active: { type: Boolean, required: false, default: false },
    icon: { type: String, required: false, default: 'smile'},
    label: { type: String, required: true }
  },
  computed: {
    iconName () {
      return `icon icon-${this.icon}`
    },
    isActive () {
      return this.active
    }
  },
  methods: {
    onClick () {
      this.$emit('clicked')
    }
  }
})
