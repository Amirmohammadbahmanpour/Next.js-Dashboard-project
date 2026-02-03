import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        سلام امیرمحمد 👋
      </h1>

      <Card>
        <p className="text-gray-700">
          این صفحهٔ اصلی پروژهٔ Next.js شماست.
        </p>
      </Card>

      <Button>شروع کن 🚀</Button>
    </main>
  );
}
