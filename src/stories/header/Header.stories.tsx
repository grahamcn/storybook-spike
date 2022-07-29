import React from 'react';

import { Header } from './Header';

export default {
  title: 'Atoms/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) =>
  <>
    <Header {...args} />
  </>


export const Default = Template.bind({});

Default.args = {
  title: 'Header',
  variant: 'h1',
};
