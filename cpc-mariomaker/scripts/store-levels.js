const markAs = state => level => ({ ...level, [state]: true })
const unmark = state => level => ({ ...level, [state]: false })

const levelsStore = {
  state: {
    levels: []
  },
  all () {
    return this.state.levels
  },
  done () {
    return this.state.levels.filter(level => level.done)
  },
  favorites () {
    return this.state.levels.filter(level => level.fav)
  },
  markLevelAs ({ id, state }) {
    this.state.levels = this.state.levels.map(level => level.id === id ? markAs(state)(level) : level)
  },
  mine () {
    return this.state.levels.filter(level => level.mine)
  },
  setLevels (levels) {
    this.state.levels = levels
  },
  todo () {
    return this.state.levels.filter(level => !level.done)
  },
  unmarkLevel ({ id, state }) {
    this.state.levels = this.state.levels.map(level => level.id === id ? unmark(state)(level) : level)
  }
}
