import { handleSignup, isInvalid } from "../src/handleSignup";
import { expect } from 'chai';
import sinon from 'sinon'

describe('handleSignup', () => {
  it('check if is instance of function', () => {
    expect(handleSignup).to.be.instanceOf(Function)
  });
});

describe('isInvalid', () => {
  it('returns false if passwords does not contain password', () => {
    let password = 'longpassword';

    const fileContent = ''
    const readFileContent = sinon.fake.returns(fileContent);

    let result = isInvalid(password, readFileContent);

    expect(result).to.equal(false)
    expect(readFileContent).to.be.calledOnce
  });

  it('returns true if password is shorter than 7', () => {
    let password = '123456';

    const fileContent = ''
    const readFileContent = sinon.fake.returns(fileContent);

    let result = isInvalid(password, readFileContent);

    expect(result).to.equal(true)
    expect(readFileContent).to.be.calledOnce
  });

  it('returns true if passwords contains password', () => {
    let password = 'longpassword';

    const fileContent = 'longpassword'
    const readFileContent = sinon.fake.returns(fileContent);

    let result = isInvalid(password, readFileContent);

    expect(result).to.equal(true)
    expect(readFileContent).to.be.calledOnce
  });

  it('returns true if passwords contains password as seconds line', () => {
    let password = 'longpassword';

    const fileContent = '12345\nlongpassword'
    const readFileContent = sinon.fake.returns(fileContent);

    let result = isInvalid(password, readFileContent);

    expect(result).to.equal(true)
    expect(readFileContent).to.be.calledOnce
  });
});
