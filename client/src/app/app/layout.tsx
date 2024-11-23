import { FC, PropsWithChildren } from 'react';

import { Navigation } from '@/components/Navigation/Navigation';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="">
      <Navigation />
      {children}
    </div>
  );
};

export default RootLayout;
