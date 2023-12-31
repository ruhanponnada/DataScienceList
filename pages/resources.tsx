import { NextPage } from 'next';
import React from 'react';
import { Header } from '../components/Header';
import ReactGA from "react-ga4";
const Resources: NextPage = () => {
  ReactGA.initialize('G-8MN591VSC0');
  return (
    <main className="flex min-h-screen flex-col p-4 sm:p-8 lg:p-16 relative">
      <div className="text-center mb-3 relative overflow-visible">
        <Header />
        <h2 className="py-5 text-2xl sm:text-5xl font-extrabold">Guide for Data Science Interns & New Grads</h2>
        <p className='text-left'>
        Data Science roles can vary widely depending on the company, but you can often predict the nature of the interview from the job posting itself. 
        </p>
        <p className='text-left py-2'>
        Here's a brief guide:
        </p>
        <ul className="list-disc px-10">
          <li className='text-left py-2'><span className='inline font-bold text-indigo-500'>Product-focused Data Science Roles:</span> If you spot keywords like "dashboarding", "SQL", "experiments", and mentions of basic machine learning in the job description, you're likely looking at a product-focused role. Interviewers for these positions usually expect candidates to demonstrate solid skills in SQL and a good grasp of statistics, while machine learning knowledge can be at a foundational level.
          </li>
          <li className='text-left py-2'>
          <span className='inline font-bold text-indigo-500'>ML-Heavy Data Science Roles:</span> Generally found in startups or mid-sized companies, these roles prioritize deeper understanding of machine learning theories. The job descriptions for these positions often list specific libraries (e.g., sklearn, spacy) and advanced modeling techniques (like clustering, decision trees, etc.) as preferred experiences.
          </li>
        </ul>
        <p className='text-left py-2'>
        We recognize that many candidates are looking for short-term preparation without being overwhelmed by excessive resources. This isn’t a comprehensive deep-dive into data science fundamentals. Instead, the  focus here is on immediate preparation.
        </p>
        <div className="text-left border-l-4 border-indigo-500">
          <h3 className="py-5 text-md sm:text-xl font-extrabold px-2">Coding</h3>
        </div>
        <p className='text-left py-5'>
        The two best resources for intern or new grad data scientists when it comes to coding are <span className="inline-flex items-center rounded-md bg-blue-100 text-blue-800 dark:bg-blue-700/20 px-2 py-1 text-md font-medium dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">Stratascratch</span> and <span className="inline-flex items-center rounded-md bg-blue-100 text-blue-800 dark:bg-blue-700/20 px-2 py-1 text-md font-medium dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">Leetcode</span>.
        My preference is StrataScratch as it offers real coding questions that were given during interviews. Additionally, the datasets used for the coding questions are typically relevant to the companies domain. 
        If you have already taken a database class or feel comfortable with basic SQL, start off with Medium level difficulty on StrataScratch. 
        However, depending on your skill level you may need to start with easy on Leetcode and work your way up. 
        </p>
        <div className="text-left border-l-4 border-indigo-500">
          <h3 className="py-5 text-md sm:text-xl font-extrabold px-2">Probability & Statistics</h3>
        </div>
        <p className='text-left py-5'>
          Check out these resources: 
          <a href='https://drive.google.com/file/d/11HWte5gV0UO7j-NSa6hEzF-VyaiBxZ-C/view' target='_blank' className="text-indigo-400 hover:text-indigo-800 mr-5 px-5">Statistics Primer</a>
          <a href='https://github.com/aershov24/machine-learning-ds-interview-questions#Statistics' target='_blank' className="text-indigo-400 hover:text-indigo-800 mr-5">Statistics Interview Questions</a>
          <a href='https://github.com/youssefHosni/Data-Science-Interview-Questions-Answers/blob/main/Statistics%20Interview%20Questions%20%26%20Answers%20for%20Data%20Scientists.md' target='_blank' className="text-indigo-400 hover:text-indigo-800 mr-5">DS Interview Questions GitHub</a>
          <a href='http://static1.squarespace.com/static/54bf3241e4b0f0d81bf7ff36/t/55e9494fe4b011aed10e48e5/1441352015658/probability_cheatsheet.pdf' target='_blank' className="text-indigo-400 hover:text-indigo-800">Probability Cheatsheet</a>  
        </p>
        <div className="text-left border-l-4 border-indigo-500">
          <h3 className='py-5 text-md sm:text-xl font-extrabold px-2'>Machine Learning</h3>
        </div>
        <p className='text-left py-5'>
          <a href='http://static1.squarespace.com/static/54bf3241e4b0f0d81bf7ff36/t/55e9494fe4b011aed10e48e5/1441352015658/probability_cheatsheet.pdf' target='_blank' className="text-indigo-400 hover:text-indigo-800 mr-5 px-5">ML Probability Cheatsheet</a>
          <a href='https://github.com/ml874/Data-Science-Cheatsheet/blob/master/data-science-cheatsheet.pdf' target='_blank' className="text-indigo-400 hover:text-indigo-800 mr-5 px-5">ML Cheatsheet on GitHub</a>
        </p>
        <div className="text-left border-l-4 border-indigo-500">
          <h3 className='py-5 text-md sm:text-xl font-extrabold px-2'>Additional Resource Recommendations</h3>
        </div>
        <div className='text-left'>
          <ul>
            <li className='py-5'>
              <a href='https://www.amazon.com/Ace-Data-Science-Interview-Questions/dp/0578973839' target='_blank' className='inline border-b-4 border-sky-500'>Ace the Data Science Interview:</a> Paid but definitely worth it. Focused mostly on tech product-based DS roles.
            </li>
            <li className='py-5'>
              <span className='inline border-b-4 border-sky-500'>Statistics Fundamentals:</span> <a href="https://www.youtube.com/watch?v=5koKb5B_YWo&list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9&index=11" target='_blank' className="text-indigo-400 hover:text-indigo-800 mr-5">StatQuest: Alternative Hypothesis</a>
            </li>
            <li>
              <span className='inline border-b-4 border-sky-500'>ML Fundamentals:</span> <a href='https://www.youtube.com/watch?v=qcvAqAH60Yw&list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF&index=8' target='_blank' className="text-indigo-400 hover:text-indigo-800 mr-5">StatQuest: ROC and AUC in R</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Resources