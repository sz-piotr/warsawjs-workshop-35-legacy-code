import { addUserAndLogin } from '../src/addUserAndLogin'
import { expect } from 'chai'
import sinon from 'sinon'

describe('addUserAndLogin', () => {
  it('redirects to /signup?error=2 when password is empty', async () => {
    const password = ''
    const username = 'banana'
    const res = {redirect:sinon.fake()}
    const login = sinon.fake()

    await addUserAndLogin(password, username, res, login)
    expect(res.redirect).to.be.calledOnceWithExactly('/signup?error=2')
    expect(login).not.to.be.called
  })

  it('redirects to /signup?error=2 when username is invalid', async () => {
    const password = '123'
    const username = 'ASDF@#$%'
    const res = {redirect:sinon.fake()}
    const login = sinon.fake()

    await addUserAndLogin(password, username, res, login)
    expect(res.redirect).to.be.calledOnceWithExactly('/signup?error=2')
    expect(login).not.to.be.called
  })

  it('redirects to /signup?error=3 when password is invalid', async () => {
    const password = '123'
    const username = 'asdf'
    const res = {redirect:sinon.fake()}
    const login = sinon.fake()
    const isInvalid = sinon.fake.returns(true)

    await addUserAndLogin(password, username, res, login, isInvalid)
    expect(res.redirect).to.be.calledOnceWithExactly('/signup?error=3')
    expect(login).not.to.be.called
  })

  it('redirects to / when all is valid', async () => {
    const password = '1234567'
    const username = 'asdf'
    const user = {username, password}
    const res = {redirect:sinon.fake()}
    const login = sinon.fake()
    const isInvalid = sinon.fake.returns(false)
    const registerUser = sinon.fake.resolves(user)

    await addUserAndLogin(password, username, res, login, isInvalid, registerUser)

    expect(res.redirect).to.be.calledOnceWithExactly('/')
    expect(login).to.be.calledOnceWithExactly(user)
  })

  it('redirects to /signup?error=1 when user already exists', async () => {
    const password = '1234567'
    const username = 'asdf'
    const res = {redirect:sinon.fake()}
    const login = sinon.fake()
    const isInvalid = sinon.fake.returns(false)
    const registerUser = sinon.fake.rejects(new Error('User already exists'))

    await addUserAndLogin(password, username, res, login, isInvalid, registerUser)

    expect(res.redirect).to.be.calledOnceWithExactly('/signup?error=1')
    expect(login).not.to.be.called
  })

  it('throws e when unexpected error occurs', async () => {
    const password = '1234567'
    const username = 'asdf'
    const res = {redirect:sinon.fake()}
    const login = sinon.fake()
    const isInvalid = sinon.fake.returns(false)
    const registerUser = sinon.fake.rejects(new Error('unexpected error'))

    const promise = addUserAndLogin(password, username, res, login, isInvalid, registerUser)

    await expect(promise).to.be.rejectedWith('unexpected error')
    expect(res.redirect).not.to.be.called
    expect(login).not.to.be.called
  })
})
