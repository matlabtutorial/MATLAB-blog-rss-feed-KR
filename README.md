# <img src="src/site/images/icon-transparent.png" height=26> MATLAB 블로그 RSS
MATLAB 블로그 업데이트를 모아놓은 RSS 피드를 제공하고 있습니다. 

https://matlabtutorial.github.io/MATLAB-blog-rss-feed-KR/

원본 레포는 [yamadashy님의 tech-blog-rss-feed](https://github.com/yamadashy/tech-blog-rss-feed)입니다.

## 사이트 추가 정책
한국 MATLAB 블로그라면 기본적으로 추가합니다. 하지만 다음에 해당하는 경우에는 고려합니다.

- 한국어 이외의 언어로 작성된 기사가 많은 블로그

## 사이트 추가 방법
[src/resources/feed-info-list.ts](https://github.com/matlabtutorial/MATLAB-blog-rss-feed-KR/blob/main/src/resources/feed-info-list.ts)에서 관리하고 있으며, 목록에 없는 경우 이슈를 작성해주시면 대응하겠습니다.

### Pull Request를 보내는 방법
Pull Request를 보내주실 경우 다음과 같이 작성할 수 있습니다.

1. 이 리포지토리를 포크합니다.
2. 브랜치를 생성합니다.
   `git checkout -b new-blog-feed-xxx`
3. 피드를 추가합니다.
   `src/resources/feed-info-list.ts`의 `FEED_INFO_LIST`를 업데이트합니다.
4. 커밋합니다.
   `git commit -am 'add: 새로운 피드 추가`
5. 푸시합니다.
   `git push origin new-blog-feed-xxx`
6. Pull Request를 생성합니다.

## 개발

### 메커니즘
GitHub Actions를 사용하여 정기적으로 업데이트되며, 사이트 생성에는 [Eleventy](https://www.11ty.dev/)를 사용합니다.

업데이트는 다소 지연이 있을 수 있으며, 다음 타이밍에 수행됩니다.
- 평일 8시부터 24시까지 1시간마다
- 휴일 8시부터 24시까지 2시간마다

## 라이선스
MIT