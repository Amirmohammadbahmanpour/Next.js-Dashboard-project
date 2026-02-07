import { getDashboardCounts, getLatestInvoices, getInvoicesTotal } from "@/lib/db";
import DashboardCards from "@/components/dashboard/dashboard-cards";
import LatestInvoices from "@/components/dashboard/latest-invoices";

export default async function DashboardPage() {
  const { usersCount, invoicesCount } = await getDashboardCounts();
  const latestInvoices = await getLatestInvoices();
  const invoicesTotal = await getInvoicesTotal();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">داشبورد</h1>

      <DashboardCards
        userCount={usersCount}
        invoicesCount={invoicesCount}
        invoicesTotal={invoicesTotal}
      />

      <LatestInvoices invoices={latestInvoices} />
    </div>
  );
}
