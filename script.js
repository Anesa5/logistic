/* =========================================================
   LOGISTICS — script.js
   Vanilla JS · hash routing · no dependencies
   ========================================================= */

/* ---------------------------------------------------------
   1. DATA
   --------------------------------------------------------- */

const SERVICES = [
  {
    slug: 'air-freight',
    icon: 'fa-plane',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop',
    title: 'Air Freight',
    short: 'Time-critical cargo moved with speed and full visibility, door to door.',
    intro:
      'When a shipment cannot wait, air freight earns its premium. We hold the space, watch the cut-offs, and keep you ahead of every handover.',
    features: [
      'Priority and deferred capacity across major carriers',
      'Door-to-door pickup, screening and customs clearance',
      'Charter and hand-carry options for critical parts',
      'Milestone alerts from uplift through proof of delivery',
    ],
    stats: [
      { value: '24h', label: 'typical door-to-door' },
      { value: '112', label: 'active trade lanes' },
    ],
  },
  {
    slug: 'ocean-freight',
    icon: 'fa-ship',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop',
    title: 'Ocean Freight',
    short: 'Predictable port-to-port movement with space, schedules and customs handled.',
    intro:
      'Ocean is a long game of small decisions. We plan the booking, protect the space, and keep the paperwork from becoming the delay.',
    features: [
      'Named-account space protection on core trade lanes',
      'FCL, SOC and buyer’s consolidation programmes',
      'Customs brokerage and origin documentation',
      'Port-to-door drayage coordination',
    ],
    stats: [
      { value: '38', label: 'countries reached' },
      { value: '97.4%', label: 'on-time milestone rate' },
    ],
  },
  {
    slug: 'road-transport',
    icon: 'fa-truck',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop',
    title: 'Road Transport',
    short: 'Reliable inland delivery across borders with full load and part load options.',
    intro:
      'Road freight is where supply chains are won or lost. We own the last mile as carefully as the first.',
    features: [
      'Full truckload and less-than-truckload programmes',
      'Cross-border documentation and customs support',
      'Temperature-controlled and high-value cargo',
      'Real-time GPS tracking with ETA updates',
    ],
    stats: [
      { value: '4.8/5', label: 'partner satisfaction' },
      { value: '18 min', label: 'average first response' },
    ],
  },
  {
    slug: 'warehousing',
    icon: 'fa-warehouse',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop',
    title: 'Warehousing',
    short: 'Flexible storage, fulfilment and inventory management across key hubs.',
    intro:
      'Storage should flex with your demand, not lock you into a lease. We run warehousing that scales up and down with your volumes.',
    features: [
      'Short and long-term storage across 12 countries',
      'Pick, pack and fulfilment services',
      'Real-time inventory visibility and reporting',
      'Integration with your e-commerce and ERP systems',
    ],
    stats: [
      { value: '12', label: 'warehouse hubs' },
      { value: '99.8%', label: 'inventory accuracy' },
    ],
  },
  {
    slug: 'customs-brokerage',
    icon: 'fa-file-contract',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80&auto=format&fit=crop',
    title: 'Customs Brokerage',
    short: 'Clearance handled end-to-end so your goods never sit at the border.',
    intro:
      'Customs is where good freight plans quietly die. We pre-clear documentation and keep your cargo moving.',
    features: [
      'Import and export clearance in 38 countries',
      'Duty and tariff optimisation advice',
      'HS classification and origin management',
      'AEO-certified brokerage network',
    ],
    stats: [
      { value: '38', label: 'countries cleared' },
      { value: '2.1h', label: 'average clearance time' },
    ],
  },
  {
    slug: 'supply-chain',
    icon: 'fa-route',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80&auto=format&fit=crop',
    title: 'Supply Chain',
    short: 'One accountable partner coordinating every handoff across your supply chain.',
    intro:
      'Most supply chains break between the transport legs. We own the seams, so nothing gets lost in the handoff.',
    features: [
      'End-to-end control tower coordination',
      'Multi-modal routing and mode optimisation',
      'Inventory-in-transit visibility and reporting',
      'Exception management with named operators',
    ],
    stats: [
      { value: '24/7', label: 'human support coverage' },
      { value: '16 yr', label: 'moving business forward' },
    ],
  },
];

