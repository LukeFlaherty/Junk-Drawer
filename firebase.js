// const firebaseConfig = {
//   apiKey: "AIzaSyAUmYMms8LWNQmDetwR6lN4Nv_GC4ly9W0",
//   authDomain: "junk-drawer-3233d.firebaseapp.com",
//   databaseURL: "https://junk-drawer-3233d-default-rtdb.firebaseio.com",
//   storageBucket: "junk-drawer-3233d.appspot.com",
// };
// const firebaseApp = initializeApp(firebaseConfig);

// console.log(firebaseConfig);

function initializeApp() {
  const firebaseConfig = {
    apiKey: "AIzaSyAUmYMms8LWNQmDetwR6lN4Nv_GC4ly9W0",
    authDomain: "junk-drawer-3233d.firebaseapp.com",
    databaseURL: "https://junk-drawer-3233d-default-rtdb.firebaseio.com",
    storageBucket: "junk-drawer-3233d.appspot.com",
  };
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  console.log(firebaseConfig);
}
