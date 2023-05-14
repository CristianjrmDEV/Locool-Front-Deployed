const capitalise = (sth) => {
  if (sth) {
    return sth
      .split(' ')
      .map(
        (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
      )
      .toString()
      .replaceAll(',', ' ')
  } else {
    return ''
  }
}

const getFullMame = (name = '', surname = '') => {
  return `${capitalise(name)} ${capitalise(surname)}`
}

const roundNumber = (number) =>
  Math.round((number + Number.EPSILON) * 100) / 100

const convertCoordsToKm = (latitude1, latitude2, longitude1, longitude2) => {
  // Pythagorean theorem as d=√((x_2-x_1)²+(y_2-y_1)²)
  //Arc Length = θ × (π/180) × r, where θ is in degrees.
  const earthRadius = 6371.1 // Average radius of the Earth:  6371.1 km.

  const angleInDegrees = Math.sqrt(
    Math.abs(
      Math.pow(Math.abs(latitude1) - Math.abs(latitude2), 2) -
        Math.pow(Math.abs(longitude1) - Math.abs(longitude2), 2)
    )
  )

  const distance = angleInDegrees * (Math.PI / 180) * earthRadius

  return roundNumber(distance)
}

export { capitalise, getFullMame, roundNumber, convertCoordsToKm }
