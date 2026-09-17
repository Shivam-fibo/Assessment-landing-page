import Hero from "@/src/Hero";
import StatsSection from "@/src/StatsSection";
import FeatureShowcase from "@/src/FeatureShowcase";
import CommunitySection from "@/src/CommunitySection";
import LiveMonitoringSection from "@/src/LiveMonitoringSection";
import CtaBanner from "@/src/CtaBanner";
// import IntegrationsSection from "@/src/IntegrationsSection";
import FaqSection from "@/src/FaqSection";
import TestimonialsSection from "@/src/TestimonialsSection";
import Footer from "@/src/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <FeatureShowcase />
      <CommunitySection />
      <LiveMonitoringSection />
      <CtaBanner />
      {/* <IntegrationsSection /> */}
      <FaqSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}