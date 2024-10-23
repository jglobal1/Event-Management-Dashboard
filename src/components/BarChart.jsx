// Import necessary components from react-chartjs-2 and chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register the chart.js modules you need
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Data and configuration for the chart with short month names
  const labels = [
    'Jan', 'Feb', 'Mar', 'Apr', 
    'May', 'Jun', 'Jul', 'Aug', 
    'Sep', 'Oct', 'Nov', 'Dec'
  ];

  // Define your primary color
  const primaryColor = '#8576FF'; // Your primary color

  // Reshuffled data with a value for October
  const data = {
    labels: labels,
    datasets: [{
      label: 'Monthly Data', // This label will still be used for accessibility, but won't display in the legend
      data: [700, 970, 760, 400, 1000, 570, 840, 270, 830, 200, 960, 600], // Reshuffled data with values for all months
      backgroundColor: primaryColor,
      borderColor: primaryColor,
      borderWidth: 1,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to stretch and fill the container
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false, // Hide the title
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // Define specific tick values
          callback: function(value) {
            if (value === 0 || value === 200 || value === 400 || value === 600 || value === 800 || value === 1000) {
              return value; // Show only specific ticks
            }
            return ''; // Return empty string for other values
          },
          stepSize: 200, // Optional: To control the step size between ticks
        },
      },
      x: {
        grid: {
          display: false, // Hide grid lines if desired
        },
        ticks: {
          autoSkip: false, // Show all ticks (months)
          minRotation: 0,
          maxRotation: 0,
        },
        categoryPercentage: 0.8, // Reduce space between categories
        barPercentage: 0.9, // Increase bar thickness
      },
    },
  };

  return (
    <div className="w-full h-full" style={{ height: '300px' }}> {/* Set height as needed */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
