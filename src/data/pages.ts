// Copy carried over from funkyyapps.com.

export const about = {
  title: 'About FunkyyApps',
  intro: [
    'At FunkyyApps, our first priority is keeping our clients happy and exceeding their expectations. Our combined over 100+ years of experience in CREATIVE AND ELEGANT DESIGNS, and providing customized solutions, makes working with us virtually stress-free.',
    'We work diligently with clients to ensure we build them exactly what they have envisioned without any compromise. All of our clients receive a product they are satisfied with. Our expertise and experience in different industries is passed through each and every one of our builds.',
  ],
  ribbon: ['6 Years of Excellence', 'Over 120 Satisfied Clients', 'Completion of 200+ Successful Projects', 'Leadership in the Field'],
  build: ['We Build', 'Your "Dreams"'],
  stats: [
    { value: 6, suffix: '', label: 'Years of Excellence' },
    { value: 15, suffix: '+', label: 'Expert Professionals' },
    { value: 200, suffix: '+', label: 'Successful Projects' },
  ],
  blocks: [
    { title: 'Integrated Digital Marketing', text: 'For over 6 years, FA has partnered with businesses across every major industry to make amazing products and connect the dots between people, products, and business opportunities. Now, in an increasingly digital world that places the consumer at the center of every interaction, we’re showing businesses how they can connect the dots back to consumers, innovate within predictable budgets, and bring the next generation of digital products and services to market.' },
    { title: 'Digital Advertising & Social Marketing Campaigns', text: 'Reach likely customers with your products, features, and services in the best ad formats. Reach new customers with ads on Facebook, Instagram or Google. Start today. Target the right audience with the right strategy & approach.' },
    { title: 'Audits', text: "Take the guesswork out with our audits, which is a comprehensive review of a business's online presence and marketing efforts. Think of it as a check-up for your virtual presence, helping you understand what's working, what's not, and where you can optimize your campaigns for better results, or start a new one." },
    { title: 'How FA helps', text: 'FA helps businesses create value across the entire product lifecycle — from building innovative apps to keeping mature products relevant for today’s digital consumers. With experience-led design strategy, we help reimagine customer engagement, product development, and speed to market. We go beyond trends, delivering breakthroughs that disrupt industries and drive success.' },
  ],
}

// Stats shown on Paid Social and PPC pages (the live site's counters render as 0;
// these values come from the About page and service copy).
export const marketingStats = [
  { value: 200, suffix: '+', label: 'Successful Projects' },
  { value: 100, suffix: '+', label: "Combined Year's of Experience" },
  { value: 15, suffix: '+', label: 'Marketing Experts' },
]

export const faqs = [
  { q: 'Where are you based?', a: ['India'] },
  { q: "What's the minimum/baseline cost for website design?", a: ['The cost for a basic/standard website is $499.'] },
  { q: 'How much does a mobile app cost?', a: ['Baseline cost is $3,500.'] },
  { q: 'What are the timelines for website design?', a: ['This depends on the complexity of your requirements, however, a standard website for up to 5 pages usually ranges between 10-14 business days for delivery.'] },
  { q: 'What are your timings? How do you communicate? How often are you available? How can I reach you?', a: ['For all client communication our timings are 8 AM EST – 1 PM EST, Monday through Friday. We use different modes of communication like email/ phone/ WhatsApp /Zoom /Google Meet/ Skype, whichever suits you best. We are usually on the go round the clock, answering your emails within a 8 hour window from your sending time. You may reach us via email/ phone/WhatsApp /Zoom /Google Meet/Skype, whichever suits you best.'] },
]

export const shop = [
  { title: 'Website Design', price: '$1,499', text: 'Standard Website Design Package - Up to 5 pages using WordPress with 1 year Hosting & SSL', kind: 'web' },
  { title: 'Android Mobile App', price: '$4,000', text: 'Basic Android Mobile App (Informative)', kind: 'android' },
  { title: 'iOS Mobile App', price: '$5,500', text: 'Basic iOS Mobile App (Informative)', kind: 'ios' },
  { title: 'E-Commerce Website', price: '$3,000', text: 'Standard Ecommerce Website - Up to 25 products', kind: 'shop' },
] as const

