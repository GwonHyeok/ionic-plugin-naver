# ionic-plugin-naver
> 네이버 cordova 플러그인을 ionic 에서 사용할 수 있게 만든 플러그인 입니다


## 설치 하기전에 앞서서
해당 플러그인을 사용하기 앞서 [네이버 개발자 센터](https://developers.naver.com/)에서 앱을 등록하여

OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_CLIENT_NAME 값을 알아놓아야 합니다

### 최신 버전 확인
- cordova-plugin-naver - https://www.npmjs.com/package/cordova-plugin-naver
- ionic-plugin-naver - https://www.npmjs.com/package/ionic-plugin-naver

## 설치 방법
* cordova 플러그인 추가

```bash
$ ionic cordova plugin add cordova-plugin-naver --save --variable OAUTH_CLIENT_ID="OAUTH_CLIENT_ID" --variable OAUTH_CLIENT_SECRET="OAUTH_CLIENT_SECRET" --variable OAUTH_CLIENT_NAME="OAUTH_CLIENT_NAME"
```

* ionic 플러그인 설치

```bash
$ npm install ionic-plugin-naver --save
```

만약  OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_CLIENT_NAME 등의 값이 해당 플러그인 추가 후 변경된다면 플러그인 삭제후 다시 추가하는 것을 추천 드립니다.

## ionic 설정
모듈의 providers 항목에 Naver를 추가해주세요.

**app.module.ts**

```typescript
import { Naver } from "ionic-plugin-naver";

@NgModule({
  providers: [
    Naver
  ]
})
export class AppModule {
}
```

해당 플러그인을 컴포넌트에서 사용하기 위해서는 constructor 에 Naver를 추가해 주세요

**my.component.ts**

```typescript
@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {

	constructor(public naver: Naver) {}

  	// 로그인 예시
	doLogin() {
		this.naver.login()
			.then(response => console.log(response))
			.catch(error => console.error(error));
	}
}

```

## API
모든 API 정의는 [https://github.com/GwonHyeok/cordova-plugin-naver#api](https://github.com/GwonHyeok/cordova-plugin-naver#api)에서 확인할 수 있습니다.

해당 문서에서는 콜백 형식으로 설명이 되어있지만 ionic에서는 promise 형식으로 사용할 수 있습니다.

예를 들면 다음과 같습니다

```typescript
	// 로그인
	doLogin() {
		this.naver.login()
			.then(response => console.log(response)) // 성공
			.catch(error => console.error(error)); // 실패
	}

	// 내 정보 요청
	requestMe() {
		this.naver.requestMe()
			.then(response => console.log(response)) // 성공
			.catch(error => console.error(error)); // 실패
	}

	// 로그아웃 후 연동해제
	doLogout() {
		this.naver.logoutAndDeleteToken()
			.then(response => console.log(response)) // 성공
			.catch(error => console.error(error)); // 실패
	}
```