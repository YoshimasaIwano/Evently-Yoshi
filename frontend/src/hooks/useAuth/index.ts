// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   User,
// } from 'firebase/auth'
// import { doc, setDoc, getDoc } from 'firebase/firestore'
// import { useState } from 'react'

// import { auth, firestore } from '../../../../utils/firebase'

// export const useAuth = () => {
//   const [email, setEmail] = useState<string>('')
//   const [password, setPassword] = useState<string>('')

//   const handleEmailAuth = async () => {
//     try {
//       const results = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password,
//       )
//       if (results.user) {
//         await handleSaveUser(results.user)
//       }
//     } catch (error) {
//       console.error('Error signing up with email and password', error)
//     }
//   }

//   const handleGoogleAuth = async () => {
//     const provider = new GoogleAuthProvider()
//     try {
//       const results = await signInWithPopup(auth, provider)
//       if (results.user) {
//         await handleSaveUser(results.user)
//       }
//     } catch (error) {
//       console.error('Error signing up with Google', error)
//     }
//   }

//   const handleSaveUser = async (user: User) => {
//     const userRef = doc(firestore, 'users', user.uid)

//     const userData = await getDoc(userRef)
//     if (!userData.exists()) {
//       try {
//         await setDoc(userRef, {
//           displayName: user.displayName,
//           email: user.email,
//           uid: user.uid,
//           photoURL: user.photoURL || null,
//         })
//       } catch (error) {
//         console.error('Error adding user data to Firestore:', error)
//       }
//     }
//   }

//   return {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleEmailAuth,
//     handleGoogleAuth,
//     handleSaveUser,
//   }
// }

export {}