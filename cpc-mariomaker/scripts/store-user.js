const userStore = {
  state: {
    levels: {
      done: [],
      favorites: [],
      mine: []
    }
  },
  levels () {
    return this.state.levels
  },
  levelDone (levelId) {
    this.state.levels.done = [...this.state.levels.done, levelId]
  },
  levelUndone (levelId) {
    this.state.levels.done = this.state.levels.done.filter(id => id !== levelId)
  },
  setLevels (levels) {
    this.state.levels = levels
  }
}
