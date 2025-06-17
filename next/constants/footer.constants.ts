import { LabeledListComponentProps } from '#da/components/lists/LabeledListComponent/labeledList.props';
import { INTERNAL_ROUTES } from '#da/constants/routing.constants';

export const FOOTER_NAVIGATION_BLOCKS: LabeledListComponentProps[] = [
  {
    items: [
      {
        name: 'Home',
        to: INTERNAL_ROUTES.HOME
      },
      {
        name: 'FAQ',
        to: INTERNAL_ROUTES.FAQ
      }
    ],
    title: 'common.pages'
  },
  {
    items: [
      {
        isExternal: true,
        name: 'Facebook',
        to: '#'
      },
      {
        isExternal: true,
        name: 'Instagram',
        to: '#'
      },
      {
        isExternal: true,
        name: 'Dribbble',
        to: '#'
      },
      {
        isExternal: true,
        name: 'LinkedIn',
        to: '#'
      }
    ],
    title: 'common.social_media'
  }
];
