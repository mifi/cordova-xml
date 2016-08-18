'use strict';

const xmlpoke = require('xmlpoke');

module.exports = configxml;

function configxml(inFile) {
  const defaultFile = 'config.xml';
  const file = inFile || defaultFile;

  function poke(cb) {
    // https://github.com/mikeobrien/node-xmlpoke/issues/3
    xmlpoke(file, xml => cb(xml.addNamespace('w', 'http://www.w3.org/ns/widgets')));
  }

  function set(xpath, val) {
    poke(xml => xml.setOrAdd(xpath, val));
  }

  return {
    setId: set.bind(null, '/w:widget/@id'),
    setAndroidId: set.bind(null, '/w:widget/@android-packageName'),
    setIosId: set.bind(null, '/w:widget/@ios-CFBundleIdentifier'),
    setVersion: set.bind(null, '/w:widget/@version'),
    setAndroidVersion: set.bind(null, '/w:widget/@android-versionCode'),
    setIosVersion: set.bind(null, '/w:widget/@ios-CFBundleVersion'),
    setName: set.bind(null, '/w:widget/w:name'),
    setDescription: set.bind(null, '/w:widget/w:description'),
    setAuthorEmail: set.bind(null, '/w:widget/w:author/@email'),
    setAuthorName: set.bind(null, '/w:widget/w:author'),
    setAuthorWebsite: set.bind(null, '/w:widget/w:author/@href'),
    setXml: (xpath, xmlStr) => poke(xml => xml.setOrAdd(xpath, xml.XmlString(xmlStr))),
    withPoke: poke,
  }
}
