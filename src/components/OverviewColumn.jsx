// import React, { useEffect, useRef } from 'react';
// import { Chart } from 'chart.js/auto';
// import 'chart.js/auto';

// const OverviewColumn = () => {
//   const barGraphRef = useRef(null);

//   useEffect(() => {
//     const barGraphContext = barGraphRef.current?.getContext('2d');
//     let barChartInstance = null;

//     if (barGraphContext) {
//       if (barChartInstance) {
//         barChartInstance.destroy(); // Destroy previous instance if exists
//       }

//       barChartInstance = new Chart(barGraphContext, {
//         type: 'bar',
//         data: {
//           labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//           datasets: [{
//             label: 'Monthly Earnings',
//             data: [200, 100, 300, 500, 200, 600, 100, 300, 500, 400, 100, 500],
//             backgroundColor: 'rgba(169, 169, 169, 0.8)',
//             borderColor: 'rgba(169, 169, 169, 1)',
//             borderWidth: 1,
//             borderRadius: 5, // Very subtle border radius for rectangular shape
//             hoverBackgroundColor: '#001f3f', // Slate-900 color
//             hoverBorderColor: '#001f3f', // Slate-900 color
//           }],
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false, // Ensure the chart doesn't try to maintain aspect ratio
//           plugins: {
//             legend: {
//               display: false,
//             },
//           },
//           scales: {
//             x: {
//               display: false, // Hide x-axis
//             },
//             y: {
//               display: false, // Hide y-axis
//             },
//           },
//           tooltips: {
//             callbacks: {
//               title: (tooltipItem) => '',
//               label: (context) => context.dataset.label,
//             },
//           },
//         },
//       });
//     }

//     // Cleanup function to destroy instances when the component unmounts
//     return () => {
//       if (barChartInstance) {
//         barChartInstance.destroy();
//       }
//     };
//   }, []);

//   return (
    
//     <div style={{ width: '800px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>


//         <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px', fontSize: '20px', fontWeight: 'bold' }}>
//             <div>Overview</div>
//             <div>
//                 <button type="button" className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
//                     Quaterly
//                 <svg className="-mr-1 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                     <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//                 </svg>
//                 </button>
//             </div>
//         </div>

//         <div className="text-xs text-left text-gray-400">
//             Monthly Earning
//         </div>


//       <div style={{ height: '200px', marginBottom: '10px' }}>
//         <canvas ref={barGraphRef} width="800" height="200"></canvas>
//       </div>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
//         {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
//           <div key={index} style={{ position: 'relative', flex: '1', marginRight: '5px' }}>
//             {month}
//           </div>
//         ))}
//       </div>
      
//     </div>
//   );
// };

// export default OverviewColumn;
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';

const OverviewColumn = () => {
  const barGraphRef = useRef(null);

  useEffect(() => {
    const barGraphContext = barGraphRef.current?.getContext('2d');
    let barChartInstance = null;

    if (barGraphContext) {
      if (barChartInstance) {
        barChartInstance.destroy();
      }

      barChartInstance = new Chart(barGraphContext, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Monthly Earnings',
            data: [200, 100, 300, 500, 200, 600, 100, 300, 500, 400, 100, 500],
            backgroundColor: 'rgba(169, 169, 169, 0.8)',
            borderColor: 'rgba(169, 169, 169, 1)',
            borderWidth: 1,
            borderRadius: 5,
            hoverBackgroundColor: '#001f3f',
            hoverBorderColor: '#001f3f',
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
            },
          },
          tooltips: {
            callbacks: {
              title: (tooltipItem) => '',
              label: (context) => context.dataset.label,
            },
          },
        },
      });
    }

    return () => {
      if (barChartInstance) {
        barChartInstance.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '10px', fontSize: '20px', fontWeight: 'bold' }}>
        <div>Overview</div>
        <div>
          <button type="button" className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            Quaterly
            <svg className="-mr-1 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className="text-xs text-left text-gray-400">
        Monthly Earning
      </div>

      <div style={{ height: '200px', marginBottom: '10px' }}>
        <canvas ref={barGraphRef} width="800" height="200"></canvas>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
          <div key={index} style={{ position: 'relative', flex: '1', marginRight: '5px' }}>
            {month}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewColumn;
