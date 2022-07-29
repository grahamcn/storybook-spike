import React from 'react';

interface Props {
  title?: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Header = ({ title, variant }: Props): React.ReactElement => {
  const HeadingTag = variant;

  return (
    <div className="header">
      <HeadingTag className="heading">
        <span>
          { title }
        </span>
      </HeadingTag>
    </div>
  );
};
