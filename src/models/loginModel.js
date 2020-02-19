//importing services
import db from "../services/firebaseConnect";

function findUser(req, res, next) {
  db.collection("users")
    .where("email", "==", req.body.email)
    .get()
    .then(snapShot => {
      snapShot.docs.forEach(doc => {
        if (doc.exists) {
          req.body.hash = doc.data().password;
          console.log(req.body.hash);
          next();
        } else {
          console.log("error");
        }
      });
    });
}

export default findUser;
