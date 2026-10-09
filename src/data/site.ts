// All copy below is carried over from funkyyapps.com. Edit here, not in components.

export const contact = {
  whatsapp: '+919953102089',
  whatsappUrl: 'https://wa.me/+919953102089',
  email: 'info@funkyyapps.com',
  sms: '5095933355',
}

// Paste your real PayPal checkout links here (the old site had a PayPal button per package).
export const paypal: Record<string, string> = {
  'Standard Ecommerce Website': '',
  'Basic iOS Mobile App': '',
  'Basic Android Mobile App': '',
  'Standard Website Design Package': '',
}

export const servicesNav = [
  { label: 'SEO Services', to: '/seo-services' },
  { label: 'Paid Social Media', to: '/paid-social-media' },
  { label: 'PPC Services', to: '/ppc-services' },
  { label: 'Website Development', to: '/website-development' },
  { label: 'Mobile App Development', to: '/mobile-app-development' },
]

export const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Shop', to: '/shop' },
  { label: "Faq's", to: '/faqs' },
  { label: 'Consult', to: '/consult' },
]

export const questionnaireLinks = [
  { label: 'Logo Questionnaire', to: '/logo-questionnaire' },
  { label: 'Web Questionnaire', to: '/web-questionnaire' },
  { label: 'App Questionnaire', to: '/app-questionnaire' },
  { label: 'Content Questionnaire', to: '/content-questionnaire' },
]

export const hero = {
  lines: ["Crafting Today's", 'Digital Pioneers'],
  tagline: 'Your "one-stop solution" for branding and positioning your business.',
  body: [
    'At FunkyyApps, we help visualize your ideas/goals into reality.',
    'With over 7 years of industry excellence, we fuse cutting-edge design with advanced development to deliver bold, future-ready solutions.',
  ],
  trusted: 'Trusted by brands, we’re your premier partner in digital transformation.',
}

export type Testimonial = { name: string; org?: string; quote: string }
export const testimonials: Testimonial[] = [
  { name: 'Virtual', quote: '"Keep up the good work"' },
  { name: 'Nan Henson', org: 'Buena Trademaster Plumbing, LLC.', quote: 'We really appreciate you, you have no idea how grateful I am to have found you. Thanks Yogi.' },
  { name: 'Neiko Stewart', quote: 'I appreciate you, Yogi! Thank you. We will continue to work together. You are my favorite too. It is about creating lasting relationships. I will also need you to develop sites for my PoCs regarding new SaaS projects. We have a lot of work ahead. I am truly blessed to have you on my team. Thank you again! Also, for designing my LinkedIn Business Profile Page. I truly appreciate you' },
  { name: 'Capt. Mike', org: 'Mobile Bay Adventures', quote: 'I am pleased with your work and it’s been enjoyable working with you on this project.' },
  { name: 'Nick Baldwin', org: 'Monarch Construction', quote: 'Everything looks good and appreciate your help.' },
  { name: 'Mark Moore', org: 'The Law Offices of Mark Q. Moore, LLC', quote: 'Thanks for putting together a professional look for my practice.' },
  { name: 'Jason Whitehurst', org: 'Founder & Chief AI Officer FutureSafe Incorporated', quote: 'You do good work. I think your work and price is worthy of recommending you to the customers we have.' },
  { name: 'Stephan Esch', org: 'Germany', quote: 'Yugender Singh did an exceptional job with designing and connecting the new business page to our domain. His knowledge and experience in this is field is awesome. Especially to mention is his patience with me as a customer who is not much into these computer things. I can highly recommend to work with this company.' },
]

