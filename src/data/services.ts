// Copy carried over from the service pages of funkyyapps.com.

export type Para = { lead?: string; text: string }
export type Tab = { label: string; body: Para[]; bullets?: string[]; after?: Para[] }
export type Faq = { q: string; a: string[] }

export type TabService = {
  slug: string
  title: string
  heading?: string
  intro?: string
  stats?: boolean
  tabs: Tab[]
  faqs?: Faq[]
}

export const seo: TabService = {
  slug: 'seo-services',
  title: 'SEO Services',
  tabs: [
    { label: 'SEO Audits', body: [
      { lead: 'Elevate Your Online Presence:', text: 'FunkyyApps offers meticulous SEO audits to unlock your website’s potential. Gain valuable insights, uncover hidden opportunities, and pave the way for unparalleled organic growth' },
      { lead: 'Precision in Performance:', text: 'With FunkyyApps’ SEO audits, no stone is left unturned. Our comprehensive analysis ensures every aspect of your website is optimized for search engine success.' },
      { lead: 'Chart Your Path to SEO Success:', text: 'FunkyyApps’ SEO audits provide the roadmap to elevate your rankings. From technical optimizations to content strategies, we deliver actionable recommendations tailored to your goals.' },
    ] },
    { label: 'SEO Optimizations', body: [
      { lead: 'Drive Organic Growth, Drive Success:', text: 'FunkyyApps optimizes your website for maximum visibility and impact. From on-page enhancements to technical optimizations, we ensure your site stands out in search results.' },
      { lead: 'Unlock Your Website’s Potential:', text: 'With FunkyyApps ’ SEO optimizations, your website becomes a powerhouse of organic traffic. Elevate your rankings, expand your reach, and drive sustainable growth with our expert strategies.' },
      { lead: 'Transform Your Website into an SEO Powerhouse:', text: 'FunkyyApps ’ optimization strategies are designed to amplify your online presence. Experience higher rankings, increased traffic, and measurable results with our tailored approach.' },
    ] },
    { label: 'SEO Strategy', body: [
      { lead: 'Crafting Your Path to SEO Success:', text: 'FunkyyApps develops custom SEO strategies to align with your business objectives. From keyword research to competitor analysis, we lay the foundation for sustainable growth and long-term success.' },
      { lead: 'Strategic Excellence in SEO:', text: 'FunkyyApps’ SEO strategies are built on precision and performance. Gain a competitive edge, drive targeted traffic, and achieve your business goals with our expert guidance.' },
      { lead: 'Empowering Your Online Presence:', text: 'With FunkyyApps’ SEO strategies, your website becomes a beacon of authority in your industry. Drive visibility, capture leads, and surpass your competition with our strategic approach.' },
    ] },
    { label: 'First-Party Data Activation', body: [
      { lead: 'Transforming Insights into Action:', text: 'FunkyyApps activates your first-party data to fuel your SEO efforts. Harness the power of your own data to drive targeted optimizations, personalized experiences, and impactful results.' },
      { lead: 'Data-Driven Decisions, Delivered:', text: 'FunkyyApps leverages first-party data to unlock actionable insights. From audience segmentation to content optimization, we empower your SEO strategy with precision and performance.' },
      { lead: 'Your Data, Your Advantage:', text: 'With FunkyyApps, your first-party data becomes a strategic asset in your SEO arsenal. Drive targeted engagements, enhance user experiences, and achieve unparalleled success with our data activation services.' },
    ] },
    { label: 'Full-Funnel ROI Tracking', body: [
      { lead: 'Visibility Across the Customer Journey:', text: 'FunkyyApps offers comprehensive full-funnel ROI tracking to monitor and optimize your SEO efforts. From awareness to conversion, gain insights, track performance, and maximize returns with precision.' },
      { lead: 'Insights That Drive Impact:', text: 'With FunkyyApps’ full-funnel ROI tracking, every touchpoint tells a story. Gain visibility across the customer journey, identify opportunities, and drive strategic decisions for long-term SEO success.' },
      { lead: 'Tracking That Transforms:', text: 'FunkyyApps’ full-funnel ROI tracking goes beyond numbers—it drives transformative insights. From acquisition to retention, unlock the true potential of your SEO efforts with actionable data.' },
    ] },
    { label: 'SEO Content', body: [
      { lead: 'Content That Connects, Content That Converts:', text: 'FunkyyApps crafts SEO content that resonates with your audience and drives results. From blog posts to website copy, we deliver engaging, optimized content to boost your search rankings.' },
      { lead: 'Elevate Your Content Strategy:', text: 'With FunkyyApps’ SEO content services, your website becomes a destination for valuable information. Drive organic traffic, enhance user experiences, and achieve your SEO goals with our expertly crafted content.' },
      { lead: 'Content that Climbs the Ranks:', text: 'FunkyyApps’ SEO content strategies are designed to elevate your website’s visibility. Drive engagement, foster connections, and achieve unparalleled SEO success with our tailored approach.' },
    ] },
  ],
}

