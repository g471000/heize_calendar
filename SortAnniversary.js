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
