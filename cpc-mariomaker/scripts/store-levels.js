const levelsStore = {
  state: {
    levels: []
  },
  all () {
    return this.state.levels
  },
  favorites () {
    return this.state.levels.filter(level => level.properties.favorite)
  },
  mine () {
    return this.state.levels.filter(level => level.properties.mine)
  },
  setLevels (levels) {
    this.state.levels = levels.map(level => ({ ...level, properties: {} }))
  },
  todo () {
    return this.state.levels.filter(level => !level.properties.done)
  },
  updateLevel ({ id, level }) {
    this.state.levels = this.state.levels.map(oldLevel => oldLevel.id === id ? level : oldLevel)
  }
}
