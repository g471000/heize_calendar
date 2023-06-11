var anniversaryContainer = document.getElementById("anniversaryList");

// 앨범 리스트 초기화 함수
function initializeAnniversaryList() {
    anniversaryList.sort(function(a, b) {
        if (a.id === 1) {
            return -1; // a가 생일인 경우 a를 먼저 정렬
        } else if (b.id === 1) {
            return 1; // b가 생일인 경우 b를 먼저 정렬
        } else if (a.id === 2) {
            return -1; // a가 볼륨 카드인 경우 a를 먼저 정렬
        } else if (b.id === 2) {
            return 1; // b가 볼륨 카드인 경우 b를 먼저 정렬
        } else {
            return 0; // 생일과 볼륨 카드가 아닌 경우 원래 순서 유지
        }
    });

    anniversaryContainer.innerHTML = "";
    anniversaryList.forEach(function(anniv) {
        var anniversaryCard = Calculate.createAnniversaryCard(anniv);
        anniversaryCard.classList.add(anniv.className); // 클래스 추가
        anniversaryContainer.appendChild(anniversaryCard);
    });
}


// 기념일 리스트를 남은 날짜로 정렬
function sortAnniversaryByRemainingDays() {
    anniversaryList.sort(function(a, b) {
        var remainingDaysA = getRemainingDays(new Date(a.release_date));
        var remainingDaysB = getRemainingDays(new Date(b.release_date));

        return remainingDaysA - remainingDaysB;
    });

    initializeAnniversaryList();
}

// 기념일 리스트를 발매일로 정렬
function sortAnniversaryByDate() {
    anniversaryList.sort(function(a, b) {
        var releaseDateA = new Date(a.release_date);
        var releaseDateB = new Date(b.release_date);

        return releaseDateA - releaseDateB;
    });

    initializeAnniversaryList();
}

// 기념일 리스트 초기화
initializeAnniversaryList();


// 기념일 남은 날짜 계산 함수
function getRemainingDays(anniversaryDate) {
    var today = new Date();
    var targetDate = new Date(anniversaryDate);

    targetDate.setFullYear(today.getFullYear());
    if (targetDate < today) {
        targetDate.setFullYear(today.getFullYear() + 1);
    }

    var remainingTime = targetDate.getTime() - today.getTime();
    var remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));

    return remainingDays;
}
