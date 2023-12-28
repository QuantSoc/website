import './index.less';
import { useState } from 'react'
import EventPreview from 'components/EventPreview';

const ResourcesPage = () => {
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
    body: ''
  })
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
    body  
  } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
    }))
  }

  return (
    <div className="page">
      <h2 id='heading'>Create an Event</h2>
      <form>
        <div className='row'>
          <p className='item'>Tag Type</p>
          <select value={tagType} id='tagType' onChange={onChange} className="form-textfield">
            <option value="trading">Mock Trading</option>
            <option value="fun">Fun & Games</option>
            <option value="career">Careers</option>
            <option value="workshop">Workshop</option>
            <option value="opportunity">Opportunity</option>
          </select>
        </div>
        <div className='row'>
          <p className='item'>Header</p>
          <input
            id="header"
            type="text"
            className="form-textfield"
            placeholder="e.g. Probability Workshop"
            value={header}
            onChange={onChange}
          />
        </div>
        <div className='row'>
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
        <div className='row'>
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
        <div className='row'>
          <p>Start date</p>
          <input
            id="startDate"
            value={startDate}
            placeholder="e.g. 30 February 2024"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div className='row'>
          <p>End date</p>
          <input
            id="endDate"
            value={endDate}
            placeholder="e.g. 51 February 2024"
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div className='row'>
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
        <div className='row'>
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
        <div className='row'>
          <p>Image URL</p>
          <input
            id="image"
            value={image}
            type="text"
            className="form-textfield"
            onChange={onChange}
          />
        </div>
        <div id='body-row'>
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
        <EventPreview formData={ formData } />
        <div id='button-container'>
          <button className="redirect-button" type="submit">Add Event</button>
        </div>
      </form>
    </div>
  );
};
export default ResourcesPage;
