module.exports = (base, exponent) => {
  let exponentiated = base

  for (let i = 1; i < exponent; i++) {
    exponentiated *= base
  }

  return exponentiated
}