const ARTICLES = [
  {
    slug: 'the-new-rules-of-resilient-supply-chains',
    tag: 'Perspective',
    icon: 'fa-chart-line',
    date: 'June 12, 2024',
    readTime: '06 min read',
    title: 'The new rules of resilient supply chains',
    excerpt:
      'What the most prepared operations teams are changing before the next disruption arrives.',
    body: [
      'Resilience used to be measured in backup suppliers. Today it is measured in how quickly a team can see a problem and how much authority they have to act on it.',
      'The operations teams that recovered fastest from the last few years of disruption shared three habits: they shortened the distance between signal and decision, they pre-agreed what to do when a lane failed, and they treated their freight partner as part of the team rather than a vendor.',
      'None of that requires a larger budget. It requires fewer handoffs, clearer ownership, and a willingness to rehearse the bad day before it arrives.',
    ],
  },
  {
    slug: 'when-air-freight-is-the-right-call',
    tag: 'Operations',
    icon: 'fa-plane-departure',
    date: 'May 28, 2024',
    readTime: '04 min read',
    title: 'When air freight is the right call',
    excerpt:
      'A practical framework for deciding when speed earns its premium.',
    body: [
      'Air freight is rarely about the cost of the shipment. It is about the cost of the shipment arriving late — a stalled production line, a missed launch, a customer who does not order again.',
      'The simplest test we use with clients: compare the premium against the daily cost of the delay. If the delay costs more per day than the air premium, the decision is already made.',
      'The second test is recoverability. If a sea shipment slips a week, can the schedule absorb it? If the answer is no, plan for air before the problem, not after.',
    ],
  },
  {
    slug: 'a-closer-look-at-port-to-door',
    tag: 'Field Notes',
    icon: 'fa-truck-fast',
    date: 'May 14, 2024',
    readTime: '05 min read',
    title: 'A closer look at port-to-door',
    excerpt:
      'Why the last 100 miles deserve the same precision as the first 10,000.',
    body: [
      'A container can cross an ocean without a scratch and still lose three days at the terminal. The final hundred miles are where most promises quietly expire.',
      'We treat the port-to-door leg as its own project: pre-cleared documentation, a booked drayage slot before the vessel berths, and a named contact who owns the delivery window.',
      'It is unglamorous work. It is also the difference between a shipment that arrives and a shipment that arrives on time.',
    ],
  },
  {
    slug: 'customs-mistakes-that-cost-weeks',
    tag: 'Customs',
    icon: 'fa-file-shield',
    date: 'April 30, 2024',
    readTime: '07 min read',
    title: 'Customs mistakes that cost weeks',
    excerpt:
      'The five documentation errors we see most often — and how to avoid them.',
    body: [
      'Customs delays almost never come from the goods themselves. They come from paperwork that was filled in too fast, or not at all.',
      'The five we see most: mismatched invoice values, wrong HS codes, missing certificates of origin, vague goods descriptions, and an importer of record who is not actually set up in the destination country.',
      'Each one is boring. Each one can hold a shipment for days. The fix is a pre-clearance checklist you actually use.',
    ],
  },
  {
    slug: 'the-real-cost-of-cheap-freight',
    tag: 'Perspective',
    icon: 'fa-calculator',
    date: 'April 18, 2024',
    readTime: '05 min read',
    title: 'The real cost of cheap freight',
    excerpt:
      'Why the lowest quote is rarely the lowest total cost of ownership.',
    body: [
      'Cheap freight is a story told on the invoice. Expensive freight is a story told six weeks later, when a customer leaves.',
      'The line item you should be comparing is not the per-container rate. It is the total cost of moving a unit of product from origin to a happy customer, including delays, damage, and the staff time spent chasing updates.',
      'When you compare that number, the cheapest quote rarely wins.',
    ],
  },
  {
    slug: 'building-a-control-tower-that-works',
    tag: 'Operations',
    icon: 'fa-satellite-dish',
    date: 'April 5, 2024',
    readTime: '08 min read',
    title: 'Building a control tower that works',
    excerpt:
      'What separates useful supply chain visibility from another dashboard nobody opens.',
    body: [
      'Most control towers fail for the same reason: they show everything and own nothing. A dashboard is not a control tower. A control tower is a team with authority.',
      'The useful version has three parts: one source of truth, a small set of alerts that actually fire, and a named person who acts on each one.',
      'If any of those three is missing, the tower is decoration.',
    ],
  },
];

const TEAM = [
  {
    name: 'Marcus Chen',
    role: 'Founder & CEO',
    initials: 'MC',
    image: 'css/agent1.jpg'
  },
  {
    name: 'Priya Raman',
    role: 'Head of Operations',
    initials: 'PR',
    image: 'css/agent2.jpg'
  },
  {
    name: 'Daniel Okafor',
    role: 'Customs & Compliance',
    initials: 'DO',
    image: 'css/agent3.jpg'
  },
  {
    name: 'Sofia Rossi',
    role: 'Customer Success',
    initials: 'SR',
    image: 'css/agent4.jpg'
  },
];

const TESTIMONIALS = [
  {
    quote:
      'Logistico turned our supply chain from a liability into a competitive advantage. Their team owns problems before we even hear about them.',
    name: 'Helena Voss',
    role: 'COO, Northstar Manufacturing',
    initials: 'HV',
  },
  {
    quote:
      'We moved 14 lanes to Logistico in one quarter. Not a single shipment slipped without a warning call first. That is the difference.',
    name: 'James Okafor',
    role: 'VP Supply Chain, Radian Electronics',
    initials: 'JO',
  },
  {
    quote:
      'The control tower team is the extension of our ops department we never knew we needed. Real answers in minutes, not days.',
    name: 'Mei Lin',
    role: 'Head of Logistics, Fieldwork Retail',
    initials: 'ML',
  },
];

/* ---------------------------------------------------------
   2. HELPERS
   --------------------------------------------------------- */

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function icon(name, cls = '') {
  return `<i class="fa-solid ${name} ${cls}"></i>`;
}

/* ---------------------------------------------------------
   3. SHARED COMPONENTS
   --------------------------------------------------------- */

function logo() {
  return `
    <a href="#/" class="logo">
      <span class="logo-mark">${icon('fa-truck-fast')}</span>
      <span>Logist<em>i</em>cs</span>
    </a>`;
}

function header(activePath) {
  const isActive = (match) =>
    activePath === match || activePath.startsWith(match + '/');

  const servicesDropdown = SERVICES.map(
    (s) => `
    <a href="#/services/${s.slug}">
      ${icon(s.icon)}
      <span>${s.title}</span>
    </a>`
  ).join('');

  const mobileServices = SERVICES.map(
    (s) => `<a href="#/services/${s.slug}" data-close-menu>${s.title}</a>`
  ).join('');

  return `
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="topbar-left">
          <span class="topbar-item">${icon('fa-envelope')} info@logistics.com</span>
          <span class="topbar-item">${icon('fa-phone')} +1 (601) 609-6780</span>
          <span class="topbar-item">${icon('fa-clock')} Mon – Sat: 8:00 – 18:00</span>
        </div>
        <div class="topbar-right">
          <div class="topbar-social">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>

    <header class="header" id="site-header">
      <div class="container header-inner">
        ${logo()}

        <nav class="nav" aria-label="Main navigation">
          <div class="nav-item">
            <a href="#/" class="nav-link ${activePath === '/' ? 'active' : ''}">Home</a>
          </div>

          <div class="nav-item">
            <a href="#/services" class="nav-link ${isActive('/services') ? 'active' : ''}">
              Services ${icon('fa-chevron-down')}
            </a>
            <div class="dropdown">${servicesDropdown}</div>
          </div>

          <div class="nav-item">
            <a href="#/about" class="nav-link ${isActive('/about') ? 'active' : ''}">About Us</a>
          </div>

          <div class="nav-item">
            <a href="#/blog" class="nav-link ${isActive('/blog') ? 'active' : ''}">Blog</a>
          </div>

          <div class="nav-item">
            <a href="#/contact" class="nav-link ${isActive('/contact') ? 'active' : ''}">Contact</a>
          </div>
        </nav>

        <a href="#/contact" class="header-cta">
          Get a Quote ${icon('fa-arrow-right')}
        </a>

        <button class="mobile-toggle" aria-label="Toggle menu" data-action="toggle-menu">
          <span data-menu-icon="open">${icon('fa-bars')}</span>
          <span data-menu-icon="close" hidden>${icon('fa-xmark')}</span>
        </button>
      </div>

      <nav class="mobile-menu" aria-label="Mobile navigation">
        <div class="container">
          <a href="#/" class="nav-link ${activePath === '/' ? 'active' : ''}" data-close-menu>Home</a>

          <a href="#/services" class="nav-link ${isActive('/services') ? 'active' : ''}" data-close-menu>Services</a>
          <div class="mobile-sub">${mobileServices}</div>

          <a href="#/about" class="nav-link ${isActive('/about') ? 'active' : ''}" data-close-menu>About Us</a>
          <a href="#/blog" class="nav-link ${isActive('/blog') ? 'active' : ''}" data-close-menu>Blog</a>
          <a href="#/contact" class="nav-link ${isActive('/contact') ? 'active' : ''}" data-close-menu>Contact</a>

          <a href="#/contact" class="header-cta" data-close-menu>
            Get a Quote ${icon('fa-arrow-right')}
          </a>
        </div>
      </nav>
    </header>`;
}

