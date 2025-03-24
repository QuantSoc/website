import JobListing from 'components/JobListing/JobListing';
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { HashLink } from 'react-router-hash-link';
import { db } from '../../../firebase.config';
import './index.less';

const JobListings = ({ className = '' }) => {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsRef = collection(db, 'jobs');
        const q = query(jobsRef);
        const querySnap = await getDocs(q);
        const jbs = [];
        querySnap.forEach((doc) => {
          jbs.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setJobs(jbs);
        setLoading(false);
      } catch {
        setError(true);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className={`job-listings-section ${className}`}>
      <h1 className="events-section__header">Job Opportunities</h1>
      <div className="job-listings">
        {error ? 'There was an error, please contact the QuantSoc team.'
          : loading ? 'Loading ...' : (
            <>
              {jobs.map((job) => (
                <JobListing key={job.id} job={job.data} />
              ))}
            </>
          )}
      </div>
    </section>
  );
};

export default JobListings;
