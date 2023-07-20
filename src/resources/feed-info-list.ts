export type FeedInfo = {
  label: string;
  url: string;
};

const createFeedInfoList = (feedInfoTuples: [label: string, url: string][]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url] of feedInfoTuples) {
    feedInfoList.push({ label, url });
  }

  return feedInfoList;
};

// フィード情報一覧。アルファベット順
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  ['MATLAB For Everyone', 'https://matlabtutorial.github.io/feed'],
  ['게으른 매트랩', 'https://lazymatlab.tistory.com/feed'],
  ['허밍스테레오', 'https://hummingstereo.tistory.com/feed'],
  ['MATLAB&Simulink 공식 블로그', 'https://rss.blog.naver.com/matlablove'],
  ['MATLAB Korea 공식 유튜브 채널', 'https://www.youtube.com/feeds/videos.xml?channel_id=UC6Zjgg_0PQBm96aHeiXrjXQ'],
]);
