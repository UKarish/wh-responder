
// Пример заглушки для Webhook обработчика
export default async function handler(req, res) {
  return res.status(200).json({ message: "Webhook работает!" });
}
