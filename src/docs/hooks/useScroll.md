# useScroll

- 스크롤 위치를 추적하고, 스크롤을 최상단으로 이동시키는 기능을 제공하는 Hook입니다.

## 기본 사용 예시

```tsx
import { useScroll } from '@fetoolkit/react/hooks';
...
const elementRef = useRef<HTMLDivElement>(null);
const { scrollY, scrollX, scrollToTop } = useScroll(elementRef);
...
return (
 <div ref={elementRef} style={{ overflowY: 'scroll', height: '400px' }}>
   ...
 </div>
)
```

## API 문서

- 입력 인자: Ref(리터럴 값)
  ```typescript
  RefObject<HTMLElement | null>;
  ```
- 반환 타입: Object
  ```typescript
  {
    scrollY: number,
    scrollX: number,
    scrollToTop: function
  }
  ```
  | Name            | Type       | Description                                            |
  | --------------- | ---------- | ------------------------------------------------------ |
  | scrollY         | number     | 현재 스크롤 위치(수직 방향)                            |
  | scrollX         | number     | 현재 스크롤 위치(수평 방향)                            |
  | handleCountdown | () => void | 해당 영역의 스크롤 위치를 최상단으로 이동시키는 메서드 |
