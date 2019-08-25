import { knex } from "./knex";
import { User } from "./User";

export async function registerUser(
  username: string,
  password: string,
  doPutUserToDatabase = putUserToDatabase
) {
  const user = { username: username, password: password };
  try {
    await doPutUserToDatabase(user);
  }
  catch (e) {
    if (e instanceof Error && /users\.username/.test(e.message)) {
      throw new Error('User already exists');
    }
    throw e;
  }
  return user;
}

async function putUserToDatabase(user: User) {
  await knex('users').insert(user);
}
