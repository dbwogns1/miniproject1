// 탭 버튼 클릭 시 제목 옆에 숫자 표시하는 함수
function updateTabTitles() {
  // 각 탭 버튼과 제목을 정의합니다.
  const tabs = [
    { id: 'tab1', title: '입출금/예적금', count: 3 },
    { id: 'tab2', title: '대출', count: 546 },
    { id: 'tab3', title: '외환', count: 20 },
    { id: 'tab4', title: '카드', count: 0 },
    { id: 'tab5', title: '투자', count: 0 }
  ];

  // 각 탭 버튼의 텍스트를 업데이트합니다.
  tabs.forEach(tab => {
    const tabButton = document.querySelector(`button[data-bs-target="#${tab.id}"]`);
    if (tabButton) {
      tabButton.textContent = `${tab.title} (${tab.count})`;
    }
  });
}

// DOM이 완전히 로드된 후에 함수 실행
document.addEventListener('DOMContentLoaded', updateTabTitles);