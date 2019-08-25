import path from 'path'

export const WEAK_PASSWORDS_FILE =
  path.join(__dirname, '../config/weakpasswords.txt')

export class UserValidator {
  constructor (
    private readFile: (fileName: string) => string
  ) {
  }

  isInvalidPassword(password: string) {
    const passwords = this
      .readFile(WEAK_PASSWORDS_FILE)
      .split('\n');
    for (const item of passwords) {
      if (password === item) {
        return true;
      }
    }
    return password.length <= 6;
  }
}
