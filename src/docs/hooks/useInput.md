# useInput

- input 태그에서 사용자의 실제 입력값을 관리하기 위한 hook 입니다.

## 기본 사용 예시

```tsx
import { useInput } from '@fetoolkit/react';

  ...

  const [name, handleChangeName] = useInput(''); // 타입추론이 유도된 경우입니다.
  const [age, handleChangeAge] = useInput<number>(0); // 타입을 명시적으로 지정한 경우입니다.
```

## API 문서

- 입력 인자: T(제네릭 타입이란 뜻으로, 이 타입에 맞는 리터럴 값을 적용해주면 됩니다.)
- 반환 타입: 튜플
  ```typescript
  [ value: T, handleValueChange: function ]
  ```
  | Name              | Type               | Description                   |
  | ----------------- | ------------------ | ----------------------------- |
  | value             | T                  | 현재 입력 후 저장된 값        |
  | handleValueChange | (value: T) => void | 입력값을 저장하기 위한 메서드 |
