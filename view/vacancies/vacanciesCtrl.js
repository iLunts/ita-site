app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/vacancies", {
        templateUrl: "view/vacancies/index.html",
        controller: "vacanciesCtrl"
    });

    $routeProvider.otherwise({
        redirectTo: "/"
    });
}]);

app.controller('vacanciesCtrl', function($scope) {

    $scope.list = [{
            title: 'Java Разработчик',
            // desc: {
            //     name: 'Опыт работы с Java от 2х лет;',
            //     name: 'Spring / Spring MVC',
            //     name: 'JavaScript, HTML',
            //     name: 'Хорошее понимание принципов проектирования ПО',
            //     name: 'Уровень английского Intermediate',
            //     name: 'Аналитический склад ума'
            // }
            price: 'от 499$'
        },
        {
            title: 'Ведущий Java Разработчик (Руководитель Команды)',
            // desc: {
            //     name: 'Опыт работы с Java от 2х лет;',
            //     name: 'Spring / Spring MVC',
            //     name: 'JavaScript, HTML',
            //     name: 'Хорошее понимание принципов проектирования ПО',
            //     name: 'Уровень английского Intermediate',
            //     name: 'Аналитический склад ума'
            // },
            price: 'от 1 999$'
        }
    ];

    $scope.waranty = [
        {icon: 'wallet', title: 'Зарплата', text: 'Белая заработная плата, привязанная к курсу доллара;'},
        {icon: 'apartment', title: 'Офис', text: 'Удобный офис рядом со станцией метро «Спортивная»'},
        {icon: 'graduation-hat', title: 'Обучение', text: 'Возможность обучения и получения сертификатов за счет компании'},
        {icon: 'rich', title: 'Компенсация', text: 'Компенсация спортивных занятий'},
        {icon: 'coffee-cup', title: 'Печеньки', text: 'Чай, кофе, кондиционер, мини-кухня и др.'},
        {icon: 'translator', title: 'Английский', text: 'Курсы английского языка в рабочее время'},
        {icon: 'calendar-full', title: 'График', text: 'Гибкий график работы'},
        {icon: 'gift', title: 'А ещё...', text: 'каждый день мы расширяем спектр поощрений для сотрудников компании'},
    ];

});
