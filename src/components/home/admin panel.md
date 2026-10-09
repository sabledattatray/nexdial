NEXDIAL — COMPLETE ADMIN PANEL, CMS, BLOG EDITOR & BUSINESS TRACKING SYSTEM
DETAILED PRODUCT REQUIREMENTS DOCUMENT (PRD) FOR ANTIGRAVITY
Version 1.0 | Existing project: https://newnexdial.vercel.app/ | Planned domain: https://nexdial.io/

PRIMARY OBJECTIVE
Build a secure, professional admin dashboard for managing the NexDial website, publishing blog content without code edits, handling real enquiries, tracking leads and follow-ups, and measuring performance from properly connected analytics sources.

IMPORTANT: EXTEND THE EXISTING PROJECT. Do not rebuild the public website from scratch. Preserve the existing public website's colours, fonts, animations, cards, spacing, layout, header, footer, and visual identity. The admin panel may have a separate professional dashboard layout, but its CSS must be isolated from public styles.

Do not claim a feature works unless implemented and tested. Do not show demo data as real production metrics. Do not invent credentials, API keys, analytics, testimonials, clients, company details, or integration success.

================================================================
1. REQUIRED FIRST STEP: AUDIT THE EXISTING CODEBASE
================================================================
Inspect the repository and deployed site before implementation. Identify:
- Framework and version, routing, shared components, CSS architecture, and deployment model.
- Existing database/content storage, authentication, forms, blog, media handling, SEO, and analytics.
- Existing environment variables and deployment configuration.
- Current pages, routes, buttons, integrations, and test/lint/build commands.
- Current visual design system and responsive behavior.

Choose architecture based on what is actually present. Do not assume the project is WordPress simply because the owner wants a WordPress-style editor. Do not migrate the public site to WordPress or another framework without approval. If the current site is a frontend-only app, identify and implement a secure persistent backend/database/CMS. Do not use browser localStorage as the source of truth for a production CMS.

Provide a short architecture plan before major changes. Back up or branch the working code first.

================================================================
2. PRODUCT VISION AND PRIORITIES
================================================================
The admin panel should allow the owner to:
- Write, edit, preview, schedule, publish, unpublish, archive, and restore blog articles.
- Manage pages, service descriptions, FAQs, portfolio case studies, and approved testimonials.
- Manage images and media.
- Receive and organize contact submissions.
- Track leads, source, service interest, stage, notes, quotes, and follow-ups.
- Track website performance using real connected analytics.
- Manage SEO metadata, sitemap inclusion, redirects, and content checks.
- Track outreach and job applications privately if those optional modules are enabled.
- Manage users, roles, security settings, audit logs, and exports.
- Operate the system from desktop, tablet, or mobile.

Prioritize in this order:
P0: secure admin login, CMS/blog editor, contact inbox, lead management, core dashboard, reliable persistence.
P1: pages/services/portfolio manager, media library, SEO, GA4/Search Console integrations.
P2: outreach tracker, job application tracker, quotes/projects, advanced reporting.

Do not ship many half-working modules before the P0 features work reliably.

================================================================
3. NON-NEGOTIABLE DESIGN PRESERVATION
================================================================
Public website must retain:
- Existing colours, fonts, font weights, type scale, backgrounds, gradients, and borders.
- Existing animations, timing, transitions, and hover effects.
- Existing card styles, radii, shadows, spacing, layout, header, footer, and responsive design language.
- Existing working functionality unrelated to this PRD.

Allowed: content updates, admin routes, backend functionality, secure forms, metadata, new content-management screens, and minimal fixes for bugs/accessibility.

Admin requirements:
- Use a clear, restrained, professional dashboard layout.
- Reuse brand styling where practical.
- Scope admin CSS so it cannot leak into public pages; public CSS must not break admin screens.
- Avoid flashy animations and decorative charts.
- Keep admin styles/components separated from public pages.
- Take desktop/tablet/mobile screenshots before and after; confirm the public site has not been visually redesigned.

================================================================
4. ADMIN ROUTES AND NAVIGATION
================================================================
Use a protected route prefix such as /admin, adapted to the existing framework.

Suggested menu:
1. Overview
2. Leads & Enquiries
3. Contact Submissions
4. Blog & Articles
5. Media Library
6. Pages & Site Content
7. Services
8. Portfolio / Case Studies
9. FAQs
10. Testimonials
11. SEO & Redirects
12. Analytics & Conversion Tracking
13. Outreach Tracker
14. Job Application Tracker
15. Reports & Exports
16. Users & Roles
17. Audit Logs
18. Settings
19. Help / System Status

Provide active-route indication, page titles, contextual actions, breadcrumbs where useful, and a responsive/collapsible sidebar. Show notification counts only when based on real records. Hide or explain unconfigured modules. Enforce permissions on the server, not only by hiding menu items.

================================================================
5. AUTHENTICATION AND SECURITY — LAUNCH BLOCKER
================================================================
- Require secure authentication for every admin route and protected API.
- No public admin registration by default.
- Use a reputable auth provider or framework-native secure authentication.
- Use secure password hashing if managing passwords directly.
- Prefer secure HttpOnly, SameSite cookies for session auth where appropriate.
- Protect state-changing requests against CSRF where applicable.
- Rate-limit login and recovery endpoints.
- Implement logout, session expiry, and secure account recovery.
- Avoid revealing whether an email exists during password recovery.
- Add MFA if supported by the chosen provider and practical to configure.
- Check authorization server-side on every protected operation.
- Use least-privilege roles and database policies.
- Never expose database service keys, API secrets, refresh tokens, or credentials in browser bundles.
- Use environment variables or a secret manager; never commit .env secrets.
- Provide .env.example with variable names and placeholder values only.
- Validate/sanitize server-side inputs.
- Protect against XSS, SQL injection, IDOR, unsafe uploads, open redirects, and unauthorized publishing.
- Add suitable security headers.
- Avoid raw stack traces in UI.
- Log important security events without logging passwords, tokens, cookies, or unnecessary sensitive data.
- Use confirmation and appropriate soft deletion/archiving for destructive actions.

Suggested roles:
Owner/Super Admin: full access.
Administrator: manage content/leads/reports with limited secret access.
Editor: edit and publish only as granted.
Analyst: read permitted analytics/reports.
Lead Manager: manage leads, limited exports.
Read-only: view explicitly permitted sections.
If initially a single owner, implement the owner role correctly and allow additional roles later without bypassing access control.

================================================================
6. OVERVIEW DASHBOARD
================================================================
Provide date filters: Today, Last 7 Days, Last 30 Days, Last 90 Days, and Custom range if supported.

Metrics should be displayed only when the source is configured:
- Website users/sessions.
- Organic clicks and impressions from Search Console.
- Contact form submissions.
- New and qualified leads.
- Open/overdue follow-ups.
- Published and draft articles.
- Article views if analytics provides reliable data.
- CTA conversion rate if correctly instrumented.
- Won projects only if recorded in the lead/project system.

Each metric must show the date range, source, definition, and comparable prior period where available. If data is unavailable, show “Not connected” or “No data yet” with setup instructions.

Charts:
- Traffic over time.
- Enquiries over time.
- Enquiries by service.
- Lead source breakdown.
- Content performance.
- Search performance.
- Lead pipeline.
- Recent activity.

Recent activity may include new enquiry, lead stage change, article published, scheduled publication failure, integration disconnection, user role change, or export event.

Never hardcode plausible-looking production numbers. Demo records must be explicitly labelled Demo and must not appear in production. Dashboard shortcuts: Create Article, View New Leads, Add Case Study, Edit Service, Review SEO, Export Report.

================================================================
7. WORDPRESS-STYLE BLOG EDITOR / CMS — HIGH PRIORITY
================================================================
Inspect the current stack and choose a maintained, compatible rich-text/block editor. Consider a Gutenberg-like block experience or mature editor such as TipTap, Lexical, Editor.js, or an appropriate alternative. Do not build a complex editor from scratch if a maintained library meets requirements. Review compatibility, license, maintenance, security, and content portability before selection. If a good editor already exists, extend it.

Editor capabilities:
- Paragraphs, H1/H2/H3 headings, bold, italic, underline, ordered/unordered lists.
- Blockquotes, links, images with alt text/captions, separators.
- Accessible tables if supported.
- Code blocks for technical articles.
- Safe embeds from an explicit allowlist only, if needed.
- Undo/redo, keyboard shortcuts, paste cleanup where supported.
- Autosave and manual save.
- Draft, review, scheduled, published, archived states.
- Preview, publish, update, unpublish.
- Revision history and restore.
- Word count and estimated reading time.
- Mobile-friendly editing and clear save status.

