import { handleSignup, checkPassword } from "../src/handleSignup";
import { expect } from 'chai';
import sinon from 'sinon'

describe('handleSignup', () => {
  it('check if is instance of function', () => {
    expect(handleSignup).to.be.instanceOf(Function)
  });
});

describe('checkPassword', () => {
  it('sets correct to 1 if passwords contains password', () => {
    let passwords = undefined;
    let i = undefined;
    let password = 'longpassword';
    let correct = 0;

    const fileContent = 'longpassword'
    const readFileContent = sinon.fake.returns(fileContent);

    ({ passwords, i, correct } = checkPassword(passwords, i, password, correct, readFileContent));

    expect(correct).to.equal(1)
    expect(readFileContent).to.be.calledOnce
  });
});
