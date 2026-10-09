import { PageHero } from '../components/sections/PageHero'
import { ShimmerButton } from '../components/fx/ShimmerButton'

export function NotFound() {
  return (
    <PageHero title="This page doesn’t exist" kicker="404">
      <p>The link may be old. Head back home or pick a service from the menu.</p>
      <div className="mt-6"><ShimmerButton to="/">Back to home</ShimmerButton></div>
    </PageHero>
  )
}
