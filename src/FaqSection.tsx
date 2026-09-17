"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Assessment and how can it help my school?",
    answer:
      "Assessment is a digital assessment platform that helps schools create, conduct, and grade exams online. It handles quiz creation, secure exam delivery, automatic grading, and performance analytics, so teachers spend less time on paperwork and more time teaching.",
  },
  {
    question: "Can I integrate Assessment with tools I already use?",
    answer:
      "Yes. Assessment connects with tools like Google Classroom, Zoom, Microsoft Teams, and your existing LMS, so you can bring exam data into workflows you already have set up.",
  },
  {
    question: "Is student data secure on Assessment?",
    answer:
      "Student data is encrypted in transit and at rest, and access is restricted by role students, teachers, and administrators only see what's relevant to them. Exam sessions are also protected with anti-cheating detection and lockout controls.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes. New institutions get a 14-day free trial with full access to quiz creation, class management, and analytics no credit card required to start.",
  },
  {
    question: "Who is Assessment best suited for?",
    answer:
      "Assessment works for individual teachers running classroom quizzes as well as institutions coordinating exams across multiple classes, grades, or campuses.",
  },
];

export default function FaqSection(): React.ReactNode {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number): void => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#5B3654]">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#2B1330] sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Everything you need to know about running exams on Assessment.
        </p>

        <div className="mt-10 space-y-3 text-left">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-gray-100 px-6 py-5"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#2B1330]">
                    {item.question}
                  </span>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2B1330] text-white"
                    aria-hidden="true"
                  >
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Didn&apos;t find what you were looking for?{" "}
          <a href="/contact" className="font-semibold text-[#452140] underline">
            Contact us
          </a>{" "}
          for more questions.
        </p>
      </div>
    </section>
  );
}
