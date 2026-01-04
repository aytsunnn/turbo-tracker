// src/data/faqQuestions.ts
export interface FAQQuestion {
  id: number
  text: string
}

export const faqQuestions: FAQQuestion[] = [
  {
    id: 1,
    text: 'Как пользоваться сервисом?',
  },
  {
    id: 2,
    text: 'Что это за секунды в тарифах?',
  },
  {
    id: 3,
    text: 'Можно ли сделать так, чтобы уведомления приходили группе людей, а не одному?',
  },
  {
    id: 4,
    text: 'Как работать со стоп или целевыми словами?',
  },
  {
    id: 5,
    text: 'Сколько поисков я могу подключить и можно ли их менять?',
  },
]
