import type { SendResult } from '../../lib/forms'
import { contact } from '../../data/site'

export function FormNotice({ state }: { state: SendResult | 'invalid-email' | null }) {
  if (!state) return null
  const msg = {
    sent: 'Thanks! Your details reached us. We usually reply within 8 hours.',
    'not-connected': `This form isn't connected to an inbox yet. Please email ${contact.email} or WhatsApp ${contact.whatsapp}.`,
    error: `We couldn't send that. Check your connection and try again, or email ${contact.email}.`,
    'invalid-email': 'The two email addresses don’t match. Fix the confirmation and send again.',
  }[state]
  const good = state === 'sent'
  return (
    <p role="status" className={`rounded-2xl border px-4 py-3 text-[15px] ${good ? 'border-lilac/50 bg-lilac/10 text-bone' : 'border-tang/50 bg-tang/10 text-bone'}`}>{msg}</p>
  )
}
