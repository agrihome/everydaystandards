
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
      <section>
        <AgencyHeroSection />
      </section>


      {/* about-us-section-01 */}
      <section>
        <AboutAndStats01 />
      </section>


      {/* feature-02 */}
      <section>
        <Feature02 />
      </section>


      {/* logo-cloud-01 */}
      <section>
        <LogoCloudDemo />
      </section>


      {/* services-01 */}
      <section>
        <Services />
      </section>


      {/* gallery-01 */}
      <section>
        <Gallery />
      </section>




      {/* pricing-01 */}
      <section>
        <Pricing />
      </section>

      {/* faq-01 */}
      <section>
        <Faq />
      </section>



      {/* cta-01 */}
      <section>
        <CTA />
      </section>


      {/* footer-02 */}
      <section>
        <Footer />
      </section>

    </div>
  )
}
