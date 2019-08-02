function createFakeApi() {
  return {
    levels: new Promise((resolve, reject) => resolve([
      { id: 1, code: '334-LTQ-9YG', title: 'mon premier niveau', date: '2019-07-12 15:00', by: 'toto', tags: ['court', 'expert', 'thème'] },
      { id: 2, code: '123-RTQ-9OG', title: 'l\'attaque des taupes géantes', date: '2019-07-12 16:00', by: 'Bloubli', tags: ['court', 'expert', 'thème'] },
      { id: 3, code: '377-YHD-7S2', title: 'le désert maudit', date: '2019-07-13 2:10', by: 'maxoumax', tags: ['court', 'expert', 'thème'] },
      { id: 4, code: '910-GHU-1F3', title: 'fsdkjfh &23 açf mqeré34', date: '2019-07-13 9:00', by: 'maxoumax', tags: ['court', 'expert', 'thème'] },
      { id: 5, code: '330-AOL-4D4', title: 'promenade sous les arbres', date: '2019-07-13 11:50', by: 'MarmitonX', tags: ['court', 'expert', 'thème'] },
      { id: 6, code: '837-TUS-6C1', title: 'il était une fois...', date: '2019-07-13 21:04', by: 'Bloubli', tags: ['court', 'expert', 'thème'] },
      { id: 8, code: '277-KIP-8H0', title: 'Here we goo !', date: '2019-07-18 22:08', by: 'maxoumax', tags: ['court', 'expert', 'thème'] },
      { id: 7, code: '531-MDZ-5G9', title: 'Yoshiiii !', date: '2019-07-17 12:34', by: 'Jul_Azemo', tags: ['court', 'expert', 'thème'] }
    ])),
    tags: new Promise((resolve, reject) => resolve([{ id: 1, label: 'new' }])),
    userInfos: new Promise((resolve, reject) => resolve({
      mine: [6, 7],
      favs: [2, 3, 1],
      done: [ 3, 5, 6, 7, 4, 1 ]
    }))
  }
}
