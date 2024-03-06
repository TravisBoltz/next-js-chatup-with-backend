import { ReactNode } from 'react';

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col bg-Lgrey md:ml-60 min-h-screen">

      {children}

    </div>
  );
}
