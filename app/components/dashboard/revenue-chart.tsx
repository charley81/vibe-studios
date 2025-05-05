import { generateYAxis } from '@/app/lib/utils';
import { Calendar } from 'lucide-react';
import { Revenue } from '@/app/lib/definitions';

// TODO: This component is representational only.
// Change to For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default function RevenueChart({ revenue }: { revenue: Revenue[] }) {
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <h2>Recent Revenue</h2>

      <div>
        {yAxisLabels.map((label) => (
          <p key={label}>{label}</p>
        ))}
      </div>

      {revenue.map((month) => (
        <div key={month.month}>
          <div></div>
          <p>{month.month}</p>
        </div>
      ))}
      <div>
        <Calendar />
        <h3>Last 12 months</h3>
      </div>
    </div>
  );
}
