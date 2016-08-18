# cordova-xml

Edit cordova config.xml from the command line or via API. Uses the awesome [node-xmlpoke](https://github.com/mikeobrien/node-xmlpoke).

## Install
```
npm install --save-dev cordova-xml
```
or global:
```
npm install -g cordova-xml
```

## CLI Usage
```
cordova-xml <action> <args>
```

## CLI examples
```
cordova-xml setId com.example.myid --config /path/to/config.xml
cordova-xml setVersion 1.2.3
cordova-xml setId com.example.myid
cordova-xml setAndroidVersion 1.4.5
cordova-xml setIosVersion 1.1.2
cordova-xml setName TestApp
cordova-xml setDescription 'my app description'
cordova-xml setAuthorEmail 'email@example.com'
cordova-xml setAuthorName 'Author Authsson'
cordova-xml setAuthorWebsite 'http://example.com'
cordova-xml setXml "/w:widget/w:platform[@name='android']" '<test>hey</test>'
```

## lib examples
```
require('cordova-xml')().setId('com.example.myid')
require('cordova-xml')('/path/to/config.xml').setId('com.example.myid')
```

## Use xmlpoke directly
```
const cordovaXml = require('cordova-xml')();
cordovaXml.withPoke(xml => xml.add("/w:widget/w:platform[@name='android']/something", xml.XmlString('<text>hey</text>')));
```
See [node-xmlpoke](https://github.com/mikeobrien/node-xmlpoke) for more info.

## Related
https://github.com/ragingwind/cordova-config-cli - Inspiration. However this one mutates the XML doc more
