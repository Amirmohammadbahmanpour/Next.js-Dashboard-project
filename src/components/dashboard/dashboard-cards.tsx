type Props = {
    userCount: number;
    invoicesCount: number;
    invoicesTotal: number;
};

export default function DashboardCards({
    userCount,
    invoicesCount,
    invoicesTotal,
}: Props) {
    return (
        <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-gray-100 rounded">
                <h3>کاربران</h3>
                <p className="text-xl font-bold">{userCount}</p>
            </div>
            <div className="p-4 bg-gray-100 rounded">
                <h3>فاکتورها</h3>
                <p className="text-xl font-bold">{invoicesCount}</p>
            </div>
            <div className="p-4 bg-gray-100 rounded">
        	    <h3>مجموع ارزش</h3>
                <p className="text-xl font-bold">{invoicesTotal}</p>
            </div>
        </div>
    );
}
