const siteUrlStem = 'https://matlabtutorial.github.io/MATLAB-blog-rss-feed-KR';
const siteUrl = `${siteUrlStem}/`;

export default {
  // サイト設定
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
  
  // 処理の設定
  feedFetchConcurrency: 50, // フィードを取得する並列数
  feedOgFetchConcurrency: 20, // OG情報を取得する並列数
  aggregateFeedDurationInHours: 8 * 24, // まとめフィードの対象となる時間の範囲
  maxFeedDescriptionLength: 200, // フィードのdescriptionの最大文字数
  maxFeedContentLength: 500, // フィードのcontentの最大文字数
  processImageConcurrency: 50, // 画像の処理の並列数。画像取得と変換
  eleventyFetchConcurrency: 50, // Eleventyの画像取得の並列数
  fetchedFeedCacheDurationInHours: 1, // フィードのキャッシュの有効時間
  fetchedOgCacheDurationInHours: 24, // OG情報のキャッシュの有効時間
};
