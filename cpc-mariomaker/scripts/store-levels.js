const levelsStore = {
  state: {
    levels: []
  },
  all () {
    return this.state.levels
  },
  setLevels (levels) {
    this.state.levels = levels
  }
}