function footer() {
  const serviceLinks = SERVICES.slice(0, 5)
    .map(
      (s) =>
        `<a href="#/services/${s.slug}">${icon('fa-chevron-right')} ${s.title}</a>`
    )
    .join('');

  return `
    <footer class="footer">
      <div class="container footer-top">
        <div>
          ${logo()}
          <p class="footer-about">
            Global freight, thoughtfully coordinated. From the first mile to
            the last, we keep your business moving across 38 countries.
          </p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        <div>
          <h5>Our Services</h5>
          <div class="footer-links">${serviceLinks}</div>
        </div>

        <div>
          <h5>Company</h5>
          <div class="footer-links">
            <a href="#/about">${icon('fa-chevron-right')} About Us</a>
            <a href="#/services">${icon('fa-chevron-right')} All Services</a>
            <a href="#/blog">${icon('fa-chevron-right')} Our Blog</a>
            <a href="#/contact">${icon('fa-chevron-right')} Contact Us</a>
            <a href="#/contact">${icon('fa-chevron-right')} Careers</a>
          </div>
        </div>

        <div>
          <h5>Get In Touch</h5>
          <div class="footer-contact">
            <div class="footer-contact-item">
              ${icon('fa-location-dot')}
              <span>1200 Harbor Drive, Suite 400<br />Rotterdam, Netherlands</span>
            </div>
            <div class="footer-contact-item">
              ${icon('fa-phone')}
              <a href="tel:+16016096780">+1 (601) 609-6780</a>
            </div>
            <div class="footer-contact-item">
              ${icon('fa-envelope')}
              <a href="mailto:info@logistics.com">info@logistics.com</a>
            </div>
          </div>

          <div class="footer-newsletter">
            <form data-form="newsletter">
              <input type="email" placeholder="Your email address" required />
              <button type="submit" aria-label="Subscribe">
                ${icon('fa-paper-plane')}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="container footer-bottom">
        <span>© 2024 Logistics. All rights reserved.</span>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>`;
}

function shell(activePath, content) {
  return `
    <div class="site">
      ${header(activePath)}
      ${content}
      ${footer()}
      <button class="scroll-top" data-action="scroll-top" aria-label="Scroll to top">
        ${icon('fa-arrow-up')}
      </button>
    </div>`;
}

/* ---------------------------------------------------------
   SERVICE CARD — with image
   --------------------------------------------------------- */

function serviceCard(s) {
  return `
    <a href="#/services/${s.slug}" class="service-card reveal">
      <div class="service-card-image">
        <img src="${s.image}" alt="${s.title}" loading="lazy" />
        <span class="service-card-badge">${icon(s.icon)}</span>
      </div>
      <div class="service-card-body">
        <h3>${s.title}</h3>
        <p>${s.short}</p>
        <span class="service-link">
          Read More ${icon('fa-arrow-right')}
        </span>
      </div>
    </a>`;
}

/* ---------------------------------------------------------
   4. PAGES
   --------------------------------------------------------- */

