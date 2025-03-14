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
          Join us with our regular workshops, competitions, games nights, company meet-and-greets, and more. 
          You can view the full listings of what we have in store on our social media accounts!
          </p>
        </div>
        <iframe className='events-item events-embed'
            src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/unswquantsoc/&tabs=timeline&small_header=true"
            allow="encrypted-media; clipboard-write; encrypted-media; picture-in-picture; web-share"
            scrolling='no'
            frameborder="0"
          />

      </div>
    </section>
  );
};
export default EventsSection;
