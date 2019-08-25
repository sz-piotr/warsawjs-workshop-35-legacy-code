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
