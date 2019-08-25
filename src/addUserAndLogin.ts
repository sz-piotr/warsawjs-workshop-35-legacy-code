import { registerUser } from './registerUser';
import { isInvalid } from './isInvalid';
import { User } from './User'

export async function addUserAndLogin(
  password: string,
  username: string,
  login: (user: User) => Promise<void>,
  doIsInvalid = isInvalid,
  doRegisterUser = registerUser,
) {
  if (password === '' || !/^[a-z0-9\-_]{3,20}$/.test(username)) {
    return '/signup?error=2';
  }
  else {
    try {
      if (doIsInvalid(password)) {
        return '/signup?error=3';
      }
      else {
        const user = await doRegisterUser(username, password);
        await login(user);
        return '/';
      }
    }
    catch (e) {
      if (e && e.message === 'User already exists') {
        return '/signup?error=1';
      }
      else {
        throw e;
      }
    }
  }
}
