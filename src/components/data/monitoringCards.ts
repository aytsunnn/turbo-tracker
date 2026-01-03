// src/data/monitoringCards.ts
export interface CardData {
  id: number
  icon: string
  title: string
  description: string[]
}

export const monitoringCards: CardData[] = [
  {
    id: 1,
    icon: '/images/filter.svg',
    title: 'Гибкие фильтры',
    description: [
      'Устанавливай фильтры под',
      'любой свой запрос и получай',
      'только релевантные результаты',
    ],
  },
  {
    id: 2,
    icon: '/images/basket.svg',
    title: 'Умное исключение',
    description: ['Исключай бесполезные', 'объявления с помощью', 'настраиваемых стоп-слов'],
  },
  {
    id: 3,
    icon: '/images/star.svg',
    title: 'Только новое',
    description: ['Ищи только новые', 'объявления, без повторов и', 'поднятых за деньги'],
  },
  {
    id: 4,
    icon: '/images/block.svg',
    title: 'Блок продавцов',
    description: ['Исключи нежелательных', 'продавцов из результатов', 'поиска'],
  },
  {
    id: 5,
    icon: '/images/description.svg',
    title: 'Детальное описание',
    description: ['Получай подробное описание', 'объявлений для быстрого', 'принятия решений'],
  },
  {
    id: 6,
    icon: '/images/team.svg',
    title: 'Командный доступ',
    description: ['Получай объявления вместе', 'с коллегами в общем чате'],
  },
]
