import path from 'path';
import fs from 'fs';
import { knex } from "./knex";

export async function handleSignup(req, res, next) {
  var user;
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

export function isInvalid(password, doReadPasswordsFile = readPasswordsFile) {
  const passwords = doReadPasswordsFile().split('\n');
  for (const item of passwords) {
    if (password === item) {
      return true;
    }
  }
  return password.length <= 6;
}

function readPasswordsFile() {
  return fs.readFileSync(path.join(__dirname, '../config/weakpasswords.txt'), 'utf-8');
}

