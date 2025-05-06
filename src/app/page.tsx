import dynamic from 'next/dynamic';

const HeroSection = dynamic(
  () => import('@/components/ui/Page_Section/HeroSection')
);
const WorkProcess = dynamic(
  () => import('@/components/ui/Page_Section/WorkProcess')
);
const RefferralProgram = dynamic(
  () => import('@/components/ui/Page_Section/ReferralProgram')
);
const FrequentlyAskedQuestions = dynamic(
  () => import('@/components/ui/Page_Section/FrequentlyAskedQuestions')
);
const MessageSection = dynamic(
  () => import('@/components/ui/Page_Section/MessageSection')
);
const Footer = dynamic(() => import('@/components/ui/Page_Section/Footer'));

function page() {
  return (
    <div>
      <HeroSection />
      <WorkProcess />
      <RefferralProgram />
      <FrequentlyAskedQuestions />
      <MessageSection />
      <Footer />
    </div>
  );
}

export default page;
