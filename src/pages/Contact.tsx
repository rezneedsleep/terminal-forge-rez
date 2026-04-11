import Navbar from '@/components/navbar';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen scanlines grid-pattern">
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;