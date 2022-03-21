import React from 'react';

export interface HeaderProps {
  imageUrl?: string;
  title?: string;
  fullWidthHeader?: boolean
}

export const Header: React.FC<HeaderProps> = ({
  imageUrl,
  title,
  fullWidthHeader = false,
}) => (
  fullWidthHeader
    ? <FullWidthHeader title={title} imageUrl={imageUrl} />
    : <PartialWidthHeader imageUrl={imageUrl} />
);

const PartialWidthHeader: React.FC<Pick<HeaderProps, 'imageUrl'>> = ({
  imageUrl,
}) => (
  <header className='my-12'>
    <div className='container mx-auto px-4'>
      <img className='w-full' src={imageUrl} />
    </div>
  </header>
);

const FullWidthHeader: React.FC<Pick<HeaderProps, 'imageUrl' | 'title'>> = ({
  imageUrl,
  title,
}) => (
  <header
    className='header-sm flex bg-cover bg-center justify-center items-center'
    style={{
      backgroundImage: !!imageUrl ? `url(${imageUrl})`: "",
    }}
  >
      {title && <h1 className='px-4 text-white text-center'>{title}</h1>}
  </header>
);

export default Header;