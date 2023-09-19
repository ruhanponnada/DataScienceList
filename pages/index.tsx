import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import DataTable from '../components/DataTable';
import {intern_data} from '../data/intern_data';
import { new_grad_data } from '../data/new_grad_data';

const Home: NextPage = () => {

  
  const currentDate = new Date();

  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const year = currentDate.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;
  return (
    <main className="flex min-h-screen flex-col p-24 relative">
  <div className="text-center mb-3 relative overflow-visible"> 
      <h2 className="text-5xl font-extrabold">Data Science List</h2>
     <ul className='py-10 text-center'>
      <li className='py-2'>
      Data Science List is a curated list of data science <a href="#" className='underline decoration-solid inline text-indigo-300 decoration-indigo-500 hover:bg-indigo-700'>internships</a> and <a href='#new-grad' className='scroll-smooth underline decoration-solid inline text-teal-300 decoration-teal-500 hover:bg-teal-700'>new grad</a> roles
      </li>
      <li>
      This list is maintained and updated weekly by <a href="https://www.linkedin.com/in/ruhanponnada/" target='_blank' className='underline decoration-solid inline text-sky-300 decoration-sky-500 hover:bg-sky-700'>Ruhan Ponnada</a> and <a target="_blank" href="https://www.linkedin.com/in/tmirthipati/" className='underline decoration-solid inline text-sky-300 decoration-sky-500 hover:bg-sky-700'>Tejas Mirthipati</a>
      </li>
      <li className='py-2'>
        Any info need updating or wanna drop some feedback? Fill out this <a href="https://airtable.com/app6E5b3lbNl7JP79/shrdjmgmqYvIbfxZl" target='_blank' className='underline decoration-solid inline text-emerald-300 decoration-emerald-500 hover:bg-emerald-700'>form</a>!
      </li>
      </ul>
      <div className='flex flex-col items-center'>
        <h2 className="mb-3 text-2xl font-extrabold inline-block py-1 px-3 rounded-full border border-indigo-300 dark:from-inherit">
          Data Science - Internship
        </h2>
        <div className='w-[1500px] min-h-[400px] flex justify-center'>
          <DataTable data={intern_data} />
        </div>
      </div>
      <div className='py-10 scroll-smooth flex flex-col items-center' id="new-grad">
        <h2 className="mb-3 text-2xl font-extrabold inline-block py-1 px-3 rounded-full border border-teal-300 dark:from-inherit">
          Data Science - New Grad
        </h2>
        <div className='w-[1500px] min-h-[400px] flex justify-center'>
          <DataTable data={new_grad_data} />
        </div>
      </div>
      <div>
      <h3 className="mb-3 text-2xl font-extrabold inline-block py-1 px-3 rounded-full border border-sky-300 dark:from-inherit">Any info need updating?</h3>
      <ul className=' text-center'> 
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
