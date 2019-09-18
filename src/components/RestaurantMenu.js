import React from 'react';
import { useTranslation } from 'react-i18next';
import LongText from './LongText';
import SectionSubtitle from './SectionSubtitle';
import { GiChiliPepper as SpicyIcon } from "react-icons/gi";
import { IoIosLeaf as VeganIcon } from "react-icons/io"
import { Tooltip } from '@material-ui/core';
import { fetchRestaurantMenuGroups, fetchRestaurantMenus } from '../services/restaurantmenu';

const Price = (props) => {
  if (props.children) {
    return (
      <div className="menu-item-price">{props.children}€</div>
    )
  }
  return null;
}
const ItemName = ({ item }) => {
  const { t } = useTranslation();
  return (
    <div className="menu-item-name">
      {item.id && `${item.id}.`}
      {item.name}
      {item.vegan && (
        <Tooltip title={t("tooltip_vegan")}>
          <span style={{
            marginLeft: 8,
            color: 'green'
          }}>
            <VeganIcon/><VeganIcon/>
          </span>
        </Tooltip>)}
      {item.veggie && (
        <Tooltip title={t("tooltip_veggie")}>
          <span style={{
            marginLeft: 8,
            color: 'lightgreen'
          }}>
            <VeganIcon/>
          </span>
        </Tooltip>
      )}
      {item.spicy && (
        <Tooltip title={t(`tooltip_spicy_${item.spicy}`)}>
          <span style={{
            marginLeft: 8,
            color: 'red'
          }}>
            <SpicyIcon/>
          </span>
        </Tooltip>
      )}
    </div>
  )
}
const MenuItemUpgrade = ({ details }) => {
  return (
    <>
      <div className="menu-item-upgrade">
        <ItemName item={details}/>
        <Price>{details.price}</Price>
      </div>
    </>
  )
}

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <ItemName item={item}></ItemName>
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
  const mkSectionTitle = `menu_section_${section.id}`;
  const mkSectionSubtitle = `menu_section_${section.id}_subtitle`;
  const mkSectionDescription = `menu_section_${section.id}_description`;
  return (
    <div className="col-xs-12 col-sm-6">
      <div className="menu-section">
        <h2 className="menu-section-title">{t(mkSectionTitle)}</h2>
        <hr/>
        {section.showSubtitle && <SectionSubtitle value={mkSectionSubtitle}/>}
        {section.showDescription && <SectionSubtitle value={mkSectionDescription}/>}
        {items.map(item => <MenuItem item={item} key={item.id}/>)}
      </div>
    </div>
  )
}
const MenuGroup = ({ group, menus }) => {
  const sections = menus.filter(x => x.groupId === group.id).sort((a, b) => a.order - b.order);
  return (
    <div className="row">
      {sections.map(section => <MenuSection section={section} key={section.id}/>)}
    </div>
  )
}
const RestaurantMenu = () => {
  const { t } = useTranslation();
  const menu_groups = fetchRestaurantMenuGroups();
  const menus = fetchRestaurantMenus();
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
        .map(group => <MenuGroup group={group} key={group.id} menus={menus}/>)}
      </div>
    </div>
  )
}

export default RestaurantMenu;
