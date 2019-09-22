const pipe = (...functions) => param => functions.reduce((result, func) => func(result), param)

// adds an unique item to a collection
const addItemTo = item => collection => [...new Set(collection.concat([ item ]))]

// removes an unique item from a collection
const removeItemFrom = item => collection => collection.filter(storedItem => storedItem !== item)

const addUserLevelsInfos = userLevels => {
  console.log('add user levels', userLevels)
  return pipe(
    addMineLevels(userLevels),
    addFavLevels(userLevels),
    addDoneLevels(userLevels),
  )
}

const addDoneLevels = userLevels => level => {
  return userLevels.done.includes(level.id)
    ? Object.assign(level, { done: true })
    : level
}

const addFavLevels = userLevels => level => {
  return userLevels.favs.includes(level.id)
    ? Object.assign(level, { fav: true })
    : level
}

const addMineLevels = userLevels => level => {
  return userLevels.mine.includes(level.id)
    ? Object.assign(level, { mine: true })
    : level
}