export const industries: { name: string; items: string[] }[] = [
  { name: 'Custom Websites', items: ['Corporate Websites', 'Personal Blogs and Portfolios', 'Educational Institutions', 'Non-Profit Organizations'] },
  { name: 'E-commerce', items: ['Retail Stores', 'Marketplaces', 'Subscription Services', 'Niche Product Stores', 'Dropshipping'] },
  { name: 'Finance and Banking', items: ['Banking Websites', 'Investment Platforms', 'Fintech Solutions'] },
  { name: 'Real Estate', items: ['Property Listings', 'Property Management', 'Real Estate Investment'] },
  { name: 'Education and E-Learning', items: ['Online Course Platforms', 'Tutoring Services', 'Educational Resources'] },
  { name: 'Travel and Hospitality', items: ['Travel Agencies', 'Hotel and Resort Websites', 'Tourism Boards'] },
  { name: 'Entertainment and Media', items: ['Streaming Services', 'News Portals', 'Event Management'] },
  { name: 'Professional Services', items: ['Law Firms', 'Consulting Firms', 'Accounting and Financial Services'] },
  { name: 'Hospitality and Food Service', items: ['Restaurants and Cafes', 'Food Delivery Services', 'Catering Services'] },
]

export const capabilities = [
  'Responsive Web Design', 'User Interface (UI) Design', 'User Experience (UX) Design', 'Mobile-First Design',
  'Cross-Browser Compatibility', 'WordPress Development', 'CMS Integration', 'Custom CMS Solutions',
  'Shopify Development', 'WooCommerce Development', 'Magento Development', 'BigCommerce Development',
  'Custom E-commerce Solutions', 'Progressive Web Apps (PWA)',
]

export const platforms = [
  { name: 'Webflow', label: 'Webflow Development Experts', mark: 'Wf', color: '#4353ff' },
  { name: 'Magento', label: 'Magento Development Experts', mark: 'Mg', color: '#f26322' },
  { name: 'WooCommerce', label: 'WooCommerce Development Experts', mark: 'Wo', color: '#a46fd6' },
  { name: 'Squarespace', label: 'Squarespace Development Experts', mark: 'Sq', color: '#f1ebdd' },
  { name: 'Shopify', label: 'Shopify Development Expertise', mark: 'Sh', color: '#95bf47' },
  { name: 'WordPress', label: 'WordPress Development Experts', mark: 'Wp', color: '#3d9fd0' },
  { name: 'Wix', label: 'Wix Development Experts', mark: 'Wx', color: '#ffd84d' },
]

