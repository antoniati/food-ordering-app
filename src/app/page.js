import HeaderMain from '@/components/HeaderMain'
import HeaderSection from '@/components/HeaderSection'
import HeroSection from '@/components/HeroSection'

export default function Home() {
  return (
    <>
      <HeaderMain />
      <HeroSection />
      <section>
        <HeaderSection
          subTitle={"Conheça nosso"}
          mainTitle={"Menu"}
        />
      </section>
    </>
  )
}
