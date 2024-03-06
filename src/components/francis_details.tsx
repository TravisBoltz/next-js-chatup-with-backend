import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineLink } from 'react-icons/ai';

const FrancisDetails = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <>
      <nav
        className={`md:w-60 bg-royalBlue h-screen flex- fixed hidden md:flex flex-col ${
          isMouseOver ? 'overflow-y-auto' : 'overflow-hidden'
        }`}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >        <div className="flex-1 text-gold p-4  overflow-y-auto">

<Image className="mx-auto w-40 h-40 rounded-full transition duration-300 ease-in-out hover:scale-110" src="/FM.JPG" width={160} height={160} alt="FM" />
          <p className='pt-5'>
            Francis Martinson is a Ph.D. Student with North Dakota State University, a Network Engineer, and Cloud Solutions Architect. Francis’s interests are in Machine Learning, Data Science, Cloud Computing, Software Engineering.
            He is a member of the North Dakota State University Chapter of the Honor Society of Phi Kappa Phi.
          </p>
          <p className='mt-5'>
  <Link href='/citi-certifications'>
  <span className="link-icon">▶</span> CITI Certifications   
  </Link>
</p>
          <p className='mt-5'>
            Other Publications:
          </p>
          <ul>
            <li>
              <Link href={'https://www.ijcaonline.org/archives/volume185/number33/martinson-2023-ijca-923110.pdf'}>
              <div className='flex'> <AiOutlineLink  className="link-icon mt-1"> </AiOutlineLink><span className="text-gold">Game Hacking</span></div>
              </Link>
            </li>
            <li>
              <Link href={'https://www.ijcaonline.org/archives/volume185/number27/abukari-2023-ijca-923023.pdf'}>
               <div className='flex'> <AiOutlineLink  className="link-icon mt-1"> </AiOutlineLink><span className="text-gold">Camera Based Attacks</span></div>
              </Link>
            </li>
            <li>
              <Link href={'https://www.ajol.info/index.php/gjas/article/view/261457'}>
              <div className='flex'> <AiOutlineLink  className="link-icon mt-1"> </AiOutlineLink><span className="text-gold">Agric Research</span></div>
              </Link>
            </li>
          </ul>
          <p className='mt-5'>
            Panel Discussions:
          </p>
          <ul>
            <li>
              <Link href={'https://youtu.be/yxPg0jaJ3vs?si=dwj37qBNNNZDv-y3'}>
              <div className='flex'> <AiOutlineLink  className="link-icon mt-1"> </AiOutlineLink><span className="text-gold">AI in Society</span></div>
              </Link>
            </li>
            <li>
              <Link href={'https://www.youtube.com/watch?v=xZvjcnBgOQA&t=173s'}>
              <div className='flex'> <AiOutlineLink  className="link-icon mt-1"> </AiOutlineLink><span className="text-gold">AI in Workforce</span></div>
              </Link>
            </li>
            <li>
              <Link href={'https://www.ted.com/talks/francis_martinson_fostering_a_dream'}>
              <div className='flex'> <AiOutlineLink  className="link-icon mt-1"> </AiOutlineLink><span className="text-gold">TEDx Talk</span></div>
              </Link>
            </li>
          </ul>
      
          {/* <ul>
            <li>Social/Behavioral Research</li>
            <li>Human Responsible Conduct of Research</li>
            <li>Social and Behavioral Responsible Conduct of Research</li>
          </ul> */}
          <p className='mt-5'>
            Research Advisor:
          </p>
          <p>
            M. Zubair Malik, Ph.D. <br />
            Assistant Professor <br />
            Computer Science Dept, NDSU <br />
            Work Area: Software Systems
          </p>
          {/* <p>
            Personal Website:
            <br />
            <Link className='text-red' href={'www.francismartinson.com'}>www.francismartinson.com</Link>
          </p> */}
        </div>
        
      </nav>
    </>
  );
};

export default FrancisDetails;
