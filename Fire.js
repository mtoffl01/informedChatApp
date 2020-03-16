import firebase from 'firebase';

class Fire {
  constructor(){
    this.init();
    this.observeAuth();
  }

  observeAuth(){
    console.log('observe auth', this.onAuthStateChanged)
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

  get messagesRef() {
    return firebase.database().ref('messages');
  }

  getAllUsers = () => {
    console.log('hello')
    return [];
    // let usersRef = firebase.database().ref("users");
    // return usersRef.on('value', snapshot => {
    //   console.log('snapshot', snapshot.val())
    //    return snapshot.val();
    // })
  }

  on(mode, callback){
    if(mode === 'messagesMode'){
      this.messagesRef
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
    }
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
    this.messagesRef.off();
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
append = message => this.messagesRef.push(message);

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
