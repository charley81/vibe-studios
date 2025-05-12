import { generateYAxis } from '@/app/lib/utils';
import { Calendar } from 'lucide-react';
import { fetchRevenue } from '@/app/lib/data';

// TODO: This component is representational only.
// Change to For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function RevenueChart() {
  const revenue = await fetchRevenue();
  const chartHeight = 350;

  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      <h2 className="mb-4 text-xl md:text-2xl">Recent Revenue</h2>

      <div className="bg-slate-100 rounded-xl p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-slate-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>
          {revenue.map((month) => (
            <div key={month.month} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-violet-500"
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`
                }}
              ></div>
              <p className="-rotate-90 text-sm text-slate-400 sm:rotate-0">
                {month.month}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <Calendar className="h-5 w-5 text-slate-500" />
          <h3 className="ml-2 text-sm text-slate-500">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
