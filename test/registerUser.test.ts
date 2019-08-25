import { registerUser } from "../src/registerUser"
import { expect } from 'chai'
import sinon from 'sinon'

describe('registerUser', () => {
  it('can register new user', async () => {
    const username = 'Lolex'
    const password = 'plokij1'

    const putUserToDatabase = sinon.fake.resolves(undefined)

    const user = await registerUser(username, password, putUserToDatabase)
    expect(putUserToDatabase).to.be.calledOnceWithExactly({ username, password })
    expect(user).to.deep.equal({ username, password })
  })

  it('throws when putUserToDatabase throws', async () => {
    const username = 'Lolex'
    const password = 'plokij1'

    const putUserToDatabase = sinon.fake.rejects(new Error('Lol'))

    const promise = registerUser(username, password, putUserToDatabase)

    await expect(promise).to.be.rejectedWith('Lol')
    expect(putUserToDatabase).to.be.calledOnceWithExactly({ username, password })
  })

  it('throws when user already exists', async () => {
    const username = 'Lolex'
    const password = 'plokij1'

    const putUserToDatabase = sinon.fake.rejects(
      new Error('UNIQUE constraint failed: users.username')
    )

    const promise = registerUser(username, password, putUserToDatabase)

    await expect(promise).to.be.rejectedWith('User already exists')
    expect(putUserToDatabase).to.be.calledOnceWithExactly({ username, password })
  })
})
