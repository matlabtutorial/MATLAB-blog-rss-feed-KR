import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.locale('ko');
dayjs.tz.setDefault('Asia/Seoul');

export default async () => {
  const feedDataModule = await import('../feeds/feed.json');
  const feedData = feedDataModule.default;

  let feedItems = feedData.items;

  // 直近1週間分
  feedItems = feedItems.filter((feedItem) => {
    return dayjs(feedItem.date_published) > dayjs().subtract(180, 'd'); // 원래는 180이 아니라 7이었음.
  });

  // データ調整
  for (const feedItem of feedItems) {
    feedItem.diffDateForHuman = dayjs().to(feedItem.date_published);
    feedItem.pubDateForHuman = dayjs(feedItem.date_published).tz().format('YYYY-MM-DD HH:mm:ss');
  }

  const feedItemsChunks = {};

  for (const feedItem of feedItems) {
    const dateString = dayjs(feedItem.date_published).tz().format('M/D (dd)');

    if (!feedItemsChunks[dateString]) {
      feedItemsChunks[dateString] = [];
    }

    feedItemsChunks[dateString].push(feedItem);
  }

  return feedItemsChunks;
};
