import DefaultLayout from '@/layouts/DefaultLayout';
import ProjectsSection from '@/components/ProjectsSection';

const Projects = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen pt-20">
        <ProjectsSection />
      </div>
    </DefaultLayout>
  );
};

export default Projects;