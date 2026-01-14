import LandingImage from "./components/LandingImage";
import IntroductionSection from "./components/sections/IntroductionSection";
import ExploreSection from "./components/sections/ExploreSection";
import FeaturedSpeakersSection from "./components/sections/FeaturedSpeakersSection";
import InsightsSection from "./components/sections/InsightsSection";
import EventAgendaSection from "./components/sections/EventAgendaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <LandingImage />
      <IntroductionSection />
      <ExploreSection />
      <FeaturedSpeakersSection />
      <InsightsSection />
      <EventAgendaSection />
      <Footer />
    </>
  );
}
