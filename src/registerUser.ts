import { knex } from "./knex";

export async function registerUser(
  username: string,
  password: string,
) {
  const user = { username: username, password: password };
  try {
    await knex('users').insert(user);
  }
  catch (e) {
    if (e instanceof Error && /users\.username/.test(e.message)) {
      throw new Error('User already exists');
    }
    throw e;
  }
  return user;
}
