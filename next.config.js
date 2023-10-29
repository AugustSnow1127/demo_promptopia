// 這個文件是用來設定 Next.js 的設定檔，例如：webpack、Babel 等等
/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental是用來設定實驗性功能的，
  // 例如：serverComponentsExternalPackages是用來設定哪些套件要被打包成獨立的檔案，這樣就可以在server端使用
  // appDir是用來設定是否要將pages資料夾打包成獨立的檔案，這樣就可以在server端使用
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  // images是用來設定哪些網域可以使用Image Component
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  // webpack是用來設定webpack的設定檔
  // top-level await是用來讓程式碼可以在最上層使用await
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig