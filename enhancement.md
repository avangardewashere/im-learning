Performance improvement plan
Current issues (from Lighthouse)
Document request latency — 900ms potential savings
Server response time: 1000ms (slow)
Redirects: OK
Text compression: OK
Render blocking requests — 160ms potential savings
CSS chunks blocking initial render
Two resources: localhost (4.0 KiB, 170ms) and CSS chunk (4.0 KiB, 170ms)
Network dependency tree
Critical request chaining needs reduction
Optimization strategies
1. Font loading optimization (high impact)
Current: Loading two Google Fonts (Geist, Geist_Mono) synchronously
Actions:
Add display: 'swap' to font configs to prevent FOIT
Add preload: true for critical fonts
Consider adjustFontFallback: true for better CLS
Optionally load only one font initially if both aren’t needed on first paint
Expected impact: ~200–300ms improvement
2. CSS optimization (high impact)
Current: CSS chunks blocking render (160ms savings identified)
Actions:
Enable CSS optimization in next.config.ts
Consider critical CSS extraction/inlining for above-the-fold content
Ensure Tailwind CSS is properly purged/tree-shaken
Add compress: true in Next.js config
Expected impact: ~160ms improvement (as identified)
3. Server response time (highest impact)
Current: 1000ms server response time
Actions:
Optimize Next.js config for production builds
Enable static generation where possible (generateStaticParams if applicable)
Add caching headers in next.config.ts
Consider ISR (Incremental Static Regeneration) for the home page
Ensure dev mode isn’t being measured (use production build)
Expected impact: ~700–900ms improvement
4. Component optimization
Current: Navigation is a client component with state
Actions:
Make Header server component, extract only interactive parts to client
Lazy load Navigation component if not critical for LCP
Use React.memo for Logo if re-renders are an issue
Consider dynamic imports for non-critical components
Expected impact: ~50–100ms improvement
5. Next.js configuration optimizations
Current: Minimal config
Actions:
Enable compression in next.config.ts
Add experimental.optimizeCss: true if available
Configure proper caching strategies
Enable swcMinify: true (default in Next.js 16, but verify)
Add poweredByHeader: false for security/performance
Expected impact: ~50–100ms improvement
6. Metadata and resource hints
Current: Basic metadata
Actions:
Add viewport metadata for mobile optimization
Add resource hints (<link rel="preconnect">) for external resources
Add dns-prefetch for Google Fonts
Optimize favicon loading
Expected impact: ~30–50ms improvement
7. Code splitting and bundle optimization
Actions:
Ensure proper code splitting (Next.js handles this, but verify)
Check bundle size and remove unused dependencies
Consider dynamic imports for routes that aren’t immediately needed
Expected impact: ~50–100ms improvement
Priority order
Server response time (900ms) — highest priority
CSS render blocking (160ms) — high priority
Font loading optimization (200–300ms) — high priority
Next.js config optimizations (50–100ms) — medium priority
Component optimization (50–100ms) — medium priority
Metadata/resource hints (30–50ms) — low priority
Expected results
Current: 70
After optimizations: 85–95 (target: 90+)
Biggest gains:
Server response: 700–900ms
CSS blocking: 160ms
Font loading: 200–300ms
Other optimizations: 200–300ms
Total potential improvement: ~1.2–1.6 seconds
Notes
Test in production mode (npm run build && npm start), not dev mode
Dev mode adds overhead that affects Lighthouse scores
Some optimizations (like ISR) may require page structure changes
Monitor after each change to measure impact
Should I proceed with implementing these optimizations?