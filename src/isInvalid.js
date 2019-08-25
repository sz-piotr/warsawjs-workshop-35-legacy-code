import path from 'path';
import fs from 'fs';

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
