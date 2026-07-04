import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Cards } from './components/Cards';
import { JobListings } from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

export const App = () => {
  return (
    <>
      <Navbar />
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
