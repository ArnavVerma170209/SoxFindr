"use client";

import Link from "next/link";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/navbar";

type Category = "Technical" | "Cultural" | "Literary" | "Social";

type Question = {
  prompt: string;
  options: {
    label: string;
    category: Category;
  }[];
};

const questions: Question[] = [
  {
    prompt: "What would you most like to spend your society time doing?",
    options: [
      { label: "Build something useful with technology", category: "Technical" },
      { label: "Perform, create, or put on a show", category: "Cultural" },
      { label: "Share ideas and sharpen my voice", category: "Literary" },
      { label: "Make a visible difference in the community", category: "Social" },
    ],
  },
  {
    prompt: "Pick the kind of event you would never want to miss.",
    options: [
      { label: "A hackathon or a tech workshop", category: "Technical" },
      { label: "A concert, dance show, or theatre night", category: "Cultural" },
      { label: "A debate, quiz, or open mic", category: "Literary" },
      { label: "A volunteering drive or a social impact event", category: "Social" },
    ],
  },
  {
    prompt: "Which strength sounds most like you?",
    options: [
      { label: "I enjoy solving tricky problems", category: "Technical" },
      { label: "I express myself through creativity", category: "Cultural" },
      { label: "I am curious and love communicating ideas", category: "Literary" },
      { label: "I bring people together around a cause", category: "Social" },
    ],
  },
  {
    prompt: "What kind of teammate are you?",
    options: [
      { label: "The builder who turns ideas into projects", category: "Technical" },
      { label: "The energetic performer and collaborator", category: "Cultural" },
      { label: "The thoughtful researcher and storyteller", category: "Literary" },
      { label: "The organiser who gets everyone involved", category: "Social" },
    ],
  },
  {
    prompt: "Choose the impact you want to leave on campus.",
    options: [
      { label: "New products, tools, and technical knowledge", category: "Technical" },
      { label: "Memorable experiences and creative energy", category: "Cultural" },
      { label: "Better conversations and fresh perspectives", category: "Literary" },
      { label: "Stronger communities and meaningful action", category: "Social" },
    ],
  },
];

const recommendations: Record<Category, {
  description: string;
  societies: { name: string; slug: string }[];
}> = {
  Technical: {
    description:
      "You are a curious builder who likes learning by making. These societies are a great place to explore software, emerging technology, and real-world projects.",
    societies: [
      { name: "Google Developers Group", slug: "google-developers-group" },
      {
        name: "Institute of Electrical and Electronics Engineers (IEEE)",
        slug: "institute-of-electrical-and-electronics-engineers-(ieee)",
      },
      { name: "The Debugging Society", slug: "the-debugging-society" },
      { name: "DevComm NSUT", slug: "devcomm-nsut" },
    ],
  },
  Cultural: {
    description:
      "You bring creative energy wherever you go. These societies bring together students who love performance, music, theatre, and making campus come alive.",
    societies: [
      { name: "Moksha", slug: "moksha" },
      { name: "Western Dance Society", slug: "western-dance-society" },
      { name: "Music Society", slug: "music-society" },
      { name: "Ashwanmedh", slug: "ashwanmedh" },
    ],
  },
  Literary: {
    description:
      "You enjoy ideas, conversation, and expressing a point of view. Explore these societies to develop your communication, critical thinking, and creative writing skills.",
    societies: [
      { name: "DebSoc", slug: "debsoc" },
      { name: "Quizzing Society", slug: "quizzing-society" },
      { name: "Creative Writing Society", slug: "creative-writing-society" },
      { name: "Literary Society", slug: "literary-society" },
    ],
  },
  Social: {
    description:
      "You care about people and like turning good intentions into action. These communities offer opportunities for volunteering, leadership, entrepreneurship, and social impact.",
    societies: [
      { name: "Enactus NSUT", slug: "enactus-nsut" },
      { name: "NSS NSUT", slug: "nss-nsut" },
      { name: "Rotaract NSUT", slug: "rotaract-nsut" },
      { name: "ECell NSUT", slug: "ecell-nsut" },
    ],
  },
};

