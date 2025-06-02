export default async function handler(req, res) {
  try {
    const data = req.body;

    const fields = data?.data?.fields || [];
    const getAnswer = (index) => {
      const field = fields[index];
      const optionId = field?.value?.[0];
      const matched = field?.options?.find(opt => opt.id === optionId);
      return matched ? matched.text : 'Ответ не указан';
    };

    const responseText = `
Анкета клиента:
1. Цель переезда: ${getAnswer(0)}
2. Источник дохода: ${getAnswer(1)}
3. Уровень дохода или сбережений: ${getAnswer(2)}
4. Где сейчас находится клиент: ${getAnswer(3)}
5. Сколько человек планирует переезд: ${getAnswer(4)}
6. Срок переезда: ${getAnswer(5)}
7. Нужна ли помощь: ${getAnswer(6)}
    `;

    console.log(responseText);

    return res.status(200).json({ message: responseText });
  } catch (error) {
    console.error('Ошибка обработки:', error);
    return res.status(500).json({ error: 'Ошибка обработки данных' });
  }
}
moved index.js into /api folder
