"use client"
import { cn } from "@/lib/utils";
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
  {
    "question": "How do I find a society for me?",
    "answer": "Take our SoxQuiz which helps u determine which society is best for you"
  },
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

const FAQ = () => {
  return (
    <>
    <div className="flex justify-center items-center w-screen h-full">

      <div className="mx-10 lg:mx-0 xl:max-w-5xl lg:max-w-3xl w-full">
       
          <Accordion className="bg-transparent text-mist-100" >
            {questions.map((_ : any, i : any) => (
           <AccordionItem value={i} key={i}>
                  <AccordionTrigger className="font-medium font-mono lg:h-12 h-full text-[24px] ">{questions[i].question}</AccordionTrigger>
                  <AccordionContent className="text-lg font-mont">
                    {questions[i].answer}
                  </AccordionContent>
                </AccordionItem> 
             
            ))}
               </Accordion> 
        </div>
      </div>
    <div className="h-24"></div>

    </>
  );
};

export default FAQ;