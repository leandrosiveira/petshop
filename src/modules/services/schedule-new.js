import { apiConfig } from "./api-config.js"

export async function scheduleNew({id, nameTutor, namePet, tel, description, date, hour}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id, nameTutor, namePet, tel, description, date, hour})
    })

    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possível agendar. Tente novamente mais tarde.")
  }
}