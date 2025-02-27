import dayjs from "dayjs";
import { scheduleFetchByDay } from "../services/schedule-fetch-by-day"

// const date_schedules = document.getElementById("date-schedule")

// date_schedules.onchange = async () => {     
//   await schedulesDay()
// }

// const date = date_schedules.value

// const dailySchedules = await scheduleFetchByDay({ date })

// console.log(dailySchedules)

export function countSchedulesByPeriod(dailySchedules) {
  console.log(dailySchedules)
  const counts = {
    morning: 0,
    afternoon: 0,
    evening: 0
  };

  dailySchedules.forEach(schedule => {
    const hour = Number(schedule.hour.split(":")[0]); // Obtém apenas a hora como número

    console.log(hour)

    if (hour >= 6 && hour < 12) {
      counts.morning++;
    } else if (hour >= 12 && hour < 18) {
      counts.afternoon++;
    } else if (hour >= 18 && hour < 24) {
      counts.evening++;
    }
  });

  return counts;
}
