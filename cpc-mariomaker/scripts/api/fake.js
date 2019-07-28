function createFakeApi() {
  return {
    tags: new Promise((resolve, reject) => resolve([{ id: 1, label: 'new' }]))
  }
}
