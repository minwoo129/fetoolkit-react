import React from 'react';
import '../css/ContextMenu.css';

interface ContextMenuProps {
  x: string;
  y: string;
}

export const ContextMenuTest = ({ x, y }: ContextMenuProps) => {
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
