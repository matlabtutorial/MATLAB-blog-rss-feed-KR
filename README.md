# <img src="src/site/images/icon-transparent.png" height=26> 기업 테크 블로그 RSS
기업의 테크 블로그 업데이트를 모아놓은 RSS 피드를 제공하고 있습니다. 해당 기업의 기술과 문화를 알 수 있으며, 고품질의 기술 정보를 얻을 수 있도록 목적을 두고 있습니다.

https://matlabtutorial.github.io/MATLAB-blog-rss-feed-KR/

자체 피드를 만들어 공개하고자 하는 경우 자유롭게 포크해주세요.

## 사이트 추가 정책
MATLAB 블로그라면 기본적으로 추가합니다. 하지만 다음에 해당하는 경우에는 고려합니다.

- 해당 기업의 노력과는 관련이 없을 수 있는 많은 게시물이 게시되는 블로그
  - 기술 관련 미디어
  - Qiita Organization 등 조직으로 게시하는 것과 관련이 애매한 경우
- 기사가 자사 제품 소개만 있는 경우
- 한국어 이외의 언어로 작성된 기사가 많은 블로그

반대로 다음은 테크 블로그로 간주하여 추가하고 있습니다.

- [Zenn](https://zenn.dev/), [note](https://note.com/), [Medium](https://medium.com/) 등 기업 계열의 테크 블로그
- 기업 계열 블로그의 기술 카테고리

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

### 포크하여 사용하는 경우
다음을 수정하면 자체 사이트가 작동합니다.

- `src/common/constants.js`의 URL 등
- `src/resources/feed-info-list.ts`의 블로그 정보

특정 블로그에 집중하거나 다음과 같이 완전히 다른 피드를 만드는 것도 좋을 것입니다.

- [MATLAB-blog-rss-feed](https://github.com/minoue-xx/MATLAB-blog-rss-feed) ... MATLAB/Simulink 관련 블로그의 업데이트를 모아놓은 RSS 피드를 제공

### 개발용 명령어
피드 생성 및 사이트 실행
```bash
$ # 피드 가져와서 생성
$ yarn feed:generate

$ # localhost:8080에서 확인
$ yarn site:serve
```

코드 체크
```bash
$ # 린트
$ yarn lint

$ # 테스트
$ yarn test
```

## 라이선스
MIT