function homePage() {
  const servicesCards = SERVICES.slice(0, 6).map(serviceCard).join('');

  const blogsCards = ARTICLES.slice(0, 3)
    .map(
      (a) => `
      <article class="blog-card reveal">
        <div class="blog-thumb">
          <span class="blog-thumb-tag">${a.tag}</span>
          ${icon(a.icon)}
        </div>
        <div class="blog-body">
          <div class="blog-meta">
            <span>${icon('fa-calendar')} ${a.date}</span>
            <span>${icon('fa-clock')} ${a.readTime}</span>
          </div>
          <h3>${a.title}</h3>
          <p>${a.excerpt}</p>
          <a href="#/blog/${a.slug}" class="blog-read">
            Read More ${icon('fa-arrow-right')}
          </a>
        </div>
      </article>`
    )
    .join('');

  const testimonialsCards = TESTIMONIALS.map(
    (t) => `
      <div class="testimonial reveal">
        <div class="testimonial-stars">
          ${icon('fa-star')}${icon('fa-star')}${icon('fa-star')}${icon('fa-star')}${icon('fa-star')}
        </div>
        <p>${t.quote}</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${t.initials}</div>
          <div>
            <strong>${t.name}</strong>
            <span>${t.role}</span>
          </div>
        </div>
      </div>`
  ).join('');

  const content = `
    <main>
      <!-- HERO -->
      <section class="hero">
        <div class="container hero-inner">
          <div class="reveal">
            <span class="hero-eyebrow">Global Freight &amp; Logistics</span>
            <h1>Moving Your World,<br /><span>One Shipment</span> at a Time</h1>
            <p class="hero-copy">
              From a single urgent consignment to a complete supply chain, we
              bring the people, planning, and practical control to move your
              goods across 38 countries — on time, every time.
            </p>

            <div class="hero-buttons">
              <a href="#/services" class="btn btn-orange">
                Our Services ${icon('fa-arrow-right')}
              </a>
              <a href="#/contact" class="btn btn-outline-white">
                Get a Quote ${icon('fa-arrow-right')}
              </a>
            </div>

            <div class="hero-facts">
              <div class="hero-fact">
                ${icon('fa-globe')}
                <div>
                  <strong>38+</strong>
                  <span>Countries Served</span>
                </div>
              </div>
              <div class="hero-fact">
                ${icon('fa-truck-fast')}
                <div>
                  <strong>12k+</strong>
                  <span>Shipments / Year</span>
                </div>
              </div>
              <div class="hero-fact">
                ${icon('fa-award')}
                <div>
                  <strong>16 Yrs</strong>
                  <span>In Business</span>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-art reveal">
            <div class="hero-quote">
              <h3>Request a Quote</h3>
              <p>Tell us what needs to move. We'll reply within one business hour.</p>

              <div class="field">
                <label for="quote-name">Full Name</label>
                <input id="quote-name" type="text" placeholder="e.g. Jane Doe" />
              </div>

              <div class="field">
                <label for="quote-email">Email Address</label>
                <input id="quote-email" type="email" placeholder="you@company.com" />
              </div>

              <div class="field">
                <label for="quote-service">Service Needed</label>
                <select id="quote-service">
                  ${SERVICES.map(
    (s) => `<option value="${s.slug}">${s.title}</option>`
  ).join('')}
                </select>
              </div>

              <button class="btn btn-orange" data-action="hero-quote">
                Send Request ${icon('fa-paper-plane')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- MARQUEE — scrolling text band -->
            <!-- TRUST STRIP -->
            <!-- HIGHLIGHTS STRIP -->
      <section class="highlights-strip">
        <div class="container">
          <div class="highlights-grid">
            <div class="highlight-item reveal">
              <div class="highlight-icon">${icon('fa-bolt')}</div>
              <div class="highlight-text">
                <h4>Same-Day Dispatch</h4>
                <p>Urgent shipments picked up within 4 hours</p>
              </div>
            </div>

            <div class="highlight-item reveal">
              <div class="highlight-icon">${icon('fa-shield-halved')}</div>
              <div class="highlight-text">
                <h4>Fully Insured</h4>
                <p>Every shipment covered up to $2M</p>
              </div>
            </div>

            <div class="highlight-item reveal">
              <div class="highlight-icon">${icon('fa-satellite-dish')}</div>
              <div class="highlight-text">
                <h4>Live Tracking</h4>
                <p>Real-time GPS on every container</p>
              </div>
            </div>

            <div class="highlight-item reveal">
              <div class="highlight-icon">${icon('fa-headset')}</div>
              <div class="highlight-text">
                <h4>24/7 Operators</h4>
                <p>Real humans, average 18-min response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FEATURE STRIP -->
           <!-- MOVING IMAGES BAND -->
      <section class="moving-band">
        <!-- Sliding images -->
        <div class="moving-images">
          <img class="moving-img" src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80&auto=format&fit=crop" alt="" />
          <img class="moving-img" src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop" alt="" />
          <img class="moving-img" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop" alt="" />
          <img class="moving-img" src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop" alt="" />
          <img class="moving-img" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop" alt="" />
          <img class="moving-img" src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80&auto=format&fit=crop" alt="" />
          <!-- Duplicate set for seamless loop -->
          <img class="moving-img" src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80&auto=format&fit=crop" alt="" />
          <img class="moving-img" src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80&auto=format&fit=crop" alt="" />
          <img class="moving-img" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop" alt="" />
          <img class="moving-img" src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&auto=format&fit=crop" alt="" />
          <img class="moving-img" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80&auto=format&fit=crop" alt="" />
          <img class="moving-img" src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80&auto=format&fit=crop" alt="" />
        </div>

        <!-- Top marquee text — never stops -->
        <div class="moving-text">
          <div class="moving-text-track">
            <span>
              Air Freight ${icon('fa-plane')}
              Ocean Freight ${icon('fa-ship')}
              Road Transport ${icon('fa-truck')}
              Warehousing ${icon('fa-warehouse')}
              Customs ${icon('fa-file-contract')}
            </span>
            <span>
              Air Freight ${icon('fa-plane')}
              Ocean Freight ${icon('fa-ship')}
              Road Transport ${icon('fa-truck')}
              Warehousing ${icon('fa-warehouse')}
              Customs ${icon('fa-file-contract')}
            </span>
          </div>
        </div>

        <!-- Bottom sub marquee — reverse direction -->
        <div class="moving-text-sub">
          <div class="moving-text-sub-track">
            <span>38 Countries</span>
            <span>12,000+ Shipments</span>
            <span>24/7 Support</span>
            <span>16 Years Experience</span>
            <span>97% On-Time</span>
            <span>120 Experts</span>
            <span>38 Countries</span>
            <span>12,000+ Shipments</span>
            <span>24/7 Support</span>
            <span>16 Years Experience</span>
            <span>97% On-Time</span>
            <span>120 Experts</span>
          </div>
        </div>
      </section>

      <!-- SERVICES -->
      <section class="section">
        <div class="container">
          <div class="section-head reveal">
            <span class="section-eyebrow">What We Do</span>
            <h2>Complete Logistics Solutions</h2>
            <p>
              Every lane has its own logic. We bring the people, planning,
              and practical control to make yours work better.
            </p>
          </div>

          <div class="services-grid">${servicesCards}</div>
        </div>
      </section>

      <!-- ABOUT SPLIT -->
      <section class="section section-bg-gray">
        <div class="container split">
          <div class="split-visual reveal">
            <div class="split-visual-main">
              ${icon('fa-truck-fast')}
            </div>
            <div class="split-visual-badge">
              <strong>16+</strong>
              <span>Years Experience</span>
            </div>
          </div>

          <div class="split-copy reveal">
            <span class="section-eyebrow">Why Choose Us</span>
            <h2>The Partner You Can Rely On</h2>
            <p>
              We built the logistics partner we always wanted to work with.
              Global reach, local attention, and a team that takes the
              outcome personally — because your business depends on it.
            </p>

            <ul class="check-list">
              <li>${icon('fa-check')} One accountable operations team</li>
              <li>${icon('fa-check')} Updates with signal, not noise</li>
              <li>${icon('fa-check')} Plans built for real-world change</li>
              <li>${icon('fa-check')} Global reach, local attention</li>
              <li>${icon('fa-check')} Fully insured cargo programmes</li>
              <li>${icon('fa-check')} Transparent, honest pricing</li>
            </ul>

            <a href="#/about" class="btn btn-blue">
              Learn More ${icon('fa-arrow-right')}
            </a>
          </div>
        </div>
      </section>

      <!-- STATS -->
      <section class="section section-bg-blue">
        <div class="container">
          <div class="section-head reveal">
            <span class="section-eyebrow" style="color: var(--orange);">By the Numbers</span>
            <h2>Scale Without Losing the Thread</h2>
            <p style="color: rgba(255,255,255,0.75);">
              Every shipment is connected to a promise. We keep the full
              picture in view, so your team can make decisions with confidence.
            </p>
          </div>

          <div class="stats">
            <div class="stat reveal">
              ${icon('fa-globe')}
              <strong data-count="38">0</strong>
              <span>Countries Reached</span>
            </div>
            <div class="stat reveal">
              ${icon('fa-truck-fast')}
              <strong data-count="12000">0</strong>
              <span>Shipments / Year</span>
            </div>
            <div class="stat reveal">
              ${icon('fa-user-tie')}
              <strong data-count="120">0</strong>
              <span>Logistics Experts</span>
            </div>
            <div class="stat reveal">
              ${icon('fa-thumbs-up')}
              <strong data-count="97">0</strong>
              <span>% On-Time Rate</span>
            </div>
          </div>
        </div>
      </section>

      <!-- TESTIMONIALS -->
      <section class="section">
        <div class="container">
          <div class="section-head reveal">
            <span class="section-eyebrow">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>
              Real feedback from operations teams who ship with us every week.
            </p>
          </div>

          <div class="testimonials-grid">${testimonialsCards}</div>
        </div>
      </section>

      <!-- BLOG -->
      <section class="section section-bg-gray">
        <div class="container">
          <div class="section-head reveal">
            <span class="section-eyebrow">Latest Insights</span>
            <h2>From Our Blog</h2>
            <p>
              Practical thinking on freight, supply chains, and the details
              that decide whether a shipment arrives on time.
            </p>
          </div>

          <div class="blog-grid">${blogsCards}</div>

          <div style="text-align: center; margin-top: 46px;">
            <a href="#/blog" class="btn btn-blue">
              View All Articles ${icon('fa-arrow-right')}
            </a>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-band">
        <div class="container cta-inner">
          <div class="reveal">
            <h2>Ready to Move Your Freight?</h2>
            <p>
              Give us the shape of the challenge. We'll help you find the
              cleanest route through it — with a quote in 24 hours.
            </p>
          </div>

          <div class="cta-actions reveal">
            <a href="#/contact" class="btn btn-orange">
              Request a Quote ${icon('fa-arrow-right')}
            </a>
            <a href="#/services" class="btn btn-outline-white">
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </main>`;

  return shell('/', content);
}

