# Human Body + Mitochondria Interactive Website Specification

## Vision

Create the world's most intuitive interactive educational website explaining how food is transformed into usable cellular energy.

The website should allow users to visually travel through the human body, following nutrients from ingestion all the way to ATP production inside mitochondria.

The experience should feel like a combination of:

* Interactive museum exhibit
* Educational game
* Scientific visualization
* Documentary experience

The platform should eventually become a leading educational resource for metabolism, nutrition, exercise physiology, fasting, and mitochondrial health.

---

# Business Goals

## Primary Goals

1. Educate users
2. Generate organic traffic through SEO
3. Generate advertising revenue
4. Build a trusted brand
5. Expand into premium educational content

## Revenue Streams

### Phase 1

* Google AdSense
* Affiliate links to books and educational resources

### Phase 2

* Premium content
* Interactive simulators
* Courses
* School licenses

### Phase 3

* Subscription platform
* Nutrition simulations
* Personalized metabolic education

---

# Target Audience

## Primary Audience

* Health enthusiasts
* Fitness enthusiasts
* Biohackers
* Curious adults
* Students

## Secondary Audience

* Teachers
* Schools
* Coaches
* Trainers
* Nutritionists

---

# Product Structure

## Public Pages

### Home

Purpose:

Introduce the concept quickly.

Sections:

* Hero
* What happens after eating?
* Interactive preview
* Popular topics
* Featured articles
* Call-to-action

### Interactive Journey

Main product experience.

### Learn

Educational articles.

### About

Trust-building page.

### Privacy Policy

Required.

### Cookie Policy

Required.

### Disclaimer

Required.

---

# Interactive Journey

## Concept

Users travel through:

1. Mouth
2. Esophagus
3. Stomach
4. Small Intestine
5. Bloodstream
6. Cell
7. Mitochondrion
8. Electron Transport Chain
9. ATP Production

Each stage contains:

* Visual animation
* Simple explanation
* Advanced explanation
* Interactive controls
* Progress indicator

---

# Learning Modes

## Simple Mode

Target:

General public.

Example:

"Mitochondria use fuel from food and oxygen from breathing to create ATP, which powers cellular processes."

## Advanced Mode

Target:

Students and enthusiasts.

Example:

"NADH and FADH₂ donate electrons to the electron transport chain, generating a proton gradient that drives ATP synthase."

---

# Technical Stack

## Framework

* Next.js
* TypeScript

## Styling

* Tailwind CSS

## Animation

* Framer Motion

## Deployment

* Vercel

## Content

* MDX
* JSON

## Analytics

* Plausible
* Google Analytics

---

# Architecture

```txt
src
├── app
├── components
├── content
├── hooks
├── services
├── types
├── utils
└── assets
```

---

# Journey Data Model

```ts
export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  advancedDescription: string;
  visualType: string;
  duration: number;
}
```

---

# Visual System

## Zoom Levels

### Level 1

Human body

### Level 2

Digestive system

### Level 3

Bloodstream

### Level 4

Cell

### Level 5

Mitochondrion

### Level 6

Electron transport chain

### Level 7

ATP production

---

# Required SVG Components

## HumanBodySvg

Displays:

* Digestive tract
* Lungs
* Blood vessels

## DigestiveSystemSvg

Displays:

* Mouth
* Stomach
* Intestines

## CellSvg

Displays:

* Cell membrane
* Cytoplasm
* Organelles

## MitochondrionSvg

Displays:

* Outer membrane
* Inner membrane
* Cristae
* Matrix

## ElectronTransportChainSvg

Displays:

* Complex I
* Complex II
* Complex III
* Complex IV
* ATP Synthase

---

# Required Animations

## Digestion

Food particle moves through body.

## Nutrient Breakdown

Food separates into:

* Glucose
* Fatty acids
* Amino acids

## Bloodstream

Nutrients travel through vessels.

## Cell Entry

Nutrients enter cells.

## Mitochondrial Entry

Nutrients become metabolic intermediates.

## Electron Transport

Electrons move between complexes.

## Proton Pumping

Protons accumulate across the membrane.

## ATP Production

ATP particles appear.

---

# Educational Topics

## Nutrition

* Carbohydrates
* Proteins
* Fats

## Metabolism

* Glycolysis
* Beta Oxidation
* Krebs Cycle

## Mitochondria

* ETC
* ATP Synthase
* Oxygen
* ROS

## Lifestyle

* Exercise
* Fasting
* Sleep
* Circadian Rhythms

---

# Scientific Accuracy Rules

Always prefer:

"Convert energy from nutrients into ATP"

Avoid:

"Mitochondria create energy"

Must explain:

* Oxygen as final electron acceptor
* Water production
* ATP production
* ROS generation
* Efficiency and heat production

---

# SEO Strategy

## Pillar Content

### Mitochondria

* What are mitochondria?
* How do mitochondria produce ATP?
* Mitochondria and aging

### Nutrition

* What happens after eating?
* How glucose becomes energy
* How fat becomes energy

### Exercise

* Mitochondria and exercise
* VO₂ max
* Endurance

### Fasting

* Fasting and metabolism
* Ketones
* Metabolic flexibility

---

# Monetization Strategy

## AdSense

Use ad slots:

```txt
AdSlotTopBanner
AdSlotSidebar
AdSlotArticle
AdSlotFooter
```

Rules:

* Never place ads inside learning animations
* Never place ads next to controls
* Never interrupt user flow

## Recommended Placement

### Home

* One banner
* One footer ad

### Articles

* Top
* Middle
* Bottom

### Journey

* One ad before start
* One ad after completion

No ads between steps.

---

# Privacy and Consent

Required:

* GDPR compliance
* Cookie banner
* Consent preferences
* Ad consent handling

Only load advertising scripts after appropriate consent.

---

# Future Features

## Exercise Simulator

User selects:

* Running
* Walking
* Cycling

Show ATP demand changes.

## Food Simulator

User selects:

* Rice
* Fruit
* Meat
* Olive oil

Show digestion pathways.

## Fasting Simulator

User selects:

* 12h
* 16h
* 24h
* 48h

Show changing fuel usage.

## Mitochondria Simulator

Show:

* Electron flow
* Oxygen consumption
* ATP production
* ROS production

Real-time interactive visualization.

---

# Codex Master Prompt

Build a production-ready educational platform called "The Human Energy Journey".

Requirements:

* Next.js
* TypeScript
* Tailwind
* Framer Motion
* Mobile-first
* SEO optimized
* Accessibility compliant
* SVG-based animations
* Content-driven architecture
* Google AdSense integration
* GDPR consent management

The main feature is an interactive journey that follows food from ingestion through digestion, nutrient absorption, cellular metabolism, mitochondrial ATP production, and energy usage.

Keep educational content separate from UI logic.

Use reusable components.

Prioritize scientific accuracy, performance, maintainability, and user engagement.

# Design Philosophy

Build the project as an educational simulation platform.

The initial ATP journey is only the first experience.

The architecture should allow future simulations such as:

- Food simulator
- Exercise simulator
- Fasting simulator
- Sleep simulator
- Circadian rhythm simulator
- ROS simulator
- Longevity simulator

All simulations should be able to reuse:
- Content system
- Animation system
- Visualization system
- Progression system