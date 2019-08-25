import {
  multiply,
  countLines_globalSeam,
  countLines_parameterSeam,
  createCountLines,
  LineCounter
} from "../src/example";
import { expect } from "chai";
import sinon from "sinon";

describe("multiply", () => {
  it("multiplies two numbers", () => {
    expect(multiply(5, 4)).to.equal(20);
  });
});

describe("countLines", () => {
  it("#countLines_globalSeam returns 3 for 3 line file", () => {
    global.fileContent = "a\nb\nc";
    const fileName = "file.txt";

    const result = countLines_globalSeam(fileName);

    expect(global.fileName).to.equal(fileName);
    expect(result).to.equal(3);
  });

  it("#countLines_parameterSeam returns 3 for 3 line file", () => {
    const fileContent = "a\nb\nc";
    const fileName = "file.txt";
    let param;

    function readFile(fileName) {
      param = fileName;
      return fileContent;
    }

    const result = countLines_parameterSeam(fileName, readFile);

    expect(param).to.equal(fileName);
    expect(result).to.equal(3);
  });

  it("#countLines_closureSeam returns 3 for 3 line file", () => {
    const fileContent = "a\nb\nc";
    const fileName = "file.txt";
    const readFile = sinon.fake.returns(fileContent);
    const countLines = createCountLines(readFile);

    const result = countLines(fileName);

    expect(readFile).to.be.calledOnceWithExactly(fileName);
    expect(result).to.equal(3);
  });

  it("LineCounter", () => {
    const fileContent = "a\nb\nc";
    const fileName = "file.txt";
    const readFile = sinon.fake.returns(fileContent);
    const lineCounter = new LineCounter(readFile);

    const result = lineCounter.countLines(fileName);

    expect(readFile).to.be.calledOnceWithExactly(fileName);
    expect(result).to.equal(3);
  });
});