export const seoGuide = {
  pipeline: [
    { title: 'Crawling: How search engines discover content', text: 'Search engines use automated bots called "crawlers" or "spiders" to scan websites. These bots follow links from page to page, discovering new and updated content across the web. If your site structure is clear and content is regularly refreshed, crawlers are more likely to find all your pages.', lead: 'To ensure search bots can effectively crawl your site:', bullets: ['Use an organized site structure with internal linking', 'Create an XML sitemap to guide search engine crawlers', 'Regularly update content to signal freshness', 'Avoid broken links and fix crawl errors in Google Search Console'] },
    { title: 'Indexing: How search engines store content', text: "Once crawled, pages are analyzed and stored in the search engine's index, a massive database of web content. Indexed pages can appear in search results when users enter relevant queries.", lead: 'To improve indexing:', bullets: ['Ensure each page has clear, keyword-rich headings', 'Use meta tags and image alt text for better understanding', 'Avoid duplicate content that can confuse search engines', 'Check Google Search Console for index coverage issues'] },
    { title: 'Ranking: How search engines order results', text: 'After indexing, search engines rank pages based on relevance, quality, and user experience. Pages that best match a search query appear higher in results, driving more clicks.', lead: 'To improve rankings:', bullets: ['Write high-quality, relevant content targeting user intent', 'Ensure fast loading times and mobile responsiveness', 'Build backlinks from authoritative websites', 'Monitor performance using SEO tools like Moz and Google Analytics'] },
  ],
  transform: {
    title: 'See how we transform you',
    text: 'FunkyyApps ensures your website reaches the right audience. In addition to search visibility, SEO drives quality traffic, improves user experience, and helps you stand out in search results.',
    traffic: { title: 'Increased traffic', text: 'Ranking higher in search results increases your website’s visibility, driving more clicks from users actively searching for your content, products, or services. Unlike paid advertising, this traffic is sustainable and grows when you maintain optimization efforts. We make it happen!' },
    serp: { title: 'Rank for more SERP features', text: 'FunkyyApps helps your content appear in traditional search results and search engine results page (SERP) features, such as:' },
    ux: {
      title: 'Providing a great user experience',
      text: ['SEO goes hand-in-hand with user experience. Search engines prioritize websites that are fast, mobile-friendly, and easy to navigate.', 'This is where Core web Vitals come in—a set of performance metrics that measure essential aspects of page experience:'],
      vitals: [
        { k: 'LCP', name: 'Loading performance', text: 'Loading performance is how fast your page content appears (Largest Contentful Paint). Faster loading improves user retention and satisfaction.' },
        { k: 'FID', name: 'Interactivity', text: 'Interactivity refers to how quickly users can engage with your site (First Input Delay). Sites that respond instantly keep users engaged.' },
        { k: 'CLS', name: 'Visual stability', text: 'Visual stability prevents layout shifts as the page loads (Cumulative Layout Shift). A stable page ensures users don’t accidentally click the wrong elements.' },
      ],
    },
  },
  types: {
    title: 'What are the types of SEO?',
    text: 'Optimizing your site generally involves three key focus areas: On-page, off-page, and technical SEO.',
    items: [
      { title: 'On-page SEO', text: 'On-page SEO focuses on optimizing individual pages to improve search visibility and user experience. It involves aligning your content, HTML elements, and site structure with SEO best practices. This ensures search engines understand your pages while making them more engaging for visitors.', lead: 'Key aspects of on-page SEO include:', bullets: [
        ['Keyword optimization:', 'Use relevant keywords naturally in titles, headers, and body content to match search intent.'],
        ['Meta tags:', 'Optimize title tags and meta descriptions to improve click-through rates from search results.'],
        ['Content quality:', 'Ensure your content is original, valuable, and satisfies user intent.'],
        ['Multimedia:', 'Use images, videos, and infographics to enrich user experience while optimizing them with alt text.'],
        ['Internal linking:', 'Interlink related pages within your site to help search engines discover and rank more content.'],
        ['URL structure:', 'Create clear, descriptive URLs that reflect page content.'],
      ] },
      { title: 'Technical SEO', text: 'Technical SEO ensures search engines can efficiently crawl, index, and rank your site. It focuses on site architecture, speed, and user experience.', lead: 'Essential technical SEO tasks include:', bullets: [
        ['Site architecture:', 'Ensure a clear structure with intuitive navigation and internal linking.'],
        ['Core Web Vitals:', 'Optimize loading speed, interactivity, and visual stability to enhance user experience.'],
        ['Mobile-friendliness:', 'Ensure responsive design for seamless browsing across devices.'],
        ['Structured data:', 'Implement schema markup to help search engines understand your content better.'],
        ['Indexing management:', 'Use robots.txt, canonical tags, and XML sitemaps to guide search engine crawlers.'],
        ['Security:', 'Ensure your site uses HTTPS to protect user data and improve trust.'],
      ] },
      { title: 'Off-page SEO', text: 'Off-page SEO refers to actions taken outside your website to improve search engine rankings. It builds authority and credibility by showing search engines that others value your content.', lead: 'Key off-page strategies include:', bullets: [
        ['Link building:', 'Earn high-quality backlinks from authoritative sites through outreach, guest blogging, and content promotion.'],
        ['Citations:', 'Ensure your business information is consistent across directories.'],
        ['Social media marketing:', 'Promote content across platforms to drive engagement and attract links.'],
        ['PR and influencer outreach:', 'Gain visibility by collaborating with industry influencers and media platforms.'],
        ['Brand mentions:', 'Even without a direct link, brand mentions can signal authority to search engines.'],
        ['Local SEO:', 'For local businesses, creating local business profiles and building local unstructured citations'],
      ] },
    ],
  },
}

