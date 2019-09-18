import React from 'react';
import { useTranslation } from 'react-i18next';
import LongText from './LongText';

const SectionSubtitle = ({value}) => {
  return (
    <LongText value={value} ns={"restaurant_menu"}/>
  )
}

export default SectionSubtitle
