import firebase from 'firebase';
// import 'firebase/firestore';

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
        console.log('anonymous signin')
      } catch({ message }){
        alert(message);
      }
    }
  }

  get ref() {
    return firebase.database().ref('messages');
  }
  2.
  on(callback){
      this.ref
        .limitToLast(20)
        .on('child_added', snapshot => callback(this.parse(snapshot)));
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
      apiKey: "AIzaSyCWsxd92cGA3jrJHTQdM56J8XtpaFtEYt4",
      authDomain: "messageboard-ca6c8.firebaseapp.com",
      databaseURL: "https://messageboard-ca6c8.firebaseio.com",
      projectId: "messageboard-ca6c8",
      storageBucket: "messageboard-ca6c8.appspot.com",
      messagingSenderId: "969052427718",
      appId: "1:969052427718:web:2ae996c40b808298314ec7"
    })
  }
}

Fire.shared = new Fire();
export default Fire;
