### 前端演示项目

frontDemo - 前端演示项目
index.html
index.js
index.bundle.js
sjfwUtils.min.js
utilsBuild - utils 打包的成果文件夹
utils.js - 工具函数
webpack.config.js - frontDemo 的 打包文件
webpack.utils.config - 打包 utils 的线上环境

### sjfwUtils.min.js 用法

所有函数介绍

```
NowTimestamp
  获取当前时间戳，参数空
RandomString
  获取随机字符串，支持参数（传入需要返回字符串的长度）
MD5Encrypted
  Md5加密，支持参数 (传入需要加密的内容)
RSAEncrypted
  RSA加密，支持参数（需要加密的内容，rsa公钥）
RSADecrypted
  RSA加密，支持参数（需要加密的内容，rsa私钥）
RSAPublicDecrypted
  解密RSA私钥加密的字符串，用公钥解密，支持参数（需要解密的内容，rsa公钥）
AESEncrypted - 注意 aes采用了
    iv, // 偏移量
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  AES加密，支持参数（需要加密的内容，秘钥）
AESDecrypted
  AES解密，支持参数（需要解密的内容，秘钥）
```

模块导入用法示例

```
import {
  NowTimestamp,
  RandomString,
  MD5Encrypted,
  RSAEncrypted,
  RSAPublicDecrypted,
  AESEncrypted,
  AESDecrypted,
} from './sjfwUtils.umd.min.js';
```

全局变量使用用法示例

```
<script src="./sjfwUtils.umd.min.js"></script>
<script>
  window.NowTimestamp()
  window.RandomString()
</script>
```

esm 用法

```
<script type="module">
import {
  NowTimestamp,
  RandomString,
  MD5Encrypted,
  RSAEncrypted,
  RSAPublicDecrypted,
  AESEncrypted,
  AESDecrypted,
} from './sjfwUtils.es.min.js';
</script>

```
