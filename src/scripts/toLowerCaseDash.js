export default (str) => {
  return str.replace(/\s+/g, '-').toLowerCase()
}