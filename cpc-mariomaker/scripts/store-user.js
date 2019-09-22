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
  addToDoneLevels (id) {
    this.state.levels.done = addIdTo(this.state.levels.done)(id)
  },
  addToFavorites (id) {
    this.state.levels.favorites = addIdTo(this.state.levels.favorites)(id)
  },
  levels () {
    return this.state.levels
  },
  logged () {
    return true
  },
  mine () {
    return this.state.levels.mine
  },
  removeFromDoneLevels (id) {
    this.state.levels.done = removeIdFrom(this.state.levels.done)(id)
  },
  removeFromFavorites (id) {
    this.state.levels.favorites = removeIdFrom(this.state.levels.favorites)(id)
  },
  setLevels (levels) {
    this.state.levels = levels
  }
}