function servicesPage() {
  const cards = SERVICES.map(serviceCard).join('');

  const content = `
    <main>
      <section class="page-hero">
        <div class="container">
          <nav class="breadcrumb">
            <a href="#/">Home</a>
            ${icon('fa-chevron-right')}
            <span>Services</span>
          </nav>
          <h1>Our Services</h1>
          <p>
            From air freight to full supply chain management, we offer a
            complete range of logistics services built around the way you work.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="services-grid">${cards}</div>
        </div>
      </section>

      <section class="section section-bg-gray">
        <div class="container split">
          <div class="split-copy reveal">
            <span class="section-eyebrow">Built Around Your Business</span>
            <h2>Not a Menu. A Connected System.</h2>
            <p>
              Our services are designed to work together. Add warehousing to
              your freight programme, pair ocean capacity with last-mile
              delivery, or ask us to coordinate the whole picture.
            </p>

            <ul class="check-list">
              <li>${icon('fa-check')} Single point of accountability</li>
              <li>${icon('fa-check')} Multi-modal optimisation</li>
              <li>${icon('fa-check')} Fully digital documentation</li>
              <li>${icon('fa-check')} Real-time tracking &amp; alerts</li>
            </ul>

            <a href="#/contact" class="btn btn-blue">
              Talk to an Expert ${icon('fa-arrow-right')}
            </a>
          </div>

          <div class="split-visual reveal">
            <div class="split-visual-main">
              ${icon('fa-route')}
            </div>
            <div class="split-visual-badge">
              <strong>38</strong>
              <span>Countries</span>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-band">
        <div class="container cta-inner">
          <div>
            <h2>Need a Custom Solution?</h2>
            <p>
              Complex lane? Unusual cargo? Tell us about it — we'll design a
              plan that fits.
            </p>
          </div>
          <div class="cta-actions">
            <a href="#/contact" class="btn btn-orange">
              Get in Touch ${icon('fa-arrow-right')}
            </a>
          </div>
        </div>
      </section>
    </main>`;

  return shell('/services', content);
}

