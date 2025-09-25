import DefaultLayout from '@/layouts/DefaultLayout';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen pt-20">
        <ContactSection />
      </div>
    </DefaultLayout>
  );
};

export default Contact;