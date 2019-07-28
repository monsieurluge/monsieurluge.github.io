const pipe = (...functions) => param => functions.reduce((result, func) => func(result), param)
