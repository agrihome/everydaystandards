
'use client'

import AboutAndStats01 from '@/components/shadcn-space/blocks/about-us-01/index'
import CTA from '@/components/shadcn-space/blocks/cta-01/cta'
import Faq from '@/components/shadcn-space/blocks/faq-01/faq'
import Feature02 from '@/components/shadcn-space/blocks/feature-02/index'
import Footer from '@/components/shadcn-space/blocks/footer-02/footer'
import Gallery from '@/components/shadcn-space/blocks/gallery-01/gallery'
import AgencyHeroSection from '@/components/shadcn-space/blocks/hero-01/index'
import LogoCloudDemo from '@/components/shadcn-space/blocks/logo-cloud-01/logo-cloud'
import Pricing from '@/components/shadcn-space/blocks/pricing-01/pricing'
import Services from '@/components/shadcn-space/blocks/services-01/services'



export default function Page() {
  return (
    <div>

      {/* hero-01 */}
      <section id="hero">
        <AgencyHeroSection />
      </section>

      {/* pricing-01 */}
      <section id="pricing">
        <Pricing />
      </section>


      {/* feature-02 */}
      <section id="features">
        <Feature02 />
      </section>





      {/* faq-01 */}
      <section id="faq">
        <Faq />
      </section>



      {/* cta-01 */}
      <section id="contact">
        <CTA />
      </section>


      {/* footer-02 */}
      <section>
        <Footer />
      </section>

    </div>
  )
}
