const capitalise = (sth) => {
  // console.log('from toolkit:',sth)
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

const getFullMame = (name='', surname='') => {
  return `${capitalise(name)} ${capitalise(surname)}`
}
export { capitalise, getFullMame }
