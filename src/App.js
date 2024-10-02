import React from 'react'
import img1 from './assets/andrei.jpg';
import hiking1 from './assets/hiking1.jpg';
import hiking2 from './assets/hiking2.jpg';
import hiking3 from './assets/hiking3.jpg';
import hiking4 from './assets/hiking4.jpg';
import val1 from './assets/val1.jpg';
import val2 from './assets/val2.jpg';
import robo from './assets/robo.png';
import arrowup from './assets/arrowup.png';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import resume from './assets/Resume.pdf';
import './App.css';

const App = () => {
  return (
    <div>

      <div className='firstContainer'>
        <div className='mt-72 left-56 absolute '>
          <h1 className='text-6xl font-archivo text-neutral-700'>Hi, my name is
            <span className='text-rose-400'> Andrei Niko Perez</span>
          </h1>
          <h1 className='text-3xl mt-3 text-neutral-700'>An aspiring Software Engineer / Software Developer.</h1>
          <button className='btn1 text-neutral-700'>know me more.</button>
        </div>
      </div>

      <div className='bg-zinc-600 h-96 w-screen -skew-y-6 absolute top-3/4 overflow-hidden'></div>


      <div className='secondContainer'>
        <div className='secondContainerChild'>
          <h1>Fresh graduate student from Technological University of the Philippines - Manila
            with a Bachelor's Degree in Information Systems - Cum Laude. Consistent Dean's / President's Lister since a.y 2021. Am a person who is eager to learn new things from the professionals
            to stay up to date in the current trends in the Technological Industry, am also person who can handle criticism and is not afraid to commit mistakes.
          </h1>
          <a href={resume} target='noopener'><button className='btn2'  >View Resume</button></a>
        </div>
        <div className='imageContainer'>
          <img src={img1} alt='img' width={400} height={200}></img>
        </div>
      </div>

      <div className='relative bg-white'>
        <h1 className='header1 text-center text-7xl font-anton p-32 tracking-widest text-neutral-700 uppercase'>H o b b i e s</h1>

        <div className='grid grid-cols-4 bg-zinc-600 justify-items-center place-content-center '>
          <h1 className='mt-32 mb-32 p-5 text-5xl font-anton tracking-widest text-neutral-200 col-span-4 uppercase border-y-4 border-y-neutral-200 w-2/4 text-center'>H i k i n g</h1>
          <div className='hover:underline underline-offset-8 decoration-neutral-200'>
            <h1 className='text-center text-3xl font-anton tracking-widest text-neutral-200'>Mt. Hapunang Banoy</h1>
            <img className='gridGallery blur-sm brightness-50' src={hiking1} alt='img' width={350} height={200}></img>
          </div>
          <div className='hover:underline underline-offset-8 decoration-neutral-200'>
            <h1 className='text-center text-3xl font-anton tracking-widest text-neutral-200'>Mt. Batulao</h1>
            <img className='gridGallery blur-sm brightness-50' src={hiking2} alt='img' width={350} height={200}></img>
          </div>
          <div className='hover:underline underline-offset-8 decoration-neutral-200'>
            <h1 className='text-center text-3xl font-anton tracking-widest text-neutral-200'>Mt. Batolusong</h1>
            <img className='gridGallery blur-sm brightness-50' src={hiking3} alt='img' width={350} height={200}></img>
          </div>
          <div className='hover:underline underline-offset-8 decoration-neutral-200'>
            <h1 className='text-center text-3xl font-anton tracking-widest text-neutral-200 '>Mt. Pamitinan</h1>
            <img className='gridGallery blur-sm brightness-50' src={hiking4} alt='img' width={350} height={200}></img>
          </div>

          <h1 className='mt-32 mb-32 p-5 text-5xl font-anton tracking-widest text-neutral-200 col-span-4 uppercase border-y-4 border-y-neutral-200 w-2/4 text-center'>V a l o r a n t</h1>

          <div className='col-span-2'>
            <img className='gridGallery blur-sm brightness-50' src={val1} alt='img' width={650} height={200}></img>
          </div>
          <div className='col-span-2'>
            <img className='gridGallery blur-sm brightness-50' src={val2} alt='img' width={550} height={200}></img>
          </div>
        </div>
      </div>

      <div className='fourthContainer relative'>
        <h1 className='header2 text-center text-7xl font-anton tracking-widest p-32 text-neutral-700 uppercase'>P r o j e c t s</h1>

        <div className='grid grid-cols-3 bg-zinc-600 pt-20 pb-20'>
          <div>
            <h1 className='text-center text-3xl font-anton tracking-widest text-white mt-10 mb-5'>Robo Friends App</h1>
            <img className='projectGallery' src={robo} alt='img' width={550} height={200}></img>
            <a href='https://mmiiniko.github.io/ReactJS-Project/' target='_blank'><button className='viewbtn text-white'>View Project</button></a>
            <a href='https://github.com/mmiiniko/ReactJS-Project' target='_blank'><button className='codebtn text-white'>Source Code</button></a>
          </div>
          <div>
            <h1 className='text-center text-3xl font-anton tracking-widest text-white mt-10 mb-5'>CRUD using ReactJS</h1>
            <img className='projectGallery' src={robo} alt='img' width={550} height={200}></img>
            <button className='viewbtn text-white'>View Project</button>
            <button className='codebtn text-white'>Source Code</button>
          </div>
          <div>
            <h1 className='text-center text-3xl font-anton tracking-widest text-white mt-10 mb-5'>To Do list - ReactJS</h1>
            <img className='projectGallery' src={robo} alt='img' width={550} height={200}></img>
            <button className='viewbtn text-white'>View Project</button>
            <button className='codebtn text-white'>Source Code</button>
          </div>
        </div>
      </div>

      <footer className='footer'>
        <div className='col-span-2 mt-14'>
          <img className='transition duration-150 delay-75 hover:-translate-y-2' src={arrowup} alt='img' width={30} ></img>
        </div>
        <div className='justify-self-end mt-10 mr-2'>
          <a href='https://www.linkedin.com/in/mmiiniko/' target='_blank'><img className='transition duration-150 delay-75 hover:-translate-y-1' src={linkedin} alt='img' width={30}></img></a>
        </div>
        <div className='justify-self-start mt-10 ml-2'>
          <a href='https://github.com/mmiiniko' target='_blank'><img className='transition duration-150 delay-75 hover:-translate-y-1' src={github} alt='img' width={30} ></img></a>
        </div>
        <div className='col-span-2 text-stone-400'>
          <h1 className='mt-3 pt-1 border-t border-stone-400 w-80 text-center text-xs tracking-widest'>&copy; Developed by Andrei Niko Perez</h1>
          <h1 className='mt-1 text-center text-xs tracking-widest'>Powered by Tailwindcss</h1>
        </div>
      </footer>


    </div>
  )
}

export default App;
