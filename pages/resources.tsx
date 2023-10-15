import { NextPage } from 'next';
import React from 'react';
import { Header } from '../components/Header';

const Resources: NextPage = () => {

  return (
    <main className="flex min-h-screen flex-col p-4 sm:p-8 lg:p-16 relative">
      <div className="text-center mb-3 relative overflow-visible">
        <Header />
        <h2 className="py-5 text-2xl sm:text-5xl font-extrabold">Guide for Data Science Interns & New Grads</h2>
        <p className='text-left'>
        Data Science roles vary company to company, so the interview processes can be all over the place. But here's the deal: when you're applying for a job, you can usually take a good guess about what you're in for just by reading the job posting. Here's how.
        </p>
        <p className='text-left py-2'>
        If the posting talks about stuff like dashboarding, SQL, experiments, and maybe some machine learning, it's likely a product-focused Data Science gig. They'll want you to be pretty sharp with SQL, coding, and stats, but don't stress too much about the high-level machine learning stuff.
        </p>
        <p className='text-left py-2'>
        On the flip side, there are more "ML-heavy" Data Science jobs, often in startups or mid-sized companies. These interviews dive deeper into machine learning theory. The job posting might name-drop libraries like sklearn, spacy, and skills in things like clustering and decision trees.
        </p>
        <p className='text-left py-2'>
        Now, these tips mostly apply to Data Science roles in Tech and Finance. If you're looking for advice on becoming a research or applied scientist, then this won't apply because those roles are specific. Speaking of advice, a lot of us, including me, do some quick prep before interviews. But honestly, there are so many resources out there that it's easy to get overwhelmed.
        </p>
        <p className='text-left py-2'>
        Just so you know, this guide won't teach you all of Data Science from the ground up. We assume you've got some background knowledge. This page is just a handy guide for those short-term prep sessions. Hope it helps!
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
              <span className='inline border-b-4 border-sky-500'>Ace the Data Science Interview:</span> Paid but definitely worth it. Focused mostly on tech product-based DS roles.
            </li>
            <li className='py-5'>
              <span className='inline border-b-4 border-sky-500'>Statistics Fundamentals:</span> <a href="https://www.youtube.com/watch?v=5koKb5B_YWo&list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9&index=11" target='_blank' className="text-indigo-400 hover:text-indigo-800 mr-5 px-5">StatQuest: Alternative Hypothesis</a>
            </li>
            <li>
              <span className='inline border-b-4 border-sky-500'>ML Fundamentals:</span> <a href='https://www.youtube.com/watch?v=qcvAqAH60Yw&list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF&index=8' target='_blank' className="text-indigo-400 hover:text-indigo-800 mr-5 px-5">StatQuest: ROC and AUC in R</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Resources