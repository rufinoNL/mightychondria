import type { Article } from "@/types/content";

export const articles: Article[] = [
  {
    slug: "what-happens-after-eating",
    title: "What Happens After Eating?",
    description:
      "Follow a meal from chewing to absorption, circulation, and cellular energy use.",
    category: "Nutrition",
    tags: ["digestion", "absorption", "metabolism"],
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    featured: true,
    body: [
      "After eating, the body breaks food into smaller molecules that can be absorbed and delivered to cells.",
      "Carbohydrates become simple sugars, proteins become amino acids, and fats become fatty acids and related molecules.",
      "Those nutrients do not create energy from nothing. They carry chemical energy that cells can convert into ATP, the molecule that powers many cellular processes."
    ]
  },
  {
    slug: "what-are-mitochondria",
    title: "What Are Mitochondria?",
    description:
      "A plain-language introduction to mitochondria and their role in cellular energy conversion.",
    category: "Mitochondria",
    tags: ["mitochondria", "cells", "ATP"],
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    featured: true,
    body: [
      "Mitochondria are cellular structures that help convert energy from nutrients into ATP.",
      "They contain inner membranes folded into cristae, where important steps of ATP production happen.",
      "They also participate in heat production, signaling, and the management of reactive oxygen species."
    ]
  },
  {
    slug: "how-mitochondria-produce-atp",
    title: "How Do Mitochondria Produce ATP?",
    description:
      "Learn how electrons, oxygen, proton gradients, and ATP synthase work together.",
    category: "Mitochondria",
    tags: ["electron transport chain", "oxygen", "ATP synthase"],
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    featured: true,
    body: [
      "Mitochondria use electrons from nutrient-derived molecules to help build a proton gradient.",
      "Oxygen is the final electron acceptor in this process and contributes to water production.",
      "ATP synthase uses the proton gradient to produce ATP from ADP and phosphate."
    ]
  },
  {
    slug: "how-glucose-becomes-energy",
    title: "How Glucose Becomes Usable Cellular Energy",
    description:
      "Trace glucose from digestion through glycolysis and mitochondrial ATP production.",
    category: "Metabolism",
    tags: ["glucose", "glycolysis", "ATP"],
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    featured: false,
    body: [
      "Glucose is absorbed from carbohydrate-rich foods and delivered to cells through the bloodstream.",
      "Cells can process glucose through glycolysis, producing smaller molecules that feed mitochondrial pathways.",
      "The goal is not to create energy, but to convert energy stored in glucose into ATP and heat."
    ]
  },
  {
    slug: "how-fat-becomes-energy",
    title: "How Fat Becomes Usable Cellular Energy",
    description:
      "Understand how fatty acids become mitochondrial fuel and support ATP production.",
    category: "Metabolism",
    tags: ["fat", "beta oxidation", "mitochondria"],
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    featured: false,
    body: [
      "Dietary fats are digested and transported differently from many carbohydrates, but they can still become cellular fuel.",
      "Fatty acids enter metabolic pathways such as beta oxidation, producing molecules that feed mitochondrial ATP production.",
      "Fat metabolism is especially important during longer periods between meals and during endurance activity."
    ]
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export const featuredArticles = articles.filter((article) => article.featured);
