

document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-accordion');
    if (faqContainer) {
        faqContainer.addEventListener('click', (e) => {
            // Ищем именно .faq-question, так как он у вас в HTML
            const header = e.target.closest('.faq-question');
            if (!header) return;

            const item = header.parentElement;
            const answer = item.querySelector('.faq-answer');
            const icon = header.querySelector('.faq-icon');

            // Закрываем другие открытые вкладки
            document.querySelectorAll('.faq-item').forEach(el => {
                if (el !== item && el.classList.contains('active')) {
                    el.classList.remove('active');
                    el.querySelector('.faq-answer').style.maxHeight = null;
                    const otherIcon = el.querySelector('.faq-icon');
                    if (otherIcon) otherIcon.textContent = '+';
                }
            });

            // Переключаем текущую вкладку
            if (item.classList.contains('active')) {
                item.classList.remove('active');
                answer.style.maxHeight = null;
                if (icon) icon.textContent = '+';
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
                if (icon) icon.textContent = '−';
            }
        });
    };

    // === АДАПТИВНЫЙ СЛАЙДЕР ОТЗЫВОВ ===
    const slider = document.getElementById('reviewsSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const items = document.querySelectorAll('.ctabs-review__item');

    let currentIndex = 0;

    // Проверка существования элементов слайдера на странице
    if (slider && items.length > 0) {

        function getItemsPerView() {
            return window.innerWidth <= 900 ? 1 : 2;
        }

        function updateSlider() {
            const itemsPerView = getItemsPerView();
            const maxIndex = items.length - itemsPerView;

            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;

            let gap = window.innerWidth <= 900 ? 0 : 20;
            let itemWidth = items[0].getBoundingClientRect().width;

            let moveX = currentIndex * (itemWidth + gap);
            slider.style.transform = `translateX(-${moveX}px)`;
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const itemsPerView = getItemsPerView();
                if (currentIndex < items.length - itemsPerView) {
                    currentIndex++;
                    updateSlider();
                }
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            });
        }

        window.addEventListener('resize', updateSlider);
        // Инициализация при загрузке
        updateSlider();
    };

    // === КОНФИГУРАЦИЯ МИКРОРАЗМЕТКИ ===
    const generalSettings = {
        areTheseSubfolders: { layoutSubfolder: false, addURL: "" }
    };

    const MedicalOrganizationParameters = {
        logo: ".micro-organization-logo",
        name: ".micro-organization-name",
        address: ".micro-organization-address",
        url: ".micro-organization-url",
        rating: ".micro-organization-rating",
        price: ".micro-organization-price",
        phone: ".micro-organization-phone"
    };

    const ExpertParameters = {
        img: ".micro-expert-img",
        name: ".micro-expert-name",
        position: ".micro-expert-position"
    };

    const ReviewParameters = {
        author: ".ctabs-review__item .micro-review-author",
        text: ".ctabs-review__item .micro-review-text",
        dats: ".ctabs-review__item .micro-review-date"
    };

    const ContactPage = {
        name: "Контакты независимого портала аудита лучших наркологических клиник Москвы top10-narkoclinic.ru",
    };

    const options = {
        generalSettings: generalSettings,
        createWebSite: false,
        createContactPage: ContactPage,
        createMedicalOrganization: MedicalOrganizationParameters,
        createPersonExpert: ExpertParameters,
        createReview: ReviewParameters
    };









});