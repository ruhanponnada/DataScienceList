import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import {intern_data} from '../data/intern_data';
import { new_grad_data } from '../data/new_grad_data';
import { Header } from '../components/Header';
import { NextSeo } from 'next-seo';
import ReactGA from "react-ga4";
import Script from 'next/script';

const Home: NextPage = () => {
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const year = currentDate.getFullYear();
  ReactGA.initialize('G-8MN591VSC0');
  const formattedDate = `${month}/${day}/${year}`;
  return (
    <main className="flex min-h-screen flex-col p-4 sm:p-8 lg:p-16 relative">
      <Head>
        <title>Data Science List - Home</title>
        <meta name="title" content="Data Science List - Home"/>
        <meta name="description" content="Welcome to Data Science List, a curated list of data science internships and new grad roles."/>
        <meta name="og:image" content="https://i.imgur.com/kUg7odI.png"/>
        <meta name="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://www.datasciencelist.com/" />
        <meta name="og:title" content="Data Science List - Home" />
        <meta name="og:description" content="Welcome to Data Science List, a curated list of data science internships and new grad roles." />
        <meta name="og:image" content="https://i.imgur.com/kUg7odI.png" /> 
          <meta name="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="600" />
      </Head>
    <div className="text-center mb-3 relative overflow-visible">
      <h2 className="text-3xl sm:text-5xl font-extrabold underline underline-offset-1">Data Science List</h2>
      <Header /> 
     <ul className='text-center text-sm sm:text-base'>
      <li className='py-2'>
      Data Science List is a curated list of data science <a href="#" className='underline decoration-solid inline text-indigo-300 decoration-indigo-500 hover:bg-indigo-700'>internships</a> and <a href='#new-grad' className='scroll-smooth underline decoration-solid inline text-teal-300 decoration-teal-500 hover:bg-teal-700'>new grad</a> roles
      </li>
      <li>
      This list is maintained and updated weekly by <a href="https://www.linkedin.com/in/ruhanponnada/" target='_blank' className='underline decoration-solid inline text-sky-300 decoration-sky-500 hover:bg-sky-700'>Ruhan Ponnada</a> and <a target="_blank" href="https://www.linkedin.com/in/tmirthipati/" className='underline decoration-solid inline text-sky-300 decoration-sky-500 hover:bg-sky-700'>Tejas Mirthipati</a>
      </li>
      <li className='py-2'>
        Any info need updating or wanna drop some feedback? Fill out this <a href="https://airtable.com/app6E5b3lbNl7JP79/shrdjmgmqYvIbfxZl" target='_blank' className='underline decoration-solid inline text-emerald-300 decoration-emerald-500 hover:bg-emerald-700'>form</a>!
      </li>
      <li className='py-2'>
      <span className="inline-flex items-center rounded-md bg-indigo-100 text-indigo-800 dark:bg-indigo-900 px-2 py-1 text-xs font-medium dark:text-indigo-300 ring-1 ring-inset ring-indigo-700/10">
          Data last updated: {formattedDate}
      </span>
      </li>
      </ul>
      <div className='py-2 flex flex-col items-center'>
        <h2 className="mb-3 text-xl sm:text-2xl font-extrabold inline-block py-1 px-3 rounded-full border border-indigo-300 dark:from-inherit">
          Data Science - Internship
        </h2>
        <div className='w-full min-h-[400px] sm:min-h-[600px] flex justify-center'>
          <DataTable data={intern_data} />
        </div>
      </div>
      <div className='py-10 scroll-smooth flex flex-col items-center' id="new-grad">
        <h2 className="mb-3 text-xl sm:text-2xl font-extrabold inline-block py-1 px-3 rounded-full border border-teal-300 dark:from-inherit">
          Data Science - New Grad
        </h2>
        <div className='w-full min-h-[400px] sm:min-h-[600px] flex justify-center'>
          <DataTable data={new_grad_data} />
        </div>
      </div>
      <div>
      <h3 className="mb-3 text-xl sm:text-2xl font-extrabold inline-block py-1 px-3 rounded-full border border-sky-300 dark:from-inherit">Any info need updating?</h3>
      <ul className='text-center text-sm sm:text-base'> 
      <li className='py-2'>
        Again, if we need to add a new posting or you wanna drop some feedback, fill out this <a href="https://airtable.com/app6E5b3lbNl7JP79/shrdjmgmqYvIbfxZl" target='_blank' className='underline decoration-solid inline text-emerald-300 decoration-emerald-500 hover:bg-emerald-700'>form</a>!
      </li>
      <li>
        Is your company not featured here? Wanna add a sponsored role to the list? Reach out to us <a className='underline decoration-solid inline text-sky-300 decoration-sky-500 hover:bg-sky-700' href="mailto: ruponnada@gmail.com">here</a>
      </li>
      </ul>
      </div>
  </div>
</main>
  )
}

export default Home
