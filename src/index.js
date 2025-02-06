import React from 'react';

import { createRoot } from 'react-dom/client';

import FooterEN from './jsx/FooterEN.jsx';

import FooterFR from './jsx/FooterFR.jsx';

const container_footer_en = document.getElementById('app-root-2024-edar_report_footer_en');
if (container_footer_en) {
  const root_footer_en = createRoot(container_footer_en);
  root_footer_en.render(<FooterEN />);
}

const container_footer_fr = document.getElementById('app-root-2024-edar_report_footer_fr');
if (container_footer_fr) {
  const root_footer_fr = createRoot(container_footer_fr);
  root_footer_fr.render(<FooterFR />);
}
