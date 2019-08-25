import path from 'path';
import fs from 'fs';
import { knex } from "./knex";

export async function handleSignup(req, res, next) {
  var correct = 0;
  var user;
  var username = req.body.username;
  var password = req.body.password;
  try {
    if (password === '' || !/^[a-z0-9\-_]{3,20}$/.test(username)) {
      res.redirect('/signup?error=2');
    }
    else {
      ({ correct } = checkPassword(password, correct));
      try {
        if (correct) {
          res.redirect('/signup?error=3');
        }
        else {
          correct = 2;
          user = { username: username, password: password };
          try {
            await knex('users').insert(user);
          }
          catch (e) {
            if (e instanceof Error && /users\.username/.test(e.message)) {
              throw new Error('User already exists');
            }
            throw e;
          }
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

export function checkPassword(password, correct, doReadPasswordsFile = readPasswordsFile) {
  const passwords = doReadPasswordsFile().split('\n');
  for (const item of passwords) {
    if (password === item) {
      correct = 1;
      break;
    }
  }
  if (password.length <= 6) {
    correct = 1;
  }
  return {correct };
}

function readPasswordsFile() {
  return fs.readFileSync(path.join(__dirname, '../config/weakpasswords.txt'), 'utf-8');
}

