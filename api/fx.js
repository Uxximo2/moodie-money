export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    const data = await response.json();
    res.status(200).json({ krw: data.rates?.KRW ?? 1350 });
  } catch (e) {
    res.status(200).json({ krw: 1350 });
  }
}
