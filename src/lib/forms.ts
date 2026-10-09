// Point this at Formspree, Web3Forms, a Supabase function, etc. Leave empty and the forms
// tell visitors to reach out by email/WhatsApp instead of pretending to send.
export const FORM_ENDPOINT = ''

export type SendResult = 'sent' | 'not-connected' | 'error'

export async function sendForm(form: HTMLFormElement, subject: string): Promise<SendResult> {
  if (!FORM_ENDPOINT) return 'not-connected'
  try {
    const data = new FormData(form)
    data.append('_subject', subject)
    const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
    return res.ok ? 'sent' : 'error'
  } catch {
    return 'error'
  }
}
