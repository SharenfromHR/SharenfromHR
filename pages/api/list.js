
export default async function handler(req, res) {
  const token = 'patuhWCTHWBMPBxh.293931b1ea1ca53985b623c51eba6babfdae817cd183178a79e0e6677950f70b';
  const baseId = 'appMp0eQ6wPjDZ9y3';
  const table = 'Confession';

  const response = await fetch(`https://api.airtable.com/v0/${baseId}/${table}?sort[0][field]=Created&sort[0][direction]=desc`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
