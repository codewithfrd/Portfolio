import React from 'react'

function About() {
  return (
    <>
     <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
        <h1 className='text-3xl font-bold my-5'>About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eaque incidunt culpa, alias explicabo, itaque aperiam veritatis ad cumque quis minus laboriosam nostrum unde? Nulla quibusdam sed ea possimus atque?</p>
        <br />

        <h1 className='text-green-500 text-2xl font-semibold mt-2 md:mt-5'>Education & Training</h1>
        <span>[Degree/Certification], [Institution], [Year] [Degree/Certification], [Institution], [Year] [Relevant Course], [Platform/Institution], [Year]</span>

        <h1 className='text-green-500 text-2xl font-semibold mt-2 md:mt-5'>Skills & Expertise</h1>
        <span>Proficient in [Programming Languages] Experienced with [Software Tools/Technologies] Strong grasp of [Design Principles/Concepts] Excellent problem-solving skills Effective communicator and collaborator</span><br />

        <h1 className='text-green-500 text-2xl font-semibold mt-2 md:mt-5'>Professional Experience</h1>
        <span>[Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements] [Job Title], [Company/Organization], [Dates] [Brief description of responsibilities and achievements] [Freelance/Contract Work], [Client/Organization], [Dates] [Brief description of projects and contributions]</span><br />

        <h1 className='text-green-500 text-2xl font-semibold mt-2 md:mt-5'>Achievements & Awards</h1>
        <span>[Award/Recognition], [Organization/Institution], [Year] [Achievement], [Organization/Platform], [Year]</span><br />

        <h1 className='text-green-500 text-2xl font-semibold mt-2 md:mt-5'>Mission Statement</h1>
        <span>My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.</span>



        


     </div>
    </>
  )
}

export default About