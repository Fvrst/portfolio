import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import MobileProjectsSection from '../components/MobileProjectsSection'
import WorkExperienceSection from '../components/WorkExperienceSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ProjectGallerySection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import ScrollReveal from '../components/ScrollReveal'

// SelectedWorksSection removed - replaced by ProjectGallerySection
// import SelectedWorksSection from '../components/SelectedWorksSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <ScrollReveal delay={0.1}>
        <SkillsSection />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <MobileProjectsSection />
      </ScrollReveal>

      <WorkExperienceSection />

      <ScrollReveal delay={0.1}>
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <ProjectGallerySection />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <ContactSection />
      </ScrollReveal>
    </div>
  )
}

export default HomePage
