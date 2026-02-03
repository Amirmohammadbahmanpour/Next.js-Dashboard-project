// app/page.tsx
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link";



export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        سلام امیرمحمد 👋
      </h1>

      <Card>
        <p className="text-gray-700">
          این صفحهٔ اصلی پروژهٔ Next.js شماست. می‌تونی از اینجا شروع به ساخت کامپوننت‌ها و بخش‌های مختلف سایتت کنی.
        </p>
      </Card>

      <Button>شروع کن 🚀</Button>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  )
}
