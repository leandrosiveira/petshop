import { scheduleNew } from"../../modules/services/schedule-new.js"

const form = document.querySelector('form')
const name_tutor = document.getElementById("name-tutor")
const name_pet = document.getElementById("name-pet")
const phoneInput = document.getElementById('tel');
const descripton_area = document.getElementById("description")
const date_to_schedule = document.getElementById("date-to-schedule")
const hour_to_schedule = document.getElementById("hour")

form.onsubmit = async (event) => {
  event.preventDefault()
  
  try {
    const id = new Date().getTime()
    const nameTutor = name_tutor.value.trim()
    const namePet = name_pet.value.trim()
    const tel = phoneInput.value.trim()
    const description = descripton_area.value.trim()
    const date = date_to_schedule.value.trim()
    const hour = hour_to_schedule.value.trim().replace("h", ":00")
  
    if (!nameTutor) {
      return alert("Preencha o nome do tutor.")
    }
    if (!namePet) {
      return alert("Preencha o nome do pet.")
    }
    if (!tel) {
      return alert("Preencha o número de telefone.")
    }
    if (!description) {
      return alert("Preencha a descrição do serviço.")
    }

    await scheduleNew({id, nameTutor, namePet, tel, description, date, hour})

    location.reload()
    
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}