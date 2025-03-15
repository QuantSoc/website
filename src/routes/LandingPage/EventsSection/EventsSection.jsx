import EventsCarousel from 'components/EventsCarousel';

import './index.less'

const EventsSection = () => {
  return (
    <section className="events-section">
      <div className='events-container'>
        <div className='events-item events-text-container'>
        <h1 className="events-section__header">Events</h1>
          <p>
          We offer a wide variety of events to have fun, learn new skills, and network. 
          Check out the full listings for what we have in store on the QuantSoc Discord and Facebook page!
          </p>
        </div>
        <div className="events-item events-embed-container">
          <iframe className='events-embed'
              src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/unswquantsoc/&tabs=timeline&small_header=true"
              allow="encrypted-media; clipboard-write; encrypted-media; picture-in-picture; web-share"
              scrolling='no'
              frameBorder="0"
          />
        </div>


      </div>
    </section>
  );
};
export default EventsSection;
