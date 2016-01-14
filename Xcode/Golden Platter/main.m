//
//  main.m
//  Golden Platter
//
//  Created by Patrick Hart on 1/7/16.
//  Copyright © 2016 Urbicapus Studios. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <AppleScriptObjC/AppleScriptObjC.h>

int main(int argc, const char * argv[]) {
    [[NSBundle mainBundle] loadAppleScriptObjectiveCScripts];
    return NSApplicationMain(argc, argv);
}
