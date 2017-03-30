
var pitches = require('./Pitches.js');
var followers = require('./Followers.js');
var categories = require('./Categories.js');
var users = require('./Users.js');
var votes = require('./Votes.js');
var comments = require('./Comments.js');


module.exports.loadData = function() {
users.createUser('User1', '123', 'Profile for User1');
users.createUser('User2', '123', 'Profile for User2');
users.createUser('User3', '123', 'Profile for User3');


pitches.addPitch(1, 'Pitch 1', 'Pitch 1 Video URL', 'Pitch 1 Website URL', 'Pitch 1 Profile', 'Pitch 1 Blurb', '1');
pitches.addPitch(2, 'Pitch 2', 'Pitch 2 Video URL', 'Pitch 2 Website URL', 'Pitch 2 Profile', 'Pitch 2 Blurb', '2');

followers.postNewPitchFollower(1, 1);
followers.postNewPitchFollower(1, 2);
followers.postNewPitchFollower(2, 2);
followers.postNewPitchFollower(2, 1);

categories.addCategory('Tech');
categories.addCategory('Games');
categories.addCategory('Books');
categories.addCategory('iPhone');
categories.addCategory('Android');
categories.addCategory('Productivity');

votes.voteOnPitch(1, 1, 1);
votes.voteOnPitch(1, 2, -1);
votes.voteOnPitch(2, 1, -1);
votes.voteOnPitch(2, 2, 0);

comments.createCommentInComments('Hello', 1, 1);
comments.createCommentInComments('Yo', 2, 1);
comments.createCommentInComments('What', 3, 1);
comments.createCommentInComments('No', 1, 1);
}