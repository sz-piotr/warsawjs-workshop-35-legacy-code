import fs from 'fs'

export function multiply (a, b) {
  return a * b
}

export function countLines_globalSeam (fileName) {
  const content = readFile(fileName)
  return content.split('\n').length
}

function readFile (fileName) {
  if (process.env.NODE_ENV === 'test') {
    global.fileName = fileName
    return global.fileContent
  }
  return fs.readFileSync(fileName, 'utf-8');
}
