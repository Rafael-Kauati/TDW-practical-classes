'use client';

import Link from 'next/link';

export default function SideNav() {
  return (
    <nav className="flex h-full flex-col bg-gray-50 px-3 py-4 md:px-2">
      <Link
        href="/dashboard"
        className="mb-4 rounded-md bg-blue-600 p-4 text-center text-xl font-bold text-white"
      >
        Dashboard
      </Link>

      <div className="flex grow flex-col gap-2">
        <Link
          href="/dashboard"
          className="rounded-md p-3 text-gray-700 hover:bg-gray-200"
        >
          Home
        </Link>

        <Link
          href="/dashboard/customers"
          className="rounded-md p-3 text-gray-700 hover:bg-gray-200"
        >
          Customers
        </Link>

        <Link
          href="/dashboard/invoices"
          className="rounded-md p-3 text-gray-700 hover:bg-gray-200"
        >
          Invoices
        </Link>
      </div>
    </nav>
  );
}

