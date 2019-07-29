Vue.component('LevelsFilters', {
  template: `
    <div class="levels-filters">
      <IconToggle icon="list2" label="tous" isActive=true />
      <IconToggle icon="star-full" label="favoris" />
      <IconToggle icon="user" label="mes niveaux" />
      <IconToggle icon="checkmark" label="à finir" />
    </div>
  `,
  data () {
    return {
      favs: false,
      mine: false,
      todo: false
    }
  }
})
