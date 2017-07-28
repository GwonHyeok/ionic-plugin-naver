import { IonicNativePlugin } from "@ionic-native/core";
export interface NaverLoginResponse {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
    tokenType: string;
}
export interface NaverMeResponse {
    resultCode: string;
    message: string;
    response: {
        encryptionId: string;
        email: string;
        nickname: string;
        profileImage: string;
        age: string;
        gender: string;
        id: string;
        name: string;
        birthday: string;
    };
}
export declare class Naver extends IonicNativePlugin {
    login(): Promise<NaverLoginResponse>;
    logout(): Promise<any>;
    logoutAndDeleteToken(): Promise<any>;
    refreshAccessToken(): Promise<string>;
    getState(): Promise<string>;
    requestApi(url: string): Promise<string>;
    requestMe(): Promise<NaverMeResponse>;
}
