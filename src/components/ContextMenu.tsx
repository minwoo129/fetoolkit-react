import React from 'react';
import '../css/ContextMenu.css';

interface contextMenuProps {
  x: string;
  y: string;
}

export const ContextMenu = ({ x, y }: contextMenuProps) => {
  return (
    <div
      className="context-menu-wrapper"
      style={{ left: `${x}px`, top: `${y}px` }}
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        console.log('context menu clicked');
      }}
    >
      <ul className="context-menu-menu">
        <li className="context-menu-item">
          <span className="context-menu-span">reply</span>
        </li>
        <li className="context-menu-item">
          <span className="context-menu-span">share</span>
        </li>
        <li className="context-menu-item">
          <span className="context-menu-span">delete</span>
        </li>
      </ul>
    </div>
  );
};
