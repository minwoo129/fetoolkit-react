# Mask(maskPhoneNumber)

- 전화번호를 마스킹 하는 함수입니다.

## 기본 사용 예시

```tsx
import { Mask } from '@fetoolkit/react/utils';

const { maskPhoneNumber } = Mask;

const name1 = maskPhoneNumber('010-1234-5678'); // 010-****-5678
const name2 = maskPhoneNumber('01012345678'); // 010****5678
```

## API 문서

- 입력 인자: string
- 반환 타입: string
