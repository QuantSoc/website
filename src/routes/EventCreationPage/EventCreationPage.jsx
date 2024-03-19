import './index.less';
import { useState, useEffect, useRef } from 'react';
import EventPreview from 'components/EventPreview';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
  doc, onSnapshot, addDoc, collection,
} from 'firebase/firestore';
import { db } from '../../firebase.config';

const EventCreationPage = () => {
  const [formData, setFormData] = useState({
    tagType: 'trading',
    header: '',
    showAsEvent: 'true',
    location: '',
    sublocation: '',
    startDate: '',
    endDate: '',
    times: '',
    cohosts: '',
    image: '',
    link: '',
    body: '',
  });
  const {
    tagType,
    header,
    showAsEvent,
    location,
    sublocation,
    startDate,
    endDate,
    times,
    cohosts,
    image,
    link,
    body,
  } = formData;

  const onChange = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, useRef: user.uid });
        } else {
          navigate('/boardlogin');
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  const [rank, setRank] = useState(0);
  onSnapshot(doc(db, 'users', auth.currentUser.uid), (doc) => {
    setRank(doc.data().rank);
  });

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formDataCopy = { ...formData };
    formDataCopy.author = auth.currentUser.displayName;
    await addDoc(collection(db, 'events'), formDataCopy);
    navigate('/admin');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page">
      <h2 id="heading">Create an Event</h2>
      <form onSubmit={onSubmit}>
        <div className="row">
          <p className="item">Tag Type</p>
          <select value={tagType} id="tagType" onChange={onChange} className="form-textfield">
            <option value="trading">Mock Trading</option>
            <option value="fun">Fun & Games</option>
            <option value="career">Careers</option>
            <option value="workshop">Workshop</option>
            <option value="opportunity">Opportunity</option>
            <option value="stall">Stall</option>
          </select>
        </div>
        <div className="row">
          <p className="item">Header</p>
          <input
            id="header"
            type="text"
            className="form-textfield"
            placeholder="e.g. Probability Workshop"
            value={header}
            onChange={onChange}
          />
        </div>
        <div className="row">
          <p>Location</p>
          <input
            id="location"
            type="text"
            className="form-textfield"
            placeholder="e.g. UNSW"
            value={location}
            onChange={onChange}
          />
        </div>
        <div className="row">
          <p>Sublocation</p>
          <input
            id="sublocation"
            value={sublocation}
            placeholder="e.g. Quadrangle 4001"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div className="row">
          <p>Start date</p>
          <input
            id="startDate"
            value={startDate}
            placeholder="e.g. 30 March 2024"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div className="row">
          <p>End date</p>
          <input
            id="endDate"
            value={endDate}
            placeholder="e.g. 31 March 2024"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div className="row">
          <p>Times</p>
          <input
            id="times"
            value={times}
            placeholder="e.g. 5pm - 7pm"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div className="row">
          <p>Co-hosts</p>
          <input
            id="cohosts"
            value={cohosts}
            placeholder="e.g. PiSoc"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div className="row">
          <p>Image URL</p>
          <input
            id="image"
            value={image}
            placeholder="*include the https://"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div className="row">
          <p>Link</p>
          <input
            id="link"
            value={link}
            placeholder="*include the https://"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div id="body-row">
          <p>Body</p>
          <textarea
            id="body"
            value={body}
            onChange={onChange}
            name="content"
            rows={10}
            cols={75}
            placeholder="e.g. Are YOU a student interested in what options trading is?..."
          />
        </div>
        <h3>Preview</h3>

        <div className="preview-section">
          <EventPreview className="preview" formData={formData} />
        </div>

        <p>
          Event creator:
          <em>{auth.currentUser.displayName}</em>
        </p>
        {(rank < 3) ? 'You do not have permission to create an event, please contact Sam T for account verification.' : (
          <div id="button-container">
            <button className="redirect-button" type="submit">Add Event</button>
          </div>
        )}
      </form>
    </div>
  );
};
export default EventCreationPage;

// <p onClick={() => navigate("/admin")}>Admin Dashboard</p>
