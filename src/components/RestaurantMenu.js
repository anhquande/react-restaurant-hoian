import React from 'react';
import { useTranslation } from 'react-i18next';
import LongText from './LongText';

const menu_groups = [
  { id: 'starters' },
  { id: 'main' },
  { id: 'desserts' },
  { id: 'drinks' },
];

const menus = [
  {
    id: 'starters',
    groupId: 'starters',
    order: 1,
    items: [
      { id: '1', price: '13,35', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', price: '4,39', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  },
  {
    id: 'chicken',
    groupId: 'main',
    order: 1,
    items: [
      { id: '1', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  },
  {
    id: 'duck',
    groupId: 'main',
    order: 2,
    items: [
      { id: '1', price: '13,35', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', price: '4,39', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  },
  {
    id: 'beef',
    groupId: 'main',
    order: 3,
    items: [
      { id: '1', price: '13,35', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', price: '4,39', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  },
  {
    id: 'seafood',
    groupId: 'main',
    order: 4,
    items: [
      { id: '1', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  },
  {
    id: 'veggie',
    groupId: 'main',
    order: 5,
    items: [
      { id: '1', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  },
  {
    id: 'desserts',
    groupId: 'desserts',
    order: 1,
    items: [
      { id: '1', price: '13,35', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', price: '4,39', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  },
  {
    id: 'wine',
    groupId: 'drinks',
    order: 1,
    items: [
      { id: '1', price: '13,35', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', price: '4,39', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  },
  {
    id: 'softdrinks',
    groupId: 'drinks',
    order: 2,
    items: [
      { id: '1', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  },
  {
    id: 'warmdrinks',
    groupId: 'drinks',
    order: 3,
    items: [
      { id: '1', name: 'Tom Chien Com', description: 'Tom chien voi com' },
      { id: '2', name: 'Tom rang muoi', description: 'Tom rang voi muoi' }
    ]
  }
]
const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-name">{item.name}</div>
      <div className="menu-item-price">{item.price}€</div>
      <div className="menu-item-description">{item.description}</div>
    </div>
  )
};

const MenuSection = ({ section }) => {
  const { i18n } = useTranslation();
  const t = i18n.getFixedT(null, 'restaurant_menu');

  const items = section.items;
  return (
    <div className="col-xs-12 col-sm-6">
      <div className="menu-section">
        <h2 className="menu-section-title">{t(`menu_section_${section.id}`)}</h2>
        <hr/>
        {items.map(item => <MenuItem item={item} key={item.id}/>)}
      </div>
    </div>
  )
}
const MenuGroup = ({ group }) => {
  const sections = menus.filter(x => x.groupId === group.id).sort((a, b) => a.order - b.order);
  return (
    <div className="row">
      {sections.map(section => <MenuSection section={section} key={section.id}/>)}
    </div>
  )
}
const RestaurantMenu = () => {
  const { t } = useTranslation();
  return (
    <div id="restaurant-menu">
      <div className="section-title text-center center">
        <div className="overlay">
          <h2>{t('nav_restaurant_menu')}</h2>
          <hr/>
          <LongText value={"nav_restaurant_menu_description"}/>
        </div>
      </div>
      <div className="container">
        {menu_groups.map(group => <MenuGroup group={group} key={group.id}/>)}
      </div>
    </div>
  )
}

export default RestaurantMenu;