function serviceDetailPage(slug) {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return notFoundPage();

  const otherCards = SERVICES.filter((x) => x.slug !== slug)
    .slice(0, 3)
    .map(serviceCard)
    .join('');

  const features = s.features
    .map((f) => `<li>${icon('fa-check-circle')}<span>${f}</span></li>`)
    .join('');

  const stats = s.stats
    .map(
      (st) =>
        `<div class="detail-stat"><strong>${st.value}</strong><span>${st.label}</span></div>`
    )
    .join('');

  const content = `
    <main>
      <section class="page-hero">
        <div class="container">
          <nav class="breadcrumb">
            <a href="#/">Home</a>
            ${icon('fa-chevron-right')}
            <a href="#/services">Services</a>
            ${icon('fa-chevron-right')}
            <span>${s.title}</span>
          </nav>
          <h1>${s.title}</h1>
          <p>${s.short}</p>
        </div>
      </section>

      <section class="section">
        <div class="container detail-grid">
          <div class="detail-visual reveal">
            ${icon(s.icon)}
          </div>

          <div class="detail-body reveal">
            <span class="section-eyebrow">Service Overview</span>
            <h2>Built for the Way This Lane Actually Behaves</h2>
            <p>${s.intro}</p>

            <h3 style="font-size: 20px; margin: 26px 0 16px;">What's Included</h3>
            <ul class="detail-features">${features}</ul>

            <div class="detail-stats">${stats}</div>

            <a href="#/contact" class="btn btn-orange">
              Request a Quote ${icon('fa-arrow-right')}
            </a>
          </div>
        </div>
      </section>

      <section class="section section-bg-gray">
        <div class="container">
          <div class="section-head reveal">
            <span class="section-eyebrow">Related Services</span>
            <h2>Pairs Well With</h2>
            <p>
              Most shipments need more than one service. These are the ones
              that usually sit next to ${s.title.toLowerCase()}.
            </p>
          </div>

          <div class="services-grid">${otherCards}</div>
        </div>
      </section>
    </main>`;

  return shell('/services', content);
}

function aboutPage() {
  const teamCards = TEAM.map(
    (t) => `
      <div class="team-card reveal">
        <div class="team-avatar">
          <img src="${t.image}" alt="${t.name}" loading="lazy" />
        </div>
        <h4>${t.name}</h4>
        <span>${t.role}</span>
        <div class="team-social">
          <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="#" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
        </div>
      </div>`
  ).join('');

  const content = `
    <main>
      <section class="page-hero">
        <div class="container">
          <nav class="breadcrumb">
            <a href="#/">Home</a>
            ${icon('fa-chevron-right')}
            <span>About Us</span>
          </nav>
          <h1>About Logistics</h1>
          <p>
            Big enough to reach, close enough to care. Meet the people behind
            the movement.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container about-story-grid">
          <div class="reveal">
            <span class="section-eyebrow">Our Story</span>
            <div class="about-quote">"</div>
          </div>

          <div class="reveal">
            <h2>We Built the Partner We Wanted to Work With</h2>
            <p>
              In 2008, Logistics started with a handful of lanes and a promise
              to answer the phone. Today we coordinate freight across 38
              countries, but the promise is the same: know the details, say
              what is true, and stay with the shipment until it is where it
              needs to be.
            </p>
            <p>
              We work with owners and operations teams who are tired of
              disconnected handoffs. They choose us because our network is
              global, our thinking is practical, and our people take the
              outcome personally.
            </p>
            <p>
              Whether you are moving one urgent consignment or redesigning a
              full supply chain, you get the same thing from us: a clear plan,
              a named contact, and honest updates.
            </p>
            <a href="#/contact" class="btn btn-blue">
              Meet Us on Your Next Shipment ${icon('fa-arrow-right')}
            </a>
          </div>
        </div>
      </section>

      <section class="section section-bg-blue">
        <div class="container">
          <div class="section-head reveal">
            <span class="section-eyebrow" style="color: var(--orange);">Our Impact</span>
            <h2>Precision Is a Habit</h2>
            <p style="color: rgba(255,255,255,0.75);">
              It shows up in the questions we ask, the updates we send, and
              the risks we handle before they reach you.
            </p>
          </div>

          <div class="stats">
            <div class="stat reveal">
              ${icon('fa-globe')}
              <strong data-count="38">0</strong>
              <span>Countries in Network</span>
            </div>
            <div class="stat reveal">
              ${icon('fa-route')}
              <strong data-count="112">0</strong>
              <span>Active Trade Lanes</span>
            </div>
            <div class="stat reveal">
              ${icon('fa-star')}
              <strong data-count="48">0</strong>
              <span>Partner Satisfaction (4.8/5)</span>
            </div>
            <div class="stat reveal">
              ${icon('fa-stopwatch')}
              <strong data-count="18">0</strong>
              <span>Min Avg First Response</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head reveal">
            <span class="section-eyebrow">Our People</span>
            <h2>Meet the Team</h2>
            <p>
              A small group of operators, engineers, and customs specialists
              who care about getting your freight there on time.
            </p>
          </div>

          <div class="team-grid">${teamCards}</div>
        </div>
      </section>

      <section class="cta-band">
        <div class="container cta-inner">
          <div>
            <h2>Let's Build a Better Supply Chain</h2>
            <p>
              Tell us about your lane, your volumes, and your biggest pain
              point. We'll come back with a plan.
            </p>
          </div>
          <div class="cta-actions">
            <a href="#/contact" class="btn btn-orange">
              Get in Touch ${icon('fa-arrow-right')}
            </a>
          </div>
        </div>
      </section>
    </main>`;

  return shell('/about', content);
}

function blogPage() {
  const cards = ARTICLES.map(
    (a) => `
      <article class="blog-card reveal">
        <div class="blog-thumb">
          <span class="blog-thumb-tag">${a.tag}</span>
          ${icon(a.icon)}
        </div>
        <div class="blog-body">
          <div class="blog-meta">
            <span>${icon('fa-calendar')} ${a.date}</span>
            <span>${icon('fa-clock')} ${a.readTime}</span>
          </div>
          <h3>${a.title}</h3>
          <p>${a.excerpt}</p>
          <a href="#/blog/${a.slug}" class="blog-read">
            Read More ${icon('fa-arrow-right')}
          </a>
        </div>
      </article>`
  ).join('');

  const content = `
    <main>
      <section class="page-hero">
        <div class="container">
          <nav class="breadcrumb">
            <a href="#/">Home</a>
            ${icon('fa-chevron-right')}
            <span>Blog</span>
          </nav>
          <h1>Our Blog</h1>
          <p>
            Practical thinking on freight, supply chains, and the details
            that decide whether a shipment arrives on time.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="blog-grid">${cards}</div>
        </div>
      </section>
    </main>`;

  return shell('/blog', content);
}

