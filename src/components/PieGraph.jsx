import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

const PieGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    let chartInstance = null;

    if (ctx) {
      chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [65, 20, 15], // Adjust the values as needed, total must add up to 100
                backgroundColor: [
                  'rgba(255, 99, 132, 0.8)',
                  'rgba(54, 162, 235, 0.8)',
                  'rgba(255, 206, 86, 0.8)',
                ],
            borderWidth: 1,
          }],
        },
        options: {
          cutout: '80%',
          plugins: {
            datalabels: {
              display: false, // Hide datalabels
            },
          },
          tooltips: {
            enabled: false, // Hide tooltips
          },
        },
        plugins: [{
          afterDraw: (chart) => {
            const ctx = chart.ctx;
            const canvasWidth = chart.width;
            const canvasHeight = chart.height;
            const fontSize = (canvasHeight / 200).toFixed(2);
            ctx.font = `${fontSize}em Arial`;
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'black'; // Change color as needed

            const text = '65% total new customers';
            const textX = Math.round((canvasWidth - ctx.measureText(text).width) / 2);
            const textY = canvasHeight / 2;

            ctx.fillText(text, textX, textY);
          },
        }],
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="flex-grow p-4 shadow-md rounded-md bg-white w-full md:w-64 md:mr-4 h-full">
      <div className="text-bolg font-bold mb-2">Customers</div>
      <div className="text-xs text-gray-400 font-semibold mb-2">Customers that buy product</div>
      <canvas ref={chartRef} width="200" height="200"></canvas>
    </div>
  );
};

export default PieGraph;
