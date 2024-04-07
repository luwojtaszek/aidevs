Jeśli film nie wyświetla się poprawnie, tutaj [wersja YouTube](https://youtu.be/IGRB0tRINZY)

* * *

Ta lekcja będzie nieco luźniejsza od pozostałych, ponieważ jej celem jest zarysowanie **możliwie szerokiego horyzontu** możliwości dużych modeli językowych. Znajdziesz w niej zatem "jedynie" opisy oraz różne wskazówki dotyczące pracy z modelami. **Wdrożeniem wymienionych mechanik zajmiemy się w dalszej części kursu**.

Na tej podstawie łatwiej będzie Ci decydować, które mechaniki zastosować w swojej pracy. Potraktuj więc tę lekcję jako sesję inspiracji oraz spróbuj przenieść (i modyfikować) prezentowane przykłady na swoją codzienność.

* * *

Rozumienie oraz generowanie treści przez LLM otwiera przed nami różne ścieżki zastosowania AI w swojej codzienności, kontekście zawodowym i biznesowym. Pomimo tego, główna komunikacja firm takich jak OpenAI, Microsoftu czy Google nierzadko opiera się na prostych aktywnościach takich jak **podsumowania** i **rozwijania** dokumentów, czy maili. Z jednej strony rozumiem konieczność prezentowania prostych przykładów dla ogółu społeczeństwa. Z drugiej, nie jest dla mnie jasne, dlaczego w sieci tak rzadko spotykam zastosowania wykraczające poza banalne przykłady z ChatGPT.

Z drugiej strony, gdy bardziej zaawansowane zastosowania się pojawiają, to zwykle obecny rozwój LLM nie pozwala ich wprost przenieść na naszą codzienność. Przykładem może być [prezentacja OpenAI](https://youtu.be/outcGtbnMuQ?t=992) prezentująca możliwość przeniesienia szkicu strony Internetowej na funkcjonalny kod. I choć pobudziło to wyobraźnię oglądających (również moją), to w praktyce nigdy w ten sposób nie uzyskałem satysfakcjonującego rezultatu. Nie zmienia to jednak faktu, że z modeli Vision korzystam praktycznie każdego dnia.

Zatem istnieje znaczna różnica pomiędzy komunikatami marketingowymi oraz ogólnymi rekomendacjami, które zwykle skierowane są do szerokiego grona odbiorców, a codziennym zastosowaniem. Podobnie też istnieje przepaść pomiędzy "prototypem" a produkcyjnym rozwiązaniem, czego możemy doświadczyć na co dzień.

Aby skutecznie posługiwać się LLM w kodzie czy automatyzacjach, konieczne jest więc uchwycenie nie tylko skupionej na detalach perspektywy, lecz uchwycenia szerokiego obrazu możliwości, które mamy do dyspozycji dziś oraz które pojawią się w przyszłości.

## Idea Copilota / Asystenta AI

**Skuteczność dużych modeli językowych jest znacznie wyższa, gdy dostarczamy im zewnętrzny kontekst.** Wówczas ryzyko halucynacji zostaje zredukowane, a jakość odpowiedzi jest lepsza, niż gdyby była generowana na podstawie wyłącznie bazowej wiedzy modelu. Poniżej widać różnicę prawdomówności modelu GPT-3 w porównaniu z modelem wyposażonym w dostęp do Internetu ([źródło](https://openai.com/research/webgpt)), zbliżającym się do prawdomówności na poziomie człowieka. Moje doświadczenie wskazuje, że w przypadku GPT-4 sytuacja jest jeszcze lepsza, o ile zadbamy o to, by w kontekście faktycznie znalazły się potrzebne informacje.

Przykładowo z tego powodu **celowo ograniczam dostęp do Internetu** dla moich integracji, poprzez wskazanie tylko wybranych przeze mnie, jakościowych stron www. W ten sposób ograniczam dostęp do źródeł, które dobrze się pozycjonują, ale nie zawierają rzetelnych informacji lub po prostu struktura strony znacznie utrudnia automatyczne pobranie jej treści.

![](https://assets.circle.so/fkcel3uet4ijndujv4l88zex2try)

  
Poza zewnętrznymi danymi użyteczny asystent posiada także wiedzę bezpośrednio o nas. Mowa tutaj nie tylko o **dostosowanym prompcie systemowym**, ale także o bazie wiedzy na nasz temat, której zawartość może być **dynamicznie wykorzystywana** w trakcie konwersacji lub **na potrzeby zadań realizowanych w tle, bez naszego udziału**.

Budowanie wiedzy na nasz temat wymaga od nas **dostarczenia informacji, do których chcemy, aby asystent miał dostęp**, mając na uwadze ich użyteczność. Np. istotną informacją może być nasz profil zawodowy, który asystent może wczytać przy zadaniach związanych z pracą. Wówczas, jeśli posiadamy doświadczenie na poziomie "Seniora", model może to uwzględnić, dostosowując swoje słownictwo oraz pomijając podstawowe zagadnienia. **Oczywiście, takie informacje nie muszą być wczytywane dynamicznie** i możesz umieszczać je ręcznie w wybranych promptach. Jednak na pewnym etapie, AI\_Devs zrozumiesz, na czym polega przewaga automatycznego budowania promptu.

Warto w tym miejscu zaznaczyć, że skuteczny asystent AI, nie musi mieć dostępu do danych, którymi nie chcemy się dzielić (np. danych kontaktowych). W zamian może się opierać wyłącznie o zewnętrzne źródła z których czerpiemy wiedzę.

W kontekście tworzenia własnej bazy wiedzy należy jeszcze uwzględnić fakt, że zwykle będziemy budować ją w czasie. Zamiast jednorazowo dostarczać wszystkie informacje, znacznie lepiej jest budować **żyjącą bazę danych**, której wpisy możemy na bieżąco aktualizować. Dodawanie nowych wpisów może odbywać się częściowo automatycznie (np. poprzez integrację z Pocket czy Feedly w celu zapisywania ciekawych źródeł wiedzy) lub poprzez interakcję z asystentem. W mojej prywatnej wersji Alice zapisanie informacji polega po prostu na **wydaniu polecenia z prośbą o zapamiętanie**.

Poniżej proszę Alice o zapamiętanie [buildship.app](http://buildship.app/) jako alternatywę dla [Make.com](http://make.com/). Jej odpowiedź uwzględnia potwierdzenie oraz w tym przypadku powtórzoną informację, ponieważ zależy mi na **weryfikacji** tego, czy wspomnienie zostało zapamiętane w sposób, na którym mi zależy.

![](https://assets.circle.so/r4xkjox03ceewufoeo5ykh7t4vcd)

Zapisane informacje mogą być przywołane jako kontekst w wiadomości systemowej, a następnie wykorzystane do wygenerowania odpowiedzi. Jako programiści (lub osoby posługujące się no-code) możemy zbudować **prywatne API**, z którym będziemy mogli połączyć się z dowolnego miejsca. Przykładowo, powyżej zapamiętana informacja o [audiopen.ai](http://audiopen.ai/) (przy okazji — świetne narzędzie), może zostać przywołana na moim telefonie poprzez Siri Shortcuts. W tym przypadku dzieje się to tekstowo, ale równie dobrze mogę zapytać o tę informację podczas rozmowy głosowej.

![](https://assets.circle.so/khfessvh8m6hu618ite49nuaocxv)

Oczywiście, nie musimy tutaj mówić o linkach, ale dowolnych informacjach, do których potrzebujemy mieć dostęp z różnych miejsc, lub które mogą być potrzebne asystentowi do wykonania zleconych zadań.

Ostatnim z głównych elementów Copilota/Asystenta jest **połączenie z aplikacjami oraz urządzeniami**, z których korzystamy. Wówczas mówimy nie tylko o **udzielaniu odpowiedzi na pytania**, ale także o **podejmowaniu akcji**. Samo połączenie LLM z narzędziami wymaga przygotowania logiki odpowiedzialnej za **interpretowanie zapytań**, **wybieranie wymaganych akcji**, **wykonanie ich za pośrednictwem API** i **odczytanie oraz wykorzystanie informacji zwrotnej**.

Uproszczony schemat pokazuje, jak zapytanie użytkownika jest wykorzystywane na potrzeby ewentualnego kontaktu ze źródłami danych w celu zbudowania kontekstu oraz wygenerowania odpowiedzi.

Widzimy na nim jak zapytanie (Query) zostaje przesłane do aplikacji w której dochodzi do jego moderacji (w celu upewnienia się czy wszystko jest okey) oraz rozpoznania intencji użytkownika. Na tym etapie uwzględniane jest wzbogacanie zapytania (enriching) poprzez np. wygenerowanie jego wariantów, które mogą być wykorzystane na potrzeby wyszukiwania w ElasticSearch, Algolia czy w bazie wektorowej.

![](https://assets.circle.so/ve4kzufiqp5sni7qvxe38nm5b07z)

Oczywiście **nie oznacza to**, że każdy taki system wymaga np. połączenia z Internetem czy posiadania pamięci długoterminowej. Asystent może być ograniczony do posługiwania się wyselekcjonowanym, zamkniętym źródłem danych.

Zatem Copilot / Asystent AI to w uproszczeniu:

*   Wykorzystywanie własnego kontekstu, który może być dodawany ręcznie lub dynamicznie
    
*   Długoterminowa pamięć modelu wykorzystująca klasyczne bazy SQL (lub np. Airtable), bazy wektorowe (np. Pinecone) oraz mechanizmy wyszukiwania / odzyskiwania kontekstu
    
*   Integracja z zewnętrznymi źródłami wiedzy, np. treścią stron www, bazami wiedzy czy dokumentami
    
*   Integracja z usługami i urządzeniami przez API
    
*   Ograniczona autonomiczność umożliwiająca **samodzielne podejmowanie decyzji o podejmowanych działaniach**
    
*   Ewentualnie: Działanie jako "Agent", uwzględniające planowanie akcji, co umożliwia realizowanie bardziej złożonych zadań.
    

  

I dokładnie takie powyższe elementy (z wyjątkiem agentów) będziemy omawiać i implementować w AI\_Devs.

## Codzienna praca z Copilotem

Mechanika Copilota / Asystenta zwiększa skuteczność modeli, jednak wiąże się **z obniżoną wydajnością oraz większymi kosztami**. Pomimo szybkiego rozwoju AI w ciągu ostatnich miesięcy, nadal mówimy o problemie, który trudno zaadresować.

Dla przykładu wygenerowanie prostej wiadomości przez moją aplikację zajmuje ~4.5 sekundy (dla modelu GPT-4). Gdy konieczny jest kontakt z zewnętrznymi usługami, czas ten wydłuża się do kilkunastu lub nawet kilkudziesięciu sekund. **Na pierwszy rzut oka jest to bardzo długo** i w praktyce także można to odczuć. Jednak gdy weźmiemy pod uwagę, **ile czasu sami byśmy potrzebowali na samodzielne wykonanie zadania, na które copilot potrzebuje kilkunastu sekund**, to sytuacja zaczyna się zmieniać.

![](https://assets.circle.so/brsmkzpwjisrbggepoz2mqo0k5f9)

  
Przy pracy z LLM bardziej uzasadnione jest dłuższe oczekiwanie na wygenerowanie **poprawnej odpowiedzi** niż natychmiastowe otrzymanie odpowiedzi błędnej. Nie zmienia to jednak faktu, że czas reakcji jest istotny, dlatego przy projektowaniu mechanik naszego asystenta, **możemy uwzględnić kilka trybów działania**:

*   Zwykła interakcja / połączenie z modelem (szybki czas reakcji, bazowa wiedza)
    
*   Dynamiczny kontekst / proste wyszukiwanie (reakcja na poziomie 3-4 sekund, rozszerzona wiedza)
    
*   Podejmowanie akcji, interakcja z zewnętrznymi źródłami (długi czas reakcji, bardzo jakościowe odpowiedzi)
    
*   Pełna autonomiczność (działanie w tle)
    

> Sugestia: Projektując asystenta, wybierz w jakim języku chcesz się z nim komunikować. Pomimo tego, że GPT-4 potrafi mówić w różnych językach i to nawet w trakcie jednej wypowiedzi, to w przypadku wyszukiwania kontekstu znacznie lepiej jest posługiwać się tylko jednym językiem. Potraktuj to jednak jako sugestię, a nie twardą rekomendację, ponieważ ostateczna decyzja będzie zależała od konkretnego przypadku.

W ostatniej wersji Alice wymieniłem z nią 2200 wiadomości uwzględniających interakcję z zewnętrznymi źródłami oraz 5070 wiadomości obejmujących bazową wiedzę modelu, oraz wyszukiwania w Internecie. Obecnie **nie korzystam już z ChatGPT i niemal nie korzystam z Google**, ponieważ ich miejsce zajmuje mi Alice oraz [Perplexity.ai](http://perplexity.ai/). Jeśli nie znasz tego narzędzia, to charakteryzuje się ono **szybkim dostępem do Internetu oraz Copilotem analizującym i przygotowującym odpowiedzi**. W wersji płatnej możliwe jest także przełączanie pomiędzy modelami Perplexity/GPT-4/Claude 3.

![](https://assets.circle.so/tfurgi50toiruvhudgplbv042rmt)

Bezpośrednio w pracy najważniejszą funkcjonalnością, z której korzystam, **są skróty klawiszowe powiązane ze Snippetami**. Był to główny powód, dla którego zdecydowałem się wejść na mało znany mi wcześniej obszar aplikacji desktopowych. Drugą funkcjonalnością, po skrótach, jest **działanie w tle**, obejmujące przetwarzanie dłuższych dokumentów. W takich sytuacjach rzeczywiście **podsumowania nabierają sensu**, jednak przydatne są tylko wtedy, gdy **mamy wpływ na sposób ich generowania oraz gdy zawierają referencje do zewnętrznych źródeł** (czego dowodem jest Perplexity).

## Prototypowanie i szybkie iteracje

W "świecie AI" niemal codziennie pojawiają się nowe narzędzia, techniki, publikacje naukowe, czy nawet modele. Takie otoczenie wymaga zmiany niektórych nawyków, a nierzadko dostosowania naszej rutyny związanej z nauką, programowaniem, czy tworzeniem produktów. Dużą różnicę robi także samo **praktyczne zastosowanie AI** w swojej pracy, nawet jeśli ograniczamy się do stosunkowo prostych zadań. Jednak największy wpływ na umiejętność dostosowania się do wysokiego tempa zmian, wydaje się odgrywać **połączenie własnego doświadczenia, osądu, rozumowania, etyki pracy oraz wiedzy na temat ograniczeń i możliwości narzędzi AI**. Mówiąc konkretnie:

*   Czy GPT-4 samodzielnie wdroży nową funkcjonalność w moim produkcie? Nie.
    
*   Czy GPT-4 buduje fragmenty tych funkcjonalności? Tak.
    
*   Czy GPT-4 napisze za mnie lekcję AI Devs? Nie.
    
*   Czy GPT-4 pomaga mi w parafrazie i zwiększeniu czytelności? Tak.
    
*   Czy GPT-4 rozwiąże każdy programistyczny problem? Nie.
    
*   Czy GPT-4 przyspiesza mi rozwiązywanie programistycznych problemów? Tak.
    
*   Czy GPT-4 potrafi rozumieć szeroki kontekst moich projektów? Nie.
    
*   Czy GPT-4 potrafi mi eksplorować wybrane obszary moich projektów i planować zmiany? Tak.
    

GPT-4 samodzielnie osiąga przeciętne wyniki lub wprost nie jest w stanie wykonać wielu zadań. Sam nie jestem w stanie działać tak szybko, jak GPT-4, jednak efekty mojej pracy są nieporównywalnie lepsze niż te, wygenerowane przez AI.

Wniosek jest prosty — największa korzyść płynie z połączenia naszego doświadczenia i umiejętności z LLM. Tylko na czym to połączenie konkretnie polega?

*   Nie oczekuję od modelu, że rozwiąże moje problemy. Oczekuję, że pomoże mi dojść do ich rozwiązania.
    
*   Nie oczekuję od modelu, że napisze za mnie całą logikę funkcjonalności, nad którą pracuję. Oczekuję, że pomoże mi w jej fragmentach.
    
*   Nie generuję kodu, którego nie jestem w stanie zrozumieć, bo wprowadzenie w nim zmian zajmie mi dłużej niż zbudowanie wszystkiego od podstaw. W zamian poruszam się **na granicy mojej aktualnej kompetencji** (czasem nieznacznie wychodząc poza nią)
    
*   Nie dążę do tego, aby AI zwolniło mnie z robienia trudnych rzeczy. Wykorzystuję AI po to, aby **dało mi przestrzeń do ich realizacji**.
    
*   Nie opieram swojej nauki na płytkich podsumowaniach generowanych przez GPT-4. Korzystam z podsumowań po to, aby w sposób **dopasowany do mnie** ułatwić sobie zrozumienie wybranych zagadnień.
    
*   Nie korzystam z AI, aby generowało za mnie publikowane treści czy wiadomości. Korzystam z AI po to, aby pomagało mi kontrolować merytorykę i jasność przekazu wynikającą ze sposobu formułowania myśli.
    

Poza **połączeniem z AI** oraz dbaniem o to, aby **korzystać z możliwie najlepszych źródeł wiedzy (wymieniałem je w lekcji C01L01), jakie jestem w stanie znaleźć w Internecie**, poświęcam tak dużo uwagi, jak to możliwe, na **samodzielne testowanie i eksplorowanie dostępnych możliwości**. To, co właśnie mam na myśli, świetnie oddaje fragment rozmowy Andreja Karpathy z Lexem Fridmanem. Podczas niej padła sugestia dla osób początkujących w obszarze Machine Learningu, jednak ma to zastosowanie do wszystkich innych dziedzin. Mianowicie "Początkujący są zwykle skupieni na tym, 'co robić', niż na tym, aby 'robić dużo'". ([źródło](https://www.youtube.com/watch?v=I2ZK3ngNvvI&t=15s)).

![](https://assets.circle.so/vvc3mi4kc4f75hjpg2x01p3zglcl)

Budując integracje z LLM czy innymi narzędziami AI, nie zawsze skupiam się na użyteczności mojego rozwiązania, lecz na szerokim i nierzadko bardzo głębokim eksplorowaniu technologii. Chwilę później okazuje się, że mechaniki, które zastosowałem np. w powiadomieniach głosowych, przydają mi się przy pracy z transkrypcjami wideo, z którymi pracuję, rozwijając asystenta eduweb.

Przykładem prototypu, który sam w sobie posłużył mi tylko do sprawdzenia w praktyce pewnych założeń, jest strumieniowanie tokenów z GPT-4 bezpośrednio do usługi text-to-speech (w tym przypadku ElevenLabs). Poniżej widać fragment długiej konwersacji, podczas której z pomocą Alice wprowadzałem poprawki w mechanice tego prototypu.

Zwróć uwagę, że ze względu na długi wątek, zadbałem o podanie bieżącego kontekstu w postaci kodu, o którym mówię, aby zwiększyć prawdopodobieństwo tego, że uzyskam poprawną odpowiedź.

![](https://assets.circle.so/u4f3temqf7t4yenj5sy4w6o4o4jl)

Zasadniczo, podczas tworzenia **niezależnych prototypów** lub **elementów istniejących aplikacji**, warto zawsze pamiętać o tym, jak model interpretuje dane, które mu przekazujemy.

*   Zarysowanie kontekstu projektu oraz naszego poziomu doświadczenia pozwala na zwiększenie precyzji odpowiedzi.
    
*   Dostarczanie fragmentów dokumentacji lub informacji, które pozwalają zarysować kontekst (a jednocześnie nie są to informacje poufne), zmniejsza ryzyko halucynacji oraz zwiększa jakość odpowiedzi.
    
*   Ograniczenie zakresu omawianego problemu pozwala na skupienie uwagi modelu tam, gdzie jest to w danej chwili potrzebne.
    
*   Posługiwanie się krótkimi fragmentami kodu oraz ograniczanie generowania kodu przez model, ułatwia rozumienie, debugowanie i wprowadzanie zmian.
    
*   Restartowanie konwersacji także pozwala sterować uwagą modelu i zmieniać kierunek omawianego rozwiązania.
    
*   Zapisywanie historii wiadomości w swojej własnej bazie umożliwia łatwy powrót do wcześniejszych konwersacji, również z pomocą wyszukiwarki.
    

Naturalnie, Ty **nie musisz** działać w ten sposób. Jednak niewykluczone, że w powyższej wypowiedzi znajdziesz wątki, które z powodzeniem przełożysz na swoją codzienność. Zasadniczo mówimy tutaj przede wszystkim **o faktycznym zastosowaniu GPT-4 w swojej pracy oraz łączeniu swojego doświadczenia z możliwościami AI.**

## Nauka i rozwój umiejętności z GPT-4

Wersje [YouTube](https://youtu.be/l6WWjymI7yQ)

> Film wspomniany przez Mateusza: [**https://youtu.be/fOGdb1CTu5c**](https://youtu.be/fOGdb1CTu5c)

Duże modele językowe są wprost genialnym nauczycielem, ale jak zwykle o ich skuteczności w tej roli decyduje kontekst. Można się jednak spotkać z opinią, że ChatGPT nie sprawdzi się w przypadku osoby początkującej ze względu na halucynacje oraz "generowanie niezrozumiałego dla juniora kodu". Sytuacja zmienia się, jednak gdy **model jest podłączony do Internetu** oraz **osoba ucząca się z jego pomocą posiada ogólne zrozumienie jego ograniczeń oraz jej celem jest faktyczna nauka**.

Pokażę Ci, co mam teraz na myśli na przykładzie interakcji z Alice podłączonej do mojego API. W poniższej rozmowie widać bezpośrednio, że model jest podłączony do Internetu, ponieważ posiada dane na temat publikacji opublikowanej w ostatnim czasie. Kolejna wiadomość pokazuje także, że Alice **przeczytała wskazaną przeze mnie stronę**.

![](https://assets.circle.so/6kzq8jvy2nn7uyxryqf1wqwpynhw)

Pojawia się jednak pytanie — **po co?** Przecież mogłem to przeczytać samodzielnie. Okazuje się jednak, że w ten sposób, informacja wykraczająca poza bazową wiedzę modelu **trafiła do kontekstu**. Oznacza to, że mogę zadawać dodatkowe pytania, również takie, które obejmują **prostsze wyjaśnienia** lub wprost przeciwnie, **pogłębiają wybrane zagadnienia**. Inaczej mówiąc, rozmowa z tym dokumentem **jest dostosowana do mojego poziomu wiedzy**. Oczywiście nadal istnieje tutaj ryzyko halucynacji, dlatego faktyczna nauka wygląda tak:

![](https://assets.circle.so/cmajrq24c5hc0l1crdlyxxagcv1g)

Myślę, że obrazek mówi tutaj sam za siebie. Aplikacja Alice (ale może być to ChatGPT czy aplikacja taka jak [https://jan.ai](https://jan.ai/)) **wyświetla się po boku ekranu** i pozwala mi **zadawać pytania na dowolny temat powiązany z dokumentem**. Co więcej, ze względu na **globalne skróty klawiszowe**, mogę po prostu zaznaczyć dowolny fragment, skopiować go i dodać go do konwersacji z prośbą o wyjaśnienie lub cokolwiek, czego potrzebuję.

Dzięki integracji z Notion lub poprzez długoterminową pamięć Alice mogę poprosić o zapisanie podsumowania takiej rozmowy, lub jej wybranych przeze mnie fragmentów. Korzystając z wiedzy i materiałów AI\_Devs, możesz zbudować praktycznie taki sam lub nawet lepszy mechanizm.

Domyślam się jednak, że możesz nie mieć na to przestrzeni, dlatego:

*   Rozważ skorzystanie z narzędzi podłączonych do Internetu (np. [Perplexity.ai](http://perplexity.ai/), [phind.com](http://phind.com/) lub Bing Chat)
    
*   Wybierz aplikacje, które pozwolą Ci szybko przechwytywać różne informacje (np. Notion posiada rozszerzenie dla Chrome "Notion Web Clipper").
    
*   Ucząc się z AI, nie opieraj się wyłącznie na wiedzy wygenerowanej przez model, ale sięgaj po źródła i referencje, które zwykle generują dobre narzędzia (np. te wymienione wyżej).
    
*   Gdy decydujesz się na wybór nowego narzędzia (np. quivr.app), zweryfikuj je, korzystając ze swojej wiedzy na temat modeli. Na rynku jest mnóstwo aplikacji, które realizują zaledwie podstawowe założenia i mogą generować koszty, nie oferując w zamian proporcjonalnej wartości.
    
*   (opcjonalnie) Wykorzystaj makra Shortcuts (macOS) lub Autohotkey (Windows / Linux), za pomocą których przypiszesz do skrótu klawiszowego szybkie otwieranie Perplexity/Phind/Bing Chat.
    

Zatem, jak widzisz, jesteś w stanie z powodzeniem wykorzystywać AI w procesie nauki **bez konieczności samodzielnego budowania jakichkolwiek narzędzi**, a jedynie organizując kilka aplikacji i budując nawyki korzystania z nich. To, czy się na to zdecydujesz, zależy od Ciebie. Myślę, że przykłady mojego zastosowania Alice przynajmniej zarysowały Ci, gdzie leży różnica. Do tego wątku będziemy jeszcze wracać.

## Zastosowanie biznesowe

Korzystanie z modeli w kontekście zawodowym i prywatnym niekoniecznie musi przekładać się na **bezpośrednie** korzyści finansowe i związany z tym zwrot. Oszczędność czasu i energii nie przekłada się bezpośrednio na wyższe wynagrodzenie (ale może do tego prowadzić). I chociaż nie na wszystko trzeba zawsze patrzeć przez pryzmat finansowy (komfort pracy jest bezcenny), to bez wątpienia jest duża przestrzeń do zwiększenia przychodów poprzez umiejętność pracy z LLM.

Na przestrzeni ostatniego roku otrzymuję różne zapytania **o konsultacje, szkolenia, realizację projektów, propozycję pracy czy nawet budowania firmy.** Niewykluczone także, że firma, w której pracujesz / którą rozwijasz lub z którą planujesz się związać, także zwraca swoją uwagę w stronę praktycznego zastosowania AI.

Realizacja projektów komercyjnych wykorzystujących LLM znajduje się obecnie na bardzo wczesnym etapie, a sytuacji nie sprzyja fakt, że **modele językowe mogą więcej, niż myślimy i mniej, niż nam się wydaje.** Tym bardziej że obecnie **łatwiej jest tworzyć prototypy wykorzystujące LLM** niż **stabilne produkty**, aczkolwiek na rynku mamy już coraz więcej genialnych narzędzi, które spełniają swoje obietnice (Perplexity, Raycast AI, Audiopen).

Wykorzystam teraz swoje własne doświadczenia, aby zarysować Ci to, na co się decydujesz, chcąc zrealizować komercyjny projekt. Później wyciągniemy z tego wnioski.

**Przykład #1: Fail**

Kontekst projektu uwzględnia konieczność przetłumaczenia kilkuset stron dokumentów PDF generowanych przez Microsoft Word. Ich struktura **zawiera tabele, obrazki i formatowanie (listy, pogrubienia itp.)**.

Pomimo pomyślnego (ale niełatwego) uzyskania dostępu do treści, a nawet jej przetłumaczenia, pojawił się problem wynikający z pozycjonowania elementów dekoracyjnych. **Przetłumaczony tekst zmieniał swoją objętość**, sprawiając, że rezultat wymagał wprowadzania żmudnych zmian.

Wdrożenie rozwiązania zdolnego do tłumaczeń przyszłych dokumentów wymagałoby zmiany zestawu narzędzi, zmiany struktury samych dokumentów oraz ich formatu. Nie było to jednak uzasadnione biznesowo, ponieważ tylko początkowa liczba dokumentów była duża. Ostateczne rozwiązanie polegało na **usprawnieniu procesu tłumaczenia z pomocą GPT-4** oraz wdrożeniu osoby odpowiedzialnej za to zadanie.

Lekcje:

*   Swobodny dostęp do treści z poziomu kodu jest punktem startowym. Odczytywanie popularnych formatów plików (docx, pdf) jest stosunkowo proste, ale wprowadzanie modyfikacji stanowi wyzwanie.
    
*   W danych nadal dużym problemem są obrazki i materiały wideo. Pomimo coraz lepszych mechanizmów OCR oraz zdolności modeli do pracy z nieustrukturyzowanym tekstem, nadal pojawiają się tutaj wyzwania.
    
*   Poza zgromadzeniem danych oraz ich przetwarzaniem, nadrzędne wyzwanie we wdrożeniu LLM stanowi **ewentualna konieczność zmiany dotychczasowego procesu**, nawyków i narzędzi.
    
*   Gdy rozwiązanie problemu z AI nie wchodzi w grę, warto rozważyć scenariusze **usprawnienia / optymalizacji**, które obniżą koszty i zaoszczędzą czas.
    

  

**Przykład #2: Sukces**

Ten projekt również był związany z tłumaczeniami. Ze względu na format plików (markdown) i związane z nim formatowanie, tłumaczenie poprzez DeepL nie było możliwe. Pomimo tego, że ogólna jakość tłumaczeń była w tym przypadku stosunkowo wysoka, to nierzadko **gubiły się konteksty, formatowanie, a nawet psuły się niektóre linki**.

Poniżej widać jak fragment "przykładowy-link" został przetłumaczony na "example-link", co oczywiście prowadziło do strony 404.

![](https://assets.circle.so/5rzpx9bi8acts94333qgq0s9r0e3)

GPT-4 poradziło sobie z tym zadaniem **nieporównywalnie lepiej**. Poprawki ograniczyły się do pojedynczych wyrażeń i jednego rodzaju błędu formatowania wynikającego z logiki skryptu, a nie samego modelu. Cały proces zrealizowałem poprzez LangChain, podział plików na mniejsze fragmenty, nadanie kontekstu oraz sam prompt. Struktura treści pozwalała na jej podział **według akapitów**, a format markdown ułatwiał czytanie nagłówków bieżących sekcji. Oznacza to, że model praktycznie cały czas miał informację o kontekście.

Lekcje:

*   Otwarte formaty danych (.txt, .csv, .md, .html, .json, .jsonl, czy bezpośredni dostęp do bazy SQL/noSQL) niezwykle ułatwiają zastosowanie na potrzeby LLM.
    
*   API OpenAI cechuje nieporównywalnie większa stabilność niż kilka miesięcy temu. Pomimo tego, **konieczne jest zadbanie o możliwość wznawiania operacji w miejscu, w którym została wstrzymana**.
    
*   Ze względu na optymalizację kosztową, **konieczne jest** weryfikowanie skryptów na **zróżnicowanych zestawach danych testowych** w celu **wykrycia potencjalnych problemów**.
    
*   Rezultaty wygenerowane przez LLM **zawsze powinny być weryfikowane przez człowieka**. Czas potrzebny na weryfikację zależy od skuteczności systemu, natomiast jej obecność podnosi jakość.
    

  

**Przykład #3: Częściowy sukces**

Kolejny przykład dotyczy pracy z transkrypcjami wideo. Nawiązywałem już do tego wątku w poprzednich lekcjach, jednak w praktyce obejmował on nieco szerszy zakres prac, podzielony na kilka etapów.

1.  **Definicja założeń:** Pierwsza wersja systemu zakładała możliwość uzyskiwania odpowiedzi na pytania dotyczące bazy kursów publikowanych na platformie. Oprócz tytułów, opisów, kategorii, nazw rozdziałów i lekcji, miałem do dyspozycji transkrypcje, z których część przeszła moderację, a część nie. **System musiał uwzględniać możliwość ich aktualizacji oraz dodawania nowych.** W przypadku braku wiedzy na temat platformy, asystent miał przekierowywać do obsługi klienta. Natomiast dla pytań merytorycznych mógł posługiwać się swoją bazową wiedzą oraz otwartymi źródłami w Internecie.
    
2.  **Zbieranie danych:** Ze względu na złożoność systemu (rozproszona architektura), podłączenie do pełnego zestawu danych wymagało zaprojektowania metody ich pobierania, mapowania oraz przetwarzania (podziału na fragmenty). Ponieważ 80% treści to transkrypcje zawierające szereg metadanych, musiałem je również usunąć i częściowo uwzględnić w opisach dokumentów.
    
3.  **Moderacja treści:** Automatyczne transkrypcje zawierały błędy, i to w najbardziej krytycznych momentach, zawierających **słowa kluczowe**. Moderacja trwała kilkanaście tygodni (i trwa nadal).
    
4.  **Mechanika asystenta:** Częściowa baza wiedzy pozwoliła zaprojektować główne mechaniki asystenta. Poza dostępem do wiedzy uzyskał także dostęp do **określonej listy** zasobów zewnętrznych. Wdrożyłem także mechaniki zmniejszające ryzyko nadpisania zachowań asystenta oraz monitorowanie zachowań użytkowników w celu wykrywania ewentualnych nadużyć.
    
5.  **Główny prompt:** Ostatnim etapem wdrożenia pierwszej wersji asystenta było zaprojektowanie promptu (a w zasadzie promptów), które kształtowały jego zachowanie, styl wypowiedzi oraz sposób posługiwania się materiałami (np. informowanie o skorzystaniu z zewnętrznych źródeł) czy wskazywaniem źródeł wiedzy.
    

  

Lekcje:

*   Stwierdzenie, że wdrożenie LLM to w 80-90% praca z danymi, jest prawdziwe.
    
*   Nawet genialny prompt nie poprawi niskiej jakości kontekstu.
    
*   W przypadku posiadania bardzo nieustrukturyzowanych danych warto rozważyć ich **podsumowania,** **moderację** lub **przetworzenie**.
    
*   Strategia odzyskiwania informacji na potrzeby bieżącej rozmowy (filtrowanie / grupowanie / odnajdywanie) bezpośrednio decyduje o skuteczności chatbota.
    
*   Model GPT-3.5-Turbo jest (zwykle) niewystarczający do wygenerowania **finalnej odpowiedzi**, ale może być wykorzystany do **prostych zadań** (podsumowań czy niektórych klasyfikacji). Alternatywnie możemy skorzystać z modelu Claude 3 Haiku, który osiąga obecnie jeszcze lepsze rezultaty niż GPT-3.5, w szczególności, gdy w prompcie uwzględnimy jakościowe przykłady oczekiwanego zachowania.
    
*   Koszty na skali treści ~kilkudziesięciu milionów znaków w języku polskim są dość małe na początku, ale nieefektywne dobieranie kontekstu potrafi szybko generować duże kwoty. Z drugiej strony, były to kwoty rzędu kilkuset złotych, a nie tysięcy.
    

**Wnioski**

Powyższe przykłady powinny **zarysować Ci różne problemy i ich rozwiązania** związane z wdrażaniem LLM. Nie obejmują jednak wszystkich możliwości (np. stosowania modeli offline) czy problemów (np. prywatność danych firmowych) oraz zaawansowanych zagadnień (np. fine-tuning). Pomimo tego, widzisz już, że niemal zawsze mówimy o wymagającej pracy z danymi oraz projektowaniem logiki aplikacji (lub scenariuszy automatyzacji).

Poza doprowadzeniem do działania aplikacji i realizowania założeń istotna staje się także kontrola kosztów, moderacja, monitorowanie czy utrzymanie stabilności. To właśnie z tych powodów, obecnie wykorzystywanie LLM na własne potrzeby lub do budowania prototypów jest zdecydowanie prostsze, niż tworzenie dojrzałych produktów. Naturalnie, produkcyjne scenariusze także są możliwe i mogą uwzględniać: **Tłumaczenia**, **Transformacje**, **Analizy**, **Moderację**, **Klasyfikację**, **Wzbogacanie**, **Parsowanie**, **Podsumowania**, **Wyszukiwania**, **Weryfikowanie** oraz oczywiście zastosowanie w roli chatbotów.

Pomimo tego, że wymienione określenia są dość ogólne, w dalszych lekcjach zajmiemy się ich praktycznym wykorzystaniem.

* * *

## Zadanie praktyczne

1.  Zdefiniuj pole „system” w zapytaniu w taki sposób, aby wykonać podane zadanie, a jednocześnie zmieścić się w limicie znaków. Zwróć uwagę, że tym razem liczymy znaki, a nie tokeny, co utrudnia optymalizację — zwykła zmiana języka na angielski może okazać się niewystarczająca. [https://tasks.aidevs.pl/chat/optimize](https://tasks.aidevs.pl/chat/optimize)
    
2.  Przekonaj GPT-4, aby po pierwsze naprawił dostarczony kod źródłowy (jest niepoprawny), a po drugie zoptymalizował go (nie ma w nim obsługi błędów, wykonuje się bardzo długo dla dużych danych wejściowych). Nie ma znaczenia, czy znasz ten język, czy też nie. AI ma być Twoim pomocnikiem w tym zadaniu. Wygenerowany kod ma nie tylko działać, ale także ma poprawnie obsługiwać błędy. Dla wszystkich błędnych danych wejściowych wynikiem działania funkcji ma być ZERO. Nie rzucaj wyjątkami. [https://tasks.aidevs.pl/chat/fixit](https://tasks.aidevs.pl/chat/fixit)