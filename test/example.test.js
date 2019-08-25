import { multiply, countLines_globalSeam, countLines_parameterSeam, createCountLines, LineCounter } from '../src/example'
import { expect } from 'chai'
import sinon from 'sinon'

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
  it('#countLines_globalSeam returns 3 for 3 line file', () => {
    // GIVEN
    global.fileContent = 'a\nb\nc'
    const fileName = 'file.txt'

    // WHEN
    const result = countLines_globalSeam(fileName)

    // THEN
    expect(global.fileName).to.equal(fileName)
    expect(result).to.equal(3)
  })

  it('#countLines_parameterSeam returns 3 for 3 line file', () => {
    // GIVEN
    const fileContent = 'a\nb\nc'
    const fileName = 'file.txt'
    const readFile = sinon.fake.returns(fileContent)

    // WHEN
    const result = countLines_parameterSeam(fileName, readFile)

    // THEN
    expect(readFile).to.be.calledOnceWithExactly(fileName)
    expect(result).to.equal(3)
  })

  it('#countLines_closureSeam returns 3 for 3 line file', () => {
    // GIVEN
    const fileContent = 'a\nb\nc'
    const fileName = 'file.txt'
    const readFile = sinon.fake.returns(fileContent)
    const countLines = createCountLines(readFile)

    // WHEN
    const result = countLines(fileName)

    // THEN
    expect(readFile).to.be.calledOnceWithExactly(fileName)
    expect(result).to.equal(3)
  })

  it('LineCounter', () => {
    // GIVEN
    const fileContent = 'a\nb\nc'
    const fileName = 'file.txt'
    const readFile = sinon.fake.returns(fileContent)
    const lineCounter = new LineCounter(readFile)

    // WHEN
    const result = lineCounter.countLines(fileName)

    // THEN
    expect(readFile).to.be.calledOnceWithExactly(fileName)
    expect(result).to.equal(3)
  })
})
