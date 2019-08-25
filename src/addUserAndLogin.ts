import { registerUser } from './registerUser';
import { isInvalid } from './isInvalid';
import { User } from './User'

export async function addUserAndLogin(
  password: string,
  username: string,
  res: { redirect(url: string): void },
  login: (user: User) => Promise<void>,
  doIsInvalid = isInvalid,
  doRegisterUser = registerUser,
) {
  if (password === '' || !/^[a-z0-9\-_]{3,20}$/.test(username)) {
    res.redirect('/signup?error=2');
  }
  else {
    try {
      if (doIsInvalid(password)) {
        res.redirect('/signup?error=3');
      }
      else {
        const user = await doRegisterUser(username, password);
        await login(user);
        res.redirect('/');
      }
    }
    catch (e) {
      if (e && e.message === 'User already exists') {
        res.redirect('/signup?error=1');
      }
      else {
        throw e;
      }
    }
  }
}
