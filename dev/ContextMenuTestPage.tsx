import React, { useState } from 'react';
import { ContextMenu } from '../src';

type LocateType = {
  x: string;
  y: string;
};
const ContextMenuTestPage = () => {
  const [visible, setVisible] = useState(false);
  const [locate, setLocate] = useState<LocateType>({ x: '0', y: '0' });

  const contextMenuHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { clientX, clientY } = e;
    setVisible((pre) => !pre);
    setLocate({ x: clientX.toString(), y: clientY.toString() });
  };

  return (
    <div style={{ width: '100vw', height: '100vh', border: '1px solid red' }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid blue',
        }}
        onContextMenu={contextMenuHandler}
        onClick={() => {
          if (visible) {
            setVisible(false);
          }
        }}
      />
      {visible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid green',
          }}
          onClick={() => setVisible(!visible)}
        >
          <ContextMenu x={locate.x} y={locate.y} />
        </div>
      )}
    </div>
  );
};

export default ContextMenuTestPage;
