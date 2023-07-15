const siteUrlStem = 'https://matlabtutorial.github.io/MATLAB-blog-rss-feed-KR';
const siteUrl = `${siteUrlStem}/`;

module.exports = {
  // 사이트 설정
  siteUrl: `${siteUrl}`,
  siteUrlStem: siteUrlStem,
  siteTitle: 'MATLAB 블로그 RSS',
  siteDescription:
    'MATLAB 블로그 업데이트를 모아놓은 RSS 피드를 제공하고 있습니다. 이를 통해 MATLAB 관련 고품질의 기술 정보를 얻을 수 있도록 목적을 두고 있습니다.',

  // フィード設定
  feedTitle: 'MATLAB 블로그 RSS',
  feedDescription: 'MATLAB 테크 블로그의 업데이트를 모아둔 RSS 피드',
  feedLanguage: 'ko',
  feedCopyright: 'matlabtutorial/tech-blog-rss-feed',
  feedGenerator: 'matlabtutorial/tech-blog-rss-feed',
  feedUrls: {
    atom: `${siteUrl}feeds/atom.xml`,
    rss: `${siteUrl}feeds/rss.xml`,
    json: `${siteUrl}feeds/feed.json`,
  },

  // GitHub
  author: 'matlabtutorial',
  gitHubUserUrl: 'https://github.com/matlabtutorial/',
  gitHubRepositoryUrl: 'https://github.com/matlabtutorial/MATLAB-blog-rss-feed-KR/',

  // Google Analytics系。フォークして使う際は値を空にするか書き換えてください
  googleSiteVerification: '',
  globalSiteTagKey: '',

  // フィードの取得などに使う UserAgent
  requestUserAgent: 'facebookexternalhit/1.1; matlabtutorial/MATLAB-blog-rss-feed-KR',

  // サイトの追加方法のリンク
  howToAddSiteLink:
    'https://github.com/matlabtutorial/MATLAB-blog-rss-feed-KR#%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%B6%94%EA%B0%80-%EB%B0%A9%EB%B2%95',
};
