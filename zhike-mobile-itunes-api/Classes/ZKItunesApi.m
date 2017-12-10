//
//  ZKItunesApi.m
//  Pods-zhike-mobile-itunes-api_Tests
//
//  Created by wansong on 10/12/2017.
//

#import "ZKItunesApi.h"
#import "SSItunesApi.h"

@implementation ZKItunesApi
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getAppMeta:(NSString *)appId callback:(RCTResponseSenderBlock)callback) {
  [SSItunesApi getAppMetaAppId:nil result:^(NSDictionary * _Nullable info) {
    callback(info);
  }];
}

@end
