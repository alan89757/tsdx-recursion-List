import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RecursionLevelList } from '../src';

// const meta: Meta = {
//   title: 'tree',
//   component: RecursionLevelList,
//   argTypes: {
//     children: {
//       control: {
//         type: 'text',
//       },
//     },
//   },
//   parameters: {
//     controls: { expanded: true },
//   },
// };

// export default meta;

const Template: Story<any> = args => <RecursionLevelList list={[]} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

// Default.args = {};
