'use client';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import Accessibility from "highcharts/modules/accessibility";
import { useChart } from '../redux/store/chartStore';

Accessibility(Highcharts);

const StockCharts = () => {

    const cpu = useChart(state => state.chartSlice.cpu);
    const memory = useChart(state => state.chartSlice.memory);

    const options: Highcharts.Options = {
        chart: {
            type: "columnrange"
        },
        title: {
            text: 'Stock Chart Example'
        },
        series: [
            {
                name: "CPU",
                data: [[1, 10], [2, 15], [3, 12], [4, 18], [5, 16], [6, 20]],
                type: "line"
            }
        ],
        navigator: {
            enabled: true
        },
        scrollbar: {
            enabled: true
        },
        rangeSelector: {
            enabled: true
        }
    };

    return <>
        <HighchartsReact highcharts={Highcharts} options={options} />;
    </>;
};

export default StockCharts;