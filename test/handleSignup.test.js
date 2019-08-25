import { handleSignup, checkPassword } from "../src/handleSignup";
import { expect } from 'chai';

describe('handleSignup', () => {
  it('check if is instance of function', () => {
    expect(handleSignup).to.be.instanceOf(Function)
  });
});

describe('checkPassword', () => {
  it('sets correct to 1 if passwords contains password', () => {
    let passwords = undefined;
    let i = undefined;
    let password = 'qwerty';
    let correct = 0;

    ({ passwords, i, correct } = checkPassword(passwords, i, password, correct));

    expect(correct).to.equal(1)
  });
});
