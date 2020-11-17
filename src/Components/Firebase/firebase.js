import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: "1:288979098170:web:86c1c639dc72f096fef303",
  measurementId: "G-2SE488KVTL",
};
class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.storage = firebase.storage();
  }
  //login
  async login(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
        return err;
      });
    return user;
  }

  async organization() {
    const dbO = await firebase.firestore().collection("organization");
    return dbO;
  }
  async fundation() {
    const dbF = await firebase.firestore().collection("fundation");
    return dbF;
  }
  async collection() {
    const dbC = await firebase.firestore().collection("collection");
    return dbC;
  }

  //signin
  async signin(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
        return err;
      });
    return user;
  }

  //logout
  async logout() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch((err) => {
        console.log(err);
        return err;
      });
    return logout;
  }

  async getUserState() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  async getPosts() {
    let postsArray = [];
    const posts = await firebase.firestore().collection("Posts").get();
    posts.forEach((doc) => {
      postsArray.push({ id: doc.id, data: doc.data() });
    });
    return postsArray;
  }

  async createPost(url, post) {
    const fileRef = await firebase.storage().refFromURL(url);

    let newPost = {
      title: post.title,
      content: post.content,
      cover: url,
      fileref: fileRef.location.path,
    };

    const firestorePost = await firebase
      .firestore()
      .collection("Posts")
      .add(newPost)
      .catch((err) => {
        console.log(err);
      });

    return firestorePost;
  }

  async updatePost(url, postid, postData) {
    if (postData["cover"]) {
      const fileRef = await firebase.storage().refFromURL(url);

      await this.storage
        .ref()
        .child(postData["oldcover"])
        .delete()
        .catch((err) => {
          console.log(err);
        });

      let updatedPost = {
        title: postData.title,
        content: postData.content,
        cover: url,
        fileref: fileRef.location.path,
      };

      const post = await firebase
        .firestore()
        .collection("Posts")
        .doc(postid)
        .set(updatedPost, { merge: true })
        .catch((err) => {
          console.log(err);
        });
      return post;
    } else {
      const post = await firebase
        .firestore()
        .collection("Posts")
        .doc(postid)
        .set(postData, { merge: true })
        .catch((err) => {
          console.log(err);
        });
      return post;
    }
  }

  async deletePost(postid, fileref) {
    const storageRef = firebase.storage().ref();
    await storageRef
      .child(fileref)
      .delete()
      .catch((err) => {
        console.log(err);
      });
    console.log("Image Deleted");
    const post = await firebase
      .firestore()
      .collection("Posts")
      .doc(postid)
      .delete()
      .catch((err) => {
        console.log(err);
      });
    console.log("Post Deleted");

    return post;
  }
}

export default new Firebase();