import { multiply, countLines_globalSeam } from '../src/example'
import { expect } from 'chai'

describe('multiply', () => {
  it('multiplies two numbers', () => {
    // GIVEN
    let a = 5
    let b = 4

    // WHEN
    let result = multiply(a, b)

    // THEN
    expect(result).to.equal(20)
  })
})

describe('countLines', () => {
  it('returns 3 for 3 line file', () => {
    // GIVEN
    global.fileContent = 'a\nb\nc'
    const fileName = 'file.txt'

    // WHEN
    const result = countLines_globalSeam(fileName)

    // THEN
    expect(global.fileName).to.equal(fileName)
    expect(result).to.equal(3)
  })
})