function blogDetailPage(slug) {
  const a = ARTICLES.find((x) => x.slug === slug);
  if (!a) return notFoundPage();

  const related = ARTICLES.filter((x) => x.slug !== slug).slice(0, 5);

  const body = a.body
    .map((p, i) => `<p${i === 0 ? ' class="lede"' : ''}>${p}</p>`)
    .join('');

  const relatedLinks = related
    .map(
      (r) =>
        `<a href="#/blog/${r.slug}">${icon('fa-chevron-right')} ${r.title}</a>`
    )
    .join('');

  const content = `
    <main>
      <section class="page-hero">
        <div class="container">
          <nav class="breadcrumb">
            <a href="#/">Home</a>
            ${icon('fa-chevron-right')}
            <a href="#/blog">Blog</a>
            ${icon('fa-chevron-right')}
            <span>${a.tag}</span>
          </nav>
          <h1>${a.title}</h1>
          <p>${a.excerpt}</p>
        </div>
      </section>

      <section class="section">
        <div class="container article-grid">
          <article class="article-body reveal">
            <div class="blog-meta" style="margin-bottom: 26px;">
              <span>${icon('fa-calendar')} ${a.date}</span>
              <span>${icon('fa-clock')} ${a.readTime}</span>
              <span>${icon('fa-tag')} ${a.tag}</span>
            </div>

            ${body}

            <blockquote>
              "The best supply chains are not the ones that never break. They
              are the ones that recover fastest when they do."
            </blockquote>

            <p>
              If any of this sounds familiar, we'd love to hear how your team
              handles it. Our operators answer in minutes, not business days.
            </p>

            <a href="#/contact" class="btn btn-orange" style="margin-top: 14px;">
              Talk to Our Team ${icon('fa-arrow-right')}
            </a>
          </article>

          <aside class="article-sidebar reveal">
            <div class="sidebar-card">
              <h4>Related Articles</h4>
              <div class="sidebar-links">${relatedLinks}</div>
            </div>

            <div class="sidebar-card sidebar-cta">
              <h4>Need a Quote?</h4>
              <p>
                Tell us what needs to move. We'll reply within one business
                hour with a plan and pricing.
              </p>
              <a href="#/contact" class="btn btn-orange">
                Request a Quote ${icon('fa-arrow-right')}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>`;

  return shell('/blog', content);
}

function contactPage() {
  const content = `
    <main>
      <section class="page-hero">
        <div class="container">
          <nav class="breadcrumb">
            <a href="#/">Home</a>
            ${icon('fa-chevron-right')}
            <span>Contact</span>
          </nav>
          <h1>Get in Touch</h1>
          <p>
            Tell us what needs to move. Our operations team will come back
            with the right questions — not a canned pitch.
          </p>
        </div>
      </section>

      <section class="section">
        <div class="container contact-grid">
          <div class="contact-info-card reveal">
            <h3>Contact Information</h3>
            <p>
              Whether you have a lane to price, a warehouse to relocate, or a
              supply chain that needs a second set of eyes, we're ready to listen.
            </p>

            <div class="contact-info-list">
              <div class="contact-info-item">
                <div class="contact-info-icon">${icon('fa-location-dot')}</div>
                <div>
                  <small>Visit Us</small>
                  <strong>1200 Harbor Drive, Suite 400<br />Rotterdam, Netherlands</strong>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">${icon('fa-phone')}</div>
                <div>
                  <small>Call Operations</small>
                  <strong><a href="tel:+16016096780">+1 (601) 609-6780</a></strong>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">${icon('fa-envelope')}</div>
                <div>
                  <small>Email the Team</small>
                  <strong><a href="mailto:info@logistics.com">info@logistics.com</a></strong>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">${icon('fa-clock')}</div>
                <div>
                  <small>Working Hours</small>
                  <strong>Mon – Sat: 8:00 – 18:00<br />Sun: Closed</strong>
                </div>
              </div>
            </div>
          </div>

          <form class="contact-form reveal" data-form="contact">
            <h3>Request a Quote</h3>
            <p>Fill in the form below and we'll get back to you within one business hour.</p>

            <div class="form-row">
              <div class="form-field">
                <label for="c-name">Full Name *</label>
                <input id="c-name" name="name" type="text" placeholder="e.g. Jane Doe" required />
              </div>
              <div class="form-field">
                <label for="c-email">Email Address *</label>
                <input id="c-email" name="email" type="email" placeholder="you@company.com" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-field">
                <label for="c-phone">Phone Number</label>
                <input id="c-phone" name="phone" type="tel" placeholder="+1 (___) ___-____" />
              </div>
              <div class="form-field">
                <label for="c-service">Service Needed</label>
                <select id="c-service" name="service">
                  ${SERVICES.map(
    (s) => `<option value="${s.slug}">${s.title}</option>`
  ).join('')}
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-field full">
                <label for="c-message">Message *</label>
                <textarea
                  id="c-message"
                  name="message"
                  placeholder="Origin, destination, timing, and anything else that matters..."
                  required
                ></textarea>
              </div>
            </div>

            <button class="btn btn-orange" type="submit">
              Send Message ${icon('fa-paper-plane')}
            </button>

            <div class="form-success" id="contact-success" hidden></div>
          </form>
        </div>
      </section>

      <section class="section-bg-gray" style="padding: 0;">
        <div style="background: var(--blue-50); padding: 60px 0; text-align: center;">
          <div class="container">
            <span class="section-eyebrow">We're Ready When You Are</span>
            <h2 style="font-size: clamp(1.6rem, 3vw, 2.2rem); margin: 12px 0 18px;">
              Let's Move Something Together
            </h2>
            <p style="max-width: 620px; margin: 0 auto 26px; color: var(--text);">
              Our operators are standing by to help you plan your next
              shipment — by air, sea, or road.
            </p>
            <a href="tel:+16016096780" class="btn btn-blue">
              ${icon('fa-phone')} Call +1 (601) 609-6780
            </a>
          </div>
        </div>
      </section>
    </main>`;

  return shell('/contact', content);
}

function notFoundPage() {
  const content = `
    <main>
      <section class="page-hero" style="min-height: 60vh; display: flex; align-items: center;">
        <div class="container" style="text-align: center;">
          <span class="section-eyebrow">Error 404</span>
          <h1 style="font-size: clamp(2.4rem, 6vw, 4rem);">This Route Isn't on Our Map</h1>
          <p style="margin: 0 auto 32px; max-width: 620px;">
            The page you were looking for has moved or never existed. Let's
            get you back onto a known lane.
          </p>

          <div class="hero-buttons" style="justify-content: center;">
            <a href="#/" class="btn btn-orange">
              Back to Home ${icon('fa-arrow-right')}
            </a>
            <a href="#/services" class="btn btn-outline-white">
              Browse Services
            </a>
          </div>
        </div>
      </section>
    </main>`;

  return shell('/404', content);
}

