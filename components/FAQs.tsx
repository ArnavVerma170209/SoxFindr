"use client"
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const questions = [
  {
    "question": "What is SoxFindr?",
    "answer": "SoxFindr helps you discover societies, explore what they do, and find the ones that match your interests."
  },
  {
    "question": "Who can apply?",
    "answer": "Any NSUT student in first or second year can explore societies and apply during the recruitment window"
  },
  // {
  //   "question": "How do I find a society for me?",
  //   "answer": "Take our SoxQuiz which helps u determine which society is best for you"
  // },
  {
    "question": "Can I apply to multiple societies?",
    "answer": "Yes. You can explore and apply to multiple societies, subject to each society's own recruitment process."
  },
  {
    "question": "How will I know if my application is accepted?",
    "answer": "You can track the status of your applications directly through your SoxFindr dashboard."
  },
  {
    "question": "What happens after I apply?",
    "answer": "Your application is reviewed by the respective society. Any updates to your application status will appear on your dashboard."
  },
  {
    "question": "When does recruitment close?",
    "answer": "18 sept."
  }
]

const questionColors = ["#4285f4", "#ea4335", "#fbbc05", "#34a853"];

const FAQ = () => {
  return (
    <>
    <div className="flex justify-center items-center w-screen h-full px-10 lg:px-0">
      <div className="group relative w-full max-w-5xl overflow-hidden rounded-3xl border border-mist-800 bg-mist-900/70 shadow-2xl shadow-black/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#4285f4]/20 opacity-70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#34a853]/15 opacity-60 blur-3xl"
        />
        <div className="flex items-center gap-4 border-b border-mist-800 px-6 py-5 sm:px-8">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mist-800 text-[#4285f4]">
            <HelpCircle size={23} strokeWidth={1.8} />
          </div>
          <div>
            <p className="font-mono text-lg font-bold text-mist-100">Everything you need to know</p>
            <p className="mt-1 font-mont text-xs text-mist-400">Quick answers for your SoxFindr journey</p>
          </div>
        </div>

        <Accordion className="bg-transparent px-4 text-mist-100 sm:px-8" >
            {questions.map((question, i) => {
              const color = questionColors[i % questionColors.length];
              return (
           <AccordionItem value={String(i)} key={question.question} className="group border-mist-800/80">
                  <AccordionTrigger className="flex items-center relative gap-4 py-6 font-medium font-mono text-base sm:text-lg hover:no-underline">
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-300 group-data-open:scale-125"
                      style={{ backgroundColor: color }}
                    />
                    <span className="flex-1">{question.question}</span>
                    <span className="font-mono text-xs font-normal text-mist-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-7 pr-8 text-sm leading-7 font-mont text-mist-300 sm:text-base">
                    {question.answer}
                  </AccordionContent>
                </AccordionItem> 
              );
            })}
               </Accordion> 
      </div>
    </div>
    <div className="h-24"></div>

    </>
  );
};

export default FAQ;