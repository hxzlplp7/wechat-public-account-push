/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6b417c9e548a62d4',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '65cb00e4360bfb836eeac0daf211b8e0',

  PROVINCE: '湖北',
  CITY: '宜昌',

  USERS: [
    {
      // 想要发送的人的名字
      name: '娇娇',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ozGTa6Zo4Qr0pH7xH_70HtLNUSxw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'CVMCcSOFpHxmPbRUYCdfEXMkzy9kal7jQEnw4vCmeqw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-24',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '娇娇小朋友', year: '2003', date: '11-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '老庞', year: '2003', date: '05-01',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-22' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '老庞',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ozGTa6Zo4Qr0pH7xH_70HtLNUSxw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'CVMCcSOFpHxmPbRUYCdfEXMkzy9kal7jQEnw4vCmeqw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-24',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '娇娇小朋友', year: '2003', date: '11-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '老庞', year: '2003', date: '05-01',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-07-22' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '4k5ROifQwCRLzBfKv5iDij_Glj4wrvP-66QyOx_2_ag',

  CALLBACK_USERS: [
    {
      name: '老庞',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7g285_n1OxDWHBYcIKkX3mBB_fE',
    },
    {
      name: '娇娇',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o7g285wkSjyefNYTgk9Oaf5XPqyk',
    }
  ],

}

module.exports = USER_CONFIG

