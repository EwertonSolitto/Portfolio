import TabIndex from "@/models/types/TabIndex"

export default function checkScreenSizeToChangeTabIndex(currentTabIndex: TabIndex) {
  const screenSize = window.screen.width

  if(screenSize >= 1024) {
    return currentTabIndex
  }
  if(currentTabIndex === 0) {
    return -1
  }
  return 0
}