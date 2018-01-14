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

## 안드로이드
안드로이드 플랫폼을 지원하실 경우에 네이버 개발자 센터에서 앱을 등록한 후 

로그인 API 환경에 안드로이드를 추가하고 안드로이드 

**앱 페키지 이름을 아이오닉 프로젝트 페키지 이름과 일치**시켜주면 됩니다.

## 아이폰

### 개발자 센터 설정

아이폰 플랫폼을 지원하실 경우에 네이버 개발자 센터에서 앱을 등록한 후 로그인 API 환경에 iOS를 추가합니다

아이폰의 경우에는 안드로이드와 다르게 URL Scheme을 추가 해주셔야 합니다.

URL Scheme 형식은 자동으로 naver-cordova-plugin 에서 만들게 되며 형식은 다음과 같습니다.

```text
naver$OAUTH_CLIENT_ID
``` 

가장 앞에 **naver**가 있고 바로 뒤에는 **OAUTH_CLIENT_ID**가 붙게 됩니다.

예를 들면 OAUTH_CLIENT_ID가 AB_CDEFGHI이라면 Scheme은 **naverAB_CDEFGHI**가 됩니다.

즉 개발자 센터에서 URL Scheme 항목에 **naverAB_CDEFGHI**을 추가해주시면 됩니다.

### XCode 프로젝트 설정
불행하게도 아이폰앱은 AppDelegate에 코드를 추가 해주셔야 합니다.

```objective-c
#import "NaverThirdPartyLoginConnection.h"
```

```objective-c
#define NAVER_APP_SCHEME [[NSBundle mainBundle] objectForInfoDictionaryKey:@"NaverAppScheme"]
```

```objective-c
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
  return [self handleWithUrl:url];
}

#if __IPHONE_OS_VERSION_MAX_ALLOWED > __IPHONE_8_4
- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<NSString *,id> *)options {
  return [self handleWithUrl:url];
}
#endif

- (BOOL)handleWithUrl:(NSURL *)url {
  if ([[url scheme] isEqualToString:NAVER_APP_SCHEME]) {
    if ([[url host] isEqualToString:kCheckResultPage]) {
            
      // 네이버앱으로부터 전달받은 url값을 NaverThirdPartyLoginConnection의 인스턴스에 전달
      NaverThirdPartyLoginConnection *thirdConnection = [NaverThirdPartyLoginConnection getSharedInstance];
      THIRDPARTYLOGIN_RECEIVE_TYPE resultType = [thirdConnection receiveAccessToken:url];
            
      if (SUCCESS == resultType) {
        NSLog(@"Getting auth code from NaverApp success!");
      } else {
        // 앱에서 resultType에 따라 실패 처리한다.
      }
    }
    return YES;
  }
  
  return NO;
}
```

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

# License
```
MIT License

Copyright (c) 2017 GwonHyeok

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
