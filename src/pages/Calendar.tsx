
import { Sidebar } from "@/components/layout/Sidebar";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
            <p className="text-gray-500 mt-1">Manage schedules and events</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
            <Card className="p-4">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md"
              />
            </Card>
            
            <Card className="p-6">
              <h2 className="text-lg font-semibold mb-4">
                Events for {date?.toLocaleDateString()}
              </h2>
              <div className="text-gray-500">
                No events scheduled for this day
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calendar;
