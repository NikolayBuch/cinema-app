const masks = {


  name: (value) => {
    return value
  },

  russiaName: (value) => {
    return value
  },

  date: (value) => {
    value = value.replace(/\D/g, '')
    if (value.length <= 4) {
      return value
    } else if (value.length >= 4) {
      return `${value.slice(0, 4)}`
    }
  },

  country: (value) => {
    return value
  },
  points: (value) => {
    value = value.replace(/\D/g, '')
    if (value.length <= 1) {
      return value
    } else if (value.length >= 2) {
      return `${value.slice(0, 1)}.${value.slice(1, 2)}`
    }
  },

  description: (value) => {
    return value
  },

}


export default masks;
