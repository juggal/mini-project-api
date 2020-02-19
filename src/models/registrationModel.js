//importing services
import db from "../services/firebaseConnect";

function createUser(data) {
  db.collection("users")
    .add(data)
    .then(documentRef => {
      console.log(`Reference path to document:${documentRef.path}`);
    });
}

export default createUser;
