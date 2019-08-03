const userStore = {
  state: {
    infos: {
      done: [],
      favs: [],
      mine: []
    }
  },
  infos () {
    return this.state.infos
  },
  levelDone (levelId) {
    this.state.infos.done = [...this.state.infos.done, levelId]
    console.log('level', levelId, 'done')
  },
  levelUndone (levelId) {
    this.state.infos.done = this.state.infos.done.filter(id => id !== levelId)
    console.log('level', levelId, 'undone')
  },
  setInfos (infos) {
    this.state.infos = infos
  }
}
