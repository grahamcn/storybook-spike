import React, { ChangeEvent } from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface Props {
  options: RadioOption[];
  label: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  value: string;
}

export const RadioGroupInput = ({
  options,
  label,
  name,
  onChange,
  error,
  value,
}: Props): React.ReactElement => {
  const classNames = [
    'form-control',
    'radio-group-input',
    'has-error' ? error : undefined,
  ]

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  }

  return (
    <fieldset className={classNames.join(' ')}>
      <legend className="label">
        {label}
      </legend>

      {error && (
        <div className="form-control-message error">
          {error}
        </div>
      )}

      <div className="options">
        {options.map((option: RadioOption) => (
          <div className="form-control radio">
            <label
              htmlFor={option.value}
              key={option.value}
              className="label"
            >
              <input
                type="radio"
                id={option.value}
                name={name}
                value={option.value}
                onChange={handleChange}
              />

              <span>
                {option.label}
              </span>
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default RadioGroupInput;
