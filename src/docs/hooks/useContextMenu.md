# useContextMenu

- ContextMenu 기능 실행시 사용하게될 hook 입니다.

> ### 안내
>
> - 해당 문서를 먼저 확인하시기 바랍니다.

## 기본 사용 예시

```tsx
import { useContextMenu } from '@fetoolkit/react';
...

const TestPage = () => {
    const { contextMenuHandler, onClickedContextMenuItem } = useContextMenu();
    ...

    useEffect(() => {
        const unsubscribe = onClickedContextMenuItem((data) => {
            console.log('clickedData: ', data);
            setData(data);
        });

        return () => {
            unsubscribe();
        };
    }, [])

    ...

    return (
        <div
            onContextMenu={(e) => {
                contextMenuHandler({
                    elementId: 'test-element-id'
                    e,
                    buttonDatas: [
                        {
                            label: 'test',
                            value: 'test',
                        },
                        {
                            label: 'test1',
                            value: 'test1',
                        },
                    ]
                })
            }}
        >
            {...}
        </div>
    );
}
```

## API 문서

- 입력 인자: 없음
- 반환 타입: Object
  | Name | Type | Description |
  | :----------------------- | :-------------------------------------------------------------- | :------------------------------------------------------------------ |
  | contextMenuHandler | (props: ContextMenuHanderArgs) => void | ContextMenu를 띄우는 메서드. |
  | onClickedContextMenuItem | (callback: (data: LastClickedDataType \| null) => void) => void | ContextMenu내 버튼 클릭 이벤트를 감지하기 위한 이벤트 리스너 메서드 |
- 기타 타입 설명
  | Name | Type | Description |
  | :----- | :----- | :---------- |
  |ContextMenuHanderArgs|||
  |elementId| string \| number \| null | ContextMenu가 띄워질 element의 고유 ID. <br>onContextMenu 이벤트를 걸어주는 element의 고유 ID |
  | e | React.MouseEvent<T extends HTMLElement, MouseEvent> | onContextMenu 이벤트 리스너에서 인수로 반환되는 이벤트 객체 |
  | buttonDatas | ContextMenuItemType[] | ContextMenu에 들어갈 버튼 정보 |
  | ContextMenuItemType |||
  | value | string | 버튼의 고유 key값 |
  | label | string | 버튼에서 보여질 실제 라벨값 |
  | LastClickedDataType |||
  | elementId | string \| number \| null | ContextMenu가 띄워질 element의 고유 ID. <br>onContextMenu 이벤트를 걸어주는 element의 고유 ID |
  | value | string | 클릭한 버튼의 value값|
