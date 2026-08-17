import React from 'react';
import { useLang } from '../context/LangContext';

const Lang = ({ id, children }) => {
  const { lang } = useLang();
  if (lang !== id) return null;
  return <>{children}</>;
};

export default Lang;
