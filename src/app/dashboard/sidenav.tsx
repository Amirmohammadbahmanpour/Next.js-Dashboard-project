'use client'; // فراموش نکن، چون usePathname فقط در کامپوننت‌های Client قابل استفاده است
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname(); // مسیر فعلی URL

  return (
    <nav className="w-64 h-screen bg-gray-100 p-4">
      <ul className="space-y-2">
        <li>
          <Link
            href="/dashboard"
            className={`block p-2 rounded hover:bg-gray-200 ${
              pathname === "/dashboard" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/customers"
            className={`block p-2 rounded hover:bg-gray-200 ${
              pathname === "/dashboard/customers" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Customers
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/dashboard"
            className={`block p-2 rounded hover:bg-gray-200 ${
              pathname === "/dashboard/dashboard" ? "bg-blue-500 text-white" : ""
            }`}
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}
