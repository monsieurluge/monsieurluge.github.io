Vue.component('LevelsFilters', {
  template: `
    <div class="levels-filters">
      <LevelsFilter label="favoris" />
      <LevelsFilter label="mes niveaux" />
      <LevelsFilter label="à finir" />
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
