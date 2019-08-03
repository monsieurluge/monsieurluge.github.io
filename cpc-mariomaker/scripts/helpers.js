const pipe = (...functions) => param => functions.reduce((result, func) => func(result), param)

const addUserInfos = userInfos => {
  console.log('add user infos', userInfos)
  return pipe(
    addMineInfo(userInfos),
    addFavInfo(userInfos),
    addDoneInfo(userInfos),
  )
}

const addDoneInfo = userInfos => level => {
  return userInfos.done.includes(level.id)
    ? Object.assign(level, { done: true })
    : level
}

const addFavInfo = userInfos => level => {
  return userInfos.favs.includes(level.id)
    ? Object.assign(level, { fav: true })
    : level
}

const addMineInfo = userInfos => level => {
  return userInfos.mine.includes(level.id)
    ? Object.assign(level, { mine: true })
    : level
}