export const terms = {
  title: 'Terms & Conditions',
  intro: 'FUNKYY APPS (FA) will issue a refund or cancel any services according to the following guidelines:',
  clauses: [
    'FA will refund you in full if a project has not started within 15 business days of making payment.',
    'In the event that incorrect information was provided by you, FA will not refund any partial or full amounts, in the case that a project has commenced and/or has been completed.',
    'If you don’t want FA to start the project at all, you can ask for a full refund within 24 hours only after making payment. This applies to all non-business days (For example, if you make a purchase on Friday, you must cancel by Saturday to receive a refund.). However, if you contact FA to cancel a project that has already begun FA will not be liable for any partial or full refund and the 24 hours clause will not apply.',
    'If you sign up for a plan and we feel that we can’t do the project for you at that moment or for any reason at all, then FA will issue you a 100% refund within a maximum of 7-10 working days.',
    'If you sign up for a monthly or yearly service and request the service to be cancelled, you must notify FA via E-mail at least 30 calendar days prior to the next billing period.',
  ],
  paras: [
    'All project delays, delay in communication, delays in response, delays because of review, not responding to follow up emails, not sending information as requested by “CLIENT“, will result in additional charges and the project will or can be terminated/suspended, depending on the length of delay. NO REFUND APPLIES TO ALL PROJECT DELAYS DUE TO CLIENT.',
    'A late payment (past due date) will levy 10% of the billed amount with an 18% tax. Failure to comply with payment timelines can result in termination of project. FA reserves the right to charge “CLIENT” for resuming services/activities or handover of data/files as deemed fit by FA.',
    'If you don’t want to continue using any of FA’s services and wish to cancel or have any questions, comments or concerns about our refund and cancellation policy, you may contact us at info@funkyyapps.com.',
  ],
  notes: [
    'All refunds and cancellation requests must be made in writing. Your request will not be considered valid unless and until you receive a confirmation from us. The confirmation email by us will act as a proof of cancellation of the service(s) subscribed.',
    'FA reserves the right to modify any provisions of the refund and cancellation policy without any notice.',
  ],
}

// ---------- Questionnaires ----------
export type QField =
  | { type: 'text' | 'email' | 'tel' | 'url'; label: string; half?: boolean }
  | { type: 'textarea'; label: string }
  | { type: 'select'; label: string; options: string[] }
  | { type: 'checks'; label: string; options: string[] }
  | { type: 'yesno'; label: string }
  | { type: 'file'; label: string }

const contactFields: QField[] = [
  { type: 'text', label: 'Name', half: true },
  { type: 'text', label: 'Business Name', half: true },
  { type: 'email', label: 'Email Address', half: true },
  { type: 'tel', label: 'Phone Number', half: true },
]
const purposes = ['Explain your products and services', 'Bring in new clients to your business', 'Provide your customers with information on a certain subject', 'Deliver news or calendar of events', 'Create a blog that addresses specific topics or interests', 'Sell a product or products online', 'Provide support for current clients', 'Others']
const actions = ['Call you', 'Fill out a contact form', 'Fill out a quote form', 'Sign up for your mailing list', 'Search for information', 'Purchase a product(s)', 'Others']
const timeframes = ['Two weeks', 'Three weeks', 'One month', 'Two month']
const socials = ['Facebook', 'Twitter', 'Instagram', 'Others']

export const logoTypes = [
  { name: 'Wordmark', text: 'A wordmark logo is a type of logo design that is composed primarily of text, typically using a specific typeface or font.' },
  { name: 'Lettermark', text: 'Lettermarks, like wordmarks, are logos that are made up of letters, usually the initials of your brand.' },
  { name: 'Monogram', text: 'A decorative design made up of a combination of one to three letters (traditionally three) to create a single symbol.' },
  { name: 'Symbol', text: 'A symbolic logo design uses a symbol as an abstract representation of a business.' },
  { name: 'Mascot', text: 'A mascot is defined as an illustrated character that represents a business.' },
  { name: 'Emblem', text: 'Emblem logos take the concept of a combination mark and incorporate it within a frame or border.' },
  { name: 'Combination Mark', text: 'A logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark or mascot.' },
]
export const fontStyles = ['Comic', 'Stencil', 'Gothic', 'Decorative', 'Typewriter', 'Eroded', 'Graffiti', 'Pixelated', 'Retro', 'Techno', 'Sans Serif', 'Serif', 'Custom']

export type Questionnaire = { slug: string; title: string; intro: string[]; fields: QField[]; logoGuide?: boolean }

