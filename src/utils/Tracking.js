// @flow
import uuid from 'uuid';
import Crypto from 'crypto-js';
import times from 'lodash/times';

import * as Debug from './DebugUtil';

export function getBrowserFingerprint() {
  try {
    const {
      userAgent,
      languages,
      deviceMemory,
      appVersion,
      cookieEnabled,
      hardwareConcurrency,
      platform,
      product,
      productSub,
      plugins,
    } = window.navigator;
    const {
      pixelDepth,
      colorDepth,
      width,
      height,
      orientation,
    } = window.screen;
    const data = {
      userAgent,
      languages,
      deviceMemory,
      appVersion,
      cookieEnabled,
      hardwareConcurrency,
      platform,
      product,
      productSub,
      plugins: getPlugins(plugins),
      screen: {
        pixelDepth,
        colorDepth,
        width,
        height,
        orientation: orientation.type,
      },
    };
    const jsonFingerprint = JSON.stringify(data);
    const b64Fingerprint = btoa(jsonFingerprint);
    const shaFingerprint = Crypto.SHA256(b64Fingerprint);
    return shaFingerprint.toString();
  } catch (error) {
    Debug.log(`Failed to create fingerprint: ${error.message}.`);
    return uuid.v4();
  }
}

function getPlugins(pluginArray: PluginArray) {
  return times(pluginArray.length, i => {
    const plugin = pluginArray[i];
    return {
      name: plugin.name,
      filename: plugin.filename,
      mimetype: plugin[0].type,
    };
  });
}
