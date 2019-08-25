import { UserValidator, WEAK_PASSWORDS_FILE } from "../src/UserValidator";
import { expect } from 'chai';
import sinon from 'sinon';

describe('UserValidator', () => {
  describe('isInvalidPassword', () => {
    it('returns false if file does not contain password', () => {
      const password = 'longpassword';
      const fileContent = '';
      const readFile = sinon.fake.returns(fileContent);

      const userValidator = new UserValidator(readFile)

      const result = userValidator.isInvalidPassword(password)
      expect(result).to.equal(false);
      expect(readFile).to.be.calledOnceWithExactly(WEAK_PASSWORDS_FILE);
    });

    it('returns true if password is shorter than 7', () => {
      const password = '123456';
      const fileContent = '';
      const readFile = sinon.fake.returns(fileContent);

      const userValidator = new UserValidator(readFile)

      const result = userValidator.isInvalidPassword(password)
      expect(result).to.equal(true);
      expect(readFile).to.be.calledOnceWithExactly(WEAK_PASSWORDS_FILE);
    });

    it('returns true if file contains password', () => {
      const password = 'longpassword';
      const fileContent = '12345\nlongpassword';
      const readFile = sinon.fake.returns(fileContent);

      const userValidator = new UserValidator(readFile)

      const result = userValidator.isInvalidPassword(password)
      expect(result).to.equal(true);
      expect(readFile).to.be.calledOnceWithExactly(WEAK_PASSWORDS_FILE);
    });
  })
});
