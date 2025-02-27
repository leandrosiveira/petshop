import dayjs from "dayjs"
import { countSchedulesByPeriod } from  "../schedules/count-schedule-by-period"

//Sessões dos turnos

const periodMorning = document.getElementById("morning")
const periodAfternoon = document.getElementById("afternoon")
const periodEvening = document.getElementById("evening")



export function schedulesShow({ dailySchedules }) {
  try {

    const schedulesCounts = countSchedulesByPeriod(dailySchedules)
    
    const div_hr_all_container  = document.querySelectorAll(".hr-all-container")

    // limpa todos agendamentos por meio do container
    div_hr_all_container.forEach(shift => {
      shift.innerHTML = ""
    })

    
    const counts = {
      morning: 1,
      afternoon: 1,
      evening: 1
    };

    // Renderiza os agendamentos por período.
    
    dailySchedules.forEach((schedule) => {
      const div_hr_all_container = document.createElement("div")
      div_hr_all_container.classList.add("hr-all-container")
      
      const shift_schedule_container = document.createElement("div")
      shift_schedule_container.classList.add("shift-schedule-container")
      


      const shift_schedule = document.createElement("div")
      shift_schedule.classList.add("shift-schedule")

      const time = document.createElement("span")
      time.textContent = schedule.hour

      const name_pet = document.createElement("h3")
      name_pet.textContent = schedule.namePet
      
      const bar = document.createElement("h3")
      bar.textContent = "/"

      const name_tutor = document.createElement("h3")
      name_tutor.textContent = schedule.nameTutor


      const description = document.createElement("h3")
      description.textContent = schedule.description

      const remover = document.createElement("h3")
      remover.classList.add("remove")
      remover.textContent = "Remover Agendamento"



      shift_schedule.append(time, name_pet, bar, name_tutor)

      shift_schedule_container.append(shift_schedule, description, remover)

      div_hr_all_container.append(shift_schedule_container)

      const hour = Number(schedule.hour.split(":")[0])

      // Condicional para "manhã"
      if (hour < 12) {
        periodMorning.appendChild(div_hr_all_container);
        if (schedulesCounts.morning > 1 && counts.morning < schedulesCounts.morning) {
          counts.morning++;
          const hr = document.createElement("hr");
          hr.classList.add("separator");
          div_hr_all_container.appendChild(hr);
        }
      } 
      // Condicional para "tarde"
      else if (hour >= 12 && hour < 18) {
        periodAfternoon.appendChild(div_hr_all_container);
        if (schedulesCounts.afternoon > 1 && counts.afternoon < schedulesCounts.afternoon) {
          counts.afternoon++;
          const hr = document.createElement("hr");
          hr.classList.add("separator");
          div_hr_all_container.appendChild(hr);
        }
      } 
      // Condicional para "noite"
      else if (hour >= 18) {
        periodEvening.appendChild(div_hr_all_container);
        if (schedulesCounts.evening > 1 && counts.evening < schedulesCounts.evening) {
          counts.evening++;
          const hr = document.createElement("hr");
          hr.classList.add("separator");
          div_hr_all_container.appendChild(hr);
        }
      }
    })
  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}