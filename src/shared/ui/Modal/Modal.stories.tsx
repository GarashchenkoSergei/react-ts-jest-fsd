import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpened: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam fugit illo praesentium provident quisquam tempore ullam?',
};

export const Dark = Template.bind({});
Primary.args = {
  isOpened: true,
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam fugit illo praesentium provident quisquam tempore ullam?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
