import HeaderMain from '@/components/HeaderMain'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import MenuSection from '@/components/MenuSection'
import ContactSection from '@/components/ContactUsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <HeaderMain />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}
