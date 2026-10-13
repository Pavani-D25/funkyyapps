import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { Layout } from './components/layout/Layout'
import { questionnaireLinks } from './data/site'
import { pageLoaders } from './pages/loaders'

const Home = lazy(pageLoaders.Home)
const About = lazy(pageLoaders.About)
const Seo = lazy(pageLoaders.Seo)
const PaidSocial = lazy(pageLoaders.PaidSocial)
const Ppc = lazy(pageLoaders.Ppc)
const WebDev = lazy(pageLoaders.WebDev)
const Mobile = lazy(pageLoaders.Mobile)
const Shop = lazy(pageLoaders.Shop)
const Pricing = lazy(pageLoaders.Pricing)
const Faqs = lazy(pageLoaders.Faqs)
const Consult = lazy(pageLoaders.Consult)
const Terms = lazy(pageLoaders.Terms)
const QuestionnairePage = lazy(pageLoaders.QuestionnairePage)
const NotFound = lazy(pageLoaders.NotFound)

// Clean URLs: on Vercel, vercel.json rewrites every path to index.html; `vite preview` does the same locally.
export default function App() {
  return (
    // reducedMotion="user": every Motion animation drops transforms when the OS asks for less motion
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="seo-services" element={<Seo />} />
            <Route path="paid-social-media" element={<PaidSocial />} />
            <Route path="ppc-services" element={<Ppc />} />
            <Route path="website-development" element={<WebDev />} />
            <Route path="mobile-app-development" element={<Mobile />} />
            <Route path="shop" element={<Shop />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="consult" element={<Consult />} />
            <Route path="terms-and-conditions" element={<Terms />} />
            {questionnaireLinks.map((q) => { const slug = q.to.slice(1); return <Route key={slug} path={slug} element={<QuestionnairePage key={slug} slug={slug} />} /> })}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}
