import { Cordova, IonicNativePlugin, Plugin } from "@ionic-native/core";
import { Injectable } from "@angular/core";

export interface NaverLoginResponse {
    accessToken: string,
    refreshToken: string,
    expiresAt: number,
    tokenType: string
}

export interface NaverMeResponse {
    resultCode: string,
    message: string,
    response: {
        email: string,
        nickname: string,
        profileImage: string,
        age: string,
        gender: string,
        id: string,
        name: string,
        birthday: string
    }
}

@Plugin({
    pluginName: 'Naver',
    plugin: 'cordova-plugin-naver',
    pluginRef: 'Naver',
    platforms: ['Android']
})
@Injectable()
export class Naver extends IonicNativePlugin {

    @Cordova()
    login(): Promise<NaverLoginResponse> {
        return;
    }

    @Cordova()
    logout(): Promise<any> {
        return;
    }

    @Cordova()
    logoutAndDeleteToken(): Promise<any> {
        return;
    }

    @Cordova()
    refreshAccessToken(): Promise<string> {
        return;
    }

    @Cordova()
    getState(): Promise<string> {
        return;
    }

    @Cordova()
    requestApi(url: string): Promise<string> {
        return;
    }

    @Cordova()
    requestMe(): Promise<NaverMeResponse> {
        return;
    }
}