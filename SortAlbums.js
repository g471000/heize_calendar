// 모든 앨범의 남은 날짜를 기준으로 앨범 리스트 정렬
function sortAlbumsByRemainingDays() {
    albums.sort(function(a, b) {
        var remainingDaysA = getRemainingDays(a.release_date);
        var remainingDaysB = getRemainingDays(b.release_date);

        return remainingDaysA - remainingDaysB;
    });

    initializeAlbumList();
}

// 발매일로 앨범 리스트 정렬
function sortAlbumsByReleaseDate() {
    albums.sort(function(a, b) {
        var releaseDateA = new Date(a.release_date);
        var releaseDateB = new Date(b.release_date);

        return releaseDateA - releaseDateB;
    });

    initializeAlbumList();
}

// 앨범 리스트 초기화
initializeAlbumList();

// 앨범의 남은 날짜 계산 함수
function getRemainingDays(releaseDate) {
    var today = new Date();
    var targetDate = new Date(releaseDate);

    targetDate.setFullYear(today.getFullYear());
    if (targetDate < today) {
        targetDate.setFullYear(today.getFullYear() + 1);
    }

    var remainingTime = targetDate.getTime() - today.getTime();
    var remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));

    return remainingDays;
}