export const questionnaires: Questionnaire[] = [
  {
    slug: 'logo-questionnaire', title: 'Logo Questionnaire', logoGuide: true,
    intro: ['Use this form to enter your information that will help us understand your requirements in detail and provide you with the exact LOGO of your choice.', 'Feel free to provide additional information if you think it will help.'],
    fields: [
      ...contactFields,
      { type: 'text', label: 'Enter Your Company Name' },
      { type: 'text', label: 'Exact logo wording ( logo name )' },
      { type: 'text', label: 'Slogan/Tagline if any (optional)' },
      { type: 'text', label: 'Website Address – or Desired Domain(s)' },
      { type: 'select', label: 'Pick a Logo Type ↓ (Scroll down for examples)', options: ['Wordmark', 'Lettermark', 'Monogram', 'Symbol', 'Mascot', 'Emblem', 'Combination Mark', 'Custom'] },
      { type: 'select', label: 'Choose Font Style ↓ (Scroll down for examples)', options: fontStyles },
      { type: 'textarea', label: 'Describe your business / service / organization' },
      { type: 'file', label: 'Previous Logo (If you have any)' },
    ],
  },
  {
    slug: 'web-questionnaire', title: 'Web Questionnaire',
    intro: ['Please take your time and answer ALL of the questions. Web design and development is a collaborative process and needs your involvement in all stages.'],
    fields: [
      ...contactFields,
      { type: 'text', label: 'Are there other decision makers? Please specify.' },
      { type: 'text', label: 'Website Address – or Desired Domain(s)' },
      { type: 'textarea', label: 'Please give a brief overview of the company, what you do or provide?' },
      { type: 'checks', label: 'What is the purpose of this site?', options: purposes },
      { type: 'select', label: 'Do you have a time frame or deadline to get this site online?', options: timeframes },
      { type: 'textarea', label: 'Who will visit this site? Describe your potential clients.' },
      { type: 'textarea', label: 'Why do you believe site visitors should do business with you rather than with a competitor? What problem are you solving for them?' },
      { type: 'checks', label: 'What action(s) should the user perform when visiting your site? Please put an X next to the ones that apply to you (OR) Bold Fonts.', options: actions },
      { type: 'textarea', label: "What are you offering? Make a list of all the sections/pages you think that you'll need. (Samples below are just an example to get you started, please fill this out completely.)" },
      { type: 'yesno', label: 'Do you have the written content?' },
      { type: 'yesno', label: 'If not, will you need professional content?' },
      { type: 'yesno', label: 'Do you have the images/photographs prepared for these pages?' },
      { type: 'yesno', label: 'If not, will you need photography services?' },
      { type: 'yesno', label: 'Are you willing to commit time/effort into learning how to use Content Management System (CMS) and edit your site?' },
      { type: 'yesno', label: 'Is this a site re-design?' },
      { type: 'checks', label: 'Are you going to need?', options: ['Ecommerce (sell products)', 'Membership of any kind'] },
      { type: 'textarea', label: 'People are coming to your new site for the first time. How do you want them to feel about your company?' },
      { type: 'yesno', label: 'If you do not already have a logo, are you going to need one designed?' },
      { type: 'yesno', label: 'Is there a specific look and feel that you have in mind?' },
      { type: 'textarea', label: "Please include at least 3 links of sites of your competition. What do you like and don't like about them? What would you like to do differently?" },
      { type: 'textarea', label: 'Description about website you like' },
      { type: 'textarea', label: 'How do people find out about your business right now?' },
      { type: 'textarea', label: 'Site marketing plan' },
      { type: 'checks', label: 'Do you have any social network accounts setup?', options: socials },
      { type: 'yesno', label: 'Do you want links to those accounts on your site?' },
      { type: 'yesno', label: 'Do you have a mail service account?' },
      { type: 'yesno', label: 'Will you want to build your mailing list and use it for advertising & newsletters?' },
      { type: 'yesno', label: 'Will you want printed materials (business cards, catalog, etc.) produced as well?' },
      { type: 'text', label: 'Do you already own a domain name(s)?' },
      { type: 'yesno', label: 'Do you have a hosting account already?' },
      { type: 'text', label: 'If yes, do you have the login/IP information?' },
      { type: 'text', label: 'If no, what name(s) would you like?' },
      { type: 'text', label: 'Login/ IP information: what is this? User name and password?' },
    ],
  },
  {
    slug: 'app-questionnaire', title: 'App Questionnaire',
    intro: ['Please take your time and answer ALL of the questions. App design and development is a collaborative process and needs your involvement in all stages.'],
    fields: [
      ...contactFields,
      { type: 'text', label: 'Are there other decision makers? Please specify.' },
      { type: 'text', label: 'App Address – or Desired Domain(s)' },
      { type: 'textarea', label: 'Please give a brief overview of the company, what you do or produce?' },
      { type: 'checks', label: 'What is the purpose of this app?', options: purposes },
      { type: 'select', label: 'Do you have a time frame or deadline to get this site online?', options: timeframes },
      { type: 'textarea', label: 'Who will use this app? Describe your potential users.' },
      { type: 'textarea', label: 'Why do you believe app users should do business with you rather than with a competitor? What problem are you solving for them?' },
      { type: 'checks', label: 'What action(s) should the user perform when using your app? Please put an X next to the ones that apply to you (OR) Bold Fonts.', options: actions },
      { type: 'textarea', label: "What are you offering? Make a list of all the sections/pages you think that you'll need in the app. (Samples below are just an example to get you started, please fill this out completely.)" },
      { type: 'yesno', label: 'Do you have the written content?' },
      { type: 'yesno', label: 'If not, will you need professional content?' },
      { type: 'yesno', label: 'Do you have the images/photographs prepared for these pages?' },
      { type: 'yesno', label: 'If not, will you need photography services?' },
      { type: 'yesno', label: 'Is this an app re-design?' },
      { type: 'checks', label: 'Are you going to need?', options: ['Ecommerce (sell products)', 'Membership of any kind', 'Other'] },
      { type: 'textarea', label: 'Users are coming to your new app for the first time. How do you want them to feel about your company?' },
      { type: 'yesno', label: 'If you do not already have a logo, are you going to need one designed?' },
      { type: 'yesno', label: 'Is there a specific look and feel that you have in mind?' },
      { type: 'textarea', label: "Please include at least 3 links of apps of your competition. What do you like and don't like about them? What would you like to do differently?" },
      { type: 'textarea', label: 'Description about apps you like' },
      { type: 'textarea', label: 'How do people find out about your business right now?' },
      { type: 'textarea', label: "Have you thought about how you're going to market this app?" },
      { type: 'checks', label: 'Do you have any social network accounts setup?', options: socials },
      { type: 'yesno', label: 'Do you want links to those accounts on your app?' },
      { type: 'yesno', label: 'Do you have a mail service account?' },
      { type: 'yesno', label: 'Will you want to build your mailing list and use it for advertising & newsletters?' },
      { type: 'yesno', label: 'Will you want printed materials (business cards, catalog, etc.) produced as well?' },
      { type: 'text', label: 'Do you already own a domain name(s)?' },
      { type: 'yesno', label: 'Do you have a hosting account already?' },
      { type: 'text', label: 'If yes, do you have the login/IP information?' },
      { type: 'text', label: 'If no, what name(s) would you like?' },
      { type: 'text', label: 'Login/ IP information: what is this? User name and password?' },
    ],
  },
  {
    slug: 'content-questionnaire', title: 'Content Questionnaire',
    intro: ['Please take your time and answer ALL of the questions. Web design and development is a collaborative process and needs your involvement in all stages.'],
    fields: [
      ...contactFields,
      { type: 'text', label: 'Are there other decision makers? Please specify.' },
      { type: 'text', label: 'Website Address – or Desired Domain(s)' },
      { type: 'textarea', label: 'What services do your clients/prospects most want and need?' },
      { type: 'textarea', label: 'What are the core strengths of your organization?' },
      { type: 'textarea', label: 'How do people feel after they use your services?' },
      { type: 'textarea', label: 'What are your customers trying to accomplish by using your products/services?' },
      { type: 'textarea', label: 'Describe your typical customer (needs, desires, preferences, fears, pain, etc.).' },
      { type: 'textarea', label: 'Who is your competition? (please list at least 3-5 competitors)' },
      { type: 'textarea', label: 'What sets your company apart from others in your industry? Is there a unique aspect to your company that you could use as a point of differentiation?' },
      { type: 'textarea', label: 'Do you have an existing tagline, slogan or brand statement? If not, would you like to create one.' },
      { type: 'textarea', label: 'How do prospects find you?' },
      { type: 'textarea', label: 'What are the central keywords/trigger words that prospects might use to find you online? (I.e. what words would your target audience use to describe the key products/services/information you provide?)' },
    ],
  },
]
