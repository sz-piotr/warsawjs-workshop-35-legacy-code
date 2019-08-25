import { addUserAndLogin } from './addUserAndLogin';
import { UserValidator } from './UserValidator';

export async function handleSignup(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  try {
    const userValidator = new UserValidator()
    const url = await addUserAndLogin(userValidator, password, username, login);
    res.redirect(url)
  }
  catch (e) {
    next(e);
  }

  async function login(user) {
    await new Promise(function (resolve, reject) {
      req.logIn(user, function (err) {
        if (err) {
          reject(err);
        }
        else {
          resolve();
        }
      });
    });
  }
}
