import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import SelectedWorksSection from '../components/SelectedWorksSection'
import MobileProjectsSection from '../components/MobileProjectsSection'
import WorkExperienceSection from '../components/WorkExperienceSection'
import TestimonialsSection from '../components/TestimonialsSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import ScrollReveal from '../components/ScrollReveal'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      
      <ScrollReveal delay={0.1}>
        <SkillsSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <SelectedWorksSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <MobileProjectsSection />
      </ScrollReveal>
      
      <WorkExperienceSection />
      
      <ScrollReveal delay={0.1}>
        <TestimonialsSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <BlogSection />
      </ScrollReveal>
      
      <ScrollReveal delay={0.2}>
        <ContactSection />
      </ScrollReveal>
    </div>
  )
}

export default HomePage