Article fields:
- Title, unique URL slug, excerpt, structured body.
- Featured image, alt text, caption/credit if required.
- Author, category, tags.
- Status: Draft, In Review, Scheduled, Published, Archived.
- Publish time/timezone and updated timestamp.
- SEO title and meta description.
- Canonical URL with safe default.
- Open Graph title/description/image.
- Index/noindex setting with permission checks.
- Optional table of contents, related articles, CTA selection.
- Source/reference links.
- Private editorial notes that never appear publicly.
- Featured flag, sitemap inclusion, creator/editor information, revision history.

Slug management:
- Suggest slug from title; allow authorized editing.
- Enforce uniqueness and safe normalization.
- Warn when changing a published slug.
- Offer safe redirect from old slug.
- Prevent open redirects and redirect loops.
- Maintain canonical URLs and correct 404 behavior.

Saving and publishing:
- Debounced autosave with truthful Saving/Saved/Failed status.
- Show Saved only after server confirmation.
- Warn about unsaved changes.
- Preserve entered content after recoverable errors.
- Detect concurrent editing conflicts; do not silently overwrite newer content.
- Drafts must not be public or included in sitemap.
- Preview must use authentication or short-lived signed preview tokens.
- Publishing requires permission.
- Scheduled publication must use a reliable server-side scheduler supported by deployment; never depend on an open browser tab.
- Show failure state if scheduled publication fails or scheduler is not configured.
- Record who published and when.
- Unpublishing must remove content from public feeds/sitemap and serve appropriate 404/redirect behavior.

Revision workflow:
- Store meaningful revisions.
- Display author/editor and timestamp.
- Allow authorized users to restore a prior revision.
- Preserve current content as a revision before restoration.
- Show comparison/diff if practical.

Editorial workflow:
- Draft, In Review, Scheduled, Published, Archived.
- Optional reviewer/approval workflow when multiple roles exist.
- Owner working alone should not be forced through an unnecessary approval loop.
- Internal notes remain private.
- Before publishing, check title, slug, body, category where required, image alt text, metadata, links, and preview.

Article management list:
- Search by title/slug.
- Filter status, category, author, created/published/updated date.
- Sort newest, oldest, title, status.
- Paginate large lists.
- Duplicate as draft.
- Archive and restore.
- Permission-checked bulk actions with confirmation.
- CSV export of metadata only by default.

Public blog:
- Render sanitized, semantic article content.
- Show title, dates, author only if supplied, category, featured image, body, related content.
- Preserve existing public styles.
- Correct Open Graph/social metadata.
- Generate Article/BlogPosting schema from real content only.
- Only published, indexable articles enter sitemap.
- Do not expose internal notes, drafts, private revisions, or draft APIs.
- Do not invent author names, dates, or claims.

================================================================
8. MEDIA LIBRARY
================================================================
- Upload and manage images for articles, pages, and case studies.
- Validate allowed MIME type and file signature where practical.
- Reject executable or unsupported files.
- Set configurable file-size and dimension limits.
- Use persistent storage appropriate to the stack; not temporary server filesystem.
- Generate safe filenames/IDs and prevent path traversal.
- Show preview, filename, dimensions, file size, upload date, alt text, caption.
- Search/filter and edit alt text/caption.
- Show content usage when feasible.
- Warn before deleting media used by published content.
- Optimize/rescale images where suitable.
- Use responsive image sizes where supported.
- Keep private uploads inaccessible to unauthorized users.
- Do not upload client-confidential data to the public media library.
- Restrict delete permissions and keep media URLs stable where possible.

================================================================
9. PAGE AND SITE CONTENT MANAGER
================================================================
Allow routine edits to:
- Homepage hero title/supporting text/CTA.
- Service cards and descriptions.
- How-it-works section.
- Portfolio previews.
- About page.
- FAQs.
- Contact details.
- Footer text and links.
- SEO metadata.
- Approved professional profile details.
- Optional availability text and resume link.

Use structured content fields and reusable sections, not unrestricted raw HTML by default. Sanitize rich text; validate URLs and CTA destinations. Never allow CMS content to inject arbitrary scripts or CSS. Provide preview and revisions for important content. Keep styling controlled by existing components so content edits do not redesign the site. If the project is statically generated, document the publish/rebuild strategy.

================================================================
10. SERVICES MANAGER
================================================================
Fields: name, slug, short summary, detailed description, target audience, deliverables, process steps, FAQs, CTA text/destination, image if used, SEO title/description, publish status, display order, featured flag, created/updated timestamps.

