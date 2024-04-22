![](https://assets.circle.so/87cpbyaspilh5n2q9qi5w33th8ew)

» [Lekka wersja przeglądarkowa](https://cloud.overment.com/C05L01-planowanie-asystenta-1713217984.html) «

Wersja [YouTube](https://youtu.be/acj0W1lGC4M)

Niezależnie od tego, czy planujesz stworzenie własnego asystenta AI, czy nie, w nadchodzącym tygodniu znajdziesz techniki pracy, które mogą przydać Ci się w projektach w którym LLM będą obecne. Koncepcja asystenta AI przeprowadzi nas przez mechaniki, które **można stosować niezależnie** lub łączyć je ze sobą.

Ważne: Wszystko, co poniżej przedstawiam, w większych szczegółach omówimy w nadchodzących dniach. Zachęcam jednak do zadawania pytań, ponieważ niemożliwe było uwzględnienie wszystkich zagadnień dotyczących projektowania takich systemów, nawet pomimo dość obszernych treści naszych lekcji.

## Koncepcja asystenta AI i planowanie funkcjonalności

Asystent AI nie ma oficjalnej definicji i może być interpretowany indywidualnie. Zwykle chodzi o aplikację łączącą się z modelami OpenAI (lub innymi), bazą danych i różnymi usługami. Równie dobrze asystentem można nazwać pojedyncze skrypty czy automatyzacje, które będą oszczędzać nam czas.

Tworząc Alice, uwzględniłem personę posiadającą imię i wygenerowany w Midjourney avatar. Dlatego mówiąc o tym projekcie, posługuję się określeniami, takimi jak "umiejętności", zamiast "funkcjonalności". W ten sposób nie tylko podkreślam rolę AI, ale także ułatwiam sobie planowanie kolejnych elementów aplikacji, ponieważ nierzadko związane z tym zagadnienia bezpośrednio powiązane są z działaniem ludzkiej pamięci, organizowaniem wspomnień i połączeń pomiędzy nimi ([Cognitive Architecture](https://link.springer.com/article/10.1007/s10462-018-9646-y)). Oczywiście możesz to całkowicie pominąć, jednak piszę o tym, ponieważ będę posługiwał się właśnie takim językiem.

Projekt "Alice" rozwijam od około 10 miesięcy. Jego obecny zakres przedstawiony jest na obrazku poniżej prezentującym uproszczony schemat.

![](https://assets.circle.so/bslpx1hkw3ap5ujbg7wuyu9ie1mi)

**Interfejsy**: Macbook, Slack, Make, Telefon, Zegarek i głośniki w domu czy w samochodzie — w każdym z tych miejsc mówimy o dostępie do dokładnie tych samych umiejętności czy fragmentów pamięci. Oznacza to, że wiadomość podyktowana podczas jazdy samochodem, czy w trakcie spaceru, przez zegarek, może być wykorzystana w działającym w tle scenariuszu [make.com](http://make.com/) czy przywołana w konwersacji na Slacku. Bez wątpienia w koncepcji asystenta **posiadanie jednego API i jednej bazy wiedzy** jest kluczowe do uzyskania maksymalnej użyteczności.

**Umiejętności**: Uwzględniam tutaj nie tylko narzędzia którymi Alice się posługuje, ale także szersze mechaniki umożliwiające dwukierunkową interakcję głosową, działanie w tle czy częściową autonomię. Tutaj łatwo zauważyć, że logika odpowiedzialna za realizowanie takich zadań jest złożona i wiąże się z oczekiwaniem od kilku do kilkudziesięciu sekund. Z tego powodu, na początku Alice rozpoznaje moje zapytanie i gdy to możliwe, pomija zbędne kroki, skracając tym samym czas reakcji. Niekiedy nawet całkowicie pomija swoją pamięć, ponieważ zwyczajnie nie ma potrzeby z niej korzystać. To sprawia, że mogę korzystać z tego samego interfejsu zarówno do bieżącej interakcji z modelem, jak i realizowania złożonych zadań uwzględniających wszystkie umiejętności Alice.

**Baza wiedzy**: Uwzględnia omawiane już (C03L03) obszary oraz kilka dodatkowych, dotyczących **otoczenia** (informacje zbierane z urządzeń, czujników i zewnętrznych usług) oraz mechaniki autorefleksji pomagające w organizowaniu i uzupełnianiu wspomnień. Obowiązuje tutaj zasada **single entry point** oraz **single source of truth**. Oznacza to, że zapisywane dane **zawsze przechodzą przez tę samą logikę**, aby Alice spójnie je opisała i umieściła w odpowiednich kategoriach. Za porządkowanie odpowiadają prompty klasyfikujące, połączone z kontekstem budowanym z posiadanych już informacji. Podobnie też ta sama logika odpowiada za **gromadzenie i filtrowanie** zgromadzonych wspomnień. O tym, jak dokładnie się to odbywa, będziemy rozmawiać w kolejnych lekcjach.

**Przetwarzanie informacji**: Jest to obszar związany z przetwarzaniem zwykle długich treści, które wykraczają poza dopuszczalny kontekst modelu, lub ich przetworzenie zajmuje więcej czasu. Mówimy więc tutaj zarówno o możliwości **kolejkowania zadań** oraz **powiadomieniach** informujących o ich zakończeniu. W tym obszarze w przyszłości mogą pojawić się także aktywności związane z procesem gromadzenia danych na wybrany temat czy zaawansowanej obróbki treści oraz pracę z formatami audio i wideo.

Oczywiście Twój asystent może posiadać zupełnie inne umiejętności, funkcjonalności i interfejsy. Równie dobrze możesz ograniczyć interakcję z nim do Slacka czy Telegrama. Ostatecznie może to być nawet jeden plik JavaScript czy scenariusz automatyzacji, precyzyjnie odpowiadający na Twoje potrzeby. Warto też zacząć od minimum funkcjonalności, które z czasem można rozbudowywać.

## Wybór technologii

Na rozwijanie własnego asystenta AI zwykle mamy czas tylko "w wolnych chwilach", więc warto uwzględnić to przy wyborze narzędzi. W moim przypadku rozwój tego projektu powiązałem także z eksploracją nowych dla mnie technologii (Rust, SvelteKit) i narzędzi (Algolia, Tauri). Poza tym powiązałem główne mechaniki asystenta z faktycznymi aktywnościami, które realizuję na co dzień. Dzięki temu nie tylko uczyłem się nowych rzeczy, ale także budowałem coś, co pomaga mi w pracy. Ponownie uproszczony schemat wygląda następująco:

![](https://assets.circle.so/nske38ixdfkuepmep1xsvc28jv01)

  
**Interfejsy** — większość z nich omówiłem już w lekcji **C04L04**. Kluczowy w nich jest podział na: bezpośrednie, połączenie z modelem do szybkich i prostych zadań, interakcje głosowe realizowane przez Whisper, oraz aktywności realizowane w tle z pomocą zwykłych poleceń przesyłanych do API.

**Baza danych** — poza opisywaną już bazą postgreSQL, proces odzyskiwania informacji wspieram poprzez Algolia Search oraz Pinecone. W przypadku informacji, wykorzystywanymi bezpośrednio na potrzeby automatyzacji korzystam z Airtable (ponieważ mam do nich prosty dostęp z poziomu [make.com](http://make.com/))

**Serwer** — tutaj na co dzień robię najmniej. Jest to konfiguracja, którą ustawiłem raz i w której zależało mi na automatyzacji procesu. Do serwera loguję się jednak bardzo regularnie w celu obserwowania logów, ponieważ moje API nie wykorzystuje jeszcze w pełni LangSmith lub podobnych narzędzi.

**Narzędzia no-code** — lista jest długa i stopniowo rośnie, ponieważ jednym z założeń jest poukładanie automatyzacji w taki sposób, by Alice mogła posługiwać się znaczną większością z nich. Na ten moment skupiam się na najcześciej wykorzystywanych przeze mnie narzędziach, oraz kluczowych integracjach ułatwiających funkcjonowanie asystenta.

*   Notion: Integracja z moim Second Brain (specjalnym panelem Notion) oraz przetwarzanie długich stron.
    
*   ElevenLabs: Interakcje głosowe i automatyczne powiadomienia odtwarzane głównie na telefonie lub smart speakerach w domu i samochodzie — całość zrealizowana z pomocą automatyzacji Siri Shortcuts
    
*   macOS: Połączenie z funkcjonalnościami systemu odbywa się poprzez Keyboard Maestro (remote web trigger), x-scheme-url oraz skrypty AppleScript. Dzięki temu mogę dowolnie sterować praktycznie wszystkim, co znajduje się na moim komputerze.
    
*   Wolfram: Wybierany jest do obliczeń oraz dostępu ogólnych, aktualnych informacji. Na własne potrzeby korzystam z bezpłatnego API
    
*   Feedly: Służy do monitorowania blogów, newsletterów i kanałów na YouTube oraz zapisywania artykułów do przeczytania na później
    
*   Google Calendar: Pozwala na głosowe zarządzanie kalendarzem, co wypada bardzo dobrze w kontekście prywatnych wydarzeń. Dla spotkań zawodowych wykorzystuję głównie [zencal.io](http://zencal.io/)
    
*   Gmail: Tutaj obecnie mam filtry ustawione na konkretne kontakty pojedynczych newsletterów, które czytam, oraz dosłownie kilku osób z którymi wymieniam wiadomości (np. księgowość)
    
*   Deepl: Stosuję jako uzupełnienie tłumaczeń GPT-4 (aktualnie tylko w pojedynczych scenariuszach)
    
*   iAWriter / Obsidian: Są to moje edytory tekstu markdown, w przypadku których skrypty na moim komputerze pozwalają na przetwarzanie dłuższych dokumentów
    
*   Spotify: Funkcja typowo rozrywkowa pozwalająca na uruchamianie muzyki po ogólnym słowie kluczowym (niekoniecznie nazwie utworu czy artysty) oraz tworzenie playlist
    
*   Pozostałe: Stripe, YouTube, Webflow, [Ray.so](http://ray.so/) oraz szereg moich mikroserwisów, specjalizujących się w zadaniach związanych bezpośrednio z moją pracą
    

**Narzędzia programistyczne** — budowanie niektórych narzędzi poprzez narzędzia no-code nie zawsze jest skuteczne i wygodne. Dlatego te najbardziej wymagające zapisuję w kodzie, a następnie udostępniam w API, z którego nierzadko korzystają narzędzia no-code, co już widzieliśmy.

*   Web Scrapper & Puppeteer: To narzędzia umożliwiające interakcję z treściami zarówno wskazanych przeze mnie stron (mam listę, z której korzystam najczęściej) oraz ogólny scrapper przekazanych adresów URL
    
*   DuckDuckGo / SerpAPI: Dostęp do wyników wyszukiwania, umożliwiający przeszukiwanie treści stron z mojej listy (np. dokumentacji)
    
*   TinyPNG: głównie optymalizacje i proste operacje na zdjęciach
    
*   Pozostałe: narzędzia do przetwarzania treści tekstowych, obrazów oraz przechowywania plików na moim serwerze FTP
    

Jeśli patrząc na powyższy schemat, myślisz, że kosztowało to mnóstwo pracy, to weź pod uwagę, że 70-80% kodu tej aplikacji wygenerowała dla mnie Alice. Moją rolą było jedynie sterowanie procesem i wprowadzanie drobnych modyfikacji. W związku z tym, że jest to aplikacja rozwijana na moje potrzeby, sam decyduję o tym, które elementy logiki udostępniać do OpenAI, a które nie. Zasadniczo nie mam wątpliwości, że **bez wykorzystania GPT-4 do pisania logiki prywatnego API, nie byłbym w stanie go zbudować** ze względu na niewystarczającą ilość czasu.

## API Asystenta

Cały system zaprojektowany jest w taki sposób, aby praktycznie **każda interakcja z asystentem odbywała się zaledwie w oparciu o jeden endpoint**. Oczywiście samo API jest rozbudowane i zaprojektowane dokładnie tak, jak ma to miejsce w przypadku klasycznych aplikacji. Różnicą jest jednak możliwość znanego nam już mechanizmu "rozpoznawania intencji", który w tym przypadku działa jak pewnego rodzaju router, zdolny do przekierowania danych wewnątrz aplikacji. Oczywiście nadal mam możliwość wywołania konkretnych ścieżek indywidualnie, jednak robię to w bardzo konkretnych sytuacjach (np. korzystając z pojedynczych narzędzi).

Przykład zapytania uwzględnia **jeden z interfejsów**, który przesyła zapytanie bezpośrednio na endpoint **/assistant/conversation**. Niezależnie od tego, jakie narzędzie jest wykorzystywane, system samodzielnie decyduje o tym, który element ma zostać uruchomiony, a który nie. W niektórych sytuacjach może dojść także do sięgnięcia po szereg narzędzi (np. wyszukanie w Internecie, przeszukanie pamięci i kontakt z Notion), lub wprost przeciwnie — do ominięcia ich wszystkich i skontaktowania się bezpośrednio z OpenAI.

![](https://assets.circle.so/7h3n62d7omqztrehpv053bckjvav)

Powyższy schemat pokazuje także kilka istotnych aspektów:

*   **Jeden punkt interakcji**: jak już powiedziałem, jest to najważniejszy element całej mechaniki, ze względu na to, że dopuszcza sterowanie głosowe oraz poprzez **pojedyncze pole tekstowe, bez jakichkolwiek przełączników**
    
*   **Jedno źródło danych**: drugi, niezwykle istotny element to wspólna baza danych, która w połączeniu z poprzednim punktem daje nam całkowitą elastyczność zapisu / odczytu informacji. Kluczowe jest tylko zaprojektowanie promptów organizujących i tagujących wpisy, ponieważ wraz ze wzrostem liczby wpisów, przestaje być oczywiste to, jak możemy je odzyskiwać na potrzeby dynamicznego kontekstu
    
*   **Komponenty**: każde narzędzie działa niezależnie. Mogę je swobodnie dodawać i odejmować bez wpływania na resztę systemu. Podobnie też nie widzę większych problemów z potencjalną zamianą OpenAI na dowolny inny model (np. Claude 2) czy wymianę bazy wektorowej lub całkowite zrezygnowanie z niej na rzecz np. bazy grafowej
    
*   **Optymalizację**: zastosowanie Github Actions, narzędzi no-code czy Slacka pozwoliło mi na bardzo dużą oszczędność czasu na etapie budowania kolejnych wersji asystenta. Sama logika back-endu również jest możliwie prosta i utrzymuję ją tak celowo. Tempo poruszania się i wprowadzania zmian (np. podłączenie się pod nadchodzące GPT-4V) jest tutaj dla mnie kluczowe
    

Na przestrzeni AI\_Devs przechodziliśmy przez mniejsze i większe skrypty oraz scenariusze automatyzacji. Nie wiem, czy dało się to zauważyć, ale większość z nich była niemal skopiowana z mojego prywatnego API lub zapisana w uproszczonej wersji.

## Logika aplikacji, pamięć długoterminowa i umiejętności

Logika asystenta jest bardzo indywidualna, a jej złożoność może w pewnych momentach sięgać w obszary z pogranicza architektury kognitywnej. Jednak w naszym przypadku mówimy raczej o prostych mechanikach łączących ze sobą programowanie, narzędzia no-code i kilka interesujących promptów. W rezultacie osiągamy system zdolny do prowadzenia konwersacji, rozpoznawania poleceń i podejmowania działań.

W lekcjach C03L02 oraz C04L02 wspominałem o "rozpoznawaniu intencji" i prompcie z którego korzystam. Dodatkowo mówiłem także o pewnych założeniach koniecznych do zaprojektowania możliwie naturalnej interakcji. Teraz rozbijemy to na mniejsze części i połączymy dotychczasową wiedzę.

### **Klasyfikowanie i wzbogacanie zapytania**

Widząc różne implementacje czatbotów, zwykle zauważam poruszanie się po "schematach" lub wręcz "słowach kluczowych", które są powiązane z konkretną akcją. Wymusza to na użytkowniku zapamiętywanie poleceń lub wciskanie dodatkowych przycisków, co bardzo zaburza pracę. Co więcej, temat nie dotyczy wyłącznie czatbotów, ale praktycznie dowolnych klasyfikacji treści z pomocą LLM.

Teoretycznie nie ma nic złego w ustawieniu mechaniki dodającej zadania, gdy w treści pojawi się "dodaj do mojej listy zadań". Jednak co w sytuacji, gdy powiemy "Dopisz do listy" lub "Na jutro mam termin oddania artykułu o AI, dopiszesz to proszę?", system nie będzie w stanie poprawnie rozpoznać naszej intencji.

GPT-4 (prawdopodobnie dzięki obecności zachowań związanych z [Theory of Mind](https://arxiv.org/abs/2302.02083)) jest w stanie bardzo precyzyjnie wykrywać intencję rozmówcy, nawet w sytuacji, gdy nie jest ona uwzględniona bezpośrednio w treści. Widać to na obrazu poniżej, który obrazuje działanie promptu z lekcji C04L02. GPT-4 był w stanie precyzyjnie odróżnić niemal bliźniacze wiadomości, z których jedna była stwierdzeniem, a druga poleceniem. Istotną informacją jest również fakt, że z akurat tą klasyfikacją poradził sobie także model GPT-3.5-Turbo-16k.

![](https://assets.circle.so/o0ou491tedttckfw9xdq2qmyzfu9)

  
Odchodzimy więc tutaj od znanego z programowania dopasowania słów kluczowych czy nawet semantycznego porównywania treści. Co więcej, możemy wyjść **poza klasyfikację bieżącego zapytania**, rozszerzając je o kontekst całej rozmowy. Obrazuje to fragment mojej rozmowy z Alice, w przypadku której chciałem, wprowadzić zmiany w wygenerowanej grafice. Pomimo tego, że moja nowa wiadomość nie zawierała żadnych słów kluczowych typu "grafika" lub "wygeneruj", polecenie zostało poprawnie skojarzone, a akcja bezbłędnie wykonana. Oczywiście różnicą jaką tutaj mamy, jest klasyfikowanie **podsumowania konwersacji połączonej z bieżącą wiadomością**. Warto więc wychodzić nieco szerzej, poza bieżące zapytanie, bo to dodatkowo zwiększa użyteczność systemu.

![](https://assets.circle.so/3ztduvgfh3ajxawdl6zx4rm0i8y7)

Dalsza część interakcji może potoczyć się już praktycznie na dowolny sposób. Do gry wchodzi zarówno hybrydowe przeszukanie pamięci długoterminowej czy nawet budowanie nowych zapytań na podstawie oryginalnego (to tzw. self-querying). W zasięgu są także zewnętrzne źródła wiedzy i dane pochodzące z usług czy aplikacji.

### **Przeszukiwanie pamięci długoterminowej**

Odzyskiwanie informacji z własnej bazy wiedzy zależy bezpośrednio od sposobu, w jaki je zorganizujemy. Wiemy już, że zwykle chodzi nam o przechowywanie jakościowych wpisów lub ich opisanych metadanymi fragmentów. Proces przeszukiwania niemal zawsze będzie sięgać znacznie dalej niż proste wyszukiwanie "3 najbardziej pasujących wyników". Zwykle będzie nam zależało na znacznie dokładniejszych taktykach, dzięki którym zgromadzimy komplet informacji na wybrany temat.

Kluczowe staje się tutaj powiązanie ze sobą dokumentów, ich transformacja w formie podsumowań czy bazy pytań i odpowiedzi. Coraz częściej można spotkać także przykłady zastosowań struktury drzewiastej czy nawet wspomnianych grafów. Jedno z przykładów jest [projekt "REMO"](https://github.com/daveshap/REMO_Framework) (Rolling Episodic Memory Organizer) Davida Shapiro, które przedstawia interesujące strategie, jednak jest tworzone raczej z myślą o autonomicznych agentach, a nie prostych asystentach. Nie zmienia to faktu, że z takich projektów możemy czerpać wiele inspiracji.

![](https://assets.circle.so/683tnkrzryroytg1hi3oat8odh37)

Powyższa grafika pochodzi z repozytorium REMO i w prosty sposób przedstawia to, jak możemy przechodzić po różnych obszarach drzewa, w poszukiwaniu (i łączeniu) ze sobą informacji. Co więcej, do organizowania takiej pamięci również możemy wykorzystać LLM, a później z pomocą silników wyszukiwania skutecznie przeszukiwać nawet duże ilości danych.

Z punktu widzenia kodu, warto pamiętać o tym, że przeszukiwanie różnych obszarów może odbywać się równolegle (co widać poniżej), co pozytywnie wpływa na wydajność. Co więcej, może okazać się, że do niektórych wyszukiwań w ogóle nie będziemy musieli angażować LLM, co również przełoży się na szybkość działania systemu.

![](https://assets.circle.so/4hxmj4ol3gocgz3izxz7241e1n72)

Jasne powinno być także to, że strategia podziału treści oraz jej późniejszego odzyskiwania, będzie zawsze zależała od tego, z jakim rodzajem danych pracujemy oraz co dokładnie chcemy osiągnąć.

### **Wybieranie zewnętrznych źródeł**

Poza pamięcią długoterminową, mamy jeszcze zewnętrzne źródła. Jak już mówiłem, zawężam je do konkretnej listy stron, na których zazwyczaj szukam informacji. Dzięki temu automatycznie filtruję źródła zawierające treści reklamowe oraz zmniejszam ryzyko przypadkowo wybrania strony, która może wymagać logowania.

![](https://assets.circle.so/ucgl32x9jch5kmocct5gdgvnhox1)

Oczywiście opisy tych stron mogłyby zostać wzbogacone o dodatkowe słowa kluczowe, jednak ogólna koncepcja polega na tym, aby **porównać zapytanie** z listą dostępnych adresów. Kolejnym krokiem jest zbudowanie zapytania **do wyszukiwarki Internetowej**, które przeszuka wyłącznie wskazaną domenę pod kątem przekazanej frazy.

![](https://assets.circle.so/u6w0ncr4mc61j5xxgw92rvc12jid)

Poniższe wyniki wyszukiwania pokazują, że faktycznie konkretna strona została znaleziona, a jej treść łatwo może zostać przeczytana. Dobierając strony do swojej listy, również staram się wybierać takie, które są bardzo dobrze zoptymalizowane pod kątem SEO, a dostęp do ich zawartości jest łatwy z poziomu kodu. Do pracy z treściami stron wykorzystuję bezpośrednio narzędzia, które już omawialiśmy, chociażby w przykładzie [**12\_web**](https://github.com/i-am-alice/2nd-devs/tree/main/12_web).

  

![](https://assets.circle.so/z5fk8rngvjq25lx5baljwv8iumej)

### **Korzystanie z narzędzi**

W przypadku identyfikacji wiadomości jako polecenie podobnie jak w przypadku wyboru źródeł, w pierwszej kolejności przeszukuję listę dostępnych umiejętności, wybierając te najbardziej prawdopodobne. Następnie na podstawie krótkiej listy dokonuję wyboru tych, które rzeczywiście będą wykonane. Mając ich listę, pobieram także opisy oraz schematy, na podstawie których zapytanie Function Calling generuje parametry. Do generowania parametrów wykorzystywane jest **nie tylko zapytanie**, ale także **kontekst konwersacji**.

Wykonanie zadania niemal zawsze zwraca jakąś informację zwrotną. Nie przekazuję jej jednak w domyślnej formie, lecz umieszczam chwilowo jako **dodatkową wiadomość systemową**, z instrukcją o parafrazie.

![](https://assets.circle.so/ftpxic9wfnzaq5iy5swr3xjj5i3r)

Efekt jest więc następujący:

*   Zapytanie / Polecenie
    
*   Wyszukanie akcji
    
*   Uruchomienie akcji
    
*   Parafraza informacji zwrotnej
    

Naturalnie możesz pominąć ten krok, jednak w praktyce sprawdza się świetnie. Dodatkowo pokazuje coś, o czym mówiłem na początku AI\_Devs, czyli możliwość manipulacji przebiegiem konwersacji w celu ulepszenia doświadczeń użytkownika i/lub zwiększenia skuteczności generowanej odpowiedzi.

## Własny plan i dalsze kroki

Opisany przeze mnie mechanizm może wydawać się złożony, jednak w praktyce mówimy o kilku współpracujących ze sobą funkcjach. Na początek dobrze zacząć od czegoś prostego, np. zwykłym prowadzeniu konwersacji z modelem bez żadnych dodatkowych elementów. Dopiero na dalszych etapach można rozważyć dodanie podsumowania konwersacji, pamięci czy narzędzi (co też można stopniowo rozbudowywać).

Zasadniczo dojście do punktu w którym posiadamy API działające na back-endzie lub w formie scenariusza automatyzacji jest dobrym punktem startowym. Kolejne komponenty omówimy w nadchodzących lekcjach.

* * *

## Zadania praktyczne

Wykonaj zadanie API o nazwie “**meme**”. Celem zadania jest nauczenie Cię pracy z generatorami grafik i dokumentów. Zadanie polega na wygenerowaniu mema z podanego obrazka i podanego tekstu. Mem ma być obrazkiem JPG o wymiarach 1080x1080. Powinien posiadać czarne tło, dostarczoną grafikę na środku i podpis zawierający dostarczony tekst. Grafikę z memem możesz wygenerować za pomocą darmowych tokenów dostępnych w usłudze [RenderForm](https://renderform.io/) (50 pierwszych grafik jest darmowych). URL do wygenerowanej grafiki spełniającej wymagania wyślij do endpointa /answer/. W razie jakichkolwiek problemów możesz sprawdzić hinty [https://tasks.aidevs.pl/hint/meme](https://tasks.aidevs.pl/hint/meme)  
Ideą jest pokazanie Ci prostej metody na generowanie obrazów i dokumentów (np. PDF) z użyciem technologii no-code. Może to być np. użyteczne przy generowaniu faktur, certyfikatów itp. Ta wiedza z pewnością Ci się przy automatyzacji procesów biznesowych.

* * *

## Sprawdź swoją wiedzę

[Rozpocznij Quiz](https://tasks.aidevs.pl/quiz/c05l01_alen)

* * *

## Podsumowanie Audio