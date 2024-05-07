import axios from 'axios';


async function fetchData<url>(url: string): Promise<url> {
  try {
    const response = await axios.get<url>(url); // Вказуємо тип даних T для отриманих даних
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}