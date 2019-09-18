import React from 'react';
import { useTranslation } from 'react-i18next';

const LongText = ({value, ns='commons'}) => {
  const { i18n } = useTranslation();
  const t = i18n.getFixedT(null, ns);
  return (
    <div dangerouslySetInnerHTML={
      {__html: t(value, {interpolation: {escapeValue: false}})}
    } />
  )
}

export default LongText
