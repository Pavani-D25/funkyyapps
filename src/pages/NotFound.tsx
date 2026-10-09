import { PageHero } from '@/components/sections/PageHero'
import { Cta } from '@/components/Cta'

export function NotFound() {
  return (
    <PageHero title="This page doesn’t exist" kicker="404">
      <p>The link may be old. Head back home or pick a service from the menu.</p>
      <div className="mt-6"><Cta to="/">Back to home</Cta></div>
    </PageHero>
  )
}
