// data/json.js
var json = {
  "001": [
      {
          "question": "汉服是",
          "option": {
              "A": "汉族的服装",
              "B": "汉朝的服装",
              "C": "唐朝的服装",
              "D": "明朝的服装",
          },
          "true": "A",   // 正确答案
          "type": 1,     // 类型 1 单选  2 多选
          "scores": 10,  // 分值
          "checked": false  // 默认没有选中
      },
      {
          "question": "以下哪些是汉服",
          "option": {
              "A": "旗袍",
              "B": "唐装",
              "C": "圆领袍",
              "D": "道袍",
          },
          "true": ["C", "D"],   // 正确答案
          "type": 2,     // 类型 1 单选  2 多选
          "scores": 10,  // 分值
          "checked": false  // 默认没有选中
      },
      //....省略
  ],
  "002": [
      // ...数据格式同上
  ]

}
module.exports = {
  questionList: json
}