import React from 'react';
import { useTranslation } from 'react-i18next';

const LongText = ({value}) => {
  const {t}=useTranslation()
  return (
    <div dangerouslySetInnerHTML={
      {__html: t(value, {interpolation: {escapeValue: false}})}
    } />
  )
}

export default LongText
