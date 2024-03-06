import Footer from '@/components/footer';
import React from 'react';
import Image from 'next/image';

const certificatesData = [
  { name: '1. Human Subjects: Social/Behavioral Research Course', link1: 'https://www.citiprogram.org/verify/?ke943fb76-a479-4de9-aa7f-1cc96e0193d2-60265774', link2: 'https://www.citiprogram.org/verify/?w70ba867a-e77e-4671-8686-a7f3d1cc5be5-60265774' },
  { name: '2. Humanities Responsible Conduct of Research Course', link1: 'https://www.citiprogram.org/verify/?k1b777341-b096-44a1-8992-f467ac68e262-60265776', link2: 'https://www.citiprogram.org/verify/?w8503b02b-c172-4ece-810c-e5f2538bfb02-60265776' },
  { name: '3. Social and Behavioral Responsible Conduct of Research Course.', link1: 'https://www.citiprogram.org/verify/?ka37eb81d-5233-4cb0-bfc5-bad0b3f79db6-60265775', link2: 'https://www.citiprogram.org/verify/?wf8aa2398-078c-49f0-b168-70ab1ab7f1ad-60265775' },
  { name: '4. Conflict of Interest', link1: 'https://www.citiprogram.org/verify/?k0f65f013-2f76-42fc-acc5-17256998eab6-60266343', link2: 'https://www.citiprogram.org/verify/?wab1598bc-9e99-451b-a452-61e18ab24934-60266343' },
  { name: '5. Physical Science Responsible Conduct of Research Course.', link1: 'https://www.citiprogram.org/verify/?k8dd92ed6-3eba-49d8-9cd3-dc5c31a9de14-60266341', link2: 'https://www.citiprogram.org/verify/?wea6237f9-147f-409e-bf3c-272a41d0d7d8-60266341' },
];

const CertificatesPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-Lgrey">
        <div className="text-royalBlue text-center">

          <Image src="/citi-program-logo.svg" width={160} height={160} className="w-40 h-40 m-auto " alt="Citi Logo" />

          <h1 className="text-4xl font-bold text-royalBlue mb-8">CITI CERTIFICATES</h1>

          <section className="flex flex-wrap justify-center my-24">
            {certificatesData.map((certificate, index) => (
              <div key={index} className="m-4 p-6 border border-royalBlue rounded transform transition-transform hover:scale-105">
                <h3 className="text-lg font-semibold mb-2">{certificate.name}</h3>
                <a href={certificate.link1} target="_blank" rel="noopener noreferrer" className="text-royalBlue hover:text-gold">▶ Link to Certificate</a>
                <br />
                <a href={certificate.link2} target="_blank" rel="noopener noreferrer" className="text-royalBlue hover:text-gold block mt-2">▶ Alternative link to Certificate</a>
              </div>
            ))}
          </section>
        </div>
        <Footer />

      </main>

    </>
  );
};

export default CertificatesPage;
