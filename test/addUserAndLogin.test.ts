import { addUserAndLogin } from '../src/addUserAndLogin'
import { expect } from 'chai'
import sinon from 'sinon'
import { UserValidator } from '../src/UserValidator'

class TestUserValidator extends UserValidator {
  constructor (
    private invalidPassword: boolean,
    private invalidUser: boolean
  ) {
    super()
  }

  isInvalidPassword() {
    return this.invalidPassword
  }

  isInvalidUsername() {
    return this.invalidUser
  }
}

describe('addUserAndLogin', () => {
  it('redirects to /signup?error=2 when password is empty', async () => {
    const password = ''
    const username = 'banana'
    const login = sinon.fake()
    const userValidator = new TestUserValidator(true, false)

    const result = await addUserAndLogin(userValidator, password, username, login)
    expect(result).to.equal('/signup?error=2')
    expect(login).not.to.be.called
  })

  it('redirects to /signup?error=2 when username is invalid', async () => {
    const password = '123'
    const username = 'ASDF@#$%'
    const login = sinon.fake()
    const userValidator = new TestUserValidator(true, false)

    const result = await addUserAndLogin(userValidator, password, username, login)
    expect(result).to.equal('/signup?error=2')
    expect(login).not.to.be.called
  })

  it('redirects to /signup?error=3 when password is invalid', async () => {
    const password = '123'
    const username = 'asdf'
    const login = sinon.fake()
    const userValidator = new TestUserValidator(true, false)

    const result = await addUserAndLogin(userValidator, password, username, login)
    expect(result).to.equal('/signup?error=3')
    expect(login).not.to.be.called
  })

  it('redirects to / when all is valid', async () => {
    const password = '1234567'
    const username = 'asdf'
    const user = { username, password }
    const login = sinon.fake()
    const userValidator = new TestUserValidator(false, false)
    const registerUser = sinon.fake.resolves(user)

    const result = await addUserAndLogin(userValidator, password, username, login,  registerUser)

    expect(result).to.equal('/')
    expect(login).to.be.calledOnceWithExactly(user)
  })

  it('redirects to /signup?error=1 when user already exists', async () => {
    const password = '1234567'
    const username = 'asdf'
    const login = sinon.fake()
    const userValidator = new TestUserValidator(false, false)
    const registerUser = sinon.fake.rejects(new Error('User already exists'))

    const result = await addUserAndLogin(userValidator, password, username, login,  registerUser)

    expect(result).to.equal('/signup?error=1')
    expect(login).not.to.be.called
  })

  it('throws e when unexpected error occurs', async () => {
    const password = '1234567'
    const username = 'asdf'
    const login = sinon.fake()
    const userValidator = new TestUserValidator(false, false)
    const registerUser = sinon.fake.rejects(new Error('unexpected error'))

    const promise = addUserAndLogin(userValidator, password, username, login,  registerUser)

    await expect(promise).to.be.rejectedWith('unexpected error')
    expect(login).not.to.be.called
  })

  it('redirects to /signup?error=2 when username is banned', async () => {
    const password = '123'
    const username = 'avocado'
    const login = sinon.fake()
    const userValidator = new TestUserValidator(false, true)

    const result = await addUserAndLogin(userValidator, password, username, login)
    expect(result).to.equal('/signup?error=2')
    expect(login).not.to.be.called
  })
})
