declare namespace dfi {
  export interface FingerprintAttribute {
    isUsed: boolean = false;
    value: any = undefined;
  }

  export interface DeviceFingerprint {
    HTTPHeaders: {
      UserAgent: FingerprintAttribute;
      Accept: FingerprintAttribute;
      ContentEncoding: FingerprintAttribute;
      ContentLanguage: FingerprintAttribute;
      IfNoneMatch: FingerprintAttribute;
      CacheControl: FingerprintAttribute;
      DoNotTrack: FingerprintAttribute;
    };
    Javascript: {
      UserAgent: FingerprintAttribute;
      Platform: FingerprintAttribute;
      CookiesEnabled: FingerprintAttribute;
      Timezone: FingerprintAttribute;
      ContentLanguage: FingerprintAttribute;
      Canvas: FingerprintAttribute;
      ListOfFonts: FingerprintAttribute;
      UseOfAdblock: FingerprintAttribute;
      DoNotTrack: FingerprintAttribute;
      NavigatorProperties: FingerprintAttribute;
      BuildID: FingerprintAttribute;
      Product: FingerprintAttribute;
      ProductSub: FingerprintAttribute;
      Vendor: FingerprintAttribute;
      VendorSub: FingerprintAttribute;
      HardwareConcurrency: FingerprintAttribute;
      JavaEnabled: FingerprintAttribute;
      DeviceMemory: FingerprintAttribute;
      ListOfPlugins: FingerprintAttribute;
      ScreenWidth: FingerprintAttribute;
      ScreenHeight: FingerprintAttribute;
      ScreenDepth: FingerprintAttribute;
      ScreenAvailableTop: FingerprintAttribute;
      ScreenAvailableLeft: FingerprintAttribute;
      ScreenAvailableHeight: FingerprintAttribute;
      ScreenAvailableWidth: FingerprintAttribute;
      Permissions: FingerprintAttribute;
      WebGLVendor: FingerprintAttribute;
      WebGLRenderer: FingerprintAttribute;
      WebGLData: FingerprintAttribute;
      WebGLParameters: FingerprintAttribute;
      UseOfLocalStorage: FingerprintAttribute;
      UseOfSessionStorage: FingerprintAttribute;
      UseOfIndexedDB: FingerprintAttribute;
      AudioFormats: FingerprintAttribute;
      AudioContext: FingerprintAttribute;
      FrequencyAnalyzer: FingerprintAttribute;
      AudioData: FingerprintAttribute;
      VideoFormats: FingerprintAttribute;
      MediaDevices: FingerprintAttribute;
      Accelerometer: FingerprintAttribute;
      Gyroscope: FingerprintAttribute;
      ProximitySensor: FingerprintAttribute;
      KeyboardLayout: FingerprintAttribute;
      Battery: FingerprintAttribute;
      Connection: FingerprintAttribute;
      Key: FingerprintAttribute;
      LocationBar: FingerprintAttribute;
      MenuBar: FingerprintAttribute;
      PersonalBar: FingerprintAttribute;
      StatusBar: FingerprintAttribute;
      ToolBar: FingerprintAttribute;
      ResultState: FingerprintAttribute;
      ListOfFontsFlash: FingerprintAttribute;
      ScreenResolutionFlash: FingerprintAttribute;
      LanguageFlash: FingerprintAttribute;
    };
  }
}
