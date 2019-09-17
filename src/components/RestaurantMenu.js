import React from 'react';
import { useTranslation } from 'react-i18next';
import LongText from './LongText';

const menu_groups = [
  { id: 'lunch', showOnHome: true },
  { id: 'starters', showOnHome: true },
  { id: 'main', showOnHome: false },
  { id: 'desserts', showOnHome: false },
  { id: 'drinks', showOnHome: false },
];

const menus = [
  {
    id: 'lunch',
    groupId: 'lunch',
    order: 1,
    items: [
      {
        id: 'M1',
        price: '7,50',
        name: 'Pho Bo Suppe',
        description: 'traditional vietnamesische Reisbandnuldeln Suppe mit Rindfleisch, Rindfleischbällchen und frischem Kräutern',
        hint: 'A,W'
      },
      {
        id: 'M2',
        price: '6,90',
        name: 'Pho Chay Suppe',
        description: 'traditional vietnamesische Reisbandnuldeln Suppe mit Tofu und frischem Kräutern',
        vegan: true,
        hint: 'A,W'
      },
      {
        id: 'M3',
        price: '7,90',
        name: 'Bun Bo Hue Suppe',
        description: 'Hue Reisnuldeln Suppe mit Rindfleisch, Rindfleischbällchen, Zitronengras und frischem Kräutern',
        hint: 'A,W'
      },
      {
        id: 'M4',
        price: '7,50',
        name: 'Bun Chay Suppe',
        description: 'Reisnuldeln Suppe mit Tofu und frischem Kräutern',
        vegan: true,
        hint: 'A,W'
      },
      {
        id: 'M5',
        price: '5,90',
        name: 'Rau Xao Thap Cam',
        description: 'Gemüse im Wok mit dunkle Soße und Jasmin Reis',
        vegan: true,
        hint: 'L',
        upgrades: [{ id: 1, name: 'mit Tofu', price: '6,40' }]
      },
      {
        id: 'M6',
        price: '7,90',
        name: 'Bo Xao Dua',
        description: 'Rindfleisch mit Ananas, Wok Gemüse und Jasmin Reis'
      },
      {
        id: 'M7',
        price: '6,90',
        name: 'Bun Cha Gio Chay',
        description: 'hausgemachte veg. Frühlingsrollen, gefüllt mit Glasnudeln, Salate, Röstzwiebel, Erdnuss, Fischsoße',
        vegan: true,
        hint: 'A,B,N,W',
        upgrades: [{ id: 1, name: 'mit Fleisch', price: '7,90' }]
      },
      {
        id: 'M8',
        price: '',
        name: 'Pho Xao',
        description: 'Gebratene Reisbandnudeln und frischem Gemüse',
        hint: 'B,I',
        upgrades: [
          { id: 1, name: 'mit Gemüse', price: '6,50', vegan: true },
          { id: 1, name: 'mit Tofu', price: '7,00', vegan: true, hint: 'L' },
          { id: 1, name: 'mit Hähnchen oder Rindfleisch', price: '7,50' },
        ]
      },
      {
        id: 'M9',
        price: '7,90',
        name: 'Ga Xao Xa Ot',
        description: 'gebratene Hähnchen in Wok mit Zitronengras, Chilli, Karotte, Brokkoli, Blumenkohl '
      },
      {
        id: 'M10',
        price: '',
        name: 'Vietnamesisches Curry',
        description: 'vietnamesisches Curry mit frischem Gemüse, Zitronengras, Kräuter',
        upgrades: [
          { id: 1, name: 'mit Tofu', price: '5,90', veggie: true, hint: 'L' },
          { id: 1, name: 'mit Hähnchen', price: '7,90' },
          { id: 1, name: 'mit Ente', price: '8,90' },
        ]
      },
    ]
  },
  {
    id: 'starters',
    groupId: 'starters',
    order: 1,
    items: [
      {
        id: '11',
        price: '3,90',
        name: 'Pagoda Rolls',
        description: 'Vegane Frühlingsrollen mit Gemüse, Süß-sauer-Dip ',
        portion: '2 Stk (hausgemacht)',
        hint: 'A,W',
        vegan: true
      },
      {
        id: '12',
        price: '6,90',
        name: 'Hoi An Frühlingsrolle Spezial',
        description: 'gebratene Hähnchen in Wok mit Zitronengras, Chilli, Karotte, Brokkoli, Blumenkohl ',
        hint: 'A,B,I,W'
      },
      {
        id: '13',
        price: '6,90',
        name: 'Nems Ha Noi',
        description: 'Frühlingsrollen mit Hähnchen, Frühlingszwiebel, Karotten, Morcheln, Glasnudeln, Nước mắm Dip',
        hint: 'A,B,I,W'
      },
      {
        id: '14',
        price: '4,90',
        name: 'Crispy Tofu',
        description: 'Seidentofu mit knusprigen Reisflocken, Knoblauch, Chilli',
        hint: 'A,B,I,W',
        vegan: true
      },
      {
        id: '15',
        price: '5,50',
        name: 'Honey Chicken',
        description: 'Chicken Wings nach vietnamesischer Art',
        hint: 'B',
        spicy: 1
      },
      {
        id: '16',
        price: '5,50',
        name: 'Pork BBQ',
        description: 'Schweinespieße nach vietnamesischer Art, Schnittlauch, Nước mắm Dip',
        hint: 'A,B,F,G,L,N,W',
        spicy: 1
      },
      {
        id: '17',
        price: '5,50',
        name: 'Epi-Tempura',
        description: 'Panierte Black-Tiger-Garnelen in grünen Reisflocken',
        hint: 'A,B,F,G,L,N,W',
      },
      {
        id: '18',
        price: '6,90',
        name: 'Epi-Tempura-Reisflocken',
        description: 'Panierte Black-Tiger-Garnelen in Reisflocken',
        hint: 'A,B,F,G,L,N,W',
      },
      {
        id: '19',
        price: '6,90',
        name: 'Epi-Tempura-Kokosflocken',
        description: 'Panierte Black-Tiger-Garnelen in Reisflocken',
        hint: 'A,B,F,G,L,N,W',
      },
    ]
  },
  {
    id: 'summertime_rolls',
    groupId: 'starters',
    order: 1,
    items: [
      {
        id: '21',
        price: '5,50',
        name: 'Buddha Rolls',
        description: 'Tofu | Reisfadennudeln | Tương đen Dip',
        portion: '2 Stk',
        hint: 'A,I,N,W',
        vegan: true
      },
      {
        id: '22',
        price: '6,50',
        name: 'Classic Summer Rolls',
        description: 'Sommersrollen gefüllt mit Hähchen, Garnelen, Salat, Reisfadennudeln in Reispapier mantel',
        portion: '2 Stk',
        hint: 'B,C',
      },
      {
        id: '23',
        price: '5,90',
        name: 'Beef Rolls',
        description: 'Sommersrollen gefüllt mit Rindfleisch, Salat, Reisfadennudeln in Reispapier mantel',
        portion: '2 Stk',
        hint: 'B,C',
      },
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
    id: 'vegan',
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
const Price = (props) => {
  if (props.children) {
    return (
      <div className="menu-item-price">{props.children}€</div>
    )
  }
  return null;
}
const MenuItemUpgrade = ({ details }) => {
  return (
    <>
      <div className="menu-item-upgrade">
        <div className="menu-item-name">{details.name}</div>
        <Price>{details.price}</Price>
      </div>
    </>
  )
}

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-name">{item.id}. {item.name}</div>
      <Price>{item.price}</Price>
      <div className="menu-item-description">{item.description}</div>
      {item.upgrades && item.upgrades.map(x => (
        <MenuItemUpgrade details={x}/>
      ))}
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
        {menu_groups.filter(group => group.showOnHome)
        .map(group => <MenuGroup group={group} key={group.id}/>)}
      </div>
    </div>
  )
}

export default RestaurantMenu;
