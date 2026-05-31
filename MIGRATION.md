# Migration Guide: Elevating leandermena-main

Based on audit comparing leandermena-main vs KIMI-Audit-sample.
Generated: 2026-05-31

---

## PHASE 1: Safe Pushes (No Dependencies)

### Step 1.1: Replace CTABanner.tsx
**File:** `src/components/CTABanner.tsx`
**Action:** Replace existing 1,664-byte file with upgraded version.
**Risk:** Zero — same props interface, just enhanced with Framer Motion animations and variant support.
**Files to modify:**
- `src/components/CTABanner.tsx` (replace)
- `src/pages/Home.tsx` (update usage)
- `src/pages/Services.tsx` (update usage)
- `src/pages/Products.tsx` (update usage)
- `src/pages/Blueprint.tsx` (update usage)

**Usage example:**
```tsx
<CTABanner
  title="Ready to Open Right?"
  subtitle="Download the Blueprint — Free"
  primaryCta={{ label: "Get the Blueprint", href: "/blueprint" }}
  secondaryCta={{ label: "Book a Call", href: "/book" }}
  variant="gradient"
/>
```

### Step 1.2: Add CommandMenu.tsx
**File:** `src/components/CommandMenu.tsx` (new)
**Action:** Create new file. Add to Layout.tsx.
**Risk:** Zero — new file, doesn't touch existing logic.
**Files to modify:**
- `src/components/CommandMenu.tsx` (create)
- `src/components/Layout.tsx` (add `<CommandMenu />` before `{children}`)

**Note:** Requires `cmdk` and `@radix-ui/react-dialog` — already in package.json.

---

## PHASE 2: Install Dependencies First

### Step 2.1: Install GSAP + Recharts
```bash
cd C:\Users\leand\leandermena-main
npm install gsap @gsap/react recharts
```
**Verify:** `npm run build` should pass.
**Commit:** `git add package.json package-lock.json && git commit -m "chore: add gsap, recharts dependencies"`

### Step 2.2: Install shadcn/ui Calendar (optional)
```bash
npx shadcn@latest add calendar
```

---

## PHASE 3: Enhanced Components (After Dependencies)

### Step 3.1: Upgrade ScrollReveal.tsx with GSAP
**File:** `src/components/ScrollReveal.tsx`
**Action:** Add GSAP ScrollTrigger for scroll-driven animations.
**Keep:** Existing Framer Motion for hover/micro-interactions.
**Use GSAP for:** Section pinning, scrubbed scroll timelines, complex entrance sequences.

### Step 3.2: Add Recharts to CaseStudies.tsx
**File:** `src/pages/CaseStudies.tsx`
**Action:** Import Recharts BarChart/LineChart.
**Data source:** `src/data/caseStudies.ts` — use existing `results` array.
**Example metric to chart:** V&E Hospitality "18% labor cost reduction" over 6 months.

### Step 3.3: Add Calendar to Book.tsx
**File:** `src/pages/Book.tsx`
**Action:** Add shadcn/ui Calendar for "Preferred consultation date" field.
**Connect to:** Existing form state.

---

## PHASE 4: Skipped Items (Not Recommended Now)

| Priority | Skip Reason |
|----------|-------------|
| React Router v7 | Breaking change. App works on v6. Defer. |
| Carousel | No clear component to replace. Low ROI. |
| Image audit | Need you to confirm public/ contents first. |

---

## VERIFICATION CHECKLIST

After each phase:
- [ ] `npm run build` passes with zero errors
- [ ] `npm run lint` passes
- [ ] All routes load correctly
- [ ] Cart functionality still works
- [ ] Forms still submit to Formspree
- [ ] SEO meta tags still render
- [ ] Mobile responsive check

---

## FILES PROVIDED IN THIS PACKAGE

1. `CTABanner.tsx` — Upgraded reusable CTA component
2. `CommandMenu.tsx` — Cmd+K site search
3. `MIGRATION.md` — This guide

## NEXT STEPS

1. Drop `CTABanner.tsx` into `src/components/`
2. Drop `CommandMenu.tsx` into `src/components/`
3. Update `Layout.tsx` to include `<CommandMenu />`
4. Update pages using CTABanner to use new props
5. Run `npm run build`
6. Commit and push
7. Install GSAP + Recharts
8. Request Phase 3 files (ScrollReveal, CaseStudies charts)
