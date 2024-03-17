import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase.config'
import RedirectButton from 'components/RedirectButton'
import './index.less'

function OAuth() {
  const navigate = useNavigate()
  const [error, setError] = useState(false)

  const onGoogleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      
      // Check for user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)

      // If user, doesn't exist, create user
      if (!docSnap.exists()) {
        
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
          rank: 0,
        })
      }
      navigate('/admin')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div>
      <div id='button-container'>
        <button className="redirect-button" onClick={onGoogleClick}>Login with Google</button>
      </div>
      {error && 
        <div>
          <span>Google Authentication Failed</span>
        </div>}
    </div>
  )
}

export default OAuth