import { Router } from "express";
import bodyParser from "body-parser";

//services
import firestore from "../services/firebaseConnect";

const router = Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res) => {
  //   firestore
  //     .collection("test")
  //     .get()
  //     .then(snapShot => {
  //       snapShot.docs.forEach(doc => {
  //         console.log(doc.data().name);
  //       });
  //     });

  //   firestore
  //     .collection("test")
  //     .add(req.body)
  //     .then(documentRef => {
  //       console.log(`Added document at ${documentRef.path}`);
  //     });

  //   firestore
  //     .collection("test")
  //     .doc("zzCYtK5oj6vCJbOYyTOl")
  //     .delete();

  //   firestore
  //     .collection("test")
  //     .where("name", ">", "o")
  //     .get()
  //     .then(snapShot => {
  //       snapShot.docs.forEach(doc => {
  //         console.log(doc.data());
  //       });
  //     });

  //   firestore
  //     .collection("test")
  //     .orderBy("name")
  //     .get()
  //     .then(snapShot => {
  //       snapShot.docs.forEach(doc => {
  //         console.log(doc.data());
  //       });
  //     });

  res.send("Done");
});

export default router;
