import { schedulesDay } from "../schedules/schedules-load"

const date_schedules = document.getElementById("date-schedule")

date_schedules.onchange = () => schedulesDay()