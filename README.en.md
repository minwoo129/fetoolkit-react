# FEToolkit

FEToolkit is toolkit library that provide useful features at frontend development. it is provided seperately acording to frameworks such as React, Vue, Next.js, and features that can be used in common regardless of framework will be distributed as seperate libraries.

## Documentation

## Available Environments

|                              Frameworks                              |    enabled     |  required   | Notes                     |
| :------------------------------------------------------------------: | :------------: | :---------: | ------------------------- |
|      ![React](https://api.iconify.design/logos:react.svg) React      |   ✅ Enabled   | >= React 19 |                           |
| ![Next.js](https://api.iconify.design/logos:nextjs-icon.svg) Next.js |   Restricted   | >= React 19 | additional tests required |
|  ![React](https://api.iconify.design/logos:react.svg) React Native   | ❌ Unavailable |             |                           |

> ### References
>
> - This library is React Only
>   - It's not supported in React Native
> - Project Environment of at least React 19 Required!!
> - Don't use this library in Next.js Project(It needs additional Test)

## Getting Started

### 1. Installation

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

### 2. Connect Provider Component

In order to using of this toolkit, Connecting of FEToolkitProvider Component is Required in Root.  
(in Next.js, there's some of feature restricted, so you can skip this step.)

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

## 3. Features

### 3-1. Components

| 이름           | 설명                                                                                                                                              | 호환여부                 |                      공식문서                       |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------- | :-------------------------------------------------: |
| ErrorBoundary  | React Error Boundary Component <br>(with HOC Component)                                                                                           | ✅ React <br> ❌ Next.js | [공식문서](./src/docs/components/ErrorBoundary.md)  |
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
| useToggle           | 토글 형태의 input 값 제어를 위한 Hook                                                        | ✅ React <br> ❌ Next.js |      [공식문서](./src/docs/hooks/useToggle.md)      |
| useUserAgent        | UserAgent를 통해 받아온 런타임이 돌아가고 있는 브라우저<br> 및 운영체제 정보를 반환하는 Hook | ✅ React <br> ❌ Next.js |    [공식문서](./src/docs/hooks/useUserAgent.md)     |

### 3-3. 유틸리티 함수

| 이름                          | 설명                                                                                         | 호환여부                 |                         공식문서                          |
| :---------------------------- | :------------------------------------------------------------------------------------------- | :----------------------- | :-------------------------------------------------------: |
| getUserAgent                  | UserAgent를 통해 받아온 런타임이 돌아가고 있는 브라우저<br> 및 운영체제 정보를 반환하는 함수 | ✅ React <br> ❌ Next.js |       [공식문서](./src/docs/utils/getUserAgent.md)        |
| formatPhoneNumber<br>(number) | 전화번호를 하이픈(-)이 들어간 형태로 반환하는 함수                                           | ✅ React <br> ❌ Next.js | [공식문서](./src/docs/utils/numbers_formatPhoneNumber.md) |
| commaizeNumber<br>(number)    | 숫자 콤마 처리 함수                                                                          | ✅ React <br> ❌ Next.js |  [공식문서](./src/docs/utils/numbers_commaizeNumber.md)   |
| decommaizeNumber<br>(number)  | 콤마 처리가 들어간 숫자의 콤마 제거 함수                                                     | ✅ React <br> ❌ Next.js | [공식문서](./src/docs/utils/numbers_decommaizeNumber.md)  |
| maskName<br>(mask)            | 이름 마스킹 처리 함수                                                                        | ✅ React <br> ❌ Next.js |       [공식문서](./src/docs/utils/mask_maskName.md)       |
| maskPhoneNumber<br>(mask)     | 전화번호 마스킹 처리 함수                                                                    | ✅ React <br> ❌ Next.js |   [공식문서](./src/docs/utils/mask_maskPhoneNumber.md)    |
| at<br>(array)                 | 배열에서 특정 인덱스에 있는 요소를 반환하는 함수<br> (파이썬처럼 음수 인덱스도 지원)         | ✅ React <br> ❌ Next.js |         [공식문서](./src/docs/utils/array_at.md)          |
| first<br>(array)              | 배열의 첫번째 요소를 꺼내오는 함수                                                           | ✅ React <br> ❌ Next.js |        [공식문서](./src/docs/utils/array_first.md)        |
| last<br>(array)               | 배열의 마지막 요소를 꺼내오는 함수                                                           | ✅ React <br> ❌ Next.js |        [공식문서](./src/docs/utils/array_last.md)         |
