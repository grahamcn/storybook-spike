import React, { ReactElement } from 'react';

import Alert from '../../alert/Alert';
import RequiredFieldIndicator from '../common/RequiredFieldIndicator';

interface Props extends React.ComponentProps<'input'> {
  label: string;
  hint?: string;
  error?: string;
}

export const TextInput = ({
  label,
  placeholder,
  type = 'text',
  name,
  defaultValue,
  required,
  error,
  onChange,
  disabled,
  pattern,
  hint,
}: Props): ReactElement => {
  const classNames = [
    'form-control',
    'text-input',
    type,
    'has-error' ? !!error : undefined,
  ]

  return (
    <div className={classNames.join(' ')}>
      <label htmlFor={name} className="label">
        <span className="label-text">
          {label}
        </span>

        {required && (
          <RequiredFieldIndicator />
        )}
      </label>

      <input
        className="input"
        placeholder={placeholder}
        type={type}
        id={name}
        name={name}
        pattern={pattern}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        aria-required={required}
      />

      {/* @todo both hints and errors can be extracted. */}
      {hint && (
        <Alert variant='info'>
          {hint}
        </Alert>
      )}

      {error && (
        <Alert variant='error'>
          {error}
        </Alert>
      )}
    </div>
  );
};