/* ---------------------------------------------------------
   5. ROUTER
   --------------------------------------------------------- */

function getPath() {
  const hash = window.location.hash.replace(/^#/, '').split('?')[0];
  return hash === '' ? '/' : hash;
}

function render() {
  const path = getPath();
  const segments = path.split('/').filter(Boolean);
  const app = document.getElementById('app');

  let html;

  if (segments.length === 0) {
    html = homePage();
  } else if (segments[0] === 'services' && segments.length === 1) {
    html = servicesPage();
  } else if (segments[0] === 'services' && segments.length === 2) {
    html = serviceDetailPage(segments[1]);
  } else if (segments[0] === 'about') {
    html = aboutPage();
  } else if (segments[0] === 'blog' && segments.length === 1) {
    html = blogPage();
  } else if (segments[0] === 'blog' && segments.length === 2) {
    html = blogDetailPage(segments[1]);
  } else if (segments[0] === 'contact') {
    html = contactPage();
  } else {
    html = notFoundPage();
  }

  app.innerHTML = html;

  window.scrollTo({ top: 0, behavior: 'auto' });

  initReveals();
  initCounters();
}

/* ---------------------------------------------------------
   6. INTERACTIONS
   --------------------------------------------------------- */

function initReveals() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach((el) => io.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1600;
    const start = performance.now();

    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.floor(target * eased).toLocaleString();
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    };

    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animate);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((c) => io.observe(c));
}

function closeMobileMenu() {
  const header = document.getElementById('site-header');
  if (!header) return;
  header.classList.remove('menu-open');

  const toggle = header.querySelector('[data-action="toggle-menu"]');
  const openIcon = header.querySelector('[data-menu-icon="open"]');
  const closeIcon = header.querySelector('[data-menu-icon="close"]');

  if (openIcon) openIcon.hidden = false;
  if (closeIcon) closeIcon.hidden = true;
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

function toggleMobileMenu() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const isOpen = header.classList.toggle('menu-open');

  const toggle = header.querySelector('[data-action="toggle-menu"]');
  const openIcon = header.querySelector('[data-menu-icon="open"]');
  const closeIcon = header.querySelector('[data-menu-icon="close"]');

  if (openIcon) openIcon.hidden = isOpen;
  if (closeIcon) closeIcon.hidden = !isOpen;
  if (toggle) toggle.setAttribute('aria-expanded', String(isOpen));
}

/* ---------- Global event delegation ---------- */

document.addEventListener('click', (e) => {
  const toggle = e.target.closest('[data-action="toggle-menu"]');
  if (toggle) {
    toggleMobileMenu();
    return;
  }

  const closeLink = e.target.closest('[data-close-menu]');
  if (closeLink) {
    closeMobileMenu();
    return;
  }

  const scrollBtn = e.target.closest('[data-action="scroll-top"]');
  if (scrollBtn) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const heroQuote = e.target.closest('[data-action="hero-quote"]');
  if (heroQuote) {
    const name = document.getElementById('quote-name')?.value?.trim();
    const email = document.getElementById('quote-email')?.value?.trim();

    if (!name || !email) {
      alert('Please fill in your name and email so we can reply.');
      return;
    }

    heroQuote.innerHTML = '✓ Request Sent';
    heroQuote.style.background = '#22c55e';
    heroQuote.style.pointerEvents = 'none';

    setTimeout(() => {
      heroQuote.innerHTML = 'Send Request <i class="fa-solid fa-paper-plane"></i>';
      heroQuote.style.background = '';
      heroQuote.style.pointerEvents = '';
      document.getElementById('quote-name').value = '';
      document.getElementById('quote-email').value = '';
    }, 3200);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileMenu();
});

document.addEventListener('submit', (e) => {
  const contactForm = e.target.closest('[data-form="contact"]');
  if (contactForm) {
    e.preventDefault();
    const name = contactForm.querySelector('#c-name')?.value?.trim();
    const email = contactForm.querySelector('#c-email')?.value?.trim();
    const message = contactForm.querySelector('#c-message')?.value?.trim();
    const success = contactForm.querySelector('#contact-success');

    if (!name || !email || !message) {
      if (success) {
        success.textContent = 'Please fill in all required fields marked with *.';
        success.hidden = false;
        success.style.background = '#fee2e2';
        success.style.borderLeftColor = '#ef4444';
        success.style.color = '#991b1b';
      }
      return;
    }

    if (success) {
      success.style.background = '';
      success.style.borderLeftColor = '';
      success.style.color = '';
      success.innerHTML = `Thanks${name ? ', ' + esc(name) : ''}! Your message has been received. A member of our operations team will be in touch within one business hour at <strong>${esc(email)}</strong>.`;
      success.hidden = false;
    }

    contactForm.reset();
  }

  const newsletter = e.target.closest('[data-form="newsletter"]');
  if (newsletter) {
    e.preventDefault();
    const input = newsletter.querySelector('input');
    const btn = newsletter.querySelector('button');

    if (input && input.value.trim()) {
      const original = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i>';
      btn.style.background = '#22c55e';
      input.value = '';

      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
      }, 2600);
    }
  }
});

/* ---------- Scroll header + scroll-to-top button ---------- */

let lastScroll = 0;

window.addEventListener(
  'scroll',
  () => {
    const y = window.scrollY;

    const header = document.getElementById('site-header');
    if (header) {
      header.classList.toggle('scrolled', y > 20);
    }

    const scrollBtn = document.querySelector('[data-action="scroll-top"]');
    if (scrollBtn) {
      scrollBtn.classList.toggle('visible', y > 400);
    }

    lastScroll = y;
  },
  { passive: true }
);

/* ---------------------------------------------------------
   7. BOOT
   --------------------------------------------------------- */

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  if (!window.location.hash) {
    window.location.replace('#/');
  } else {
    render();
  }
});