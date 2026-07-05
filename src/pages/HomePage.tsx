import Hero from '../components/Hero';
import { JobListings } from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';
import { Cards } from '../components/Cards';

const HomePage = () => {
  return (
    <>
      <Hero
        title="Find Your Dream Job"
        subtitle="Browse our latest React jobs and start your career today"
      />
      <Cards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};
export default HomePage;