Features: create/edit/preview/publish/archive, reorder cards, validate CTA links, preserve current public card styling. Include a capability confirmation for services such as advanced Power BI, DAX, VBA, or specialized integrations. Never publish a service the owner has not confirmed they can deliver.

================================================================
11. PORTFOLIO / CASE STUDY MANAGER
================================================================
Fields: title, slug, project type, Sample Project/Client Project label, client name only with permission, summary, business problem, objective, tools actually used, method, deliverables, evidenced/approved outcomes, screenshots/alt text, data source description, assumptions/limitations, optional downloadable sample, SEO metadata, status, publish date, CTA.

Features: draft/preview/publish/archive, reorder, featured items, safe uploads, private file handling, revisions. Never misrepresent a sample as a client project. Require review before publishing outcome claims. Do not invent metrics or testimonials.

================================================================
12. FAQ AND TESTIMONIAL MANAGER
================================================================
FAQ fields: question, answer, category, sort order, publish status.
Allow add/edit/reorder/archive. Sanitize answers and preserve current public accordion design. Only emit FAQ structured data when the FAQ is visible on that page and appropriate.

Testimonial fields: exact approved quote, name, role/company only with permission, image/logo only with permission, approval status, approval date, publish status.
Require approval before publishing. Never generate fake testimonials, fake review counts, or ineligible review schema.

================================================================
13. CONTACT SUBMISSIONS INBOX
================================================================
Show real website form submissions in a private admin inbox:
- New/unread indicator, date, name/email, service and optional fields actually submitted.
- Status: New, Reviewed, Converted to Lead, Spam, Archived.
- Search/filter/pagination.
- Mark reviewed.
- Convert to lead without duplicating the source submission.
- Escape user-supplied text; never render it as raw HTML.
- Restrict access, support retention/deletion, and keep private from search engines.
- Do not log full form contents in analytics.
- If submission fails, do not show success or create a false record.
- Log operational errors without exposing sensitive content.

================================================================
14. LEAD MANAGEMENT / LIGHTWEIGHT CRM
================================================================
Sources: website form, manually entered email/WhatsApp/LinkedIn, freelance marketplace, referral, other. No unauthorized scraping or imports of personal data.

Lead fields:
ID, contact name, email, company, optional phone if voluntarily supplied/needed, source and source detail, service interest, summary, status, priority, optional estimated value/currency, optional expected close date, next action/follow-up date, assignee if relevant, created/updated/last-contact dates, won/lost date, optional lost reason, private notes, consent/lawful-basis metadata where applicable.

Statuses: New, Contacted, Discovery, Quote Sent, Negotiation, Won, Lost, On Hold, Spam.

Features:
- Search, filter, sort, pagination.
- Filter status/source/service/date/priority/follow-up.
- Detail view with activity timeline.
- Status changes and notes with audit trail.
- Schedule/complete follow-ups.
- Link lead to quote/project.
- Cautious duplicate detection; never silently merge records.
- Notify owner only when a real notification channel is configured.
- CSV export with role permissions and audit trail.
- Data correction/deletion workflows where applicable.
- Spam marking.
- Do not send automated marketing emails without an appropriate, configured, consent-aware workflow.
- Never store passwords, card data, or unnecessary sensitive information.

Timeline events: created, status changed, note added, follow-up scheduled/completed, quote recorded, won/lost. Record actor and timestamp.

================================================================
15. FOLLOW-UP TASKS AND REMINDERS
================================================================
Task fields: title, description, related lead/content, due date/timezone, priority, status (Open/In Progress/Completed/Cancelled), assignee, timestamps.

Views: Today, Upcoming, Overdue, Completed. Show overdue count on dashboard based on real records. Use server-side scheduling for reminders that must run when the owner is offline. Email reminders require a configured/tested provider. Allow completion/rescheduling; keep task notes private.

================================================================
16. SEO AND REDIRECT MANAGER
================================================================
Manage SEO title, meta description, canonical, Open Graph metadata, robots index/noindex, sitemap inclusion, real article schema, redirects, slug checks, missing metadata, duplicate titles/descriptions, missing alt text, and broken internal links where feasible.

Redirects must be permission-controlled, validated, protected against open redirects and loops, and logged. Support appropriate 301/302 behavior. Confirm before deleting active redirects. SEO checks are guidance, not ranking guarantees. Never claim current Google rankings without a valid connected data source.

