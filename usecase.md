Использование приложения

# 1 вариант: Подбор жилья

Пользователь указывает необходимые условия: 
- аренда или покупка жилья
- свой возраст, семейное положение, наличие и возраст детей
Приложение на основании определенного набора параметров советует район. 

Например, зрелым семьям без детей - советует район в котором нет школ/детских садов, либо район где малое количество свободных мест в школах

А молодым людям с маленькими детьми - район с наибольшим количеством мест в детских садах.

Выбор делается на стороне клиента на основании данных запросов из API.

# 2 вариант: Подбор объекта для застройки

На основании вычислений загруженности приложение окрашивает район на карте в цвета (зеленый, желтый, красный) указывая степень
загруженности объектов инфраструктуры в этом районе. 
Например, выбрать район и "загруженность школ" - красный. Рекомендация: строить больше школ, по аналогии с детскими садами,
торговыми площадями (магазины и торговые центры), поликлиниками.

Если все объекты инфраструктуры не загружены, и есть свободное жильё (например, аренда или продажа) - значит надо
снижать цены на недвижимость (сказка, ха-ха).