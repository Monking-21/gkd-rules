import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fenbi.android.leo',
  name: '小猿口算',
  groups: [
    {
      key: 1,
      name: '评分弹窗',
      quickFind: true,
      actionMaximum: 1,
      activityIds:
        'com.fenbi.android.leo.imgsearch.sdk.activity.NewCheckCameraActivity',
      rules: '@[text="残忍拒绝"] + [text*="好评"][text.length<=10]',
      snapshotUrls: 'https://i.gkd.li/i/13226140',
    },
  ],
});
