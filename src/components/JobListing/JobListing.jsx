import './index.less';

const JobListing = ({ job }) => {
  return (
    <a href={job.link} target="_blank" rel="noopener noreferrer" className="job-listing">
      <div>
        <br />
        <h3>{job.title}</h3>
        <span>
          {job.company} | {job.location}
        </span>

        {job.applicationsClose && (
          <p>
            <em>
              Applications close on{' '}
              {job.applicationsClose.toDate().getDate()}/
              {job.applicationsClose.toDate().getMonth() + 1}/
              {job.applicationsClose.toDate().getFullYear()}
            </em>
          </p>
        )}

        <p id="desc">
          {job.description.length > 50
            ? `${job.description.slice(0, 150)}...`
            : job.description}
        </p>
      </div>
    </a>
  );
};

export default JobListing;
