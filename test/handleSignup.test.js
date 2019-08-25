import { handleSignup, checkPassword } from "../src/handleSignup";
import { expect } from 'chai';
import sinon from 'sinon'

describe('handleSignup', () => {
  it('check if is instance of function', () => {
    expect(handleSignup).to.be.instanceOf(Function)
  });
});

describe('checkPassword', () => {
  it('sets correct to 0 if passwords does not contain password', () => {
    let password = 'longpassword';
    let correct = 0;

    const fileContent = ''
    const readFileContent = sinon.fake.returns(fileContent);

    ({correct } = checkPassword(password, correct, readFileContent));

    expect(correct).to.equal(0)
    expect(readFileContent).to.be.calledOnce
  });

  it('sets correct to 1 if passwords contains password', () => {
    let password = 'longpassword';
    let correct = 0;

    const fileContent = 'longpassword'
    const readFileContent = sinon.fake.returns(fileContent);

    ({correct } = checkPassword(password, correct, readFileContent));

    expect(correct).to.equal(1)
    expect(readFileContent).to.be.calledOnce
  });

  it('sets correct to 1 if passwords contains password as seconds line', () => {
    let password = 'longpassword';
    let correct = 0;

    const fileContent = '12345\nlongpassword'
    const readFileContent = sinon.fake.returns(fileContent);

    ({correct } = checkPassword(password, correct, readFileContent));

    expect(correct).to.equal(1)
    expect(readFileContent).to.be.calledOnce
  });
});
