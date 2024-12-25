import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PortfolioChart = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.time),
    datasets: [
      {
        label: 'Portfolio Value',
        data: data.map((entry) => entry.value),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default PortfolioChart;
