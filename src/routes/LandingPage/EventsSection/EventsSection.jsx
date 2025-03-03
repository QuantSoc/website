import EventsCarousel from 'components/EventsCarousel';

import './index.less'

const EventsSection = () => {
  return (
    <section className="events-section">
      <h1 className="events-section__header">Empowering Quantitative Futures</h1>
      <div className='events-container'>
        <div className='events-item events-text-container'>
          <p>
          We are the Quantitative Finance and Trading Society of UNSW.<br/><br/>We offer a wide variety of events for fun, learning new skills, and networking opportunities. 
          Join us with our regular workshops, competitions, games nights, company meet-and-greets, and more. You can view just what we have in store on our social media!
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
