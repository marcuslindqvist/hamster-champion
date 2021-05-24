var admin = require("firebase-admin");

let serviceAccount;

if (process.env.PRIVATE_KEY) {
  //på heroku
  serviceAccount = JSON.parse(process.env.PRIVATE_KEY);
} else {
  //lokalt
  serviceAccount = require("./admin-key.json");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

function getDatabase() {
  return admin.firestore();
}

module.exports = getDatabase;
