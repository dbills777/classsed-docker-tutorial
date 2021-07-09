const db = require('../db');

(async () => {
  try {
    await db('users').insert({ name: 'Person_1' });
    await db('users').insert({ name: 'Person_2' });
    await db('users').insert({ name: 'Person_3' });
    console.log('Added dummy users!');
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
