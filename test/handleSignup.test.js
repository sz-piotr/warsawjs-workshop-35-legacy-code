import { handleSignup } from "../src/handleSignup";
import { expect } from 'chai';

describe('handleSignup', () => {
  it('check if is instance of function', () => {
    expect(handleSignup).to.be.instanceOf(Function)
  });
});
