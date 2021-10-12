在package.json的scripts字段中配置如下：(这样在执行`npm publish`命令时，会进行版本管理)
```
"prepublishOnly":"publish-version"
```