# Javascript

## interpreter və compiler dillər arasındakı fərqlər

- Biz ümumiyyətlə yüksək səviyyəli dildən istifadə edərək kompüter proqramı yazırıq. Yüksək səviyyəli dil bizim insanlar tərəfindən başa düşülən dildir. Buna mənbə kodu deyilir .

Bununla belə, kompüter yüksək səviyyəli dili başa düşmür. O, yalnız maşın kodu adlanan ikili sistemdə 0 və 1 ilə yazılmış proqramı başa düşür .

Mənbə kodunu maşın koduna çevirmək üçün ya kompilyatordan , ya da tərcüməçidən istifadə edirik .Yüksək səviyyəli dildə yazılmış proqramı kompüterlər tərəfindən başa düşülən maşın koduna çevirmək üçün həm kompilyatorlardan, həm də tərcüməçilərdən istifadə olunur. Bununla belə, tərcüməçi ilə kompilyatorun necə işləməsi arasında fərqlər var.

- Interpreter:

* Proqramı bir anda bir ifadəni tərcümə edir.
* Heç bir obyekt kodu yaradılmır, buna görə də yaddaş səmərəlidir.
* Tərcüməçilər adətən mənbə kodunu təhlil etmək üçün daha az vaxt alır. Bununla belə, ümumi icra müddəti kompilyatorlara nisbətən nisbətən yavaşdır.
* JavaScript, Python, Ruby kimi proqramlaşdırma dilləri tərcüməçilərdən istifadə edir.

- Compiler:

* Bütün proqramı skan edir və bütövlükdə maşın koduna çevirir.
* Kompilyatorlar adətən mənbə kodunu təhlil etmək üçün çox vaxt sərf edirlər. Bununla belə, ümumi icra müddəti tərcüməçilərə nisbətən nisbətən daha sürətlidir.
* Daha çox əlaqə tələb edən Obyekt Kodunu yaradır, buna görə də daha çox yaddaş tələb edir
* C, C++, Java kimi proqramlaşdırma dilləri kompilyatorlardan istifadə edir.
# Dəyişən və məlumat növləri
* .Bir proqramda fərqli məlumat tipi ilə işləməyimiz lazım ola bilər. Məsələn tam ədədlər, kəsr ədədləri, stringlər, booleanlar - bunlar ağıla gələn ilk məlumat tipləridir. Bu fərqli tiplərin böyüklüyü də görəcəkləri iş də bir-birindən fərqlənir. Ədədlərlə 4 iş görə bilərik amma stringlərlə yox. Ona görə də bəzi dillər məlumatları fərqli tiplərə ayırır. Dəyişən təyin edən zaman onun hansı tip məlumat növünə uyğun işləm ediləcəyinə icazə verir.
* Dəyişənlər- Bir komputer proqramında, dəyişənlər proqramda istifadə olunan verilənləri bir-birindən ayırmaq üçün onlara verilən addır. Hər verilənə ayrı bir ad vermək onların bir-birilə qarışmasının qarşısını alacaqdır. Bu günlük həyatda da belədir. Dəyişənlərə verilən adların uzun və ya qısa olması, anlamlı və ya anlamsız olması önəmli deyil. Amma qaynaq proqramı yazann və oxuyanın dəyişənlərin nələri təmsil etdiklərini rahatlıqla anlaya biıməsi cəhətdən önəmlidir. Qısa proqramlarda elə də ciddi problem yaratmaz amma uzun yazılan proqramlarda pis adlandırma problem yaradacaq.
# Məlumat növlərinin dillərə görə fərqlənmə səbəbi
*