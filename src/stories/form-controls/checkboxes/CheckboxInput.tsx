import React from 'react';

interface Props {
  check: boolean;
  name: string;
  onChange: (newValue: boolean) => void;
  children: React.ReactNode;
  error?: string
}

export const Checkbox = ({
  check,
  name,
  children,
  onChange,
  error,
}: Props): React.ReactElement => {
  const classNames = [
    'form-control',
    'checkbox',
    'has-error' ? error : undefined,
  ]

  // @todo refactor inline with radio group for multiple options
  // @todo think on why single checkboxes are used. "I agree..."?
  return (
    <fieldset className={classNames.join(' ')}>
      <label htmlFor={name} className="label">
        <input
          onChange={(e) => onChange(e.target.checked)}
          checked={check}
          aria-checked={check}
          type="checkbox"
          id={name}
          name={name}
        />

        <span className="label-content">
          {children}
        </span>

      </label>

      {error && (
        <div className="form-field-error">
          {error}
        </div>
      )}
    </fieldset>
  );
};

export default Checkbox;
