const dbPitches = require('./../db/Pitches');
const dbUsers = require('./../db/Users');

module.exports.pitchEnrichment = (req, res) => {
  const { userId, pitchId } = req.query;
  var username;
  var pitchName;
  var blurb;
  var timestamp;
  dbUsers.getUsernameByUserId(userId)
  .then((results) => {
    username = results.rows[0].username;
    dbPitches.getPitchNameAndBlurbByPitchId(pitchId).then((results) => {
      pitchName = results.rows[0].name;
      blurb = results.rows[0].blurb;
      timestamp = results.rows[0].timestamp;
        res.send(JSON.stringify({username: username, pitchName: pitchName, blurb: blurb, timestamp: timestamp}));
    })
  }).catch(error => res.status(404).send(error));
};
