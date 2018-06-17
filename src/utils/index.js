export function addDays (dateToAdd, amount) {
  var dat = new Date(dateToAdd.getTime())
  dat.setDate(dat.getDate() + amount)
  return dat
}
