import JobListing from 'components/JobListing/JobListing';
import { useEffect, useState } from 'react';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  doc,
  onSnapshot,
} from 'firebase/firestore';
import { HashLink } from 'react-router-hash-link';
import { db } from '../../../firebase.config';
import './index.less';

const JobListings = () => {
  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsRef = collection(db, 'jobs');
        const q = query(
          jobsRef,
          // orderBy('title', 'desc')
        );
        const querySnap = await getDocs(q);
        const jbs = [];
        querySnap.forEach((doc) => {
          return jbs.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setJobs(jobs);
        setLoading(false);
      } catch {
        setError(true);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="job-listings">
      {error ? 'There was an error, please contact the QuantSoc team.'
        : loading ? 'Loading ...' : (
          <>
            {jobs.map((job) => {
              return (
                <JobListing job={job.data} />
              );
            })}
          </>
        )}
    </div>
  );
};
export default JobListings;
