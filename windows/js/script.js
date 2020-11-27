// -------------------------------------------------------------
// この「cman_winOpen()」を使用すると、指定の画面が表示されます
// -------------------------------------------------------------

function cman_winOpen(){
  var wH = cman_calH("DISP", "1");  // 最大高さの計算
  var wW = cman_calW("DISP", "4");  // 横幅1/4の計算
  var wT = cman_calT("DISP", "RB", wH);  // モニター中央 Top計算
  var wL = cman_calL("DISP", "RB", wW);  // モニター中央 Left計算
  var wOption = "top=" + wT + ", left=" + wL + ", height=" + wH + ", width=" + wW;

  // 画面を開く
  var winObj = window.open("https://wcss-da547.firebaseapp.com/", "_blank", wOption);
  winObj.focus();

  try{
    winObj.resizeTo(wW,wH);
    winObj.moveTo(wL,wT);
  } catch(e){
  }

  delete winObj;

}

// -----------------------------------------
// 以下は汎用関数です。このまま使用ください
// -----------------------------------------
// 開く画面の高さ計算（px値でreturn）
function cman_calH( argDispOrHtml, argSize ){
  var wH = argDispOrHtml == "HTML" ? document.documentElement.clientHeight : screen.availHeight;
  if(!wH){return 100;}
  switch ( argSize ) {
    case "1":                          break;
    case "2": wH = Math.floor(wH / 2); break;
    case "3": wH = Math.floor(wH / 3); break;
    case "4": wH = Math.floor(wH / 4); break;
    default : wH = 100;                break;
  }
  if(wH < 100){return 100;}else{return wH;}
}
// 開く画面の横幅計算（px値でreturn）
function cman_calW( argDispOrHtml, argSize ){
  var wW = argDispOrHtml == "HTML" ? document.documentElement.clientWidth : screen.availWidth;
  if(!wW){return 100;}
  switch ( argSize ) {
    case "1":                          break;
    case "2": wW = Math.floor(wW / 2); break;
    case "3": wW = Math.floor(wW / 3); break;
    case "4": wW = Math.floor(wW / 4); break;
    default : wW = 100;                break;
  }
  if(wW < 100){return 100;}else{return wW;}
}
// 開く画面の開始縦位置を計算（px値でreturn）
function cman_calT( argDispOrHtml, argPos , argHeight ){
  var wBaseT = 0;
  if(argDispOrHtml == "HTML"){
    wBaseT = document.body.scrollTop;
    if(!wBaseT){wBaseT=0;}
  }
  var wH = argDispOrHtml == "HTML" ? document.documentElement.clientHeight : screen.availHeight;
  if(!wH){wH = 0;}
  var wTop = 0;
  switch ( argPos ) {
    case "CC": wTop = Math.floor((wH - argHeight) / 2) + wBaseT; break;
    case "LT": wTop = wBaseT; break;
    case "RT": wTop = wBaseT; break;
    case "RB": wTop = Math.floor(wH - argHeight) + wBaseT; break;
    case "LB": wTop = Math.floor(wH - argHeight) + wBaseT; break;
  }
  if(wTop < 0){return 0;}else{return wTop;}
}
// 開く画面の開始横位置を計算（px値でreturn）
function cman_calL( argDispOrHtml, argPos , argWidth ){
  var wBaseL = 0;
  if(argDispOrHtml == "HTML"){
    wBaseL = window.screenX || window.screenLeft;
    if(!wBaseL){wBaseL=0;}
  }
  var wW = argDispOrHtml == "HTML" ? document.documentElement.clientWidth : screen.availWidth;
  if(!wW){wW = 0;}
  var wLeft = 0;
  switch ( argPos ) {
    case "CC": wLeft = Math.floor((wW - argWidth) / 2) + wBaseL; break;
    case "LT": wLeft = wBaseL; break;
    case "RT": wLeft = Math.floor(wW - argWidth) + wBaseL; break;
    case "RB": wLeft = Math.floor(wW - argWidth) + wBaseL; break;
    case "LB": wLeft = wBaseL; break;
  }
  if(wLeft < 0){return 0;}else{return wLeft;}
}
