import React from 'react';

import { Alert } from './Alert';

export default {
  title: 'Atoms/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Error = Template.bind({});

Error.args = {
  variant: 'error',
  children: (
    <>
      Some error message
    </>
  ),
};


export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: (
    <>
      Some success message
    </>
  ),
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: (
    <>
      Some warning message
    </>
  ),
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  children: (
    <>
      Some information message
    </>
  ),
};
