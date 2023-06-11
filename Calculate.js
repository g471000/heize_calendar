function createAnniversaryCard(anniv) {
    var today = new Date();
    var releaseDate = new Date(anniv.release_date);

    // 발매년도와 현재년도 비교
    var releaseYear = releaseDate.getFullYear();
    var currentYear = today.getFullYear();

    var anniversaryYears = currentYear - releaseYear;

    var anniversaryDate = new Date(releaseDate);
    if (today < new Date(releaseYear, releaseDate.getMonth(), releaseDate.getDate())) {
        anniversaryDate.setFullYear(currentYear);
    } else {
        anniversaryDate.setFullYear(currentYear + 1);
    }

    // 남은 날짜 계산
    var remainingDays = getRemainingDays(releaseDate);

    // 카드 생성
    const anniversaryCard = document.createElement("div");
    anniversaryCard.className = "anniversaryList-card";

    // 텍스트 컨테이너 생성
    var textContainer = document.createElement("div");
    textContainer.className = "anniversaryList-content";
    anniversaryCard.appendChild(textContainer);

    // 제목 생성 및 설정
    var anniversaryTitle = document.createElement("div");
    anniversaryTitle.className = "anniversaryList-title";
    anniversaryTitle.textContent = anniv.title;
    textContainer.appendChild(anniversaryTitle);

    // 남은 날짜 생성 및 설정
    var remainingDaysText = document.createElement("div");
    remainingDaysText.className = "remaining-days";
    if (remainingDays === 0) {
        remainingDaysText.textContent = "TODAY";
    } else {
        remainingDaysText.textContent = "남은 날짜: " + remainingDays + "일";
    }
    textContainer.appendChild(remainingDaysText);

    var releaseDateText = document.createElement("div");
    releaseDateText.className = "release-date";
    releaseDateText.textContent = "기념일: " + anniv.release_date;
    textContainer.appendChild(releaseDateText);

    // 주년 정보 생성 및 설정
    var anniversaryText = document.createElement("div");
    anniversaryText.className = "anniversary";
    if (anniv.show_anniversary !== false) {
        if (remainingDays === 0) {
            anniversaryText.textContent = anniversaryYears + "주년 축하합니다 ❤";
        } else {
            anniversaryText.textContent = "돌아오는 " + anniversaryYears + "주년";
        }
    }
    textContainer.appendChild(anniversaryText)

    // // 이미지 생성 및 설정
    // if (anniv.image) {
    //     var image = document.createElement("img");
    //     image.src = anniv.image;
    //     image.className = "anniversaryList-image";
    //     anniversaryCard.appendChild(image);
    // }

    // 유투브 링크 생성 및 설정

    var youtubeLink = document.createElement("a");
    if (anniv.youtube_link) {
        youtubeLink.href = anniv.youtube_link;
        youtubeLink.textContent = "YouTube에서 보기";
        youtubeLink.target = "_blank";
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
    anniversaryCard.appendChild(youtubeLink);

    return anniversaryCard;
}

// 기념일 리스트 초기화
initializeAnniversaryList();
