# Numbers(formatPhoneNumber)

- 전화번호를 하이픈(-)이 들어간 형태로 변환하는 함수입니다.

## 기본 사용 예시

```tsx
import { Numbers } from '@fetoolkit/react/utils';

const { formatPhoneNumber } = Numbers;

const num1 = formatPhoneNumber('01012345678');
const num2 = formatPhoneNumber('021234567');
```

## API 문서

- 입력 인자: string
- 반환 타입: string
