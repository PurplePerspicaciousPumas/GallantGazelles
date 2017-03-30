const pg = require('pg');
const db = require('../db.js');
const Promise = require('bluebird');

module.exports.getVoteByUsername = (username, pitch_id) => {
	return db.query(`SELECT id FROM users WHERE username='${username}'`)
	.then(results => {
		let user_id = results.rows[0].id;
		return db.query(`SELECT vote_type FROM votes WHERE user_id=${user_id} AND pitch_id=${pitch_id}`);
	}).catch(err => {
		console.log('errrrr: ', err);
	});
};

module.exports.voteOnPitch = (vote_value, pitch_id, user_id) => {
  // See if user has voted on current Pitch
  return db.query(`SELECT * FROM votes WHERE user_id = ${user_id} AND pitch_id = ${pitch_id};`)
  .then(results => {
    if (results.rows[0]) {
      // If yes, then update their vote
      return db.query(`UPDATE votes SET vote_type = ${vote_value} WHERE user_id = ${user_id} AND pitch_id = ${pitch_id};`);
    } else {
      // If no then create the record
      return db.query(`INSERT INTO votes (user_id, pitch_id, vote_type) VALUES (${user_id}, ${pitch_id}, ${vote_value})`);
    }
  })
  .catch(err => console.log(err));
}

module.exports.getAllUsers = () => {
  return db.query("SELECT id, username, profile FROM users");
};

module.exports.getUserByUsername = (username) => {
  return db.query(`SELECT * FROM users WHERE username='${username}'`);
};

module.exports.getUserIdByUsername = (username) => {
  return db.query(`SELECT * FROM users where username='${username}';`);
};

module.exports.getUserByUserId = (userId) => {
  return db.query(`SELECT * FROM users where id=${userId};`);
};

module.exports.getUserByPitchId = (pitchId) => {
  return db.query(`SELECT users.* FROM users, followers where followers.pitch_id = ${pitchId} AND followers.user_id = users.id;`);
};

module.exports.deleteUserByUserId = (userId) => {
  return db.query(`DELETE FROM users where id = ${userId}`);
};

module.exports.deleteUserByUsername = (username) => {
  return db.query(`DELETE FROM users where username='${username}'`);
};

module.exports.createUser = (username, password, profile) => {
  return db.query(`INSERT INTO users (username, password, profile) VALUES ('${username}', '${password}', '${profile}')`);
};
module.exports.editUserProfileByUserId = (userId, profile) => {
  return db.query(`UPDATE users SET profile = '${profile}' WHERE id=${userId};`);
}

module.exports.editUserProfileByUsername = (username, profile) => {
  return db.query(`UPDATE users SET profile = '${profile}' WHERE username='${username}';`);
};

module.exports.getUserPassword = (userId) => {
  return db.query(`SELECT password FROM users where id=${userId};`);
};

module.exports.getUserPasswordByName = (username) => {
  return db.query(`SELECT password FROM users WHERE username='${username}'`);
};

module.exports.getUserProfile = (userId) => {
  return db.query(`SELECT username, profile FROM users WHERE id=${userId}`);
};
