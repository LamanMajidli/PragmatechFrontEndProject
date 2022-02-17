# Javascript proqramlaşdırma dili hansı sahələrdə istifadə olunur?
1.Web sayta interaktivlik verməkçün istifadə olunur,
2.Oyunlar yazılır,
3.Veb və mobil app`lərin yaradılmasında
# Proqramlaşdırma terminlərinin qısa açıqlamaları
* compilers-Bir proqramlaşdırma dilində yazılmış kodu başqa proqramlaşdırma dilinə çevirir.(Yüksək səvviyə bir dildən aşağı səviyyə bir dilə)Hər hansı proqramlaşdırma dilini istifadə edərək yazılan kodu kompüterin anlaya biləcəyi maşın dilinə 0-1-lərə çevirən yazılımdır. 
Microsoft Visual Studio
GNU Compiler Collection (GCC)
Common Business Oriented Language (COBOL)
* interpreters-Kodu parçalar halında dəyərləndirmək məqsədilə istifadə olunur.Kodu sətir ya da blok şəklində çalışdırırlar.
OCaml
List Processing (LISP)
Python
* translators- 3 fərqli translator tipi var. Bunlar compiler, interpreter və assemblerdir. Compiler, interpreter terminlərindən yuxarıda qısaca bəhs etdik. Assembler termini haqqında da aşağıda məlumat veriləcək.
* assemblers -Fortran Assembly Program (FAP)
Macro Assembly Program (MAP)
Symbolic Optimal Assembly Program (SOAP)
Avantajları- proqramlaşdırma üçün zaman təsərrüfü yaradır.
Xətaları düzəltmək, həmçinin proqramlaşdırma təlimatların dəyişdirmək daha asandır.
Dezavantaj olaraq isə onu qeyd edə bilərəm ki, kiçik bir dəyişiklik belə proqramı keçərsizləşdirə bilər. Baxımı çətindir.

* programming paradigms- proqram dillərini özəlliklərinə görə sinifləndirmənin bir yoludur.2 yerə bölünür: imperativ və deklarativ. İmperativ proqramlaşdırma dillərinə Pascal, Java, C dillərini nümunə göstərə bilərik.Deklarativ proqramlaşdırma dillərinə isə nümunə göstərməli olsaq,Prolog,Lisp, Haskell, Miranda, Erlang,SQL (in the broadest sense) adların çəkə bilərik.

* debugging- kodlarınızdakı xətaları tapmağa, analiz etməyə kömək edir. kodlardakı xətalar "bug"lardır.
* boolean- Başqa tip verilənlərdən fərqli olaraq, Boolean tipli dəyişən yalnız iki qiymət ala bilər: True (doğru) və False (yalan).
Proqramlarda bu tipli dəyişənlərdən müəyyən qərar qəbul etmək lazım gəldikdə istifadə etmək olar.
Boolean tipli qiymətləri ekrana çıxarmaq olar, ancaq belə qiymətləri klaviaturadan daxil etmək olmaz. Bu tip dəyişənlər üzərində not (deyil), and (və), və or (və ya) əməllərini yerinə yetirmək olar.
* char-Char və Varchar, verilənlər bazası sistemində oxşar görünən, saxlama tələblərinə gəldikdə aralarında fərqlər olsa da çox istifadə olunan xarakter məlumat növləridir. char məlumat növü bir xarakter saxlamaq üçün istifadə olunur . Char (n) n sabit ölçüdə simvol saxlaya bilər. Bir char (n) -in tuta biləcəyi maksimum simvol sayı 255 simvol və bir simli uzunluğu 1 ilə 8000 arasında bir dəyər olmalıdır. Char varchar -dan əlli faiz daha sürətlidir və buna görə də işləyərkən daha yaxşı bir performans əldə edə bilərik. char Char məlumat saxlayarkən statik yaddaş ayırmasını istifadə edir. Bilinən sabit uzunluğa malik sətirləri saxlamaq istədikdə, char istifadə etmək daha yaxşıdır. Nümunə olaraq, 'Bəli' və 'Xeyr' -i 'Y' və 'N' olaraq saxlayarkən char tipli məlumat tipindən istifadə edə bilərik. Həm də bir şəxsin milli şəxsiyyət vəsiqəsi nömrəsini on simvoldan saxlayarkən məlumat növünü char (10) olaraq istifadə edə bilərik.
* null- Verilənlər bazasında sıfır bir dəyərdir. Null dəyər heç bir dəyəri olmadığını bildirir.Bir dəyər kimi istifadə edildikdə, null bir yaddaş yeri deyil. Yalnız göstəricilər yaddaş yerlərini saxlayır. Null bir xarakter olmadan, simli düzgün bir şəkildə sona çatmayacaq, bu da problemə səbəb olacaq.
* command-line interface- komanda sətri interfeysi. Komanda xəttinin tərcüməsi əmrlərin daxil olmasına imkan verən və bu əmrləri əməliyyat sisteminə tətbiq edən hər hansı bir proqramdır. Sözün əslində bir komanda tercümanı var. Bir siçanla idarə olunan düymələr və menyular kimi bir qrafik istifadəçi interfeysi (GUI) olan bir proqramdan fərqli olaraq, bir komanda satırı tərcüməçi komanda kimi klaviaturadan mətn xətlərini qəbul edir və bu əmrləri əməliyyat sisteminin anladığı funksiyalara çevirir.
* low-level language- Aşağı səviyyəli dillər kompilyator və ya tərcüməçi olmadan maşın koduna çevrilə bilər. Aşağı səviyyəli dillər sadədir, lakin proqramçının yadda saxlamalı olduğu çoxsaylı texniki detallara görə istifadəsi çətin hesab olunur.
* high-level language- Python, Visual Basic, Delphi, Perl, PHP, ECMAScript, Ruby, C#, Java. Proqramçı artıq sadəcə problemin həllinə fokuslanır və daha az əmr istifadə edərək proqramı yaza bilir. Həmçinin bu dilləərdə yazılan əmrlərin insanların daha rahat anlaya biləcəyi və ağılda qalacağı bir haldadır. 
* markup language- BBC, HTML, SGML,  XML. nümunə olaraq bunları saya bilərəm.Səhifənin ümumi görünüşünü və onun ehtiva etdiyi məlumatı formatlamağa kömək edən asan başa düşülən açar sözlər, adlar və ya etiketlərdən ibarət kompüter dili 
# Veb səhifəsinin işləmə prinsipini anlayabilmək üçün mövhumlar:
## İnternet ve intranet arasındakı fərqlər nədir?
*  Internet fərqli kompüter şəbəkələrini bir-birinə bağlayır. Hər kəs üçün internet əlçatandır. Türklər demiş, İnternete her kes erişebilir. İntranetlə müqayisədə daha güvənli deyil. İstifadəçi sayı sərhədsizdir, heç bir məhdudiyyət yoxdur.  Ziyarətçi trafiki kifayət qədər çoxdur. Şəbəkə hər kəsə açıqdır. İnternetdəki  bilgilər sərhədsiz və məhdudiyyətsiz şəkildə hər kəs tərəfindən görülə bilir.
* İntranet isə müəyyən bir firmanın özəl mülkiyyətində olan internetin bir parçasıdır. Yalnız account açma bilgilərinə sahib qurulum istifadəçiləri tərəfindən əlçatandır. İstifadəçi sayı müəyyən məhdudiyyətlər içərisindədir. Ziyarətçi trafiki buna görə internetdəkindən daha azdır. Şəbəkə tipi özəldir. Bilgilər yalnızca həmin qurulumun istifadəçiləri arasında paylaşılır.
## Server-side və client-side ifadələrinin mənası nədir?
### server : client tərəfindən request edilən yəni tələb edilən səhifələri çalışdıran tərəfdir.
### client :səhifələri serverdən request edən və istifadəçiyə göstərən tərəfdir. Bir çox halda client bir web-browser’dır.
### istifadəçi : istifadəçi client’ı internetdə surf etmək, video izləmək kimi işlər üçün işlədən tərəfdir, yəni bizlərik.
* Server-side tərəfdə kod yazan developerlərə back-end developerlər deyilir. 
### PHP
### Java ve Java Server Page’leri
###  ASP
###  Perl
### Python
###  Node.js
###  Ruby on Rails, kimi.
serverdə çalışdırılan bütün uygulamalara verilən ümumi bir ad olub əsl işi dinamik olaraq içerik üretmek və client`in istədiklərini göndərməkdir. Bir çox veb saytı statik olmadığı üçün database`dən gələcək verilənlərlə işləm edirlər və bu verilənləri məsələn bir sayta giriş etmək istədikdə istifadəçi adınızı və şifrənizi yazıb giriş etmək istədiyinizdə istifadə etdiyiniz client yəni brauzeriniz server`ə istək yollayır və server tərəfdəki proqram sizin bilgilərinizi database`də müqayisə edərək client`ə cavab verir.
* Client-side proqramlama çox vaxt istifadəçi araüzü ilə bağlı tərəfdir. Yəni istifadəçinin işlətdiyi, etkileşime keçdiyi. Veb proqramlarında bunlar brauzerlərdir. İstifadəçinin kompüterində çalışan kodlardır. Bir çox hallarda JS, Flash kimi texnologiyalarla yazılırlar.client-side programlamada kod yazanlar isə front-end developerlərdir.
### JavaScript
### HTML
### CSS
### Ajax
### Flash
### JQuery veya TreeJS kimi kitabxanalar
## Server nədir və necə işləyir?
* Server, şəbəkə üzərindən müştəri olaraq bilinən digər kompüterlərə qaynaq, məlumat, xidmət və ya proqram təmin edən bir kompüter və ya sistemdir. Server bir kompüterdirsə o zaman nə etməli? Kompüterlə server arasındakı fərq haradadır? Mövzu ilə yeni tanış olmağa başlayan bir insan üçün bu iki şey oxşar ola bilər, ancaq bir neçə fərqi müəyyən edə bilərsiniz. Əvvəlcə qeyd edək ki, ikisi də bir CPU, RAM və saxlama üçün sabit disklərə sahibdirlər. Bununla birlikdə serverlər kompüterlər kimi qrafik intensiv tətbiqlər üçün nəzərdə tutulmayıb. İkincisi, CPU fərqli bir nağd ölçüyə malikdir; serverlərdə daha böyükdür. Daha böyük pul ölçüsü bir serverin daha sürətli işləməsinə imkan verir. Üçüncüsü, masaüstlərində tək bir sabit disk olsa da, serverlərdə ümumiyyətlə bir neçə sabit disk var.
* Bəs server necə işləyir? Ən təməl səviyyədə, kompüterinizə İnternet brauzerində bir URL yazdığınız zaman bir kompüter veb sənədlərini saxlayan server ilə əlaqə qurur və ondan məlumat alır və cihazınızda müvafiq məlumatları göstərir.Bu nöqtəyə qədər serverin bir yerə qoymalı olduğunuz bir şey olduğu ortaya çıxdı, amma texnologiyalar inkişaf etdi, bir server tərifi də inkişaf etdi. Bu günlərdə bir və ya bir neçə fiziki hesablama cihazında işləyən proqramdan başqa bir şey ola bilməz. Bu cür serverlərə çox vaxt virtual server deyilir. Bu gün virtual serverlər tez-tez bulud hesablama deyilən bir tənzimləmə içərisində İnternet üzərindəki hardware üçüncü tərəf tərəfindən idarə olunur. Bu, şübhəsiz ki, elektron xidmətlərdə yeni bir dövrün başlanğıcıdır.
## Domen nədir və necə işləyir?
* Domen nedir sualı ilə veb-sayt açmaqla maraqlanan hər kəs qarşılaşır. Domen veb-saytın internet üzərindəki adı və ya ünvanıdır. Domen adları “ip ünvanı” adlanan komputerlərin bir-birini tanımasını təmin edən rəqəm sisteminin sadələşdirilmiş, yadda qalması üçün hərflərlə əvəz olunmuş formasıdır. Biznesinizi internetdə də tanıtmaq istəyirsinizsə, ilk olaraq domen alaraq işə başlaya bilərsiniz. Veb saytların əsas hissələrindən biri olan domen adları, veb ünvanlarını yadda saxlamağa imkan verir. Bununla birlikdə, domen adları sadəcə saytınızın virtual dünyada ünvanını bildirmir, həm də brendinizin gələcəkdə daha uğurlu olmasını təmin edir. Bu səbəbdən domen nedir sualı ilə maraqlanarkən, domenin şirkətinizin və ya layihənizin maraqlarını ifadə etməsinə diqqət yetirin. Doğru domen adının seçilməsi həmçinin saytınızın və ya markanın müvəffəqiyyətinə, nüfuzuna və tanınmasına çox böyük təsir göstərə bilər.
* 
## HTTP nədir və və nəyə lazımdır?
* HTTP (ing. HyperText Transfer Prоtocоl – İnternet şəbəkəsində istifadə olunan protokoldur. HTTP veb-səhifələri İnternetdən çağırmaq üçün bir mexanizmdir.HTTP-nin əsasını URL ünvanı təşkil edir. Ünvanın əvvəlində yazılmış http:// perefeksi müraciət olunan sənədin ümumdünya hörümçək torunun bir hissəsi olduğunu göstərir. Daha sonra əlaqənin tipi göstərilir. Ən çox yayılmış tip World Wide Web (WWW)-dir. Lakin İnternetdə digər əlaqə tiplərindən də istifadə edilir: File Transfer Protocol (FTP) və ya Gopher. 
* Get metodu ilə hər hansı prosesi başlatmaq olar. İstifadəçi URL-də «?» işarəsindən sonra parametrlər ötürə bilər.
* POST metodu veb serverin məlumatı alıb saxlaması üçün nəzərdə tutulub. Məlumatlar POST metodunun bədənində göndərilir. Post metodu daha çox faylların göndərilməsində həmçinin veb formlardan məlumat alınmasında istifadə olunur.
## URL və URI arasındakı fərq nədir?
* URL (Uniform Resource Locator) ünvana istinad edən bir simvol simli kimi təyin edilə bilər. İnternetdəki mənbələri tapmaq üçün ən geniş yayılmış şəkildə istifadə olunur. Şəbəkə yerini və ya əsas giriş mexanizmini təsvir edərək fiziki yerin təqdimatını almaq üçün bir metod təqdim edir.Protokol, resurs və qaynaq adını almaq üçün istifadə olunan URL-də təsvir edilmişdir. URL bir veb növü mənbəyidirsə, başlanğıcda http / https ehtiva edir
* URL-yə oxşar, URI (Uniform Resource Identifier) həm də yerdəki, addan və ya hər ikisindən istifadə edərək internetdəki bir mənbəyi təyin edən bir simvol simvoludur. Resursların vahid identifikasiyasına imkan verir. Bir URI əlavə olaraq bir axtarış yeri, bir ad və ya hər ikisi olaraq qruplaşdırılır, yəni bir URL, URN və ya hər ikisini təsvir edə bilər. URI-də termin identifikatoru, əməliyyatı yerinə yetirmək üçün istifadə edilən texnikaya, yerləşmə, ad və ya kontekstə baxmayaraq, mənbələrin fərqinə işarə edir.URL, davamlı olmayan URI növüdür.