import firebase from 'firebase';
import 'firebase/firestore';

var messagesDB = null;
class Fire {
  constructor(){
    this.init();
    this.observeAuth();
  }

  observeAuth(){
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged)
  }

  onAuthStateChanged(user){
    if(!user){
      try{
        firebase.auth().signInAnonymously();
      } catch({ message }){
        alert(message);
      }
    }
  }

  get ref() {
    return firebase.database().ref('messages');
  }
  // 2.
  // on(callback){
  //     this.ref
  //       .limitToLast(20)
  //       .on('child_added', snapshot => callback(this.parse(snapshot)));
  // }
  on(callback){
    const msgs = messagesDB
      .limit(20);
      // console.log('messagesDB', messagesDB)
      // const query = messagesDB.where("text", "==", "my first message");
      console.log('msg', msgs)
      // .on('child_added', snapshot => callback(this.parse(snapshot)));
}
  // 3.
  parse(snapshot){
    // 1.
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    // 2.
    const timestamp = new Date(numberStamp);
    // 3.
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
   return message;
  };
  // 4.
  off() {
    this.ref.off();
  }

  // 1.
get uid() {
  return (firebase.auth().currentUser || {}).uid;
}
// 2.
get timestamp() {
  return firebase.database.ServerValue.TIMESTAMP;
}

// 3.
send = messages => {
  for (let i = 0; i < messages.length; i++) {
    const { text, user } = messages[i];
    // 4.
    const message = {
      text,
      user,
      timestamp: this.timestamp,
    };
    this.append(message);
  }
};
// 5.
append = message => this.ref.push(message);

  init(){
    firebase.initializeApp({
      apiKey: "AIzaSyDGj8WG28z_nMX0hFXOJCy677N6pIHLunk",
      authDomain: "my-first-e0b82.firebaseapp.com",
      databaseURL: "https://my-first-e0b82.firebaseio.com",
      projectId: "my-first-e0b82",
      storageBucket: "my-first-e0b82.appspot.com",
      messagingSenderId: "483752727278",
      appId: "1:483752727278:web:1777a9d54d76e653d2d9ff",
      measurementId: "G-743ZX52G67"
    })
    messagesDB = firebase.firestore().collection("messages");
  }
}

Fire.shared = new Fire();
export default Fire;
