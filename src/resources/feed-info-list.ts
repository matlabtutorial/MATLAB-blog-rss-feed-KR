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
]);

/**
 * その他候補
 *
 * リニューアルされてフィードが消えたのでしばらくしたら確認
 * ['DMM', 'https://inside.dmm.com/feed'],
 *
 * できたばかりなので様子見
 * ['Amayz', 'https://blog.amayz.co.jp/?feed=rss2'],
 *
 * パースエラー修正
 * ['Qiita', 'https://zine.qiita.com/'],
 * ['サイバーディフェンス研究所', 'https://io.cyberdefense.jp/index.xml'],
 *
 * 日本語以外が交じるのを解消できたら入れたい
 * ['クラスメソッド', 'https://dev.classmethod.jp/feed'],
 *
 * 技術のカテゴリ切られてないので悩ましい
 * ['Ragate', 'https://www.ragate.co.jp/blog/'],
 *
 * 403 Forbidden
 * ['Cygames', 'https://tech.cygames.co.jp/feed/'],
 * ['AI Shift', 'https://www.ai-shift.co.jp/techblog/feed'],
 * ['BRANU', 'https://tech.branu.jp/feed'],
 *
 * 404
 * ['リクルートデータ', 'https://blog.recruit.co.jp/data/index.json'],
 * ['Findy Teams', 'https://engineering-org.findy-teams.com/feed.xml'],
 * ['KINTOテクノロジーズ', 'https://blog.kinto-technologies.com/feed.xml'],
 * ['テリロジー', 'https://terilogy-tech.hatenablog.com/feed'],
 * ['ヘイ データチーム', 'https://data.hey.jp/feed'],
 * ['FLINTERS', 'https://labs.septeni.co.jp/feed'],
 * ['crispy', 'https://blog.crispy-inc.com/feed'],
 *
 * 406
 * ['AsiaQuest', 'https://techblog.asia-quest.jp/rss.xml'],
 * ['Supership', 'https://www.wantedly.com/stories/s/Supership/rss.xml'],
 * ['Wantedly', 'https://www.wantedly.com/stories/s/wantedly_engineers/rss.xml'],
 *
 * 500
 * ['LIG', 'https://liginc.co.jp/technology/feed'],
 *
 * 503
 * ['フクロウラボ', 'https://developers.fukurou-labo.co.jp/feed/'],
 *
 * Error: unable to verify the first certificate
 * ['スペースマーケット', 'https://blog.spacemarket.com/category/code/feed/'],
 * ['エムアールピー', 'https://mrp-net.co.jp/tech_blog/feed'],
 *
 * pubDate なし
 * ['リクルート', 'https://engineers.recruit-jinji.jp/techblog/feed/']
 *
 * 削除された？
 * ['NAXA', 'https://blog.naxa.co.jp/feed'],
 * ['Reigle', 'https://www.reigle.info/feed'],
 * ['HiTTO', 'https://product-blog.hitto.co.jp/feed'],
 * ['グッドワークス', 'https://zenn.dev/goodworks/feed'],
 * ['Croooober', 'https://tech.croooober.co.jp/feed'],
 *
 * フィードなし。スクレイピング？
 * https://lab.mo-t.com/blog
 * https://tech-blog.sweeep.ai/
 * https://minedia-engineer-hub-minedia.vercel.app/
 * https://segaxd.co.jp/news/?category=blog
 * https://tech.smartshopping.co.jp/
 * https://olaris.jp/category/technology
 * https://licensecounter.jp/engineer-voice/blog/
 * https://tech.ilovex.co.jp/
 * https://developer.nvidia.com/ja-jp/blog/
 * https://www.vision-c.co.jp/engineerblog
 * https://www.cresco.co.jp/blog/
 * https://blog.genda.jp/creators/
 * https://lab.hokadoko.com/news/RTEPiK54
 * https://subthread.co.jp/blog/
 *
 * 日本語以外
 * https://medium.com/feed/mcdonalds-technical-blog
 * https://netflixtechblog.com/
 * https://discord.com/blog/
 * https://www.twilio.com/blog
 *
 * TODO: スライド系も追加？
 * https://speakerdeck.com/line_developers
 */
