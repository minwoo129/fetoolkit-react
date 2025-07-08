# useResizeElement

- 브라우저 창의 크기를 추적하기 위한 Hook 입니다.
- 이 Hook은 브라우저 창의 너비와 높이를 상태로 관리하며, 창 크기가 변경될 때마다 업데이트됩니다.

## 기본 사용 예시

```tsx
import { useResizeWindow } from '@fetoolkit/react/hooks';
...
const [width, height] = useResizeWindow();
```

## API 문서

- 반환 타입: 튜플
  ```typescript
  [width: number, height: number]
  ```
  | Name   | Type   | Description      |
  | ------ | ------ | ---------------- |
  | width  | number | 브라우저 창 너비 |
  | height | number | 브라우저 창 높이 |
