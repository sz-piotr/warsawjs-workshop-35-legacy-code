import { registerUser } from './registerUser';
import { isInvalid } from './isInvalid';

export async function handleSignup(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  try {
    if (password === '' || !/^[a-z0-9\-_]{3,20}$/.test(username)) {
      res.redirect('/signup?error=2');
    }
    else {
      try {
        if (isInvalid(password)) {
          res.redirect('/signup?error=3');
        }
        else {
          const user = await registerUser(username, password);
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
  catch (e) {
    next(e);
  }
}
