import type { AriaAttributes, CSSProperties } from 'react';
import React from 'react';
import '../css/ContextMenu.css';

interface ContextMenuTestProps {
  x: string;
  y: string;
}

export const ContextMenuTest = ({ x, y }: ContextMenuTestProps) => {
  return (
    <div
      className="context-menu-wrapper"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <ul className="context-menu-menu">
        <li className="context-menu-item" value={'reply'}>
          <span className="context-menu-span">reply</span>
        </li>
        <li className="context-menu-item" value={'share'}>
          <span className="context-menu-span">share</span>
        </li>
        <li className="context-menu-item" value={'delete'}>
          <span className="context-menu-span">delete</span>
        </li>
      </ul>
    </div>
  );
};

interface ContextMenuGridProps extends AriaAttributes {
  x: string;
  y: string;
  style?: CSSProperties;
  children: React.ReactNode;
}

interface ContextMenuGridItemProps extends AriaAttributes {
  value: string;
  label: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export type ContextMenuItemType = {
  value: string;
  label: string;
};

const Grid = ({ x, y, style, children, ...rest }: ContextMenuGridProps) => {
  return (
    <div
      className={`context-menu-wrapper`}
      style={{ left: `${x}px`, top: `${y}px`, ...style }}
      {...rest}
    >
      <ul className="context-menu-menu">{children}</ul>
    </div>
  );
};

const Item = ({
  value,
  label,
  style,
  onClick,
  ...rest
}: ContextMenuGridItemProps) => {
  return (
    <li
      className={`context-menu-item`}
      value={value}
      style={style}
      onClick={onClick}
      {...rest}
    >
      <span className="context-menu-span">{label}</span>
    </li>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const ContextMenu = {
  Grid,
  Item,
};

type DefaultContextMenuProps = {
  x: string;
  y: string;
  items: ContextMenuItemType[];
  // eslint-disable-next-line no-unused-vars
  onClick: (value: string) => void;
};

export const DefaultContextMenu = ({
  x,
  y,
  items,
  onClick,
}: DefaultContextMenuProps) => {
  return (
    <ContextMenu.Grid x={x} y={y}>
      {items.map((item) => {
        return (
          <ContextMenu.Item
            key={item.value}
            value={item.value}
            label={item.label}
            onClick={() => onClick(item.value)}
          />
        );
      })}
    </ContextMenu.Grid>
  );
};
