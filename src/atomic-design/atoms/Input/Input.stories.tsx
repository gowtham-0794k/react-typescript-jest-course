import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/react';
import Input from './Input';

export default {
  component: Input,
  title: 'Atoms/Input',
} as Meta;

interface Props {
  onChangeEvent: (data?: any) => void;
  placeHolder: string;
}

//👇 We create a “template” of how args map to rendering
const Template: Story<Props> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  onChangeEvent: action('changed'),
  placeHolder: 'Input data !',
};
