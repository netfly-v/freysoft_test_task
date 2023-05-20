export type icon = (typeof iconOptions)[number];

export const iconOptions = <const>[
  'bell',
  'more',
  'masterCard',
  'home',
  'card',
  'add',
  'calendar',
  'settings',
  'bigCard',
];

export interface StyledSvgIconProps {
  className?: string;
  type?: icon;
  width?: string;
  height?: string;
  fillChildren?: string | 'none';
  strokeWidth?: number;
}
