# Eletron Beanstalk

使用 Electron Open Source 快速並且更易管理您的 AWS Beanstalk 伺服器

![electron-eb](https://s3-ap-northeast-1.amazonaws.com/yosgo-images/yosgo-electron-eb.png)

## Usage

在根目錄底下建立 .env 檔案，配置環境變數

```
AWS_KEY=YOUR_AWS_KEY
AWS_ID=YOUR_AWS_ID
AWS_REGION=YOUR_AWS_REGION
ENVIRONMENTS=envs

#envs 使用逗號隔開
ENVIRONMENTS=test-env,test-env2,test-env3
```

安裝 node_modules 相關套件

```
npm install
```

打包 Script 檔案

```
npm run build-dev
```

啟動 electron server

```
npm run dev
```

## License

MIT
