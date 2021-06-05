import { ReactComponent as DiscoveryIcon } from '../icons/discovery.svg';
import { ReactComponent as RestaurantIcon } from '../icons/restaurant.svg';
import { ReactComponent as TrainIcon } from '../icons/train.svg';

export const menuTitles = {
  training: 'Training',
  discover: 'Discover',
  diet: 'Diet',
};

export const menuUrls = {
  training: '/',
  discover: '/discover',
  diet: '/diet',
};

export const mainMenuStructure = [
  {
    url: menuUrls.training,
    title: menuTitles.training,
    icon: TrainIcon,
  },
  {
    url: menuUrls.discover,
    title: menuTitles.discover,
    icon: DiscoveryIcon,
  },
  {
    url: menuUrls.diet,
    title: menuTitles.diet,
    icon: RestaurantIcon,
  },
];