export type Plan = {
  name: string; forLabel: string; forText: string; price: string; services: string[];
  features: { title?: string; text: string }[]
}
export const plans: Plan[] = [
  {
    name: 'Silver Startup', forLabel: 'Perfect For', forText: 'Budding entrepreneurs ready to ignite their online presence.', price: '999',
    services: ['Web Design', 'Secure Contact Form', 'Easy Updates', 'Free Consultation'],
    features: [
      { title: 'Mobile-First Design with Responsive Framework', text: 'Flawless user experience across all devices (phones, tablets, desktops).' },
      { title: 'Professionally Curated Stock Photo Integration', text: 'High-resolution, royalty-free images to enhance visual appeal and brand storytelling.' },
      { title: 'Secure Contact Form', text: 'Streamline customer inquiries.' },
      { title: 'SEO Jumpstart with Keyword Research & On-Page Optimization', text: 'Optimized content structure and targeted keywords to improve search engine discoverability.' },
      { title: 'Secure SSL Certificate (HTTPS)', text: 'Encrypted data transmission for user trust and improved search ranking.' },
      { title: 'Easy Content Updates (Up to 2 Pages)', text: 'User-friendly CMS.' },
    ],
  },
  {
    name: 'Gold Business', forLabel: 'Perfect For', forText: 'Ambitious businesses poised for growth and audience expansion.', price: '1,499',
    services: ['Social Integration', 'Graphic Design', 'Website Analytics', 'Content Updates', 'Free Consultation'],
    features: [
      { text: 'Everything in Silver Startup, plus:' },
      { title: 'Up to 5 Unique Website Pages with Custom HTML/CSS', text: 'Showcase your services, story, and team with unique design elements.' },
      { title: 'Custom Design with Brand Identity Integration', text: 'Brand-specific fonts, color palettes, animations, and graphics for a cohesive online presence.' },
      { title: 'Advanced SEO Optimization Strategy', text: 'In-depth competitor analysis, strategic keyword targeting, and link-building strategies for sustainable growth in search rankings.' },
      { title: 'Social Media Integration with Optimized Sharing', text: 'Seamless integration with popular platforms (Facebook, Instagram) and optimized sharing buttons to amplify reach.' },
      { title: 'Basic Website Analytics with Google Analytics', text: 'Track website traffic, user behavior, and conversions to gain valuable business insights.' },
      { title: '3 Months of Complimentary Cloud-Based Hosting', text: 'Reliable hosting with 99.9% uptime, DDoS protection, and automatic backups.' },
      { title: 'More Content Updates (Up to 5 Pages)', text: 'Flexible content management options with CMS or manual updates depending on your needs.' },
    ],
  },
  {
    name: 'Platinum Corporate', forLabel: 'Perfect For', forText: 'Established companies seeking to solidify their dominant online presence and engage users.', price: '2,099',
    services: ['Brand Design', 'Dynamic Layouts', 'E-commerce Functionality', 'Custom CMS', 'Email Integration', 'Priority Support', 'Unlimited Updates', 'Free Maintenance', 'Dedicated Project Manager'],
    features: [
      { text: 'Everything in Gold Business, plus:' },
      { title: 'Up to 10 Unique Website Pages with Dynamic Layouts', text: 'Leverage advanced frameworks (e.g., ReactJS) for dynamic layouts, interactive elements, and enhanced user experiences.' },
      { title: 'Optional E-commerce Functionality with Secure Payment Gateways', text: 'Secure shopping cart solution integrated with popular payment gateways (e.g., Stripe, PayPal) for seamless online transactions.' },
      { title: 'Content Management System (CMS) – User-Friendly Options', text: 'Choose from popular CMS platforms (WordPress) or a custom CMS tailored to your specific needs.' },
      { title: 'In-Depth Website Analytics & Reporting (Google Analytics)', text: 'Gain deeper insights into user behavior, user journeys, conversion funnels, and A/B testing capabilities for continuous improvement.' },
      { title: '6 Months of Free Managed Cloud Hosting', text: 'Secure and reliable hosting with automatic backups, security updates, and performance optimization.' },
      { title: 'Unlimited Content Updates Throughout the Project', text: 'Ongoing content management and support to keep your website fresh and engaging.' },
    ],
  },
  {
    name: 'Enterprise Web Apps', forLabel: 'Tailored For', forText: 'Businesses demanding cutting-edge functionalities and bespoke web applications to revolutionize their online presence.', price: '3,099',
    services: ['Web Design', 'Web Application', 'Brand Design', 'Graphic Design', 'User Security', 'Scalable Architecture', 'Ongoing Support', 'Free Consultation', 'Dedicated Project Manager', 'Free Maintenance'],
    features: [
      { text: 'Everything in Platinum Corporate, plus:' },
      { title: 'Custom Web Application Development with Modern Frameworks', text: 'Build custom web applications using cutting-edge frameworks (e.g., Angular, NodeJS) to meet your specific needs and functionalities.' },
      { title: 'Seamless API Integrations for Enhanced Functionality', text: 'Integrate with essential services like CRM, ERP, payment processing platforms, and social media APIs for a unified ecosystem.' },
      { title: 'Secure User Account Management with Multi-Factor Authentication', text: 'Advanced security measures like password hashing and multi-factor authentication protect user data.' },
      { title: 'Scalable Architecture Built for Growth (Cloud-based)', text: 'Built for scalability to handle increasing traffic, data volume, and future expansion.' },
      { title: 'Advanced Security Measures with WAF & Intrusion Detection', text: 'Web Application Firewall (WAF) protection and intrusion detection systems safeguard your valuable data.' },
      { title: 'Ongoing Maintenance & Support Services', text: 'Dedicated team provides ongoing bug fixes, security updates, performance optimization,' },
    ],
  },
]

export const promises = ['Professional and Creative', 'Turning Dreams into Reality', 'A Transformative Experience!']

export const packages = [
  { name: 'Standard Ecommerce Website', price: '$3,000' },
  { name: 'Basic iOS Mobile App', price: '$5,500' },
  { name: 'Basic Android Mobile App', price: '$4,000' },
  { name: 'Standard Website Design Package', price: '$1,499' },
]
