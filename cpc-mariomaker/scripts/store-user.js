const userStore = {
  state: {
    infos: {
      done: [],
      favs: [],
      mine: []
    }
  },
  setInfos (infos) {
    this.state.infos = infos
  }
}
