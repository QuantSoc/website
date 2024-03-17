import JobListing from 'components/JobListing/JobListing';
import { useEffect, useState } from 'react'
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  doc,
  onSnapshot
} from 'firebase/firestore'
import { db } from '../../../firebase.config'
import { HashLink } from 'react-router-hash-link';
import './index.less'

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
					//orderBy('title', 'desc')
				)
				const querySnap = await getDocs(q);
				const jobs = [];
				querySnap.forEach((doc) => {
					return jobs.push({
						id: doc.id,
						data: doc.data(),
					})
				})
				setJobs(jobs);
				setLoading(false);
			} catch (error) {
				setError(true);
			}
		}
		fetchJobs()
	}, [])

    return (
    	<div className='job-listings'>
			{error ? 'There was an error, please contact the QuantSoc team.' :
				loading ? 'Loading ...' : <>
					{jobs.map((job) => (
						<JobListing job={job.data} />
					))}
				</>
			}
		</div>
    );
  };
  export default JobListings;