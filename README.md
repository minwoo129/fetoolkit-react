# FEToolkit

FEToolkit은 Frontend 개발 시 유용하게 사용할 수 있는 기능들을 제공하는 툴킷 라이브러리입니다. 라이브러리는 React, Vue 등 프레임워크에 따라서 구분하여 제공되며, 프레임워크와 무관하게 공통적으로 사용할 수 있는 기능은 별도의 라이브러리로 배포될 예정입니다.  
현재는 제공되고 있는 기능이 많이 없을지 몰라도 지속적인 업데이트를 통해 기능을 추가해나갈 예정입니다.

## Documentation

## 사용 가능 환경

|                       프레임워크 및 라이브러리                       | 사용 가능 여부 | 사용 가능 버전 | 비고                         |
| :------------------------------------------------------------------: | :------------: | :------------: | ---------------------------- |
|      ![React](https://api.iconify.design/logos:react.svg) React      |  ✅ 사용 가능  | React 19 이상  |                              |
| ![Next.js](https://api.iconify.design/logos:nextjs-icon.svg) Next.js |   사용 제한    | React 19 이상  | 기능 동작을 위한 테스트 필요 |
|  ![React](https://api.iconify.design/logos:react.svg) React Native   |  ❌ 사용 불가  |                |                              |

> ### 참고
>
> - 본 라이브러리는 React 전용 라이브러리입니다.
>   - React Native의 경우 사용이 불가능합니다.
> - 이 패키지는 React 19 이상에서만 정상동작이 가능합니다.
> - Next.JS의 경우 작동 여부에 대해 추가 테스트가 필요한 상황이라 사용하지 마시기 바랍니다.
>   - 일부 기능의 경우 코드상으로는 정상 동작이 가능할 수 있어도, 동작이 불안정할 수 있습니다.
>   - 최대한 빨리 테스트 진행 후 Next.JS에서 사용이 가능한 기능들을 정리하도록 하겠습니다.

## 초기 설정 절차

### 1. 설치 방법

- npm
  ```
  npm i @fetoolkit/react
  ```
- yarn
  ```
  yarn add @fetoolkit/react
  ```
- pnpm
  ```
  pnpm add @fetoolkit/react
  ```

### 2. Provider 연결

이 툴킷의 안정적인 기능사용을 위해선, 최상단에 FEToolkitProvider 컴포넌트 연결이 필요합니다.

```tsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { FEToolkitProvider } from '@fetoolkit/react';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FEToolkitProvider>
      <App />
    </FEToolkitProvider>
  </StrictMode>,
);
```

## 제공되는 기능

### 3-1. 컴포넌트

| 이름           | 설명                                                                                                                                              | 호환여부                 |                      공식문서                       |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------- | :-------------------------------------------------: |
| ErrorBoundary  | React 기본 탑재 기능인 ErrorBoundary를 함수 컴포넌트 및<br> HOC 형태로 제공하는 컴포넌트                                                          | ✅ React <br> ❌ Next.js | [공식문서](./src/docs/components/ErrorBoundary.md)  |
| Flatlist       | 많은 양의 스크롤이 필요한 리스트 아이템을 보여주고자 할 때<br> 사용할 수 있는 컴포넌트 <br> (참고: React Native 개발자라면 이해할 수 있을겁니다!) | ✅ React <br> ❌ Next.js |    [공식문서](./src/docs/components/Flatlist.md)    |
| InfiniteScroll | 무한 스크롤 기능 컴포넌트                                                                                                                         | ✅ React <br> ❌ Next.js | [공식문서](./src/docs/components/InfiniteScroll.md) |

### 3-2. Hook

| 이름                | 설명                                                                                         | 호환여부                 |                      공식문서                       |
| :------------------ | :------------------------------------------------------------------------------------------- | :----------------------- | :-------------------------------------------------: |
| useAsyncLoading     | 비동기 작업의 로딩 상태를 관리하기 위한 Hook                                                 | ✅ React <br> ❌ Next.js |   [공식문서](./src/docs/hooks/useAsyncLoading.md)   |
| useCountdown        | 카운트다운 기능을 구현하기 위한 Hook                                                         | ✅ React <br> ❌ Next.js |    [공식문서](./src/docs/hooks/useCountdown.md)     |
| useImageLazyLoading | 이미지의 lazy loading을 구현하기 위한 Hook                                                   | ✅ React <br> ❌ Next.js | [공식문서](./src/docs/hooks/useImageLazyLoading.md) |
| useInput            | input 컴포넌트에서의 입력값을 관리하기 위한 Hook                                             | ✅ React <br> ❌ Next.js |      [공식문서](./src/docs/hooks/useInput.md)       |
| useLocalStorage     | LocalStorage 사용을 위한 Hook                                                                | ✅ React <br> ❌ Next.js |   [공식문서](./src/docs/hooks/useLocalStorage.md)   |
| useResizeElement    | 특정 HTML 요소의 크기를 추적하기 위한 Hook                                                   | ✅ React <br> ❌ Next.js |  [공식문서](./src/docs/hooks/useResizeElement.md)   |
| useResizeWindow     | 브라우저 창의 크기를 추적하기 위한 Hook                                                      | ✅ React <br> ❌ Next.js |   [공식문서](./src/docs/hooks/useResizeWindow.md)   |
| useScroll           | 스크롤 위치를 추적하고, 스크롤을 최상단으로 이동시키는<br> 기능을 제공하는 Hook              | ✅ React <br> ❌ Next.js |      [공식문서](./src/docs/hooks/useScroll.md)      |
| useSessionStorage   | SessionStorage 사용을 위한 Hook                                                              | ✅ React <br> ❌ Next.js |  [공식문서](./src/docs/hooks/useSessionStorage.md)  |
| useToggle           | 토글 형태의 input 값 제어를 위한 Hook                                                        | ✅ React <br> ❌ Next.js |                      공식문서                       |
| useUserAgent        | UserAgent를 통해 받아온 런타임이 돌아가고 있는 브라우저<br> 및 운영체제 정보를 반환하는 Hook | ✅ React <br> ❌ Next.js |                      공식문서                       |

### 3-3. 유틸리티 함수

| 이름                          | 설명                                                                                         | 호환여부                 | 공식문서 |
| :---------------------------- | :------------------------------------------------------------------------------------------- | :----------------------- | :------: |
| getUserAgent                  | UserAgent를 통해 받아온 런타임이 돌아가고 있는 브라우저<br> 및 운영체제 정보를 반환하는 함수 | ✅ React <br> ❌ Next.js | 공식문서 |
| formatPhoneNumber<br>(number) | 전화번호를 하이픈(-)이 들어간 형태로 반환하는 함수                                           | ✅ React <br> ❌ Next.js | 공식문서 |
| commaizeNumber<br>(number)    | 숫자 콤마 처리 함수                                                                          | ✅ React <br> ❌ Next.js | 공식문서 |
| decommaizeNumber<br>(number)  | 콤마 처리가 들어간 숫자의 콤마 제거 함수                                                     | ✅ React <br> ❌ Next.js | 공식문서 |
| maskName                      | 이름 마스킹 처리 함수                                                                        | ✅ React <br> ❌ Next.js | 공식문서 |
| maskPhoneNumber               | 전화번호 마스킹 처리 함수                                                                    | ✅ React <br> ❌ Next.js | 공식문서 |
| at<br>(array)                 | 배열에서 특정 인덱스에 있는 요소를 반환하는 함수<br> (파이썬처럼 음수 인덱스도 지원)         | ✅ React <br> ❌ Next.js | 공식문서 |
| first<br>(array)              | 배열의 첫번째 요소를 꺼내오는 함수                                                           | ✅ React <br> ❌ Next.js | 공식문서 |
| last<br>(array)               | 배열의 마지막 요소를 꺼내오는 함수                                                           | ✅ React <br> ❌ Next.js | 공식문서 |
