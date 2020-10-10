module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-plusplus": "off", // ESLint认为一元操作符，是不安全的，所以禁止使用
    "semi": "off", // 关闭语句强制分号结尾
    "linebreak-style": "off", // 换行风格
    "comma-dangle": ["error", "never"], // 对象字面量项尾不能有逗号
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
