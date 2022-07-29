import React from 'react';

interface Props {
  variant: 'info' | 'warning' | 'success' | 'error'
  children: React.ReactNode;
}

export const Alert = ({ variant, children }: Props) => {
  const classNames = [
    'alert',
    'box', // we draw on our abstract class of box, as it has padding.
    variant,
  ]
  return (
    <div className={classNames.join(' ')} role="alert">
      {children}
    </div>
  )
}

export default Alert;
