import dayjs from "dayjs";

const date_today = document.querySelectorAll('input[type="date"]')

const dateCurrence = dayjs(new Date()).format('YYYY-MM-DD')

date_today.forEach((input, index) => {
  input.value = dateCurrence
  if (index !== 0) {
    input.min = dateCurrence
  }
})
