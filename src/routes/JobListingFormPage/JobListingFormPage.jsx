import { useState, useEffect, useRef } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase.config'
import { doc, onSnapshot, addDoc, collection } from 'firebase/firestore'

const JobListingFormPage = () => {
  const [formData, setFormData] = useState({
    applicationsClose: '',
    location: '',
    title: '',
    company: '',
    link: '',
    description: ''
  })
  const {
    location,
    title,
    company,
    applicationsClose,
    description,
    link
  } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
    }))
  }

  const [loading, setLoading] = useState(false)
  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true)

  useEffect(() => {
    if(isMounted) {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setFormData({...formData, useRef: user.uid})
            } else {
                navigate('/boardlogin')
            }
        })
    }
    return () => {
        isMounted.current = false
    }
  }, [isMounted])

  const [rank, setRank] = useState(0)
  onSnapshot(doc(db, 'users', auth.currentUser.uid), (doc) => {
      setRank(doc.data().rank)
  })

  const onSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const formDataCopy = {...formData}
    formDataCopy.author = auth.currentUser.displayName;
    await addDoc(collection(db, 'jobs'), formDataCopy)
    navigate('/admin')
  }

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <div className="page">
      <h2 id='heading'>Create a Job Listing</h2>
      <form onSubmit={onSubmit}>
        <div className='row'>
          <p>Job Title</p>
          <input
            id="title"
            value={title}
            placeholder="e.g. Trading Intern"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div className='row'>
          <p className='item'>Company</p>
          <input
            id="company"
            type="text"
            className="form-textfield"
            placeholder="e.g. Lehman Brothers"
            value={company}
            onChange={onChange}
          />
        </div>
        <div className='row'>
          <p>Location</p>
          <input
            id="location"
            type="text"
            className="form-textfield"
            placeholder="e.g. Sydney, Australia"
            value={location}
            onChange={onChange}
          />
        </div>
      
        <div className='row'>
          <p>Applications Close</p>
          <input
            id="applicationsClose"
            value={applicationsClose}
            placeholder="e.g. 1 July 2024 (optional)"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div className='row'>
          <p>Application Link</p>
          <input
            id="link"
            value={link}
            placeholder="*include the https://"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div id='body-row'>
          <p>Description</p>
          <textarea 
            id="body"
            value={description}
            onChange={onChange}
            name="content"
            rows={7} 
            cols={75}
            placeholder="Brief role description"
          />
        </div>
        <p>Listing creator: <em>{auth.currentUser.displayName}</em></p>
        {(rank < 3) ? "You do not have permission to create an event, please contact Sam T for account verification." :
          <div id='button-container'>
            <button className="redirect-button" type="submit">Add Job Listing</button>
          </div>
        }        
      </form>
    </div>
  );
};
export default JobListingFormPage;