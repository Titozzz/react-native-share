"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[806],{5680:function(e,n,a){a.d(n,{xA:function(){return s},yg:function(){return u}});var i=a(6540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,i,r=function(e,n){if(null==e)return{};var a,i,r={},t=Object.keys(e);for(i=0;i<t.length;i++)a=t[i],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)a=t[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=i.createContext({}),d=function(e){var n=i.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var a=e.components,r=e.mdxType,t=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=d(a),y=r,u=g["".concat(p,".").concat(y)]||g[y]||m[y]||t;return a?i.createElement(u,l(l({ref:n},s),{},{components:a})):i.createElement(u,l({ref:n},s))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var t=a.length,l=new Array(t);l[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[g]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<t;d++)l[d]=a[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}y.displayName="MDXCreateElement"},339:function(e,n,a){a.r(n),a.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return g}});var i=a(9668),r=a(1367),t=(a(6540),a(5680)),l=["components"],o={id:"install",title:"Installing"},p=void 0,d={unversionedId:"install",id:"install",title:"Installing",description:"If you are using react-native >= 0.60 you just need to do a simple:",source:"@site/docs/installing.mdx",sourceDirName:".",slug:"/install",permalink:"/react-native-share/docs/install",draft:!1,editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/installing.mdx",tags:[],version:"current",frontMatter:{id:"install",title:"Installing"},sidebar:"someSidebar",next:{title:"Share.open",permalink:"/react-native-share/docs/share-open"}},s={},g=[{value:"Adding Queries for Android (Necessary for SDK &gt;= 30)",id:"adding-queries-for-android-necessary-for-sdk--30",level:3},{value:"Manual Linking",id:"manual-linking",level:2},{value:"Manual Install",id:"manual-install",level:2},{value:"iOS Install",id:"ios-install",level:3},{value:"Android Install",id:"android-install",level:3},{value:"Windows Install",id:"windows-install",level:3},{value:"Adding your implementation of FileProvider",id:"adding-your-implementation-of-fileprovider",level:3},{value:"Older versions",id:"older-versions",level:2},{value:"react-native 0.59.10",id:"react-native-05910",level:2}],m={toc:g},y="wrapper";function u(e){var n=e.components,a=(0,r.A)(e,l);return(0,t.yg)(y,(0,i.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"If you are using ",(0,t.yg)("inlineCode",{parentName:"p"},"react-native >= 0.60")," you just need to do a simple:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add react-native-share\n")),(0,t.yg)("p",null,"Or if are using npm:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"npm i react-native-share --save\n")),(0,t.yg)("p",null,"After that, we need to install the dependencies to use the project on iOS(you can skip this part, if you are using this on Android)."),(0,t.yg)("p",null,"Now run a simple: ",(0,t.yg)("inlineCode",{parentName:"p"},"npx pod-install")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"cd ios && pod install"),". After that, you should be able to use the library on both Platforms, iOS and Android."),(0,t.yg)("p",null,"Also, to use this library on iOS you will need:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"XCode 11 or higher"),(0,t.yg)("li",{parentName:"ul"},"iOS 13 SDK or higher")),(0,t.yg)("p",null,"After that, you will see that the library is now available at your ",(0,t.yg)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Note:")," If your application requires the ability to share ",(0,t.yg)("inlineCode",{parentName:"p"},"base64")," files on Android, you need to add"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- required for react-native-share base64 sharing --\x3e\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n')),(0,t.yg)("p",null,"to your application's ",(0,t.yg)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file as per the example project."),(0,t.yg)("h3",{id:"adding-queries-for-android-necessary-for-sdk--30"},"Adding Queries for Android (Necessary for SDK >= 30)"),(0,t.yg)("p",null,"Android 11 introduces changes related to package visibility.\nThese changes affect apps only if they target Android 11.\nFor more information on these changes, view the guides about ",(0,t.yg)("a",{parentName:"p",href:"https://developer.android.com/training/package-visibility"},"package visibility on Android"),".\nThis change can prevent you to use ",(0,t.yg)("inlineCode",{parentName:"p"},"Share.shareSingle()")," or others!"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"In ",(0,t.yg)("inlineCode",{parentName:"li"},"AndroidManifest.xml")," insert the ",(0,t.yg)("inlineCode",{parentName:"li"},"<queries>")," tag.")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'<manifest package="com.example.game">\n    <queries>\n        <package android:name="com.example.store" />\n        <package android:name="com.example.services" />\n\n        \x3c!--for example, to share via instagram --\x3e\n        <package android:name="com.instagram.android" />\n    </queries>\n    ...\n</manifest>\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"Note:")," Don't forget to provide the name of the application you will be sharing your content through. See example above."),(0,t.yg)("h2",{id:"manual-linking"},"Manual Linking"),(0,t.yg)("p",null,"If the auto-linking doesn't work for any reason, you can still run a:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"react-native link react-native-share\n")),(0,t.yg)("h2",{id:"manual-install"},"Manual Install"),(0,t.yg)("h3",{id:"ios-install"},"iOS Install"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"yarn add react-native-share")),(0,t.yg)("li",{parentName:"ol"},"In XCode, in the project navigator, right click ",(0,t.yg)("inlineCode",{parentName:"li"},"Libraries")," \u279c ",(0,t.yg)("inlineCode",{parentName:"li"},"Add Files to [your project's name]")),(0,t.yg)("li",{parentName:"ol"},"Go to ",(0,t.yg)("inlineCode",{parentName:"li"},"node_modules")," \u279c ",(0,t.yg)("inlineCode",{parentName:"li"},"react-native-share")," \u279c ",(0,t.yg)("inlineCode",{parentName:"li"},"ios")," and add ",(0,t.yg)("inlineCode",{parentName:"li"},"RNShare.xcodeproj")),(0,t.yg)("li",{parentName:"ol"},"In XCode, in the project navigator, select your project. Add ",(0,t.yg)("inlineCode",{parentName:"li"},"libRNShare.a")," to your project's ",(0,t.yg)("inlineCode",{parentName:"li"},"Build Phases")," \u279c ",(0,t.yg)("inlineCode",{parentName:"li"},"Link Binary With Libraries")),(0,t.yg)("li",{parentName:"ol"},"In XCode, in the project navigator, select your project. Add ",(0,t.yg)("inlineCode",{parentName:"li"},"Social.framework")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"MessageUI.framework")," to your project's ",(0,t.yg)("inlineCode",{parentName:"li"},"General")," \u279c ",(0,t.yg)("inlineCode",{parentName:"li"},"Linked Frameworks and Libraries")),(0,t.yg)("li",{parentName:"ol"},"Run your project (",(0,t.yg)("inlineCode",{parentName:"li"},"Cmd+R"),")"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("strong",{parentName:"li"},"(Optional)")," LSApplicationQueriesSchemes")),(0,t.yg)("p",null,"If you want to share Whatsapp, Mailto or some applications on iOS, you should write ",(0,t.yg)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/plist/info/LSApplicationQueriesSchemes"},(0,t.yg)("inlineCode",{parentName:"a"},"LSApplicationQueriesSchemes"))," in info.plist:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-xml"},"  <key>LSApplicationQueriesSchemes</key>\n  <array>\n    <string>whatsapp</string>\n    <string>mailto</string>\n    <string>instagram</string>\n    <string>instagram-stories</string>\n    <string>fb</string>\n    <string>facebook-stories</string>\n  </array>\n")),(0,t.yg)("h3",{id:"android-install"},"Android Install"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"yarn add react-native-share"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Open up ",(0,t.yg)("inlineCode",{parentName:"p"},"android/app/src/main/java/[...]/MainApplication.java")),(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"Add ",(0,t.yg)("inlineCode",{parentName:"li"},"import cl.json.RNSharePackage;")," and ",(0,t.yg)("inlineCode",{parentName:"li"},"import cl.json.ShareApplication;")," to the imports at the top of the file"),(0,t.yg)("li",{parentName:"ul"},"Add ",(0,t.yg)("inlineCode",{parentName:"li"},"new RNSharePackage()")," to the list returned by the ",(0,t.yg)("inlineCode",{parentName:"li"},"getPackages()")," method"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Append the following lines to ",(0,t.yg)("inlineCode",{parentName:"p"},"android/settings.gradle"),":"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"include ':react-native-share'\nproject(':react-native-share').projectDir = new File(rootProject.projectDir,    '../node_modules/react-native-share/android')\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Insert the following lines inside the dependencies block in\n",(0,t.yg)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},"  implementation project(':react-native-share')\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("strong",{parentName:"p"},"(Optional)")," ",(0,t.yg)("a",{parentName:"p",href:"#adding-your-implementation-of-fileprovider"},"Follow this for implementing Provider")))),(0,t.yg)("h3",{id:"windows-install"},"Windows Install"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/ReactWindows/react-native"},"Read it! :D")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"yarn add react-native-share")),(0,t.yg)("li",{parentName:"ol"},"In Visual Studio add the ",(0,t.yg)("inlineCode",{parentName:"li"},"RNShare.sln")," in ",(0,t.yg)("inlineCode",{parentName:"li"},"node_modules/react-native-share/windows/RNShare.sln")," folder to their solution, reference from their app."),(0,t.yg)("li",{parentName:"ol"},"Open up your ",(0,t.yg)("inlineCode",{parentName:"li"},"MainPage.cs")," app")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Add ",(0,t.yg)("inlineCode",{parentName:"li"},"using Cl.Json.RNShare;")," to the usings at the top of the file"),(0,t.yg)("li",{parentName:"ul"},"Add ",(0,t.yg)("inlineCode",{parentName:"li"},"new RNSharePackage()")," to the ",(0,t.yg)("inlineCode",{parentName:"li"},"List<IReactPackage>")," returned by the ",(0,t.yg)("inlineCode",{parentName:"li"},"Packages")," method")),(0,t.yg)("h3",{id:"adding-your-implementation-of-fileprovider"},"Adding your implementation of FileProvider"),(0,t.yg)("p",null,"Follow this to implement your ",(0,t.yg)("inlineCode",{parentName:"p"},"FileProvider"),". If you have any doubt please you found more about that ",(0,t.yg)("a",{parentName:"p",href:"https://developer.android.com/training/secure-file-sharing/setup-sharing.html"},"here")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"applicationId")," should be defined in the ",(0,t.yg)("inlineCode",{parentName:"p"},"defaultConfig")," section in your ",(0,t.yg)("inlineCode",{parentName:"p"},"android/app/build.gradle"),":")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"File: ",(0,t.yg)("inlineCode",{parentName:"p"},"android/app/build.gradle")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},'defaultConfig {\n    applicationId "com.yourcompany.yourappname"\n    ...\n}\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Add this ",(0,t.yg)("inlineCode",{parentName:"p"},"<provider>")," section to your ",(0,t.yg)("inlineCode",{parentName:"p"},"AndroidManifest.xml")),(0,t.yg)("p",{parentName:"li"},"  File: ",(0,t.yg)("inlineCode",{parentName:"p"},"AndroidManifest.xml")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},'<application>\n    <provider\n        android:name="androidx.core.content.FileProvider"\n        android:authorities="${applicationId}.provider"\n        android:grantUriPermissions="true"\n        android:exported="false">\n        <meta-data\n            android:name="android.support.FILE_PROVIDER_PATHS"\n            android:resource="@xml/filepaths" />\n    </provider>\n</application>\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Create a ",(0,t.yg)("inlineCode",{parentName:"p"},"filepaths.xml")," under this directory: ",(0,t.yg)("inlineCode",{parentName:"p"},"android/app/src/main/res/xml"),"."),(0,t.yg)("p",{parentName:"li"},"  In this file, add the following contents:"),(0,t.yg)("p",{parentName:"li"},"  File: ",(0,t.yg)("inlineCode",{parentName:"p"},"android/app/src/main/res/xml/filepaths.xml")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<paths xmlns:android="http://schemas.android.com/apk/res/android">\n  <external-cache-path name="myexternalimages" path="Download/" />\n</paths>\n'))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Edit your ",(0,t.yg)("inlineCode",{parentName:"p"},"MainApplication.java")," class to add ",(0,t.yg)("inlineCode",{parentName:"p"},"implements ShareApplication")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"getFileProviderAuthority"))),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"The ",(0,t.yg)("inlineCode",{parentName:"p"},"getFileProviderAuthority")," function returns the ",(0,t.yg)("inlineCode",{parentName:"p"},"android:authorities")," value added in the ",(0,t.yg)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},(0,t.yg)("inlineCode",{parentName:"p"},"applicationId")," is defined in the ",(0,t.yg)("inlineCode",{parentName:"p"},"defaultConfig")," section of your ",(0,t.yg)("inlineCode",{parentName:"p"},"android/app/build.gradle")," and referenced using ",(0,t.yg)("inlineCode",{parentName:"p"},"BuildConfig.APPLICATION_ID")),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-java"},'import cl.json.ShareApplication\npublic class MainApplication extends Application implements ShareApplication, ReactApplication {\n\n     @Override\n     public String getFileProviderAuthority() {\n            return BuildConfig.APPLICATION_ID + ".provider";\n     }\n\n     // ...Your own code\n\n}\n')))),(0,t.yg)("h2",{id:"older-versions"},"Older versions"),(0,t.yg)("p",null,"If you need to use a older version of ",(0,t.yg)("inlineCode",{parentName:"p"},"react-native < 0.60"),", then you will need to run a:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add react-native-share@version\n")),(0,t.yg)("p",null,"Or with npm:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"npm i react-native-share@version --save\n")),(0,t.yg)("p",null,"You can look at all versions, that we published ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-share/releases"},"here"),"."),(0,t.yg)("h2",{id:"react-native-05910"},"react-native 0.59.10"),(0,t.yg)("p",null,"If you can't update your project to the most recent version of both react-native and react-native-share, please use ",(0,t.yg)("inlineCode",{parentName:"p"},"1.2.1"),". Alternatively you can use ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/mikehardy/jetifier#to-reverse-jetify--convert-node_modules-dependencies-to-support-libraries"},"jetifier")," running a ",(0,t.yg)("inlineCode",{parentName:"p"},"npx jetify -r"),"."))}u.isMDXComponent=!0}}]);