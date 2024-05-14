import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhouyu.music',
  name: '微音乐',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      activityIds: 'com.zhouyu.music.activities.MainActivity',
      rules: '@[id=null][clickable=true] + View >n View [text$="广告"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13062330',
        'https://i.gkd.li/i/13068583',
        'https://i.gkd.li/i/13231850',
      ],
      exampleUrls:
        'https://github.com/gkd-kit/inspect/assets/38517192/798afc53-4aaf-481f-acb1-7c193bd8e6d6',
    },
    {
      key: 2,
      name: '搜索底部广告',
      quickFind: true,

      activityIds: 'com.zhouyu.music.activities.MainActivity',
      rules: '[id="com.zhouyu.music:id/ksad_ad_dislike"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13245859', //launcher
      ],
    },
  ],
});