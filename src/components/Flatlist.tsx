/* eslint-disable no-unused-vars */
import React from 'react';
import type { ComponentProps, ComponentType, ReactNode } from 'react';
import InfiniteScroll from './InfiniteScroll';

type RenderItemType<T> = (args: { item: T; index: number }) => ReactNode;

type KeyExtractorType<T> = (item: T, index: number) => string;

interface Props<T>
  extends Omit<
    ComponentProps<typeof InfiniteScroll>,
    'children' | 'dataLength'
  > {
  datas: T[];
  renderItem: RenderItemType<T>;
  keyExtractor: KeyExtractorType<T>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemDividerComponent?: ComponentType<any>;
  dataLength?: number;
}

interface FlatListRenderItemWrapperProps {
  children: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemDividerComponent?: ComponentType<any>;
  isDividerVisible: boolean;
}

export const Flatlist = <T,>({
  datas,
  keyExtractor,
  renderItem,
  ItemDividerComponent,
  dataLength = 0,
  ...props
}: Props<T>) => {
  return (
    <InfiniteScroll {...props} dataLength={dataLength}>
      {datas.map((item, index) => {
        return (
          <FlatListRenderItemWrapper
            isDividerVisible={index !== datas.length - 1}
            ItemDividerComponent={ItemDividerComponent}
            key={keyExtractor(item, index)}
          >
            {renderItem({ item, index })}
          </FlatListRenderItemWrapper>
        );
      })}
    </InfiniteScroll>
  );
};

const FlatListRenderItemWrapper = ({
  children,
  ItemDividerComponent,
  isDividerVisible,
}: FlatListRenderItemWrapperProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
      {isDividerVisible && ItemDividerComponent && <ItemDividerComponent />}
    </div>
  );
};
