// src/data/tariffCards.ts
export interface TariffFeature {
  text: string
  hasLineBreak?: boolean
}

export interface TariffCard {
  id: number
  title: string
  price: string
  period: string
  hasDiscount?: boolean
  discountText?: string
  features: TariffFeature[]
  buttonText: string
  buttonHasLineBreak?: boolean
  style: 'free' | 'premium' | 'other'
}

export const tariffCards: TariffCard[] = [
  {
    id: 1,
    title: 'БЕСПЛАТНЫЙ',
    price: '0₽',
    period: 'НА 24 ЧАСА',
    features: [
      { text: 'Скорость мониторинга 1 секунда' },
      { text: 'Мониторинг по выбранным\nфильтрам каждую секунду.', hasLineBreak: true },
      { text: 'Уведомления в Telegram' },
      { text: 'Сервис поддержки' },
    ],
    buttonText: 'Подключить\nБесплатно',
    buttonHasLineBreak: true,
    style: 'free',
  },
  {
    id: 2,
    title: '1 СЕКУНДА',
    price: '1390₽',
    period: '/месяц',
    hasDiscount: true,
    discountText: '-20%',
    features: [
      { text: 'Скорость мониторинга 1 секунда' },
      { text: 'Мониторинг по выбранным\nфильтрам каждую секунду.', hasLineBreak: true },
      { text: 'Уведомления в Telegram' },
      { text: 'Сервис поддержки' },
    ],
    buttonText: 'Подключить',
    style: 'premium',
  },
  {
    id: 3,
    title: 'ДРУГИЕ ТАРИФЫ',
    price: '',
    period: '',
    features: [
      { text: 'Выбери свою скорость,\nподходящую под твой рынок', hasLineBreak: true },
      { text: 'Скорость мониторинга от 0.1 сек\nдо часа', hasLineBreak: true },
      { text: 'Командное подключение' },
      { text: 'Покупка категорий' },
    ],
    buttonText: 'Посмотреть',
    style: 'other',
  },
]
