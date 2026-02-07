type Invoice = {
    id: number;
    amount: number;
    created_at: string;
  };
  
  type Props = {
    invoices: Invoice[];
  };
  
  export default function LatestInvoices({ invoices }: Props) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">آخرین ۵ فاکتور</h2>
  
        <ul className="bg-gray-100 p-4 rounded space-y-2">
          {invoices.length === 0 ? (
            <p>هیچ فاکتوری یافت نشد</p>
          ) : (
            invoices.map((invoice) => (
              <li key={invoice.id}>
                فاکتور #{invoice.id} — مبلغ: {invoice.amount} — تاریخ:{" "}
                {new Date(invoice.created_at).toLocaleDateString("fa-IR")}
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
   