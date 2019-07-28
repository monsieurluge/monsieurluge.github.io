const pipe = (...functions) => param => functions.reduce((result, func) => func(result), param)

const snapshotToTags = snapshot => snapshot.docs.map(doc => doc.data())
