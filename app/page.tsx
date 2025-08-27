import { Navigation } from "@/components/global/navigation"

import { Footer } from "@/components/global/footer"
import { Loader } from "@/components/global/loader"

import { LogoSlider, CoreAdvantageSection, CryptoCardSection, FeatureSection, HeroSection, PerformanceAnalyticSection, StatisticsSection, SubscriptionPlanSection, TestimonialsSection, CTASection, WhyChooseSection } from "@/sections";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-mulyantaran-black ">
      <Loader />
      <Navigation />
      <HeroSection />
      <LogoSlider />
      <StatisticsSection/>
      <WhyChooseSection/>
      <CoreAdvantageSection/>
      <PerformanceAnalyticSection/>
      <CryptoCardSection/>
      <SubscriptionPlanSection/>
      <TestimonialsSection/>
      <CTASection/>
      <Footer />
    </main>
  );
}
