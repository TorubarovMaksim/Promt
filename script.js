// JavaScript для ваших страниц

// Здесь можно добавить скрипты для анимаций, валидации форм, и т.д.

// Пример скрипта для обработки формы подписки
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#subscribe form');
    const emailInput = document.querySelector('#subscribe input[type="email"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        // Валидация email
        if (emailInput.value.trim() === '') {
            alert('Введите корректный email');
            return;
        }

        // Отправка данных на сервер (здесь должен быть ваш код отправки данных)
        alert('Вы успешно подписались на рассылку!');
        form.reset(); // Очистка формы после успешной отправки
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Проверяем состояние темы при загрузке страницы
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    // Переключение темы
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        // Сохраняем состояние темы
        const theme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
        localStorage.setItem('theme', theme);
    });
});

