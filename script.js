// 스크린샷을 할 div 엘리먼트를 가져온다. width와 height가 설정돼 있어야 한다.
const captureDiv = document.getElementById('captureDiv');

// 버튼 등을 이용해서 적당한 때 함수를 호출한다.
makeDivToImageFile(captureDiv);

function saveAs(url, fileName) {
  const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
 
function makeDivToImageFile(captureDiv) {
  html2canvas(captureDiv, {
    allowTaint: true,
    useCORS: true,
    /* 아래 3 속성이 canvas의 크기를 정해준다. */
    width: captureDiv.offsetWidth,
    height: captureDiv.offsetHeight,
    scale: 1
  }).then(function (canvas) {
    const imageURL = canvas.toDataURL('image/jpeg'); 
    saveAs(imageURL, 'new file.jpg');
  }).catch(function (err) {
    console.log(err);
  });
}
 
