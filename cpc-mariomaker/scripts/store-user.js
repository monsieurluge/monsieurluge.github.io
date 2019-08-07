const userStore = {
  state: {
    levels: {
      done: [],
      favorites: [],
      mine: []
    }
  },
  done () {
    return this.state.levels.done
  },
  favorites () {
    return this.state.levels.favorites
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
  mine () {
    return this.state.levels.mine
  },
  setLevels (levels) {
    this.state.levels = levels
  }
}
