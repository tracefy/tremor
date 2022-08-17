import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card, TrmAreaChart } from 'components';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ChartElements/TrmAreaChart',
    component: TrmAreaChart,
} as ComponentMeta<typeof TrmAreaChart>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof TrmAreaChart> = (args) => (
    <Card>
        <TrmAreaChart { ...args } height={600} />
    </Card>
);
  

const data = [
    {
        month: 'Jan 21\'',
        Sales: 4000,
    },
    {
        month: 'Feb 21\'',
        Sales: 3000,
    },
    {
        month: 'Mar 21\'',
        Sales: 2000,
    },
    {
        month: 'Apr 21\'',
        Sales: 2780,
    },
    {
        month: 'May 21',
        Sales: 1890,
    },
    {
        month: 'Jun 21\'',
        Sales: 2390,
    },
    {
        month: 'Jul 21\'',
        Sales: 3490,
    },
];

const dataFormater = (number: number) => {
    return Intl.NumberFormat('us').format(number).toString() + ' $';
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    data: data,
    categories: [ 'Sales' ],
    valueFormater: dataFormater,
    dataKey: 'month',
};
