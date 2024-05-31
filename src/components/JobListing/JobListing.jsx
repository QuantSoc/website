import ApplyButton from 'components/ApplyButton';
import './index.less';
import { BsFacebook, BsDiscord, BsInstagram } from 'react-icons/bs';

const JobListing = ({ job }) => {
  // console.log(job.applicationsClose);
  // const Date = job.applicationsClose.toDate()

  return (
    <div>
      <br />
      <h3>{job.title}</h3>
      <p>
        {job.company}
        {' '}
        |
        {' '}
        {job.location}
      </p>

      {(job.applicationsClose !== undefined
            && job.applicationsClose !== '')
                && (
                <p>
                  <em>
                    Applications close on
                    {job.applicationsClose.toDate().getDate()}
                    /
                    {job.applicationsClose.toDate().getMonth() + 1}
                    /
                    {job.applicationsClose.toDate().getFullYear()}
                  </em>
                </p>
                )}
      <p id="desc">{job.description}</p>
      <ApplyButton btnText="Apply" destination={job.link} />
    </div>
  );
};

export default JobListing;
