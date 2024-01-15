let player; // player 변수를 전역으로 선언

document.getElementById('modalCloseButton').addEventListener('click', () => {
    sethidden();
});

function nonehidden() {
  document.getElementById('modalContainer').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (typeof YT !== 'undefined' && YT.Player) {
      onYouTubeIframeAPIReady();
  } else {
      // 직접 YouTube API 스크립트를 로드
      loadYouTubeAPI();
  }
}

function sethidden() {
    document.getElementById('modalContainer').classList.add('hidden');
    document.body.style.overflow = 'unset';
    stopVideo();
}

function loadYouTubeAPI() {
  // YouTube API 스크립트를 동적으로 로드합니다.
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  tag.onload = onYouTubeIframeAPIReady; // 스크립트 로딩 완료 후 호출
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
  if (typeof YT !== 'undefined' && YT.Player) {
      player = new YT.Player('player', {
          events: {
              'onReady': onPlayerReady
          }
      });
  }
}

function onPlayerReady(event) {
    // 동영상 준비 후 추가 작업이 필요하면 이곳에 작성합니다.
}

function playVideo() {
    if (player) {
        player.playVideo();
    }
}

function stopVideo() {
    if (player) {
        player.stopVideo();
    }
}

// 페이지 로드 시 YouTube API를 로드합니다.
loadYouTubeAPI();