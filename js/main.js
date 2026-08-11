/**
 * HTML Component Loader
 *
 * header.html / footer.html 같은
 * 공통 HTML 파일을 불러옵니다.
 */

async function loadComponent(selector, file) {

    const element = document.querySelector(selector);

    if (!element) {
        return;
    }

    try {

        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(
                `${file} 로드 실패: ${response.status}`
            );
        }

        element.innerHTML = await response.text();

    } catch (error) {

        console.error(error);

        element.innerHTML = `
            <div class="container py-3">
                컴포넌트를 불러오지 못했습니다.
            </div>
        `;
    }
}


/**
 * 페이지 로드
 */

document.addEventListener("DOMContentLoaded", () => {

    loadComponent(
        "#site-header",
        "components/header.html"
    );

    loadComponent(
        "#site-footer",
        "components/footer.html"
    );

});
