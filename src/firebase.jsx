import firebase from 'firebase';

// App's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCugWjRiIlkR4ddOhII0D1in3l3DkWGJhk',
	authDomain: 'markdown-previewer-e2cdb.firebaseapp.com',
	databaseURL: 'https://markdown-previewer-e2cdb.firebaseio.com',
	projectId: 'markdown-previewer-e2cdb',
	storageBucket: 'markdown-previewer-e2cdb.appspot.com',
	messagingSenderId: '512506420964',
	appId: '1:512506420964:web:ace436d8b85819499516f1'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
