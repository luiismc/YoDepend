import React from 'react';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import Home from 'src/screens/home';
import Category from 'src/screens/shop/category';
import WishList from 'src/screens/wishlist';

import Podcast from '../screens/podcastScreen/podcast';
import Centros from '../screens/centros/centros';
import Preguntas from '../screens/preguntas/preguntas';


import ProfileStack from './profile-stack';
import CartStack from './cart-stack';
import BlogStack from './blog_stack';
import Tabbar from 'src/containers/Tabbar';

import { homeTabs } from 'src/config/navigator';


const Tabs = createBottomTabNavigator(
  {
    [homeTabs.home]: {
      screen: Home,
    },
    [homeTabs.shop]: {
      screen: Category,
    },
    [homeTabs.wish_list]: {
      screen: WishList,
    },
    [homeTabs.blog]: {
      screen: BlogStack,
    },
    [homeTabs.me]: {
      screen: ProfileStack,
    },
    [homeTabs.podcast]: {
      screen: Podcast,
    },
    [homeTabs.centros]: {
      screen: Centros,
    },
    [homeTabs.preguntas]: {
      screen: Preguntas,
    },
  },
  {
    defaultNavigationOptions: {
      // tabBarVisible: false
    },
    tabBarComponent: props => <Tabbar {...props}/>,
  }
);

export default Tabs;