export const paidSocial: TabService = {
  slug: 'paid-social-media',
  title: 'Paid Social Media',
  heading: 'What do our social media advertising services include?',
  intro: 'Whether you’re looking to fill gaps or find a turn-key solution, our customizable social media advertising services can help. Learn more about our custom plans for capturing paid social media traffic and turning it into revenue.',
  stats: true,
  tabs: [
    { label: 'Facebook Advertising Services', body: [
      { lead: 'Reach an audience of more than two billion with social media ad management services for Facebook, the world’s biggest social media network.', text: 'At FunkyyApps, we offer Facebook ad and PPC management services that help your business take complete advantage of Facebook. From creating your strategy and ad creatives to launching your ads and monitoring their performance, we provide an all-in-one solution to Facebook advertising.' },
    ] },
    { label: 'Ecommerce Social Media Advertising', body: [
      { lead: 'Drive traffic to your ecommerce store and start selling more online with social media ads!', text: 'Let’s delve into the realm of paid social advertising, shall we? This takes your organic social media playbook and supercharges it to expand your presence across various social platforms. With all those algorithm updates buzzing around, catching your customers’ attention organically in their social feeds, especially on platforms like Facebook, has become a bit of a puzzle. That’s precisely why the spotlight is on considering social media advertising, especially if you’re an e-commerce store with big dreams of boosting those online sales. Time to make that move!' },
    ] },
    { label: 'Enterprise Social Media Advertising', body: [
      { lead: 'Turbocharge enterprise sales with social ads (for ad budgets above $10,000 per month)!', text: 'Experience a brand transformation of epic proportions with enterprise social media advertising. Let FunkyyApps lead the way as you unleash captivating campaigns across premier platforms such as Facebook, Twitter, Instagram, and beyond. As followers flock, sales surge, and your investment flourishes, the profound impact of our strategic social media advertising becomes undeniable. Welcome to a new era of brand growth with FunkyyApps.' },
    ] },
    { label: 'Instagram Advertising Services', body: [
      { lead: 'Build brand awareness and drive engagement with a competitive ad campaign for Instagram that gets users to interact with your brand and buy your products.', text: 'As an Instagram advertising agency, we stay up to date with the latest industry updates, algorithm changes, and best practices to drive your business forward and deliver the best results possible. We can focus on different stages of the buyer’s journey from awareness to conversion amongst your key target audiences, all while staying within your set budget.' },
    ] },
    { label: 'Twitter Advertising Services', body: [
      { lead: 'Connect with current and potential clients fast with social media advertising services for Twitter. Become the business that users follow and trust.', text: 'To target your ideal audiences, we’ll implement the latest industry insights and platform tools into your marketing campaign. We believe in maximizing every opportunity with the industry’s best practices to generate the best results possible.' },
      { text: 'If you lack the time to develop strategic advertising campaigns, analyze and make changes based on Twitter insights, and track industry news, click the button below.' },
    ] },
    { label: 'LinkedIn Advertising Services', body: [
      { lead: 'Advertise on the best social media platform for lead generation. Target and capture valuable leads with compelling and personalized ads for your audience.', text: 'With more than 50 percent of its user base possessing a college degree, you should consider implementing LinkedIn advertising services if you’re looking to target users by profession, skills, industry, or professional interests to maximize the power of this professional platform.' },
    ] },
    { label: 'TikTok Advertising Services', body: [
      { lead: 'Advertise on one of the most popular and fastest-growing social media platforms. Create engaging and fun video ads that perfectly capture your brand’s personality and audience’s attention.', text: 'At FunkyyApps, we offer TikTok advertising services that help you launch successful ads that drive more leads and revenue for your business. With a team of over 15 marketing experts, you can feel confident we’ll launch a TikTok advertising strategy that grows your business.' },
    ] },
    { label: 'Pinterest Advertising Services', body: [
      { lead: 'Engage with a specific and highly targeted audience with a managed social media campaign for Pinterest that generates awareness, sales, and more for your business.', text: 'Did you know that there’s a bustling Pinterest community of over 250 million individuals? This opens up a fantastic avenue for your business to connect with potential leads who genuinely resonate with what you bring to the table. Imagine the excitement of stepping into the world of Pinterest advertising services – it’s like discovering a treasure trove of possibilities to establish truly meaningful connections with those invaluable leads that can make a real difference for your business.' },
    ] },
  ],
  // NOTE: some of these answers were copied from another agency's site and still mention "WebFX".
  // They are reproduced exactly as they appear on funkyyapps.com — review before going live.
  faqs: [
    { q: 'What are social media advertising services?', a: ['Social media advertising services are services that promote your brand across social media networks like Facebook, Instagram, and Twitter to increase brand awareness, engagement, followers, and even leads and sales.'] },
    { q: 'How much do social media advertising services cost?', a: ['Prices for social media advertising services depend on several factors, including the social media platform, social media agency, and ad spend. Typically, businesses will spend of $1000 to $25,000 per month into social media advertising services.'] },
    { q: 'Who uses social media advertising services?', a: ['The strategy will include applicable content that is up-to-date with current marketing trends and will always consider the unique aspects of your business that set you apart from competitors.'] },
    { q: 'Should I use a social media advertising agency?', a: [
      'One of the largest expenses associated with social media advertising services for your business can be hiring someone to do your campaign in-house.',
      'This means you have to add another person to payroll, and pay them for their social media advertising services. Effective social media advertising requires creating copy, graphics, videos, optimizing campaigns and content, monitoring, and reporting.',
      'The constantly changing nature of social media also means that those in the field must stay up to date with the latest tools, trends, and advertising policy updates. Social media advertising companies are dedicated to staying on top of social trends and policies that lead to successful campaigns.',
      'When considering whether or not to make someone on your current team your social media advertising guru, you should consider how much you have in your budget, whether you have the resources to teach them the tricks of the trade, and how fast you want results.',
      'If you’re looking for someone that can jump in right away to help your business create a fantastic social media advertising campaign, going with an agency is your best bet.',
      'They know what they’re doing and can likely get you the results you’re looking for with their expertise and knowledge. It also saves you the trouble of adding someone to your team.',
      'It’s important that a social media advertising company offers several pricing package options that can be tailored to your needs. Here at WebFX, we have a variety of options, proven results, and social media advertising experts who can determine the best strategy to fit your budget.',
      'When choosing a social media advertising agency, be sure to know if they will provide detailed reporting and communication about campaign results. To gauge the performance of your social media advertising campaign, WebFX will provide extensive social media advertising reporting and performance updates.',
      'WebFX offers monthly and weekly reporting options depending on your social media advertising needs. You’ll know exactly what is happening with your campaigns when you choose our social media ad management services.',
      'A social media advertising company should be able to tell you metrics like how many people saw your campaign, what actions they took after they saw the advertisement, and how they will use targeting to make sure the people who will act are the people most likely to see the campaign!',
    ] },
    { q: 'Which platform should I choose for social media ad management?', a: [
      'While there are many social media advertising platforms on the Internet that offer paid advertising options, it’s important to choose the platform that will allow you to reach a relevant audience. When it comes to your campaign, you should consider some big players in the game.',
      'These networks include: Facebook, Twitter, Pinterest, Instagram, LinkedIn, TikTok.',
      'Our strategists, as well as social media specialists, can help your business choose the best platforms for your social media ad management services. Helping your company focus on the most useful networks for your company can result in a bigger return and better results. Learn more about the different platforms and their advantages below:',
      '**Facebook advertising** — Facebook is currently, and most likely will remain, the biggest social media advertising platform. There are 2.963 billion daily active users on Facebook as of January 2023.',
      'Facebook is widely recognized as the leader in social media advertising trends. Facebook advertising works for just about every business and is a great place to start with social advertising. Facebook offers social media advertising companies and businesses to reach audiences based on the campaign objectives. A few options include campaigns to drive awareness, engagement, traffic, conversions, store visits, and many more.',
      'In addition to a variety of ad formats, Facebook offers targeting options that allow advertisers to target specific demographics, interests, and behaviors. Facebook can also target users based on where people shop, travel, and much more!',
      'Facebook currently allows users to post ads using photo, video, carousel, slideshow, and Facebook Instant Experiences:',
      'Carousel is a feature that allows users to show up to 10 images or videos and links within one advertisement. This allows advertisers to direct people to multiple places on their website with one creative.',
      'Slideshow is a feature that allows users to create video advertisements from still images.',
      'Instant Experiences is a tool that advertisers can use to create immersive advertisements using photo, video, text, carousels, product feeds, and more, all in one streamlined page. This page lives in the Facebook app, making it a very fast and seamless experience for the user. Each one of these tools offers benefits depending on the goal of the advertising campaign and what content is available to the advertiser.',
      '**Instagram advertising** — Instagram is owned by Facebook, so their advertising systems are similar. Instagram introduced advertising in 2015, and it’s seen growth ever since. In fact, advertising on Instagram has grown so much that the average cost per CPM increased by 55% in the last 2 years.',
      'Visuals are one of, if not the most, important element of an Instagram advertising campaign creative. It doesn’t matter if you are selling the best product in the world with the best customer service, if you have poor visuals, your Instagram campaign will suffer.',
      'Instagram ads can be in the same format as Facebook: photo, video, carousel, slideshow, and Instant Experiences. Instagram also allows users to structure a campaign based on the campaign objective, such as website clicks, conversions, app installs, engagements, video views, and awareness. Instagram advertisers can target their ads the same way as Facebook ads.',
      'They even have their own Instagram analytics platform.',
      '**Twitter advertising** — There are over 330 million monthly active Twitter users tweeting away and scrolling through their feeds. Twitter offers several forms of paid advertisements to reach these users. Twitter advertisers have the option to select the objective they want to achieve for their business, whether that be increasing traffic, engagement, awareness, video views, followers, app installs, or app re-engagements.',
      'Like Facebook, Twitter also offers targeting for paid advertisements based on location, gender, languages, device, platform, and carrier.',
      'Twitter has two distinct differences from most other social platforms. Twitter includes targeting by keywords to reach people based on their Pinterest searches. Twitter also includes an option to target people who are similar to users who follow specific accounts.',
      'For example, if you want to target people who are like people who follow your competitors, you could include your competitors’ Twitter accounts in the target audience. It’s important to know that you are not targeting the specific followers of these accounts. You are targeting users who are like those followers.',
      '**Pinterest advertising** — Pinterest reached over 445 million monthly active Pinterest users as of September 2022. Pinterest advertising offers campaigns based on an advertising objective.',
      'Pinterest advertising objectives include awareness, engagement, traffic, app downloads, and video awareness. Additionally, Pinterest offers a few different ways to shape audience targeting.',
      'Advertisers can target audiences based on interests and keywords. When targeting by interests, Pins will show in users’ home and category feeds based on a user’s past interests and on the topic of the category. Advertisers can select from a variety of interest categories, each with additional segments.',
      'When targeting by keywords, advertisers can select phrases and words that would be similar to what a user is searching. This targeting places Pins in a user’s search results. It is best practice to include both keywords and interests in a campaign to reach people in both places.',
      'Pinterest also offers custom engagement or email list targeting and some demographic information. Demographic information, such as location targeting, is more limited than other platforms.',
      '**LinkedIn advertising** — LinkedIn offers advertisers three different ad products depending on the goals of a campaign: Sponsored Content, Sponsored InMail, Text Ads.',
      'Sponsored Content places content in the LinkedIn feed. Sponsored InMail sends content to LinkedIn users via a message to their inbox. Text ads are delivered in locations around the LinkedIn feed on a desktop.',
      'LinkedIn’s targeting particularly shines when it comes to employee and company-specific targeting. Industry, position, seniority, and company size are a few ways LinkedIn allows businesses to hone in on a target audience in addition to age and location demographics.',
      'As an example, take a heating and cooling company. Their HVAC company’s advertising strategy may use LinkedIn to recruit top talent in the local area. An ad campaign on LinkedIn could even help them market themselves to potential corporate or business accounts.',
      '**TikTok advertising** — A fast-growing platform with over eight new users joining every second and billions of active users, TikTok is an excellent platform for promoting your products or services.',
      'TikTok offers the opportunity to create engaging, fun video ads that capture your audience’s attention and personality of your brand.',
      'The platform also gives you a plethora of targeting features to ensure your ads reach the people who are most interested in your products or services.',
    ] },
  ],
}

