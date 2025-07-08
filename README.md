# FEToolkit

FEToolkit은 Frontend 개발 시 유용하게 사용할 수 있는 기능들을 제공하는 툴킷 라이브러리입니다. 라이브러리는 React, Vue 등 프레임워크에 따라서 구분하여 제공되며, 프레임워크와 무관하게 공통적으로 사용할 수 있는 기능은 별도의 라이브러리로 배포될 예정입니다.  
현재는 제공되고 있는 기능이 많이 없을지 몰라도 지속적인 업데이트를 통해 기능을 추가해나갈 예정입니다.

## Documentation

본 라이브러리는 React 전용 라이브러리입니다.

> ### 참고
>
> - 이 패키지는 React 19 이상에서만 정상동작이 가능합니다.
> - Next.JS의 경우 작동 여부에 대해 추가 테스트가 필요한 상황이라 빠른 시일내로 제공될 수 있도록 하겠습니다.

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

### 2. 제공되는 기능

#### 2-1. 컴포넌트

| 이름           | 설명                                                                                                                                              | 호환여부                 | 공식문서 |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------- | :------: |
| ErrorBoundary  | React 기본 탑재 기능인 ErrorBoundary를 함수 컴포넌트 및<br> HOC 형태로 제공하는 컴포넌트                                                          | ✅ React <br> ❌ Next.js | 공식문서 |
| Flatlist       | 많은 양의 스크롤이 필요한 리스트 아이템을 보여주고자 할 때<br> 사용할 수 있는 컴포넌트 <br> (참고: React Native 개발자라면 이해할 수 있을겁니다!) | ✅ React <br> ❌ Next.js | 공식문서 |
| InfiniteScroll | 무한 스크롤 기능 컴포넌트                                                                                                                         | ✅ React <br> ❌ Next.js | 공식문서 |

#### 2-2. Hook

| 이름                | 설명                                                                                         | 호환여부                 | 공식문서 |
| :------------------ | :------------------------------------------------------------------------------------------- | :----------------------- | :------: |
| useAsyncLoading     | 비동기 작업의 로딩 상태를 관리하기 위한 Hook                                                 | ✅ React <br> ❌ Next.js | 공식문서 |
| useCountdown        | 카운트다운 기능을 구현하기 위한 Hook                                                         | ✅ React <br> ❌ Next.js | 공식문서 |
| useImageLazyLoading | 이미지의 lazy loading을 구현하기 위한 Hook                                                   | ✅ React <br> ❌ Next.js | 공식문서 |
| useInput            | input 컴포넌트에서의 입력값을 관리하기 위한 Hook                                             | ✅ React <br> ❌ Next.js | 공식문서 |
| useLocalStorage     | LocalStorage 사용을 위한 Hook                                                                | ✅ React <br> ❌ Next.js | 공식문서 |
| useResizeElement    | 특정 HTML 요소의 크기를 추적하기 위한 Hook                                                   | ✅ React <br> ❌ Next.js | 공식문서 |
| useResizeWindow     | 브라우저 창의 크기를 추적하기 위한 Hook                                                      | ✅ React <br> ❌ Next.js | 공식문서 |
| useScroll           | 스크롤 위치를 추적하고, 스크롤을 최상단으로 이동시키는<br> 기능을 제공하는 Hook              | ✅ React <br> ❌ Next.js | 공식문서 |
| useSessionStorage   | SessionStorage 사용을 위한 Hook                                                              | ✅ React <br> ❌ Next.js | 공식문서 |
| useToggle           | 토글 형태의 input 값 제어를 위한 Hook                                                        | ✅ React <br> ❌ Next.js | 공식문서 |
| useUserAgent        | UserAgent를 통해 받아온 런타임이 돌아가고 있는 브라우저<br> 및 운영체제 정보를 반환하는 Hook | ✅ React <br> ❌ Next.js | 공식문서 |

#### 2-3. 유틸리티 함수

| 이름              | 설명                                                                                         | 호환여부                 | 공식문서 |
| :---------------- | :------------------------------------------------------------------------------------------- | :----------------------- | :------: |
| getUserAgent      | UserAgent를 통해 받아온 런타임이 돌아가고 있는 브라우저<br> 및 운영체제 정보를 반환하는 함수 | ✅ React <br> ❌ Next.js | 공식문서 |
| formatPhoneNumber | 전화번호를 하이픈(-)이 들어간 형태로 반환하는 함수                                           | ✅ React <br> ❌ Next.js | 공식문서 |
