let youtubePlayer;
document.getElementById('modalCloseButton').addEventListener('click', () => { sethidden(); });
// 페이지 로드 시 YouTube API를 로드합니다.
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
tag.onload = onYouTubeIframeAPIReady; // 스크립트 로딩 완료 후 호출
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  youtubePlayer = new YT.Player('player', {
    videoId: '_OGyLUa9E10', // videoId를 지정하고,
    playerVars: {
      rel: 0
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function nonehidden() //모달 창을 화면에 띄우고 body의 스크롤 제어 및 iframe의 유튜브 영상 재생
{
  document.getElementById('modalContainer').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  playVideo();
}

function sethidden() //모달 창을 화면에서 없에고 body의 스크롤 활성화 및 iframe의 유튜브 영상 일시 중지
{
  document.getElementById('modalContainer').classList.add('hidden');
  document.body.style.overflow = 'unset';
  pauseVideo();
}

function playVideo() {
  if (youtubePlayer && typeof youtubePlayer.pauseVideo === 'function') 
  {
    youtubePlayer.playVideo();
  }
}

function pauseVideo() {
  if (youtubePlayer && typeof youtubePlayer.pauseVideo === 'function') {
    youtubePlayer.pauseVideo();
  }
}

