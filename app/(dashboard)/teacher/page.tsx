import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import EventCalendarContainer from "@/components/EventCalendarContainer";
import { getCurrentUser } from "@/lib/serverUtils";
import { SearchParams } from "@/types";

const TeacherPage = async ({ searchParams }: SearchParams) => {
  const { date } = await searchParams
  const { role, currentUserId } = await getCurrentUser()

  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendarContainer type="teacherId" id={currentUserId!} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendarContainer dateParam={date} />
        <Announcements role={role!} userId={currentUserId!} />
      </div>
    </div>
  );
};

export default TeacherPage;
