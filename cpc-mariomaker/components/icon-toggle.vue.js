Vue.component('IconToggle', {
  template: `
    <div class="tooltip" v-bind:data-tooltip="label">
      <div class="icon-toggle-wrapper" v-bind:class="isActive ? 'active' : ''">
        <div class="icon-toggle-icon" v-bind:class="iconName" @click="onClick" />
        <div class="icon-toggle-badge" v-if="badge > 0" >{{ badge }}</div>
      </div>
    </div>
  `,
  props: {
    active: { type: Boolean, required: false, default: false },
    icon: { type: String, required: false, default: 'smile'},
    label: { type: String, required: true },
    badge: { type: Number, required: false, default: 0 }
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
