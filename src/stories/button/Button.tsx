import React from 'react';

type Variant = 'primary' | 'secondary' | 'tertiary';
type ButtonType = 'button' | 'submit' | 'reset';

interface Props {
  variant?: Variant;
  size?: 'small' | 'default';
  label: string;
  type?: ButtonType;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = undefined,
  label,
  ...props
}: Props) => (
  <>
    <button
      type="button"
      className={['button', variant, size].join(' ')}
      {...props}
    >
      {label}
    </button>
  </>
);
