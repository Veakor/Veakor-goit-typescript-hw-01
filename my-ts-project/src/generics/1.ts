import axios from 'axios';


async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url); // Вказуємо тип даних T для отриманих даних
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}