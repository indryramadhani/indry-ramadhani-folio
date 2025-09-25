import DefaultLayout from '@/layouts/DefaultLayout';
import AboutSection from '@/components/AboutSection';

const About = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen pt-20">
        <AboutSection />
      </div>
    </DefaultLayout>
  );
};

export default About;