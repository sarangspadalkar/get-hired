import { useEffect, useState } from 'react';
import JobListing from './JobListing';
import { type Jobs } from '../data/jobs';
import Spinner from './Spinner';

export const JobListings = () => {
  const [jobs, setJobs] = useState<Jobs>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:8000/jobs');
        const jobs = await res.json();
        setJobs(jobs);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Browse Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing key={job.id} {...job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