export const ppc: TabService = {
  slug: 'ppc-services',
  title: 'PPC Management Services',
  heading: 'What do our PPC management services include?',
  intro: 'Get everything you need (and nothing you don’t) with FunkyyApps PPC management services, which offer a full-service solution to building, implementing, and managing a pay-per-click (PPC) campaign.',
  stats: true,
  tabs: [
    { label: 'PPC Audit', body: [
      { text: 'With an in-depth PPC audit, your dedicated account manager can develop data-backed recommendations for your pay-per-click strategy. Plus, they can ensure the health of your ad campaigns, verifying the setup and optimization of your account, campaigns, and ad groups.' },
      { text: 'Other areas your audit will evaluate include:' },
    ], bullets: ['Competitor ads', 'Bid optimization', 'Advertising assets, like images, landing pages, and ad copies', 'Tracking', 'And more'],
      after: [{ text: 'Based on their research, your account manager will develop a custom recommended PPC marketing strategy for your business.' }] },
    { label: 'Ad creatives', body: [
      { text: 'Building, launching, and optimizing ad campaigns is easy with FunkyyApps pay-per-click services. As a full-service agency, FunkyyApps maintains the in-house talent needed to create, launch, and manage a successful ad campaign, which means we take care of:' },
    ], bullets: ['Setting up ad campaigns', 'Designing ad graphics', 'Writing ad copy', 'Building ad landing pages', 'Creating audio or video ads'],
      after: [{ text: 'With FunkyyApps it’s possible to move faster than the competition and launch compelling ads that attract (and convert) your target audience. You also skip the hassle of fighting for in-house design time and eliminate the downsides of hiring a freelancer with our PPC advertising services.' }] },
    { label: 'Full-funnel ROI tracking', body: [
      { text: 'Measure pay-per-click’s return on investment with unparalleled accuracy through our monthly reports. With full-funnel tracking, it’s possible to measure which channels, ad campaigns, and even URLs impacted a user’s journey from visitor to customer.' },
      { text: 'With this level of insight from your PPC marketing services, you can:' },
    ], bullets: ['Make data-driven decisions about a strategy’s effectiveness', 'Funnel ad spend to the most profitable ad campaigns', 'Demonstrate to stakeholders your (and PPC’s) impact on company objectives'] },
    { label: 'Bid management', body: [
      { text: 'Forget wasted ad spend. With FunkyyApps PPC management services, bid management is built-in and includes:' },
    ], bullets: ['Monitoring for fraudulent activity', 'Optimizing bids to maximize ROI', 'Leveraging AI to meet monthly ad spends'],
      after: [{ text: 'With our proactive bid management, your team can spend less time monitoring ad accounts and more time on the projects that need your attention.' }] },
    { label: 'Landing page optimization', body: [
      { text: 'FunkyyApps transforms your landing pages into high-converting assets. From design to copy, we optimize every element to drive engagement, capture leads, and maximize conversions' },
      { text: 'FunkyyApps’ landing page optimization delivers an unparalleled user experience. From seamless navigation to persuasive messaging, we ensure every visit becomes a conversion opportunity.' },
      { text: 'With FunkyyApps’ optimization strategies, your landing pages become powerful conversion engines. Drive action, foster engagement, and achieve your business objectives with precision.' },
    ] },
  ],
  // NOTE: a few answers mention "ADS" and a "Digital Marketing Guide" — reproduced as on the live site; review before going live.
  faqs: [
    { q: 'What is digital marketing?', a: ['Digital marketing, also called online marketing, is the promotion of a brand across digital channels to connect with potential and current customers. Digital marketing channels include search, social, email, and paid.'] },
    { q: 'Why is digital marketing important?', a: [
      'Digital marketing is important for a few reasons, including:',
      '**Reach:** Worldwide, billions of people use the Internet. With the Internet’s reach, your business can reach the right people at the right time with the right message. The result? Your marketing campaigns perform better, resulting in more revenue for your business.',
      '**Targeting:** Digital marketing offers immense targeting options, from demographics to behavior. With these targeting capabilities, your company can optimize its marketing spend, focusing on the users most likely to become customers.',
      '**Tracking:** Digital marketing’s performance is easy to track. That makes answering questions about key performance indicators (KPIs) like conversions fast and easy. Plus, with ADS, you can instantly track each channel’s contribution to your bottom line.',
      '**Customization:** Everything about digital marketing is custom, including which strategies you use. Compared to traditional marketing, your business can instantly adjust its strategies and campaigns, preventing wasted spending.',
      '**Effectiveness:** With its reach, targeting, tracking, and customization capabilities, digital marketing is highly effective. Companies investing in web marketing services can accelerate its effectiveness, too — as demonstrated by our clients experiencing a 20% greater marketing ROI.',
      'If you’re looking to learn more about digital marketing’s benefits, read our Digital Marketing Guide!',
    ] },
    { q: 'What is included with my purchase?', a: [
      'The types of digital marketing include the following: Search engine optimization, Pay-per-click advertising, Social media marketing, Content marketing, Email marketing.',
      'In some cases, organizations will also include the following as digital marketing types: Marketing analytics, Affiliate marketing, Mobile marketing, Conversion rate optimization, Web design.',
    ] },
    { q: 'What are digital marketing services?', a: ['Digital marketing services, also called online marketing services, use digital channels to promote and connect brands with potential clients. Digital channels used by online marketing services include search, email, paid, and social media. On average, these services cost $2500 to $12,000 per month.'] },
    { q: 'How much do digital marketing services cost?', a: ['Prices for digital marketing services depend heavily on the number of services, as well as the service plan you choose. On average, however, small-to-midsized businesses will invest around $2500 to $12,000 per month on professional online marketing services.'] },
    { q: 'What can Internet marketing services help with?', a: [
      'Internet marketing services can help solve several problems, including:',
      'Growing website traffic, like through search engine optimization · Creating content, like blog posts, sales copy, ebooks, and more · Managing paid media campaigns on places like Google Ads · Establishing a digital presence, like with a website and social media profiles · Building a digital strategy for different channels, like search and paid · And more',
    ] },
    { q: 'How do I choose a digital marketing agency?', a: [
      'You can help your business hire the best digital marketing agency by following these tips:',
      'Outline your goals (or what you want to accomplish) with online marketing. Compile a list of the services you need. Determine your monthly budget for online marketing. Generate a list of agencies that meet your budget and provide the service you need. Review every qualifying agency’s reviews, testimonials, and case studies. Research how the agency measures and reports client success. Chat with the agency one-on-one to see how they blend with your business. Look into the agency’s growth and successes through online marketing.',
      'Overall, you want to hire a digital marketing service provider that is: Transparent, Trustworthy, Reliable, Client-focused, Successful, Knowledgeable.',
      'When you choose an agency that embodies those traits, you work with an agency that’s an extension of your team, like ADS. You get a partner that values your business. They respond to your questions, structure your strategy for success, and help your company grow.',
    ] },
  ],
}

