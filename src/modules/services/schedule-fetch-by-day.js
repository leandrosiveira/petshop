import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }) {
  try {

    // response é um padrão para receber todo o servidor schedules ainda em json, e data é o padrão receber o conteudo de response canvertido de json para padrão normal java script.
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    const dailySchedules = data.filter((schedules) =>
    dayjs(date).isSame(schedules.date, "date"))

    return dailySchedules 
  } catch (error) {
    console.log(error);
    alert("Não foi possivel buscar os agendamentos do dia selecionado.")
  }
}