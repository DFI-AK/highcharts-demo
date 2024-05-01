'use client';
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useChart } from '../redux/store/chartStore';
import Accessibility from "highcharts/modules/accessibility";
import Exporting from "highcharts/modules/exporting";

if (typeof Highcharts === "object") {
    Accessibility(Highcharts);
    Exporting(Highcharts);
}

const ChartComponent = () => {
    const cpu = useChart(state => state.chartSlice.cpu);
    const memory = useChart(state => state.chartSlice.memory);

    const options: Highcharts.Options = {
        chart: {
            height: "750px",
        },
        title: {
            text: 'CPU Chart',
            align: "left",
        },
        series: [{
            name: "CPU Usage",
            type: "areaspline",
            data: cpu.map(point => [point.timstamp, point.value]),
            id: "cpu",
            linkedTo: "memory"
        },
        {
            name: "Memory Usage",
            type: "areaspline",
            data: memory.map(point => [point.timstamp, point.value]),
            linkedTo: "cpu",
            id: "memory"
        }],
        xAxis: {
            type: "datetime",
            title: {
                text: "Timestamp"
            }
        },
        yAxis: {
            title: {
                text: "Percentage (%)"
            },
            min: 0,
            max: 100
        },
        navigation: {
            buttonOptions: {
                enabled: true
            }
        }
    };

    return <>
        <div className="grid grid-cols-2 gap-3">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>

    </>;
};
export default ChartComponent;