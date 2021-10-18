import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import Button from './Button';

export default {
  component: Button,
  title: 'Atoms/Button',
} as Meta;

interface ButtonProps {
  label: String;
  className: any;
  onClick: () => void;
}

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Save',
  className: '',
  onClick: action('clicked'),
};