export const webDev = {
  title: 'Website Development',
  kicker: 'Portfolio',
  intro: [
    'At FunkyyApps, we create custom designs that are tailored to your business’s needs and brand. We offer different content management systems, for advanced and user-friendly interaction.',
    'You can expect nothing but the best from us, as we take time to understand your vision and are transparent regarding the process and cost.',
    'Come work with us and experience a whole new level of web design & development.',
  ],
  templates: [
    'Choose from a wide variety of templates/themes that match your style. We make sure that it’s the closest match for your niche/line of business.',
    'For custom tailored solutions, all we need is a reference design or design elements that best suit your choice of style.',
  ],
  usama: 'We’re specialists in the simplification of complex problems in order to create identities which bring value to brands and end users',
  closer: 'You don’t just build a website with us, you build “THE BEST CUSTOMER EXPERIENCE”!',
}

export const mobile = {
  title: 'Mobile App Development',
  heading: 'Crafting Mobile Solutions for a Spectrum of Industries',
  intro: 'As a leading mobile app development services firm, we excel in offering custom solutions for various industries ensuring great versatility and the ability to cater to diverse business needs and requirements.',
  industries: ['Healthcare', 'Finance', 'Restaurant', 'eCommerce', 'Logistics', 'Social Networking', 'Games and Sports', 'Travel', 'Aviation', 'Real Estate', 'Education', 'Entertainment', 'On-Demand', 'Government', 'Agriculture'],
  why: [
    { label: 'Quality Assurance', stat: 'GDPR', title: 'By prioritizing data encryption and strictly following all compliances and regulations (such as GDPR), we cater to secure mobile application development for our esteemed clients.', text: 'As strategic leaders in mobile development services, we are committed to implementing robust security measures to help businesses mitigate risks and establish customer trust, ensuring a more substantial online presence and enhanced business agility.' },
    { label: 'User Rating', stat: '4.5/5', title: 'Custom mobile apps developed for our client base witness an exceptional average rating of 4.5/5 at both the Google Play Store and App Store.', text: 'The positive feedback and excellent ratings for our app’s performance, features, and overall UX are a testimony to the level of perfection we achieve for our clients’ projects.' },
    { label: 'Advanced Approach', stat: 'AI · IoT', title: 'Our skilled team is highly proficient in an extensive array of technologies, encompassing Business Intelligence, Big Data Analytics, Artificial Intelligence, Cloud Computing, IoT, and more.', text: 'Each member of our team contributes a distinct skill set and valuable experience in offering custom mobile apps services to our client base.' },
    { label: 'On Schedule', stat: '57%', title: 'With our agile development approach, we consistently deliver projects 57% faster compared to traditional delivery methods.', text: 'Our dedicated mobile software development services and efficient project management techniques enable us to accelerate development timelines while maintaining high quality and client satisfaction.' },
  ],
  custom: [
    { title: 'Wearable Application Development', text: 'Our expertise extends to developing companion apps for various wearable devices. With meticulous attention to detail in offering wearable mobile app development services, we ensure that your application delivers an immersive user experience and transforms your vision into impeccable wearable experiences.' },
    { title: 'Flutter Application Development', text: 'As a leading Flutter app development company, we specialize in crafting multi-platform applications with seamless animations, appealing user interfaces, and exceptional performance. Our team leverages a single codebase to create cross-platform mobile apps that maximize the return on investment for clients.' },
    { title: 'iOS Application Development', text: 'We deliver highly functional and feature-rich iOS applications that cater to the needs of both startups and enterprises. Our team of skilled iOS app development service experts is proficient in programming languages such as Swift, Objective-C, React Native, Flutter, and Ionic, ensuring the delivery of industry-leading iOS solutions.' },
    { title: 'Web App Development', text: 'With next-gen web application development services, our team empowers your business to streamline operations, enhance customer engagement, and gain a competitive edge in your niche. Our experts build a tailored digital ecosystem for your business that guarantees resilience and offers a seamless user experience.' },
    { title: 'React Native Application Development', text: 'Our exceptional React Native development services assure the development of fast and seamless cross-platform mobile applications that excel in performance, scalability, and technological prowess. Our goal-oriented, result-driven approach ensures the delivery of customized mobile application development solutions.' },
    { title: 'Progressive Web Application Development', text: 'As a progressive web app development company, our services bridge the gap between mobile and web platforms. Our expert developers ensure the integration of unique features into your progressive web apps, optimizing them to offer a near-native experience and a seamless performance, thereby making way for increased user engagement and heightened ROI.' },
    { title: 'App Development', text: 'Our App developers specialize in creating secure and scalable decentralized applications for a range of industries, including gaming, healthcare, and finance. As leaders in mobile development services, we excel at creating robust digital solutions that transform your ideas into reliable and user-friendly applications that offer an exceptional user experience.' },
    { title: 'Android Application Development', text: 'We provide comprehensive Android mobile application development services, custom to your specific business requirements. Our expert app developers are well-versed in guiding clients through the intricate journey of conceptualizing and building enterprise-grade Android applications.' },
  ],
  stack: [
    { label: 'Frontend Programming Languages', items: ['CSS', 'HTML', 'Javascript', 'Angular', 'React', 'Vue.js', 'ember', 'Meteor', 'Nextjs'] },
    { label: 'Backend Programming Languages', items: ['.NET', 'Java', 'Php', 'Node.js', 'Python', 'GO'] },
    { label: 'Mobile', items: ['Android', 'Flutter', 'Cordova', 'iOS', 'Xamarin', 'PWA', 'Ionic', 'React Native'] },
    { label: 'Desktop', items: ['C++', 'Qt', 'C-sharp', 'Microsoft WPF', 'OBJ-C', 'Python', 'Swift', 'Meteor', 'Nextjs'] },
  ],
  process: [
    { title: 'Design Phase', text: 'During this phase, we refine app requirements, plan the user experience, design mockups, finalize the user interface design, and finally develop clickable app prototypes to be delivered to the mobile developers.' },
    { title: 'Development Stage', text: 'Here, we carefully select and build the appropriate app architecture, finalize the back-end technologies, frameworks, and libraries, and integrate APIs to establish a robust continuous integration and continuous delivery (CI/CD) setup.' },
    { title: 'Quality Assurance', text: 'Next step in our mobile application development process is carrying out the quality assurance of the product. Our diligent quality assurance procedures involve stringent testing of critical functionalities, additional features, and user interfaces. We conduct thorough security, usability, and performance testing to ensure a polished and reliable app experience.' },
    { title: 'Release and Support', text: 'Once the app has been tested across multiple parameters, we submit the app to the Apple App Store and Google Play Store, managing the entire release process. We continuously enhance the app with extended functionality based on user feedback and analytics, ensuring a seamless and supported experience for your users.' },
  ],
  agileTitle: 'Our Agile Mobile Application Development Process',
  agileText: 'As a committed custom mobile app development services provider, we are dedicated to utilizing the Agile DevOps framework. It empowers us to consistently deliver predictable, scalable, and measurable results to our clients. Our app development approach further ensures a high level of consistency and reliability throughout the project development process.',
  closer: 'Take your business to new heights by offering unmatched mobility to your customers!',
}

// Portfolio screenshots from the live site, served locally from /public/portfolio
// (see public/portfolio/README.txt for where each one comes from). A drawn placeholder shows
// inside the browser frame if a file is missing.
export const portfolio = [
  '/portfolio/project-1.png',
  '/portfolio/project-2.png',
  '/portfolio/project-3.png',
  '/portfolio/project-4.png',
  '/portfolio/project-5.png',
  '/portfolio/project-6.webp',
  '/portfolio/project-7.png',
  '/portfolio/project-8.png',
  '/portfolio/project-9.png',
]
