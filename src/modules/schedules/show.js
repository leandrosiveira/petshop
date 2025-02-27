import dayjs from "dayjs"

//Sessões dos turnos

const periodMorning = document.getElementById("morning")
const periodAfternoon = document.getElementById("afternoon")
const periodEvening = document.getElementById("evening")
const shift_container  = document.querySelectorAll(".shift-schedule-container")

export function schedulesShow({ dailySchedules }) {
  try {
    // limpa todos agendamentos por meio do container
    shift_container.forEach(shift => {
      shift.innerHTML = ""
    })
    // Renderiza os agendamentos por período.
    dailySchedules.forEach((schedule) => {
      const shift_schedule_container = document.createElement("div")
      shift_schedule_container.classList.add("shift-schedule-container")
      


      const div = document.createElement("div")
      div.classList.add("shift-schedule")

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



      div.append(time, name_pet, bar, name_tutor)
      shift_schedule_container.append(div, description, remover)

      const hour = Number(schedule.hour.split(":")[0])
      
      if(hour < 12) {
        periodMorning.appendChild(shift_schedule_container)
      } else if (hour >= 12 && hour < 18) {
        periodAfternoon.appendChild(shift_schedule_container)
      } else {
        periodEvening.appendChild(shift_schedule_container)
      }
  
    })
  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}