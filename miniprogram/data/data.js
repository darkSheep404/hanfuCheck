// data/json.js
var json = {
  "001": [{
      "question": "汉服是",
      "option": {
        "A": "汉族的服装",
        "B": "汉朝的服装",
        "C": "唐朝的服装",
        "D": "明朝的服装",
      },
      "true": "A", // 正确答案
      "type": 1, // 类型 1 单选  2 多选
      "scores": 10, // 分值
      "checked": false // 默认没有选中
    },
    {
      "question": "以下哪些是汉服",
      "option": {
        "A": "旗袍",
        "B": "唐装",
        "C": "圆领袍",
        "D": "道袍",
      },
      "true": ["C", "D"], // 正确答案
      "type": 2, // 类型 1 单选  2 多选
      "scores": 10, // 分值
      "checked": false // 默认没有选中
    },
    {
      "question": "上下分裁的汉服,下面部分的名称",
      "option": {
        "A": "衣",
        "B": "裳",
        "C": "深衣",
        "D": "衽",
      },
      "true": "B", // 正确答案
      "type": 1, // 类型 1 单选  2 多选
      "scores": 10, // 分值
      "checked": false // 默认没有选中
    }, {
      "question": "流行于明代并流传到藩属国朝鲜的汉服女装是",
      "option": {
        "A": "曲裾",
        "B": "齐胸襦裙",
        "C": "齐腰襦裙",
        "D": "袄裙",
      },
      "true": "D", // 正确答案
      "type": 1, // 类型 1 单选  2 多选
      "scores": 10, // 分值
      "checked": false // 默认没有选中
    }, {
      "question": "道袍中的'道'意思是",
      "option": {
        "A": "道理",
        "B": "道士",
        "C": "道德",
        "D": "道路",
      },
      "true": "A", // 正确答案
      "type": 1, // 类型 1 单选  2 多选
      "scores": 10, // 分值
      "checked": false // 默认没有选中
    }, {
      "question": "汉服通常为左衽还是右衽,即",
      "option": {
        "A": "左衽",
        "B": "右衽",
        "C": "左压右",
        "D": "右压左",
      },
      "true": ["B", "C"], // 正确答案
      "type": 2, // 类型 1 单选  2 多选
      "scores": 10, // 分值
      "checked": false // 默认没有选中
    },
    {
      "question": "唐装,旗袍和汉服的区别",
      "option": {
        "A": "唐装是唐朝服装,汉服是汉朝服装,旗袍是清朝服装",
        "B": "唐装为满族马褂演变,不属于汉族民族服装",
        "C": "旗袍是采用西式立体裁剪的的满族服饰旗装演变而来",
        "D": "汉服是汉族民族服装",
      },
      "true": ["B", "C", "D"], // 正确答案
      "type": 2, // 类型 1 单选  2 多选
      "scores": 10, // 分值
      "checked": false // 默认没有选中
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