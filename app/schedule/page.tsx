"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SchedulePage() {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Scheduled for ${date} at ${time}`);
    router.push("/thank-you"); // Redirect after scheduling
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="p-6 max-w-md w-full shadow-lg rounded-lg bg-white">
        <h1 className="text-2xl font-semibold text-center mb-4 text-[#a47c38]">Schedule a Call</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="block text-sm font-medium">Select Date</Label>
            <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div>
            <Label className="block text-sm font-medium">Select Time</Label>
            <Input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
          </div>
          <Button type="submit" className="w-full">Confirm Schedule</Button>
        </form>
      </Card>
    </div>
  );
}
