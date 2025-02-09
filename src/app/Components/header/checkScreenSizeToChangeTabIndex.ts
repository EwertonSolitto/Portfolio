export default function checkScreenSizeToChangeTabIndex() {
  if(window.screen.width >= 1024) {
    return 0
  } else {
    return -1
  }
}