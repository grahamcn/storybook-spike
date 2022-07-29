import React, { ReactElement } from 'react';

import RequiredFieldIndicator from '../required-field-indicator/RequiredFieldIndicator';

const RequiredFieldsMessage = (): ReactElement => (
  <div className="required-field-message">
    Required fields are followed by
    <RequiredFieldIndicator />
    .
  </div>
);

export default RequiredFieldsMessage;
