
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { confession } = req.body;
    const token = 'patuhWCTHWBMPBxh.293931b1ea1ca53985b623c51eba6babfdae817cd183178a79e0e6677950f70b';
    const baseId = 'appMp0eQ6wPjDZ9y3';
    const table = 'Confession';

    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${table}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Confession: confession
        }
      })
    });

    const data = await response.json();
    return res.status(200).json(data);
  }
  res.status(405).json({ message: 'Method Not Allowed' });
}
