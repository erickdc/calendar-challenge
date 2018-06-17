export function addDays (dateToAdd, amount) {
  var dat = new Date(dateToAdd.getTime())
  dat.setDate(dat.getDate() + amount)
  return dat
}

export function dateWithoutTime (fullDate) {
  var dat = new Date(fullDate.getTime())
  dat.setHours(0, 0, 0, 0)
  return dat
}
