import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase.config'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { useState } from 'react'
import RedirectButton from 'components/RedirectButton'

const AboutUsPage = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const onLogout = () => {
        auth.signOut();
        navigate('/');
    }

    const [rank, setRank] = useState(0)
    onSnapshot(doc(db, 'users', auth.currentUser.uid), (doc) => {
        setRank(doc.data().rank)
    })

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h3>Hi, {auth.currentUser.displayName}!</h3>
            <p>Position: {(rank == 0) ? "Unverified user" :
                            (rank == 1) ? "Verified user" :
                            (rank == 2) ? "Subcom member" :
                            (rank == 3) ? "Director" :
                            (rank == 4) ? "Executive" :
                            (rank == 5) ? "Superuser" :
                            "Error"}</p>
            <button onClick={onLogout}>Logout</button>
            <h2>Events</h2>
            <RedirectButton btnText="Create an Event" destination={'/eventcreation'} />
            <h2>Job Listings</h2>
            <RedirectButton btnText="Create a Job Listing" destination={'/joblistingform'} />
        </div>
    );
  };
export default AboutUsPage;