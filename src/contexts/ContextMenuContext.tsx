import type { ReactNode } from 'react';
import React, { createContext, useCallback, useMemo, useState } from 'react';
import {
  DefaultContextMenu,
  type ContextMenuItemType,
} from '../components/ContextMenu';
import '../css/ContextMenu.css';

type LastClickedDataType = {
  elementId: string | number | null;
  value: string;
};

type ContextMenuContextType = {
  // eslint-disable-next-line no-unused-vars
  showContextMenu: (props: {
    locate: { x: string; y: string };
    buttonDatas: ContextMenuItemType[];
    elementId: string | number | null;
  }) => void;
  lastClickedData: LastClickedDataType | null;
};

const ContextMenuContext = createContext<ContextMenuContextType>({
  showContextMenu: () => {},
  lastClickedData: null,
});

interface ContextMenuProviderProps {
  menuComponent?: ReactNode;
  children: ReactNode;
}

export const ContextMenuProvider = ({
  menuComponent,
  children,
}: ContextMenuProviderProps) => {
  const [visible, setVisible] = useState(false);
  const [locate, setLocate] = useState<{ x: string; y: string }>({
    x: '0',
    y: '0',
  });
  const [elementId, setElementId] = useState<string | number | null>(null);
  const [buttonDatas, setButtonDatas] = useState<ContextMenuItemType[]>([]);
  const [lastClickedData, setLastClickedData] =
    useState<LastClickedDataType | null>(null);

  const showContextMenu = useCallback(
    ({
      locate,
      buttonDatas,
      elementId,
    }: {
      elementId: string | number | null;
      buttonDatas: ContextMenuItemType[];
      locate: { x: string; y: string };
    }) => {
      setLocate(locate);
      setElementId(elementId);
      setButtonDatas(buttonDatas);
      setVisible(true);
    },
    [],
  );

  const onClickedContextMenuItem = useCallback(
    (value: string) => {
      setLastClickedData({
        elementId,
        value,
      });
    },
    [elementId],
  );

  const context: ContextMenuContextType = useMemo(
    () => ({
      showContextMenu,
      lastClickedData,
    }),
    [showContextMenu, lastClickedData],
  );

  return (
    <ContextMenuContext.Provider value={context}>
      <div className="context-menu-provider">
        {children}
        {visible && (
          <div
            className="context-menu-provider-wrapper"
            onClick={() => setVisible(!visible)}
          >
            {menuComponent ?? (
              <DefaultContextMenu
                x={locate.x}
                y={locate.y}
                items={buttonDatas}
                onClick={(value) => {
                  onClickedContextMenuItem(value);
                }}
              />
            )}
          </div>
        )}
      </div>
    </ContextMenuContext.Provider>
  );
};

export default ContextMenuContext;