================================================================
17. ANALYTICS AND SEARCH PERFORMANCE
================================================================
Potential sources:
- GA4 for site traffic/events.
- Google Search Console for clicks, impressions, queries, CTR, position, and page performance.
- Server-side app events for successful form submissions and internal workflow actions.
- Optional privacy-friendly analytics selected by owner.

Use official APIs or trusted integrations; do not scrape authenticated dashboards. Keep OAuth/refresh tokens server-side and protected. Use least privilege, connect/disconnect controls, integration status, last successful sync, cache/quota handling, and setup instructions. If not connected, show “Not connected” and exact setup requirements. Never pretend a connection exists.

Views:
A. Traffic overview: users/sessions, channel/source, landing pages, top pages, device category, trends and comparison.
B. Search Console: clicks, impressions, CTR, average position where available, queries, pages, date range and data-delay note.
C. Content performance: article views if GA4 provides them, organic clicks by landing page, publish date, CTA clicks, and attributed enquiries only if attribution is actually collected.
D. Conversion funnel: visits, CTA clicks, form starts if tracked, successful submissions, qualified leads, won projects if recorded.

Metric rules:
- Do not mix sessions and users.
- Do not call page views unique visitors.
- Do not label every enquiry qualified.
- Do not infer revenue unless project values are recorded.
- Do not assign source without evidence.
- Explain formulas and denominators.
- Label manually entered outcomes.
- Show insufficient data where appropriate.
- Show integration error without crashing other dashboard modules.

================================================================
18. OUTREACH TRACKER — OPTIONAL PRIVATE MODULE
================================================================
Fields: company/prospect, website, contact name/role if appropriately obtained, public professional contact method, source, service fit, channel, first-contact date, message/template, status, follow-up date, notes, result.

Statuses: To Research, Ready, Contacted, Replied, Meeting, Proposal, Won, Lost, Do Not Contact.

Features: filters, reminders, reusable templates, activity metrics, reply rate with defined denominator, proposal conversion, do-not-contact protection, manual entry first. Respect platform terms, privacy, and opt-outs. Do not build scraping or mass messaging; do not send bulk email automatically. Keep private and never use metrics as public marketing claims.

================================================================
19. JOB APPLICATION TRACKER — OPTIONAL PRIVATE MODULE
================================================================
Fields: employer, job title, URL, work arrangement, employment type, date found/applied, channel, resume version, message version, status, follow-up date, recruiter details if appropriately obtained, interview date/timezone, notes, outcome.

Statuses: Saved, Preparing, Applied, Recruiter Contacted, Interview, Assessment, Offer, Rejected, Withdrawn, No Response.

Features: table/Kanban, remote-only filters, upcoming interviews, reminders, application history, resume version references, metrics, personal export. Private to authorized users. Do not expose publicly or auto-apply/send messages without explicit review and user action. Do not scrape job sites against terms.

================================================================
20. QUOTES AND PROJECTS — OPTIONAL
================================================================
Quote fields: quote number, related lead, scope, deliverables, exclusions/assumptions, timeline, revision allowance, price/currency, validity date, status (Draft/Sent/Accepted/Declined/Expired), sent date, notes.

Project fields: name, related lead, scope, deliverables, timeline, status, milestones, due dates, optional manually tracked payment status, completion notes, permission to request feedback.

Do not add payment processing unless explicitly scoped and secured. Do not store bank/card details. Do not automatically issue legal contracts or invoices without a properly configured provider and owner review. Quote templates are administrative aids, not legal advice.

================================================================
21. REPORTS AND EXPORTS
================================================================
Reports: leads by status/source/service, overdue follow-ups, monthly lead trend, outreach activity/reply rates, job applications by status, blog calendar, content inventory, analytics summary, SEO metadata completeness, quote/project summary if enabled.

Exports: CSV; PDF only if a reliable generator exists and layout is tested. Enforce permissions, warn before exporting personal data, log sensitive exports, use expiring/private download links for server-generated files, and never export secrets. Include date range, generation time, and metric definitions. Separate live analytics from manually entered CRM data.

================================================================
22. NOTIFICATIONS
================================================================
Events: new submission/lead, due/overdue follow-up, scheduled article published/failed, form integration failure, analytics integration disconnected, important security event, background job failure.

Start with an in-app notification center. Email/webhook notifications require owner-approved, configured providers. Support read/unread, preferences, delivery status when available, safe retries, and a test-notification action. Avoid duplicate notifications and unnecessary personal data in subject lines. Do not claim a channel is configured until tested.

