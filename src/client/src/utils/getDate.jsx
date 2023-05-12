export const getDate = (
  full_date = true,
  full_d_m_y = false,
  day = false,
  month = false,
  year = false,
  hour = false,
  min = false,
  sec = false
) => {
  const newDate = new Date();
  const new_day = newDate.getDay();
  const new_month = newDate.getMonth();
  const new_year = newDate.getFullYear();
  const new_hour = newDate.getHours();
  const new_minutes = newDate.getMinutes();
  const new_sec = newDate.getSeconds();

  if (full_date)
    return `${new_day}/${new_month}/${new_year}-${new_hour}:${new_minutes}:${new_sec}`;
  else if (full_d_m_y) return `${new_day}/${new_month}/${new_year}`;
  else if (day) return new_day;
  else if (month) return new_month;
  else if (year) return new_year;
  else if (hour) return new_hour;
  else if (min) return new_minutes;
  else if (sec) return new_sec;
};
