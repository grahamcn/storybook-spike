import React, { ReactElement } from 'react';

const RequiredFieldIndicator = (): ReactElement => (
  <span className="required-field-indicator">
    <abbr title="required">
      *
    </abbr>
  </span>
);

export default RequiredFieldIndicator;
