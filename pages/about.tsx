import { NextPage } from 'next';
import React from 'react';
import { Header } from '../components/Header';

const About: NextPage = () => {

  return (
    <main className="flex min-h-screen flex-col p-4 sm:p-8 lg:p-16 relative">
      <div className="text-center mb-3 relative overflow-visible">
        <Header />
        <div className="text-left border-l-4 border-indigo-500">
          <h3 className="py-5 text-md sm:text-xl font-extrabold px-2">Want to feature your company here?</h3>
        </div>
        <p className='text-left py-5'>If you wanna add a sponsored company to the list, hit us up <a className='underline decoration-solid inline text-sky-300 decoration-sky-500 hover:bg-sky-700' href="mailto: ruponnada@gmail.com">here</a></p>
        <div className="text-left border-l-4 border-indigo-500">
          <h3 className="py-5 text-md sm:text-xl font-extrabold px-2">Want to give feedback?</h3>
        </div>
        <p className='text-left py-5'>
          If you want to give any feature requests, additional resources, or spot out anything wrong please fill out this form: <a href="https://airtable.com/app6E5b3lbNl7JP79/shrdjmgmqYvIbfxZl" target='_blank' className='underline decoration-solid inline text-emerald-300 decoration-emerald-500 hover:bg-emerald-700'>form</a>
        </p>
        <div className="text-left border-l-4 border-indigo-500">
          <h3 className="py-5 text-md sm:text-xl font-extrabold px-2">Who made this site?</h3>
        </div>
        <p className='text-left py-2'>
          Hey, this site was made by Ruhan Ponnada and Tejas Mirthipati. 
        </p>
        <p className='text-left py-2'>
        <a href='https://www.linkedin.com/in/ruhanponnada/' target="_blank" className='inline border-b-4 border-sky-500'>Ruhan</a> is a PM @ Microsoft and completed his undergrad in CS @ Georgia Tech.
        </p>
        <p className='text-left'> <a href='https://www.linkedin.com/in/tmirthipati/' target='_blank' className='inline border-b-4 border-sky-500'>Tejas</a> is finishing his Masters in Analytics at Georgia Tech and was previously @ Atlassian and John Deere as a DS intern. </p>
      </div>
    </main>
  )
}

export default About