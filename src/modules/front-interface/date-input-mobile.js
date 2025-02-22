import dayjs from "dayjs";

const date_today = document.querySelectorAll('input[type="date"]')


date_today.forEach(input => {
  const dateCurrence = dayjs().format('YYYY-MM-DD')
  input.value = dateCurrence
})
