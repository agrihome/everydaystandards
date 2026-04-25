import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQ_DATA = [
  {
    question: "What is Every Day Standards?",
    answer:
      "We’re a company building simple, thoughtful tools for individuals and teams to improve their productivity, stay consistent, and achieve better results—without the usual complexity.",
  },
  {
    question: "Why did we build this?",
    answer:
      "We saw how many people struggle with staying productive—including ourselves—so we set out to build a simple tool that actually works in real life, helping you stay consistent without overcomplicating things.",
  },
  {
    question: "Who is this for?",
    answer:
      "It’s for anyone who wants to stay consistent—whether you’re working on personal habits or managing professional goals, and just need something simple that actually helps you follow through.",
  },
  {
    question: "What makes this different from other productivity apps?",
    answer:
      "Most apps focus on features and planning. We focus on helping you stay consistent—keeping things simple, practical, and built around actually getting things done.",
  },
  {
    question: "What are we trying to help you achieve?",
    answer:
      "We’re here to help you build better habits, stay consistent, and make steady progress every day—so over time, you can achieve meaningful results without burning out.",
  },
];

export default function Faq() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:py-24 py-8 flex flex-col gap-16">
        <div className="flex flex-col gap-4 items-center">
          <Badge
            variant="outline"
            className="text-sm h-auto py-1 px-3 border-0 outline outline-border"
          >
            About us
          </Badge>
          <h2 className="text-5xl font-medium text-center max-w-lg">
            Got questions? We’ve got answers ready
          </h2>
        </div>
        <div>
          <Accordion className="w-full flex flex-col gap-6">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className={cn(
                  "p-6 border border-border rounded-2xl flex flex-col gap-3 group/item data-[open]:bg-accent transition-colors",
                )}
              >
                <AccordionTrigger className="p-0 text-xl font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden cursor-pointer">
                  {faq.question}
                  <PlusIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                </AccordionTrigger>
                <AccordionContent className="p-0 text-muted-foreground text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
