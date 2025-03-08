import { scheduleFetchByDay } from "../services/schedule-fetch-by-day.js"
import { countSchedulesByPeriod } from "../schedules/count-schedule-by-period.js"
import { schedulesShow } from "../schedules/show.js"

const date_schedules = document.getElementById("date-schedule")

export async function schedulesDay() {
  // obtem a data do input
  const date = date_schedules.value
  
  // Busca no API os agendamento
  const dailySchedules = await scheduleFetchByDay({ date })  

  // Exibe os agendamentos
  schedulesShow({ dailySchedules })

}