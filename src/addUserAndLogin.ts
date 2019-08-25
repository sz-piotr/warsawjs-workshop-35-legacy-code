import { registerUser } from './registerUser';
import { User } from './User'
import { UserValidator } from './UserValidator'

export async function addUserAndLogin(
  userValidator: UserValidator,
  password: string,
  username: string,
  login: (user: User) => Promise<void>,
  doRegisterUser = registerUser,
) {
  if (password === '' || !/^[a-z0-9\-_]{3,20}$/.test(username)) {
    return '/signup?error=2';
  } else {
    try {
      if (userValidator.isInvalidPassword(password)) {
        return '/signup?error=3';
      }
      if (userValidator.isInvalidUsername(username)) {
        return '/signup?error=2';
      }
      else {
        const user = await doRegisterUser(username, password);
        await login(user);
        return '/';
      }
    } catch (e) {
      if (e && e.message === 'User already exists') {
        return '/signup?error=1';
      }
      else {
        throw e;
      }
    }
  }
}
