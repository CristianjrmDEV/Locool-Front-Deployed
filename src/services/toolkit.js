const capitalise = (sth) => {
  return sth
    .split(' ')
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .toString()
    .replaceAll(',', ' ')
}

export { capitalise }
