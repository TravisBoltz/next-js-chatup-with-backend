import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col  flex-grow ">
      {children}
    </div>
  );
}
