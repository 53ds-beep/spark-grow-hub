

# SPIC – RKGIT Society Website

A 6-page student society portfolio and event hub for the Society of Promotion of Innovation and Creativity at RKGIT College.

---

## Design & Branding
- **Color palette**: Innovation-themed with deep blues/indigos, vibrant accent colors (electric blue/orange), and clean whites
- **Typography**: Inter or Space Grotesk for headings, Inter for body text
- **Style**: Modern, clean, generous whitespace, card-based layouts with subtle shadows and hover animations
- **Dark mode**: Not required initially; light professional theme
- **Animations**: Scroll-triggered fade-ins, counter-up stats, card hover lifts, smooth page transitions

---

## Page 1: Homepage
- **Hero section** with headline "Society of Promotion of Innovation and Creativity", tagline "Where Ideas Spark and Futures Start", and subtle animated gradient background
- **Event countdown module** for "Ideation 2.0" (March 11, 2026) with live countdown timer and prominent "Register Now" CTA
- **Trust indicators** — 4-column stats grid (Years Active, Events, Student Reach, Speakers) with animated counters
- **Photo gallery** — Masonry/grid layout with category filters and lightbox view
- **Why Join SPIC?** — 6-card benefits grid with icons
- **Testimonials carousel** — Member quotes with photos and roles
- **Quick action CTAs** — Explore Events, Join Our Team, Contact Us
- **Footer** with 4-column layout: About, Quick Links, Upcoming Events, Social/Contact

## Page 2: About
- Hero with mission statement
- "Who We Are" content section with readable typography
- **Interactive timeline** showing milestones from 2022–2026 with alternating left-right layout
- Impact statistics section
- Faculty Advisor card

## Page 3: Events
- **Upcoming events** section with prominent cards showing name, date, venue, status badge, and conditional CTA (Register Now vs View Highlights)
- **Past events** section with thumbnail cards, attendee counts, and highlight links
- Filter bar: All / Upcoming / Past / Category

## Page 4: Team
- Hierarchical display: Faculty Patron → Core Leadership → Department Heads → Team Members
- Photo cards with name, role, LinkedIn links
- Hover effects revealing additional info
- Responsive grid (4-col → 2-col → stacked)

## Page 5: Contact
- Contact info cards (Email, Phone, Location, Social Media)
- **Contact form** with Name, Email, Phone, Subject dropdown, Message, and validation
- Optional embedded Google Map

## Page 6: Join Team
- Benefits reiteration section
- Open positions/departments grid with descriptions
- **Application form** with full fields: Name, Student ID, Email, Phone, Year & Branch, Department of Interest, motivation essay, experience, portfolio links, resume upload
- Post-submission thank you message

---

## Shared Components
- **Sticky header** with logo, navigation, and prominent CTA button ("Register Now" / "Join Us")
- **Mobile hamburger menu** with smooth open/close animation
- **Footer** consistent across all pages
- Reusable card components (event, team, testimonial)
- Scroll-to-top button

## Accessibility & Performance
- Semantic HTML with proper heading hierarchy and landmarks
- Keyboard navigable with visible focus indicators
- Alt text on all images, ARIA labels on icon buttons
- Lazy loading for images, responsive image sizing
- Respect `prefers-reduced-motion` for animations

## Technical Notes
- All data (events, team members, timeline, testimonials) will be hardcoded as structured data arrays — easy to swap with a CMS later
- Countdown timer using JavaScript Date calculations
- Forms will show validation and success states on the client side (no backend initially — can integrate Supabase or email service later)
- SEO meta tags and Open Graph tags per page

