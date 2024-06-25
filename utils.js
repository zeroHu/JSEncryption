import CryptoJS from 'crypto-js';
import JsEncrypt from 'jsencrypt';
import { parseBigInt } from 'jsencrypt/lib/lib/jsbn/jsbn';

const encryptJS = new JsEncrypt();
const AES_IV = 'e3ki*******53m';
/**
 * 生成随机字符串
 * @param {*} len 需要的随机字符串的长度
 * @returns
 */
export const RandomString = (len = 16) => {
  let strVals = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  let maxLen = strVals.length;
  let randomStr = '';
  for (var i = 0; i < len; i++) {
    randomStr += strVals.charAt(Math.floor(Math.random() * maxLen));
  }
  return randomStr;
};

/**
 * 生成时间戳
 * @returns
 */
export const NowTimestamp = () => {
  return Date.now();
};

/**
 * MD5 加密
 * @param {*} data - 需要加密的参数
 * @returns
 */
export const MD5Encrypted = data => {
  return CryptoJS.MD5(data).toString();
};

/**
 * RSA 加密
 * @param {*} data  - 需要加密的参数
 * @returns
 */
export const RSAEncrypted = (data, RSA_PUBLIC) => {
  const publicKey = `-----BEGIN PUBLIC KEY-----\n${RSA_PUBLIC}\n-----END PUBLIC KEY-----`;
  encryptJS.setPublicKey(publicKey);
  return encryptJS.encrypt(data);
};

/**
 * RSA 私钥解密
 * @param {*} data - 需要解密的参数
 * @param {*} RSA_PRIVATE - 解密的秘钥
 * @returns
 */
export const RSADecrypted = (data, RSA_PRIVATE) => {
  const deCryptKey = `-----BEGIN RSA PRIVATE KEY-----\n${RSA_PRIVATE}\n-----END RSA PRIVATE KEY-----`;
  encryptJS.setPrivateKey(deCryptKey);
  return encryptJS.decrypt(data);
};

/**
 * RSA 公钥解密
 * @param {*} data - 需要解密的参数
 * @returns
 */
export const RSAPublicDecrypted = (data, RSA_PUBLIC) => {
  const encrypt = new JsEncrypt();
  const publicKey = RSA_PUBLIC;
  encrypt.setPublicKey(publicKey);

  const rsaKey = encrypt.getKey();
  rsaKey.decrypt = function (cText) {
    var c = parseBigInt(cText, 16);
    var m = this.doPublic(c);
    if (m == null) {
      return null;
    }
    return pkcs1unpad2(m, (this.n.bitLength() + 7) >> 3);
  };

  // RSAPublicDecrypted 辅助函数
  function pkcs1unpad2(d, n) {
    var b = d.toByteArray();
    var i = 0;
    while (i < b.length && b[i] === 0) {
      ++i;
    }
    ++i;
    while (b[i] !== 0) {
      if (++i >= b.length) {
        return null;
      }
    }
    var ret = '';
    while (++i < b.length) {
      var c = b[i] & 255;
      if (c < 128) {
        // utf-8 decode
        ret += String.fromCharCode(c);
      } else if (c > 191 && c < 224) {
        ret += String.fromCharCode(((c & 31) << 6) | (b[i + 1] & 63));
        ++i;
      } else {
        ret += String.fromCharCode(
          ((c & 15) << 12) | ((b[i + 1] & 63) << 6) | (b[i + 2] & 63)
        );
        i += 2;
      }
    }
    return ret;
  }
  return encrypt.decrypt(data);
};

/**
 * AES 加密
 * @param {*} data - 需要aes加密的参数
 * @param {*} secret - ase 加密的秘钥
 * @returns
 */
export const AESEncrypted = (data, secret) => {
  let key = CryptoJS.enc.Utf8.parse(secret);
  let iv = CryptoJS.enc.Utf8.parse(AES_IV);
  let seData = CryptoJS.enc.Utf8.parse(data);

  let encrypted = CryptoJS.AES.encrypt(seData, key, {
    iv, // 偏移量
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  });
  return encrypted.toString();
};

/**
 * AES 解密
 * @param {*} data - 需要ase解密的参数
 * @param {*} secret - 解密的秘钥
 * @returns
 */
export const AESDecrypted = (data, secret) => {
  var key = CryptoJS.enc.Utf8.parse(secret);
  let iv = CryptoJS.enc.Utf8.parse(AES_IV);

  var decrypt = CryptoJS.AES.decrypt(data, key, {
    iv, // 偏移量
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  });

  return decrypt.toString(CryptoJS.enc.Utf8);
};
