var anniversaryContainer = document.getElementById("anniversaryList");

function createAnniversaryCard(anniv) {
    var today = new Date();
    var releaseDate = new Date(anniv.release_date);

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
    var remainingDays = getRemainingDays(releaseDate);

    var anniversaryCard = document.createElement("div");
    anniversaryCard.className = "anniversaryList-card";

    var anniversaryTitle = document.createElement("div");
    anniversaryTitle.className = "anniversaryList-title";
    anniversaryTitle.textContent = anniv.title;

    var releaseDateText = document.createElement("div");
    releaseDateText.className = "release-date";
    releaseDateText.textContent = "기념일: " + anniv.release_date;

    var remainingDaysText = document.createElement("div");
    remainingDaysText.className = "remaining-days";
    remainingDaysText.textContent = "남은 날짜: " + remainingDays + "일";

    var anniversaryText = document.createElement("div");
    anniversaryText.className = "anniversary";
    if (anniv.show_anniversary !== false) {
        anniversaryText.textContent = "돌아오는 " + anniversaryYears + "주년";
    }

    // 남은 날짜에 따라 클래스 할당
    if (remainingDays <= 30) {
        remainingDaysText.classList.add("imminent");
    } else if (remainingDays <= 14) {
        remainingDaysText.classList.add("very-soon");
    } else if (remainingDays <= 7) {
        remainingDaysText.classList.add("soon");
    }

    anniversaryCard.appendChild(anniversaryTitle);
    anniversaryCard.appendChild(releaseDateText);
    anniversaryCard.appendChild(remainingDaysText);
    anniversaryCard.appendChild(anniversaryText);

    return anniversaryCard;
}

// 기념일 리스트 초기화
initializeAnniversaryList();
