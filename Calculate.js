

// albums 배열 사용 가능
var albumsContainer = document.getElementById("albums");

// 오늘 날짜 정보 가져오기
var today = new Date();

// 앨범 리스트 초기화 함수
function initializeAlbumList() {
    albumsContainer.innerHTML = "";
    albums.forEach(function(album) {
        var albumCard = createAlbumCard(album);
        albumsContainer.appendChild(albumCard);
    });
}

// 앨범 카드 생성 함수
function createAlbumCard(album) {
    var releaseDate = new Date(album.release_date);

    // 발매년도와 현재년도 비교
    var releaseYear = releaseDate.getFullYear();
    var currentYear = today.getFullYear();

    var anniversaryYears = currentYear - releaseYear + 1;

    var anniversaryDate = new Date(releaseDate);
    if (today < new Date(releaseYear, releaseDate.getMonth(), releaseDate.getDate())) {
        anniversaryDate.setFullYear(currentYear);
    } else {
        anniversaryDate.setFullYear(currentYear + 1);
    }

    // 남은 날짜 계산
    var remainingDays = getRemainingDays(releaseDate)

    // 주년까지 남은 요일 계산
    var remainingWeekdays = 0;
    var tempDate = new Date(today);
    while (tempDate < anniversaryDate) {
        if (tempDate.getDay() !== 0 && tempDate.getDay() !== 6) {
            remainingWeekdays++;
        }
        tempDate.setDate(tempDate.getDate() + 1);
    }

    var albumCard = document.createElement("div");
    albumCard.className = "album-card";

    var albumTitle = document.createElement("div");
    albumTitle.className = "album-title";
    albumTitle.textContent = album.title;

    var releaseDateText = document.createElement("div");
    releaseDateText.className = "release-date";
    releaseDateText.textContent = "발매일: " + album.release_date;

    var remainingDaysText = document.createElement("div");
    remainingDaysText.className = "remaining-days";
    remainingDaysText.textContent = "남은 날짜: " + remainingDays + "일";

    var anniversaryText = document.createElement("div");
    anniversaryText.className = "anniversary";
    anniversaryText.textContent = "돌아오는 " + anniversaryYears + "주년";

    // 남은 날짜에 따라 클래스 할당
    if (remainingDays <= 30) {
        remainingDaysText.classList.add("imminent");
    } else if (remainingDays <= 14) {
        remainingDaysText.classList.add("very-soon");
    } else if (remainingDays <= 7) {
        remainingDaysText.classList.add("soon");
    }

    albumCard.appendChild(albumTitle);
    albumCard.appendChild(releaseDateText);
    albumCard.appendChild(remainingDaysText);
    albumCard.appendChild(anniversaryText);

    return albumCard;
}