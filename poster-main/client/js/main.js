import { data } from "./data.js"
import { AudioPlayer } from "./audio.js"
const nicknameElement = document.querySelector(".nickName");
const visualElement = document.querySelector(".visual > div > img");
const navItems = document.querySelectorAll(".nav li");

let audioPlayer = null;

navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // 클래스 상태 변경
      changeActiveItem(navItems, item);
  
      // 이미지 변경
      setImage(visualElement, data[index]);
  
      // 텍스트 변경
      setNameText(nicknameElement, data[index].name);
      
      // 배경색 변경
      setBgColor(data[index].color);

      if (audioPlayer) {
        audioPlayer.stop();  // 이전 오디오 중지
      }
  
      // 새 오디오 파일로 AudioPlayer 인스턴스 생성
      audioPlayer = new AudioPlayer(data[index].audio);
      
      // 새 오디오 재생
      audioPlayer.play();
    });
  });


function changeActiveItem(navItems, activeItem){
    navItems.forEach((item)=>{
        item.classList.remove("is-active");
    })
    activeItem.classList.add("is-active");
}

function setImage(imageElement, { name, alt }) {
    imageElement.src = `./assets/${name.toLowerCase()}.jpeg`; // 이미지 경로 업데이트
    imageElement.alt = alt; // 이미지 설명 업데이트
}

function setNameText(textElement, text) {
    textElement.textContent = text; // 캐릭터 이름 변경
}

function setBgColor([primaryColor, secondaryColor]) {
    document.body.style.background = `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`;
}