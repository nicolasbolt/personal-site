import Hero from '@/components/service-areas/indianapolis/Hero';
import LocalSection from '@/components/service-areas/indianapolis/LocalSection';
import WhyMe from '@/components/service-areas/indianapolis/WhyMe';
// import Services from '@/components/service-areas/indianapolis/Services';
import Work from '@/components/landing/Work';
import CTA from '@/components/landing/CTA';

const IndianapolisWebDesign = () => {
  return (
    <div>
      <Hero />
      <LocalSection />
      <WhyMe />
      {/* <Services /> */}
      <Work />
      <CTA />
    </div>
  )
}

export default IndianapolisWebDesign
