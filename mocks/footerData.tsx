import {
  PhoneIcon,
  FacebookIcon,
  HelpCircleIcon,
  MessageCircleQuestionIcon,
} from 'lucide-react';

export const categories = [
  {
    key: 'howToBuy',
    subcategories: [
      {
        key: 'paymentMethods',
        link: '/',
      },
      {
        key: 'orderPickup',
        link: '/',
      },
      {
        key: 'purchaseStatus',
        link: '/',
      },
      {
        key: 'trackOrders',
        link: '/',
      },
      {
        key: 'returns',
        link: '/',
      },
    ],
  },
  {
    key: 'help',
    subcategories: [
      {
        key: 'helpCenter',
        link: '/',
      },
      {
        key: 'securityFraud',
        link: '/',
      },
      {
        key: 'feedback',
        link: '/',
      },
      {
        key: 'contact',
        link: '/',
      },
    ],
  },
  {
    key: 'services',
    subcategories: [
      {
        key: 'giftCards',
        link: '/',
      },
      {
        key: 'storeLocator',
        link: '/',
      },
      {
        key: 'clickCollect',
        link: '/',
      },
      {
        key: 'sameDayDelivery',
        link: '/',
      },
      {
        key: 'shippingDelivery',
        link: '/',
      },
      {
        key: 'couponsDiscounts',
        link: '/',
      },
      {
        key: 'newsletter',
        link: '/',
      },
    ],
  },
  {
    key: 'about',
    subcategories: [
      {
        key: 'aboutUs',
        link: '/',
      },
      {
        key: 'jobs',
        link: '/',
      },
      {
        key: 'pressCenter',
        link: '/',
      },
      {
        key: 'affiliateProgram',
        link: '/',
      },
      {
        key: 'suppliers',
        link: '/',
      },
    ],
  },
];
export const socialMedia = [
  {
    label: 'Facebook',
    link: '/',
    icon: <FacebookIcon className="h-5 w-5" />,
  },
  {
    label: 'Twitter',
    link: '/',
    icon: <FacebookIcon className="h-5 w-5" />,
  },
  {
    label: 'Instagram',
    link: '/',
    icon: <FacebookIcon className="h-5 w-5" />,
  },
  {
    label: 'Pinterest',
    link: '/',
    icon: <FacebookIcon className="h-5 w-5" />,
  },
  {
    label: 'Youtube',
    link: '/',
    icon: <FacebookIcon className="h-5 w-5" />,
  },
];
export const contactOptions = [
  {
    key: 'helpCenter',
    link: '/',
    details: ['description'],
    icon: <HelpCircleIcon className="h-10 w-10" />,
  },
  {
    key: 'liveChat',
    link: '/',
    details: ['openingHours-1', 'openingHours-2'],
    icon: <MessageCircleQuestionIcon className="h-10 w-10" />,
  },
  {
    key: 'phone',
    link: '/',
    details: ['openingHours-1', 'openingHours-2'],
    icon: <PhoneIcon className="h-10 w-10" />,
  },
];
export const bottomLinks = [
  {
    key: 'terms',
    link: '/',
  },
  {
    key: 'privacyPolicy',
    link: '/',
  },
];
export const companyName = `© ${new Date().getFullYear()} Vue Storefront`;
