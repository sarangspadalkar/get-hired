import { useQuery } from '@tanstack/react-query';
import JobListing from './JobListing';
import { type Jobs } from '../data/jobs';
import Spinner from './Spinner';

const fetchJobs = async (): Promise<Jobs> => {
  const res = await fetch('http://localhost:8000/jobs');
  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return res.json();
};

export const JobListings = () => {
  const {
    data: jobs = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  });

  let content;
  if (isPending) {
    content = <Spinner loading={isPending} />;
  } else if (isError) {
    content = <p className="text-center text-red-600">Something went wrong while loading jobs.</p>;
  } else if (jobs.length === 0) {
    content = <p className="text-center text-gray-600">No jobs found.</p>;
  } else {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobListing key={job.id} {...job} />
        ))}
      </div>
    );
  }

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">Browse Jobs</h2>
        {content}
      </div>
    </section>
  );
};