================================================================
23. SETTINGS AND INTEGRATIONS
================================================================
Settings may include site/brand details, approved contact email/WhatsApp, social URLs, default author, timezone, date display, blog defaults, SEO defaults, media limits, notification preferences, user/role management, analytics/Search Console, form/email provider, storage, domain/URL, retention, and privacy contact.

Never display full secrets after initial configuration. Do not store secrets in CMS text fields. If the app cannot safely manage secrets, provide instructions for environment variables/platform secret manager instead. Show status and masked metadata only.

================================================================
24. AUDIT LOGS
================================================================
Record important events: login success/failure, recovery events, role changes, content create/edit/publish/unpublish/restore, lead status change, exports, integration connect/disconnect, settings changes, redirect changes, revision restores, and sensitive deletion.

Each event: ID, timestamp, actor, action, entity type/ID, outcome, limited contextual metadata. Store IP/user agent only when appropriate and disclosed. Do not log passwords, tokens, session cookies, or unnecessary form content. Normal admins cannot edit audit logs. Protect logs from tampering as far as the architecture supports.

================================================================
25. DATABASE AND DATA MODEL
================================================================
Adapt to the actual stack and existing managed services. Likely entities:
users/roles (or provider-managed auth), articles, article_revisions, categories, tags, article_tags, media_assets, pages/page_sections, services, case_studies, faqs, testimonials, contact_submissions, leads, lead_notes, lead_activities, tasks, analytics_sync_status, integration metadata, outreach_prospects, outreach_activities, job_applications, quotes, projects, notifications, audit_logs, redirects, scheduled jobs/publication fields.

Use migrations, primary/foreign keys, suitable indexes, constraints, transactions for multi-step changes, UTC storage with configured display timezone, optimistic concurrency, deliberate archival/deletion, and minimal personal data. Do not build all optional tables before core CMS/leads work. Avoid duplicate databases if the current stack already has a suitable CMS/backend.

================================================================
26. BACKUPS, RECOVERY AND RELIABILITY
================================================================
Document backup and recovery approach. Use managed backups where available; do not claim backups are enabled until verified. Content revisions must support recovery from accidental edits. Handle scheduled job failures visibly. Keep media references stable. Add error monitoring only after configuration. Avoid exposing diagnostics publicly. Provide export/recovery for essential content and test restoration in a non-production environment when feasible.

================================================================
27. PERFORMANCE, ACCESSIBILITY AND ERROR STATES
================================================================
- Server-side pagination/filtering for large tables.
- Avoid loading all records at once.
- Lazy-load analytics and heavy views.
- Use loading, empty, no-results, permission-denied, validation, network, server, expired-session, integration-not-connected, quota, conflict, save-failed, publish-failed, upload-failed, and export-failed states.
- Explain whether an action completed and whether retry is safe.
- Never show raw stack traces.
- Keyboard access, labels, focus management, screen-reader status updates, accessible chart summaries, and status not conveyed by colour alone.
- Confirm destructive actions.
- Responsive desktop/tablet/mobile layouts.
- Do not block the whole dashboard because one integration is slow.
- Keep admin/public bundles isolated where possible.

================================================================
28. IMPLEMENTATION PHASES
================================================================
PHASE 0 — Audit and architecture: inspect stack, select backend/auth/database/editor, document provider costs and required accounts, protect working deployment.

PHASE 1 — Core admin P0: secure login, protected routes, owner role, admin layout, settings, persistent storage/migrations, audit foundation, honest empty states.

PHASE 2 — CMS P0: article list/search, block/rich-text editor, draft/save/preview/publish, categories/tags, media, SEO fields, revisions, public rendering, sitemap, safe slug changes, publish checklist.

PHASE 3 — Leads P0: contact inbox, lead pipeline/detail/timeline/notes, follow-up tasks, verified form delivery, role-protected exports.

PHASE 4 — Content managers P1: pages, services, portfolio, FAQs, approved testimonials, preview/publish/revisions, preserve public styling.

PHASE 5 — Analytics/SEO P1: GA4, Search Console, real traffic/conversion reports, SEO checks, redirects, integration status.

PHASE 6 — Private trackers P2: outreach, job applications, quotes/projects, reminders, reports.

PHASE 7 — Hardening: security review, tests, backup/recovery, accessibility/performance, domain checks, production smoke tests, handover.

