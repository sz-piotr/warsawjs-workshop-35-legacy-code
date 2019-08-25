import fs from "fs";

export function multiply(a, b) {
  return a * b;
}

export function countLines_parameterSeam(fileName, doReadFile = readFile) {
  const content = doReadFile(fileName);
  return content.split("\n").length;
}

function readFile(fileName) {
  return fs.readFileSync(fileName, "utf-8");
}

export function countLines_globalSeam(fileName) {
  const content = readFile_global(fileName);
  return content.split("\n").length;
}

function readFile_global(fileName) {
  if (process.env.NODE_ENV === "test") {
    global.fileName = fileName;
    return global.fileContent;
  }
  return fs.readFileSync(fileName, "utf-8");
}

export function createCountLines (readFile) {
  return function countLines (fileName) {
    const content = readFile(fileName)
    return content.split('\n').length
  }
}

export class LineCounter {
  constructor(readFile) {
    this.readFile = readFile
  }

  countLines () {
    const content = this.readFile(fileName)
    return content.split('\n').length
  }
}

export const countLines_closureSeam = createCountLines(readFile)

export function countLines_parameterSeam (fileName, doReadFile = readFile) {
  const content = doReadFile(fileName)
  return content.split('\n').length
}

export function readFile (fileName) {
  return fs.readFileSync(fileName, 'utf-8');
}

export function countLines_globalSeam (fileName) {
  const content = readFile_global(fileName)
  return content.split('\n').length
}

export function readFile_global (fileName) {
  if (process.env.NODE_ENV === 'test') {
    global.fileName = fileName
    return global.fileContent
  }
  return fs.readFileSync(fileName, 'utf-8');
}
