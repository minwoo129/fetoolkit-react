# ErrorBoundary

- 많은 양의 스크롤이 필요한 리스트 아이템을 보여주고자 할 때
  사용할 수 있는 컴포넌트입니다.
- React Native 개발 경험이 있으시다면 React Native에서 Flatlist라는 컴포넌트를 기본 제공하고 있다는 것을 아실 겁니다!!(그거와 동일한 컴포넌트입니다.)

## 기본 사용 예시

```tsx
<Flatlist
  datas={testDatas}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <div>{item.name}</div>}
/>
```

## API(Props) 설명

| Name                 | Type                                          | Required | Default | Description                                                                                                                                                                                              |
| :------------------- | :-------------------------------------------- | :------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| datas                | Array\<T>                                     | true     | -       | 렌더링할 컴포넌드들의 데이터 배열                                                                                                                                                                        |
| renderItem           | (args: {item: T, index: number}) => ReactNode | true     | -       | 렌더링해서 보여줄 Item 컴포넌트                                                                                                                                                                          |
| keyExtractor         | (item: T, index: number) => string            | true     | -       | 아이템 컴포넌트들의 key props를 변환하는 메서드 <br>- 데이터 양이 많은 것을 전제로 하기 때문에 숫자 대신 문자열이 들어갑니다.<br>- 이 함수만 선언하면 renderItem에서 key props를 선언하지 않아도 됩니다. |
| ItemDeviderComponent | () => ReactNode \| ReactNode                  | false    | -       | 각 아이템 컴포넌트 사이에 구분자 역할로 추가할 컴포넌트                                                                                                                                                  |

- 이 외에 다른 Props들은 InfiniteScroll과 동일합니다.
