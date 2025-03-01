import { scheduleCancel  } from "../services/schedule-cancel.js"
import { schedulesDay } from "./schedules-load.js"

const shifts = document.querySelectorAll(".shift")

shifts.forEach((shift) => {
  shift.addEventListener("click", async (event) => {
    if(event.target.classList.contains("remove")){
      const item = event.target.closest(".hr-all-container")
      const { id } = item.dataset
      
      if (id) {
        const isConfirm = confirm(
          "tem certeza que deseja cancelar o agendamento?"
        )

        if(isConfirm) {
          await scheduleCancel({id})
          schedulesDay()
        }
      }
    }
  })
})