export default function SocQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Category[]>([]);
  const [result, setResult] = useState<Category | null>(null);

  const selectedAnswer = answers[currentQuestion];
  const progress = ((currentQuestion + (result ? 1 : 0)) / questions.length) * 100;

  const recommendation = result ? recommendations[result] : null;

  const chooseAnswer = (category: Category) => {
    const nextAnswers = [...answers];
    nextAnswers[currentQuestion] = category;
    setAnswers(nextAnswers);
  };

  const nextQuestion = () => {
    if (!selectedAnswer) return;

    if (currentQuestion === questions.length - 1) {
      const scores = answers.reduce<Record<Category, number>>(
        (totals, category) => {
          totals[category] += 1;
          return totals;
        },
        { Technical: 0, Cultural: 0, Literary: 0, Social: 0 },
      );
      scores[selectedAnswer] += 1;
      const winner = (Object.keys(scores) as Category[]).reduce((best, category) =>
        scores[category] > scores[best] ? category : best,
      "Technical");
      setResult(winner);
      return;
    }

    setCurrentQuestion((question) => question + 1);
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <main className="min-h-screen bg-mist-950 text-mist-100">
      <Navbar />
      <section className="mx-auto flex w-full max-w-5xl flex-col px-6 pb-20 pt-32 lg:px-0">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 flex items-center gap-2 font-mont text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            <Sparkles size={15} /> Society matchmaker
          </p>
          <h1 className="font-mono text-5xl font-bold tracking-tighter text-white md:text-7xl">
            Find your people.
          </h1>
          <p className="mt-5 max-w-xl font-mont text-base leading-relaxed text-mist-300">
            Answer a few quick questions and we&apos;ll point you towards the NSUT society
            category that fits your interests best.
          </p>
        </div>

        <div
          className="relative mb-8 h-1.5 overflow-hidden rounded-full bg-[linear-gradient(90deg,#4285F4_0%,#EA4335_35%,#FBBC05_65%,#34A853_100%)]"
          aria-label={`${Math.round(progress)}% complete`}
        >
          <div
            className="absolute inset-y-0 right-0 bg-mist-800 transition-all duration-500"
            style={{ width: `${100 - Math.max(progress, 4)}%` }}
          />
        </div>

        {!result ? (
          <section className="rounded-3xl border border-mist-700/70 bg-mist-900/70 p-6 shadow-2xl shadow-black/20 md:p-10">
            <div className="mb-10 flex items-center justify-between gap-4">
              <p className="font-mont text-sm font-semibold text-mist-400">
                Question {currentQuestion + 1} <span className="text-mist-600">/ {questions.length}</span>
              </p>
           
            </div>
            <fieldset>
              <legend className="max-w-3xl font-mono text-2xl font-bold leading-tight text-white md:text-4xl">
                {questions[currentQuestion].prompt}
              </legend>
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {questions[currentQuestion].options.map((option) => (
                  <label
                    key={option.category}
                    className={`cursor-pointer rounded-2xl border p-5 font-mont text-sm transition-all ${
                      selectedAnswer === option.category
                        ? "border-blue-400 bg-blue-500/15 text-white"
                        : "border-mist-700 bg-mist-950/50 text-mist-300 hover:border-mist-500 hover:text-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      value={option.category}
                      checked={selectedAnswer === option.category}
                      onChange={() => chooseAnswer(option.category)}
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <button
              type="button"
              onClick={nextQuestion}
              disabled={!selectedAnswer}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-mont text-sm font-bold text-mist-950 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {currentQuestion === questions.length - 1 ? "Show my match" : "Next question"}
              <ArrowRight size={17} />
            </button>
          </section>
        ) : (
          <section className="relative overflow-hidden rounded-3xl border border-blue-400/50 bg-gradient-to-br from-blue-500/20 via-mist-900 to-mist-900 p-6 md:p-12">
            <div className="relative z-10 max-w-2xl">
              <p className="font-mont text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                Your society category
              </p>
              <h2 className="mt-4 font-mono text-4xl font-bold tracking-tight text-white md:text-6xl">
                {result} societies
              </h2>
              <p className="mt-6 font-mont text-base leading-relaxed text-mist-200">
                {recommendation?.description}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {recommendation?.societies.map((society) => (
                  <Link
                    key={society.slug}
                    href={`/society/${society.slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-mist-600/80 bg-mist-950/50 p-4 font-mont text-sm font-bold text-white transition hover:border-blue-300 hover:bg-blue-500/10"
                  >
                    {society.name}
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={restart}
                  className="inline-flex items-center gap-2 rounded-full border border-mist-600 px-6 py-3 font-mont text-sm font-bold text-white transition hover:border-white"
                >
                  <RotateCcw size={16} /> Retake quiz
                </button>
              </div>
            </div>
            <Sparkles className="absolute -right-8 -top-8 h-48 w-48 text-blue-300/10" />
          </section>
        )}
      </section>
      <footer className="flex h-12 items-center justify-center bg-mist-900 text-mist-100/20">
        made doing msti by Arnav Verma :)
      </footer>
    </main>
  );
}
