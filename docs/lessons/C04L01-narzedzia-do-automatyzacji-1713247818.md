![](https://assets.circle.so/thvwzuidfc0k7847nfs03t5j6rsd)

» [Lekka wersja przeglądarkowa](https://cloud.overment.com/C04L01-narzedzia-do-automatyzacji-1712586605.html) «

Link do [YouTube](https://www.youtube.com/watch?v=vurTeET0g44&themeRefresh=1)

Narzędzia no-code wydają się bezużyteczne dla osoby potrafiącej programować. Ich użyteczność może obrazować poniższy zrzut ekranu z jednego z 3 moich kont [make.com](http://make.com/), które łącznie realizują około 450 000 operacji. I choć trudno estymować oszczędzony czas, to bez cienia wątpliwości koszt pracy ludzi byłby wielokrotnie wyższy, niż koszt subskrypcji.

![](https://assets.circle.so/rk4tx8z16zpmr5svr7uwym5gb3de)

Obszary w których wspierają mnie automatyzacje, obejmują zarówno codzienne operacje związane z organizowaniem mojej pracy, jak i wchodzą w obszary zarządzania wewnętrzną wiedzą, marketingu, sprzedaży, produktu, finansów, administracji po działania strategiczne i zarządcze. Inaczej mówiąc — są częścią firmy.

Powód wykorzystania narzędzi no-code, pomimo faktu, że potrafię programować, jest prosty — **oszczędność czasu.**

Załóżmy, że mamy na stronie formularz kontaktowy. Informacja o jego wypełnieniu musi trafić na kanał Slack działu sprzedaży. Poniższy scenariusz zbudowałem w niecałe 2 minuty. Nawet zakładając, że byłby to istniejącej już aplikacji (w której odpada wstępna konfiguracja, ustawienie serwera i domeny), to potrzebowałbym kilkudziesięciu minut na odwzorowanie tej samej logiki w kodzie. Co więcej, jeśli konieczna byłaby jeszcze integracja z systemem CRM czy SMSAPI, czas pisania kodu znacznie by się wydłużał, a w przypadku [make.com](http://make.com/), w dużej mierze chodzi wyłącznie o dodawanie kolejnych modułów.

![](https://assets.circle.so/iyp6pa1p71ozvjmydcn6wudbf2qo)

Oczywiście tutaj do gry także wchodzą wątki dotyczące obsługi błędów (po kliknięciu prawym przyciskiem myszy na moduł, mamy opcję dodania Error Handlera) czy szereg ograniczeń (np. zarządzanie obiektami JSON w Make jest dość problematyczne). Te ograniczenia możemy obchodzić poprzez łączenie się z logiką własnych aplikacji. Przykładowo scenariusz poniżej obsługuje kanał na Slacku, na którym rozmawiam z Alice. Niebieskie modułu reprezentują połączenia HTTP z moim własnym API. Jest to przykład **połączenia no-code z kodem aplikacji** i powód dla którego uważam, że największy potencjał narzędzi no-code pojawia się właśnie w rękach osób potrafiących programować. Zawsze też zachęcam osoby, które nie programują, ale posługują się narzędziami no-code, aby rozwijały przynajmniej ogólne zrozumienie kodu.

![](https://assets.circle.so/xseb7rv7q7vco1vv73jadukow5fy)

## Wprowadzenie do Make / IFTTT / N8N

Na rynku istnieją cztery platformy, które warto brać pod uwagę w kontekście automatyzacji. Są to: [make.com](http://make.com/) (bezapelacyjnie pierwszy wybór), [Zapier](https://zapier.com/), [N8N](https://n8n.io/) i [IFTTT](https://ifttt.com/). Interesujący staje się także [buildship.com](https://buildship.com/). Nasza uwaga będzie skupiać się na make, ponieważ jest on najbardziej elastyczny z wszystkich dostępnych platform. Drugim wyborem może być N8N (jest to projekt Open Source).

Jeżeli dopiero zaczynasz pracę z [make.com](http://make.com/), koniecznie zobacz materiał, który przygotował Jakub (udostępnialiśmy go już wcześniej).

Najważniejsze koncepcje to:

*   **Trigger**: Każdy scenariusz zaczyna się wyzwalaczem w postaci Instant (uruchamiany natychmiast, np. webhook) lub Polling (uruchamiany według harmonogramu)
    
*   **Moduł & Akcja**: Moduł jest pojedynczym elementem scenariusza, zwykle dotyczy konkretnej usługi (np. Slack) lub wewnętrznego narzędzia platformy (np. Tools). Moduł zawiera listę dostępnych akcji, które zwykle pozwalają wchodzić w interakcję z zewnętrznym API
    
*   **Flow Control**: Scenariusz wykonuje moduły jeden po drugm. Możliwe jest jednak wpływanie na przepływ danych poprzez Router (uwzględniający ścieżki), Repeater (powtarzający dalszy blok modułów), Iteratory / Agregatory (umożliwiają pracę na pojedynczych pakietach danych, czyli bundle'ach), Dyrektywy (wykorzystywane przy obsłudze błędów)
    
*   **Filtry**: Pomiędzy modułami możemy ustawić filtry sprawdzające wybrane warunki. Sprawdzają się szczególnie w przypadku routerów.
    
*   **Moduł HTTP**: Prawdopodobnie najważniejszy (zaraz obok Webhooków) moduł [make.com](http://make.com/). Umożliwia wykonywanie zapytań HTTP do dowolnego API (w tym także innych scenariuszy rozpoczynających się Webhookiem)
    
*   **Narzędzia**: W dolnym panelu widoku edycji scenariusza znajdują się wbudowane narzędzia umożliwiające [m.in](http://m.in/). pracę z obiektami JSON czy korzystanie z wyrażeń regularnych
    
*   **Zmienne i funkcje**: W akcjach modułów możemy korzystać z zarówno ze zmiennych, jak i wbudowanych w make prostych funkcji. Ich lista wyświetla się w chwili aktywacji pola tekstowego dostępnego bezpośrednio w akcjach.
    

Do dalszego pogłębiania wiedzy na temat [make.com](http://make.com/) bardzo przydatne są oficjalne materiały z [dokumentacji](https://www.make.com/en/help/tutorials) oraz [akademii](https://academy.make.com/).

## Organizacja wiedzy w Airtable lub własnej bazie

W **C02L04** udostępniałem szablon Airtable, który może pełnić rolę pamięci długoterminowej dla GPT-4. Airtable świetnie integruje się z [make.com](http://make.com/), jednak obecnie na bezpłatnym planie obsługuje 1000 rekordów i później wymaga przejścia na płatny plan za (aktualnie) $20. Alternatywnie możemy skorzystać z Notion (co także polecam), jednak tam w zasadzie musimy wystartować z planem $10 miesięcznie lub wspominanym [xata.io](https://xata.io/). No i ostatecznie możemy rozważyć podłączenie się do własnej bazy danych, np. PostgreSQL lub mySQL. To jednak będzie wymagało od nas przygotowania API (aczkolwiek [make.com](http://make.com/) posiada natywne moduły umożliwiające połączenie również z takimi bazami).

W zależności od naszego celu bazy mogą być wyspecjalizowane, skupione wokół jednego tematu (np. treści publikacji w mediach społecznościowych czy listy przydatnych linków) lub być ogólne (np. przechowywać ogólne "wspomnienia" asystenta AI).

Projektowanie struktury Airtable na potrzeby prostych automatyzacji, nie jest szczególnie wymagające. W przypadku bardziej złożonych aplikacji sprawa szybko się komplikuje. Ogólne zasady uwzględniają:

*   Spójne nazewnictwo (np. nazwy angielskie, pisane małymi literami, bez spacji)
    
*   Właściwe typy danych (np. w kolumnie w której znajdują się liczby, ustawiamy typ Number w przypadku Airtable lub analogiczny w przypadku innych baz danych)
    
*   Relacje pomiędzy tabelami (np. tabela rekordy w tabeli **articles** mogą być powiązane z autorem lub autorami z tabeli **authors** z pomocą identyfikatorów)
    
*   Normalizacja (związana z unikaniem przechowywania tych samych danych w różnych kolumnach / tabelach)
    

Na początek zaczniemy od czegoś stosunkowo prostego — masowego przetwarzania danych. Załóżmy, że będą to szkice treści, wymagające automatycznej korekty. Tworzymy więc tabelę **Articles** w której minimum kolumn uwzględnia:

*   identyfikator rekordu
    
*   treść, która ma przejść korektę
    
*   jej poprawioną wersję
    
*   pole umożliwiające oznaczanie poprawionych rekordów
    

![](https://assets.circle.so/h2kowk6qk13h0wd0t45i0e1c1o4f)

*   🔗 [Skopiuj tabelę na swoje konto](https://airtable.com/appwMSq5CdeokCeMR/shrqJiIRpVDZx4E0x)
    

Poza kolumnami w Airtable dodałem także tzw. widok, w którym działa filtr sprawiający, że pojawiają się w nim tylko te rekordy, których **pole reviewed jest odznaczone**. Inaczej mówiąc, są to rekordy, które muszą zostać przetworzone.

![](https://assets.circle.so/ocpx1imm1c1lwofz9flqpvrfd7k7)

*   ⚡ [Pobierz schemat scenariusza](https://cloud.overment.com/aidevs_copywriter-1696416947.json)
    

Przejdźmy przez powyższy scenariusz krok po kroku, ponieważ zaprojektowałem go w taki sposób, aby uwzględnić istotne mechaniki, które przydadzą Ci się w innych automatyzacjach.

1.  **Webhook:** Niemal wszystkie moje automatyzacje zaczynają się webhookiem, ponieważ mogę je wtedy wywoływać automatycznie, kiedy chcę, również z poziomu innych automatyzacji czy zewnętrznych usług
    
2.  **Decide**: Pierwszy moduł OpenAI w tym konkretnym przypadku nie jest potrzebny, jednak pokazuje możliwą mechanikę, która pozwoli wykorzystywać **jeden scenariusz** do wykonania różnych akcji na podstawie przekazanych danych. Czasem taki moduł może występować w dalszej części logiki automatyzacji i np. decydować o rodzaju zwróconej odpowiedzi. Decyzja odbywa się poprzez zwrócenie 1 lub 2 (minimalna liczba tokenów). Poza nią model pobiera także treść poszczególnych dokumentów z treści wiadomości.  
      
    Ponownie w tym konkretnie scenariuszu **nie jest to konieczne i nawet można tego uniknąć poprzez bezpośrednie przesłanie listy wpisów, które mają zostać dodane**. Zdecydowałem się to jednak dodać, ponieważ taka mechanika może być przydatna np. przy dodawaniu zadań do listy, gdzie chcemy np. je podyktować.
    
3.  **Router:** Przypisane do niego filtry (widoczne po kliknięciu łączenia) pozwalają decydować o tym, która ścieżka zostanie wykonana. Ścieżki uruchamiają się **w takiej kolejności, w której zostały podłączone do routera**
    
4.  **Iterator:** Przechodzi przez listę dokumentów z punktu **Decide**. Każdy z nich zostaje zapisany w Airtable a link do nowego rekordu zostaje zgromadzony akcją **Text Aggregator**. Aggreatory bezpośrednio łączą się ze wskazanym iteratorem lub modułem zwracającym listę zestawów danych (bundle).
    
5.  **Answer**: W Make obiekty JSON najlepiej tworzyć z pomocą modułu Create JSON, aby automatycznie zadbać o obsługę znaków specjalnych. W tym scenariuszu strukturę obiektów odpowiedzi można utworzyć ręcznie lub z pomocą generatora, w który możemy wpisać **{"answer": "..."}**. Po utworzeniu struktury zapisujemy w nim wynik działania (w tym przypadku) Text Aggregatora.
    
6.  Kolejna ścieżka obsługuje **pobranie listy wpisów z widoku To Review** z Airtable. Moduł ten zwraca **zestawy danych (bundle),** przez co dalsza część scenariusza wykonuje się **wielokrotnie** (warto o tym pamiętać). W tym przypadku powtórne wykonanie obejmuje wyłącznie te moduły, które znajdują się przed Text Aggregatorem.
    
7.  Każdy pobrany artykuł jest dzielony według podwójnego znaku nowej linii (akapitami). Lista fragmentów (nawet gdy jest tylko jeden) przechodzi przez drugi iterator wewnątrz którego wykonywane jest zapytanie do OpenAI, którego rolą jest poprawienie błędów w tekście.
    
8.  W przedostatnim kroku poprawione fragmenty są gromadzone (Text Aggregator) i dodawane do Airtable. Dodatkowo aktualizowany rekord jest oznaczany jako "reviewed", dzięki czemu znika z widoku "To Review"
    
9.  Na sam koniec ponownie zbieramy linki zaktualizowanych wpisów i wysyłamy je w odpowiedzi.
    

Jeśli chcesz korzystać z tego scenariusza produkcyjnie, możesz zrezygnować z początkowego generowania listy wpisów na rzecz przekazywania ich bezpośrednio na webhook.

Zwykle scenariusze wykorzystujące Airtable i OpenAI mogą być nieporównywalnie prostsze i składać się jedynie z modułów: **Pobierz rekord(y), Wygeneruj odpowiedź OpenAI, zaktualizuj rekord(y)**. Jednak zależało mi na tym, aby na jednym przykładzie pokazać możliwie wszystkie, najbardziej istotne mechaniki.

## Przydatne automatyzacje pomagające w pracy

Istnieje kilka popularnych obszarów, z którymi spotyka się większość z nas: listy zadań, kalendarz, poczta e-mail, organizacja dokumentów, news feed czy szeroko pojęta komunikacja. Poza nimi są także: działalność w sieci (np. pisanie bloga czy newslettera) czy prywatne aktywności (np. prowadzenie budżetu domowego czy jakieś hobby).

Poza tym automatyzacje oraz własne narzędzia przydają się również w kontekście bezpośrednio zawodowym, co zresztą widać na moim przykładzie i wykorzystywanych przeze mnie automatyzacji, działających w każdym obszarze moich projektów.

Oto lista automatyzacji, które mogą pomóc Ci w Twojej codzienności (część z nich sam wykorzystuję):

*   automatyczne zarządzanie zadaniami, uwzględniające przypisywanie ich do konkretnych kategorii, tagów czy dat. To wszystko na podstawie zwykłej wiadomości zawierającej opis tego, co chcę zrobić
    
*   zarządzanie kalendarzem uwzględniające dodawanie, przesuwanie wydarzeń lub głosowe komunikowanie nadchodzących wydarzeń
    
*   automatyczne porządkowanie przychodzących wiadomości czy nawet ich załączników w **prywatnej skrzynce e-mail** (w przypadku firmy, najlepiej stosować automatyczne, proste filtry Gmail)
    
*   automatyczne porządkowanie plików na podstawie ich nazw lub treści (w przypadku otwartych formatów tekstowych)
    
*   automatyczne opisywanie linków dopisywanych do feed reader'a (np. Feedly)
    
*   automatyczne formatowanie i tagowanie szybkich notatek, zapisywanych np. bezpośrednio z przeglądarki czy dowolnej innej aplikacji
    
*   automatyczne konwertowanie i formatowanie notatki głosowej (np. na listę zadań czy listę zakupów)
    
*   automatyczne raporty (np. na początek dnia lub jego zakończenie)
    
*   różne rodzaje przetwarzania długich plików: korekty, fact checking, tłumaczenia, formatowanie, podsumowania, tagowanie itd.
    
*   generowanie transkrypcji, podsumowania filmów wideo czy artykułów w celu łatwiejszego przyswojenia, czy podjęcia decyzji o tym, czy warto się z nimi bliżej zapoznać
    
*   tworzenie prywatnego newslettera czy nawet podcastu, które mogą być generowane na podstawie obserwowania wskazanych źródeł. Coś takiego pozytywnie wpływa na proces nauki i pozostawania na bieżąco
    
*   wsparcie procesu research'u na potrzeby prywatnego bloga czy dowolnego innego hobby
    
*   budowanie i zarządzanie Second Brain (np. w Notion lub Obsidian), uwzględniające łatwą interakcję poprzez asystenta AI
    

Część z wymienionych automatyzacji, już omawialiśmy. Kilka z nich będziemy jeszcze budować, a inne możesz stworzyć samodzielnie, korzystając z wiedzy na temat modeli, programowania czy automatyzacji, które już posiadasz.

Prawdopodobnie najważniejszym elementem projektowania takich automatyzacji jest **możliwość uruchomienia ich z poziomu innych automatyzacji**. To otwiera przed nami drogę do tego, aby raz zbudowane skrypty i scenariusze stały się **narzędziem, którym będzie posługiwać się nasz asystent** lub po prostu będziemy mogli sięgnąć po nie w różnych kontekstach.

## Przydatne skrypty i makra

Narzędzia no-code mają swoje ograniczenia i niekiedy nie sprawdzają się nawet dla stosunkowo prostych zadań. Dlatego warto zbudować **prywatne API** lub przynajmniej zestaw funkcji serverless z których będą mogły korzystać nasze automatyzacje.

Na potrzeby własnych automatyzacji, z powodzeniem można wykorzystać np. Netlify Functions (bez większych problemów ich szkielet potrafi generować GPT-4, natomiast sama implementacja leży raczej po naszej stronie). Jako przykład przygotowałem prostą funkcję wykorzystującą RecursiveCharacterTextSplitter z LangChain. Treść przesłana do niej zapytaniem POST wewnątrz właściwości **content** zostaje podzielona na mniejsze fragmenty.

Kod źródłowy tej funkcji, dostępny jest tutaj:

*   ⚡ [Pobierz kod funkcji Splitter](https://cloud.overment.com/aidevs_splitter-1696432589.zip)
    

![](https://assets.circle.so/54yyzkt5v8xtt1b1zahfm7b7zubc)

Aby uruchomić powyższy kod w Netlify, należy:

1.  Utworzyć repozytorium [git](https://git-scm.com/)
    
2.  Utworzyć zdalne repozytorium Github
    
3.  Utworzyć nowy projekt Netlify na podstawie repozytorium Giuthub
    
4.  Dodać zmienne środowiskowe NODE\_VERSION ustawione na 18.8.0 oraz AWS\_LAMBDA\_JS\_RUNTIME ustawione na nodejs18.x
    
5.  Upewnić się, że deployment przebiegł poprawnie w panelu Netlify
    

Splitter powinien być dla nas dostępny pod adresem: **https://PROJECT\_ID.netlify.app/.netlify/functions/splitter** (oczywiście nalezy podmienić PROJECT\_ID na ten wygenerowany przez Netlify).

Aby wykorzystać tak przygotowaną funkcję w automatyzacjach, należy wykorzystać moduł Create JSON ze strukturą danych **{ "content": "...", "chunkSize": 2, "chunkOverlap": 1 }** oraz z modułu HTTP w którym należy podmienić adres URL na ten, kierujący do funkcji Netlify.

![](https://assets.circle.so/44mnwfbie2evkpmb0lup4u9kwxwg)

*   [Pobierz Schemat scenariusza Splitter](https://cloud.overment.com/aidevs_splitter-1696432758.json)
    

Powyższy scenariusz (lub jego fragment) można stosować w innych automatyzacjach, w których wymagane jest przetworzenie dłuższej treści pliku. Przykładem może być wcześniejszy scenariusz w którym pracowaliśmy z Airtable.

Sam wykorzystuję podobne funkcje, jednak nie korzystam z Netlify Functions, a własnej aplikacji NestJS, która daje mi jeszcze większą elastyczność, uwzględniającą interakcje z moją bazą danych czy systemem plików, a także szeregu usług dostępnych na moim serwerze.

Jeśli chodzi o narzędzia z jakich korzystam na potrzeby automatyzacji (ale i nie tylko, bo główna logika prywatnej wersji Alice również po nie sięga) uwzględniają:

*   estymację tokenów
    
*   wczytywanie treści stron www
    
*   wyszukiwanie DuckDuckGo
    
*   przetwarzanie obrazów (np. optymalizację lub zwykły upload)
    
*   przetwarzanie plików (np. konwertowanie markdown na strukturę obiektów dla strony Notion i odwrotnie)
    
*   integrację z innymi modelami (np. Wolfram Alfa)
    
*   interakcję ze stronami www przez Puppeteer lub Playwright
    
*   interakcje z API, którego z różnych powodów (np. wydajności) nie chcę mieć w [make.com](http://make.com/)
    
*   ogólne API asystenta umożliwiające zapamiętywanie informacji, ich organizacje, wzbogacanie czy naukę nowych umiejętności
    

Oczywiście zestaw tych narzędzi będzie dopasowany do Ciebie. Jeżeli masz taką możliwość, to warto przygotować prywatne API z pomocą ulubionej back-endowej technologii. Jeśli pracujesz z narzędziami no-code, to [make.com](http://make.com/) i Netlify Functions może okazać się wystarczające do prywatnych zastosowań.

* * *

## Zadanie praktyczne

1.  Wykonaj zadanie API o nazwie ‘**knowledge**’. Automat zada Ci losowe pytanie na temat kursu walut, populacji wybranego kraju lub wiedzy ogólnej. Twoim zadaniem jest wybór odpowiedniego narzędzia do udzielenia odpowiedzi (API z wiedzą lub skorzystanie z wiedzy modelu). W treści zadania uzyskanego przez API, zawarte są dwa API, które mogą być dla Ciebie użyteczne. Jeśli zwracasz liczbę w odpowiedzi, to zadbaj, aby nie miała ona zbytecznego formatowania (✅ 1234567, ❌ 1 234 567).
    

* * *

## Sprawdź swoją wiedzę

[Rozpocznij Quiz](https://tasks.aidevs.pl/quiz/c04l01_xmen)

* * *

## Podsumowanie Audio