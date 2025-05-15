
export default async function handler(req, res) {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = 'appMp0eQ6wPjDZ9y3';
  const table = 'Confessions';

  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${table}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