Complete and test each P0 phase before advanced modules.

================================================================
29. TEST PLAN AND ACCEPTANCE CRITERIA
================================================================
Authentication:
[ ] Unauthenticated visitor cannot access admin pages or APIs.
[ ] Unauthorized roles cannot publish/export restricted data.
[ ] Role checks are server-side.
[ ] Logout/session expiration work.
[ ] Secrets absent from client bundle and repository.

CMS:
[ ] Draft create/edit/save works.
[ ] Editor supports required blocks/formatting.
[ ] Autosave status reflects server result.
[ ] Preview is protected.
[ ] Publish/update/unpublish works.
[ ] Drafts are not public or in sitemap.
[ ] Scheduling works only when configured and tested.
[ ] Revision restore works.
[ ] Unique slugs and safe redirects work.
[ ] Images/alt text and SEO metadata render correctly.
[ ] Public blog only shows published content.

Media:
[ ] Valid images upload; invalid types and oversized files fail.
[ ] Alt text persists.
[ ] Unauthorized delete fails.
[ ] Private media is not publicly accessible.

Leads:
[ ] Real submissions are persisted and visible.
[ ] Convert submission to lead without duplicating source record.
[ ] Status, notes, and follow-ups persist.
[ ] Search/filter/pagination work.
[ ] Export permissions work.
[ ] No false success message when provider fails.

Analytics:
[ ] Disconnected state is honest.
[ ] Connected reports use actual data.
[ ] Date ranges and metric definitions are clear.
[ ] Integration failures do not crash unrelated modules.

General:
[ ] Build/lint/type checks pass where configured.
[ ] No broken routes or major console errors.
[ ] Admin pages are not indexable.
[ ] Mobile admin usability is acceptable.
[ ] Error/empty states work.
[ ] Backup/recovery approach documented.
[ ] Public site colours, fonts, animations, cards, and layout remain unchanged.
[ ] Handover report lists actual tests and unfinished items.

================================================================
30. OWNER INPUTS — NEVER INVENT
================================================================
If not already present, flag the following rather than fabricating:
- Approved admin email.
- Auth/database/storage provider credentials.
- Contact email and WhatsApp details.
- Timezone.
- GA4 property and Search Console access.
- Email/form provider credentials.
- Domain DNS access.
- Actual author details and professional profile links.
- Actual projects, testimonials, and resume.
- Data retention preferences.
- Privacy/legal wording.

Do not block core work for optional integrations. Use clear “Not configured” states and exact setup steps. Never put secrets in chat, source files, screenshots, or public configuration.

================================================================
31. FINAL HANDOVER
================================================================
Provide:
1. Actual architecture and technology choices.
2. Routes and modules added.
3. Database schema/migrations.
4. Auth and role implementation.
5. Editor choice and supported features.
6. Contact/lead workflow and actual delivery destination.
7. Analytics integration status.
8. Media storage setup.
9. Environment variable names in .env.example, with no secrets.
10. Deployment/domain instructions.
11. Backup/recovery steps.
12. Tests run and real outcomes.
13. Security controls implemented.
14. Incomplete features and why.
15. Owner actions/credentials required.
16. Provider costs/limits discovered, without guessing.
17. Confirmation that public styling was preserved.
18. Known limitations and recommended priorities.

================================================================
32. FINAL IMPLEMENTATION PROMPT TO ANTIGRAVITY
================================================================
Implement this PRD in the existing NexDial project. Start with a repository audit and architecture plan; do not rewrite the public site. The owner needs a secure, professional control center to publish articles without code edits, manage real enquiries, follow up with leads, and understand performance from connected sources.

Prioritize security, persistent data, a WordPress-quality editor, contact inbox and lead management, an actionable overview, content managers, and real analytics. Preserve the public site's existing colours, fonts, animations, cards, layout, header, footer, and identity. Isolate admin styles.

Use maintained libraries, migrations, server-side validation and authorization, audit logs, and tests. Make every control functional. Implement honest loading, empty, error, and success states. Protect drafts and private business data. Do not hardcode fake metrics or pretend integrations are connected. Do not invent owner information. If an external account is needed, build a clear unconfigured state and document setup.

Ship in phases. Finish and test P0 before advanced modules. At the end, provide the full handover with real test results and remaining owner actions. The goal is a secure, maintainable system that helps NexDial operate professionally—not a decorative dashboard with hardcoded numbers.
