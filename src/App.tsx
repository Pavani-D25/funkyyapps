import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Seo } from './pages/Seo'
import { TabServicePage } from './pages/TabServicePage'
import { WebDev } from './pages/WebDev'
import { Mobile } from './pages/Mobile'
import { Shop } from './pages/Shop'
import { Faqs } from './pages/Faqs'
import { Consult } from './pages/Consult'
import { Terms } from './pages/Terms'
import { QuestionnairePage } from './pages/Questionnaire'
import { NotFound } from './pages/NotFound'
import { paidSocial, ppc } from './data/services'
import { questionnaires } from './data/pages'

// HashRouter works on any static host with zero server config. On Vercel/Netlify you can
// switch to BrowserRouter and add a rewrite to index.html for clean URLs.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="seo-services" element={<Seo />} />
          <Route path="paid-social-media" element={<TabServicePage key="social" data={paidSocial} />} />
          <Route path="ppc-services" element={<TabServicePage key="ppc" data={ppc} />} />
          <Route path="website-development" element={<WebDev />} />
          <Route path="mobile-app-development" element={<Mobile />} />
          <Route path="shop" element={<Shop />} />
          <Route path="faqs" element={<Faqs />} />
          <Route path="consult" element={<Consult />} />
          <Route path="terms-and-conditions" element={<Terms />} />
          {questionnaires.map((q) => <Route key={q.slug} path={q.slug} element={<QuestionnairePage key={q.slug} q={q} />} />)}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
