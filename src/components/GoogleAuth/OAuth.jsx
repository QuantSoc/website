import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {
  doc, setDoc, getDoc, serverTimestamp,
} from 'firebase/firestore';
import RedirectButton from 'components/RedirectButton';
import { db } from '../../firebase.config';
import './index.less';

const OAuth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const { user } = result;

      // Check for user
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      const preVerified = ['unsw.quantsoc@gmail.com',
        'victor.tang423@gmail.com',
        'albert.yan1104@gmail.com',
        'antonragusa0@gmail.com',
        'austinhoe15@gmail.com',
        'helenwang1801@outlook.com',
        'henrytang50@gmail.com',
        'jackylv0216@gmail.com',
        'joshuazhang999666@gmail.com',
        'li.andrew9265@gmail.com',
        'mikhail.savkin0@gmail.com',
        'mli.maria383@gmail.com',
        'PeteTheBossch1@gmail.com',
        'sam.axford02@gmail.com',
        'samtr0211@gmail.com',
        'sankalpatripathee@gmail.com',
        'veneciayong@gmail.com',
        'vncnt.lim2002@gmail.com',
      ];

      // If user, doesn't exist, create user
      if (!docSnap.exists()) {
        if (preVerified.includes(user.email)) {
          await setDoc(doc(db, 'users', user.uid), {
            name: user.displayName,
            email: user.email,
            timestamp: serverTimestamp(),
            rank: 3,
          });
        } else {
          await setDoc(doc(db, 'users', user.uid), {
            name: user.displayName,
            email: user.email,
            timestamp: serverTimestamp(),
            rank: 0,
          });
        }
      }
      navigate('/admin');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
      <div id="button-container">
        <button className="redirect-button" onClick={onGoogleClick}>Login with Google</button>
      </div>
      {error
        && (
        <div>
          <span>Google Authentication Failed</span>
        </div>
        )}
    </div>
  );
};

export default OAuth;
