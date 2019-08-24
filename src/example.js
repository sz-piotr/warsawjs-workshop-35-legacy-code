import fs from 'fs'

export function multiply (a, b) {
  return a * b
}

export function countLines (fileName) {
  const content = fs.readFileSync(fileName, 'utf-8')
  return content.split('\n').length
}
