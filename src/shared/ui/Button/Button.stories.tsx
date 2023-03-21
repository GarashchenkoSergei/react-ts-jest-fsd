import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Button',
  theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Button',
  theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: 'Button',
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareM = Template.bind({});
SquareM.args = {
  children: '<',
  square: true,
  size: ButtonSize.M,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareL = Template.bind({});
SquareL.args = {
  children: '<',
  square: true,
  size: ButtonSize.L,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareXL = Template.bind({});
SquareXL.args = {
  children: '<',
  square: true,
  size: ButtonSize.XL,
  theme: ButtonTheme.BACKGROUND_INVERTED,
};
