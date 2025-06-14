import { SubscriptionCardProps } from '#da/components/cards/SubscriptionCardComponent/subscriptionCard.props';

export const subscriptionsFakes: SubscriptionCardProps[] = [
  {
    items: [
      'Budget tracking',
      'Bill reminders',
      'Credit score monitoring',
      'Customizable financial reports',
      'Team roles & permissions',
      'Real-time notifications'
    ],
    name: 'Starter',
    price: '$29',
    suffix: '/mo',
    to: '#'
  },
  {
    borderColor: 'var(--mui-palette-primary-main)',
    chipLabel: 'Recommended',
    items: [
      'Everything in Starter',
      'Track investments with ease',
      'Connect your favorite apps',
      'Smarter budgeting & forecasts',
      'Access anywhere, anytime',
      'Manage multiple accounts'
    ],
    name: 'Business',
    price: '$49',
    suffix: '/mo',
    to: '#'
  },
  {
    items: [
      'Includes all Business features',
      'Developer-friendly API',
      'Your brand, your style',
      'Personalized setup & support',
      'Data-driven decisions with pro analytics',
      '24/7 support with fast response times'
    ],
    name: 'Enterprise',
    price: '$99',
    suffix: '/mo',
    to: '#'
  }
];
