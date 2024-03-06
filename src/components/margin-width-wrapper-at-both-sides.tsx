import { ReactNode } from 'react';

export default function MarginWidthWrapperAtBothSides({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <section className='bg-Lgrey'>
        <div className="flex flex-col lg:ml-40 lg:mr-40 bg-Lgrey sm:border-zinc-700 md:ml-0 md:mr-0">

          {children}

        </div>
      </section>
    </>
  );
}
