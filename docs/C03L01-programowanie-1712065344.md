Duże Modele Językowe (LLM), **nie były projektowane z myślą o programowaniu**. Na pewnym etapie okazało się jednak, że świetnie sprawdzają się w tym zadaniu. Trzeba jednak podkreślić, że w praktyce "sprawdzają się" waha się od **"nie nadają się do czegokolwiek"** a **"programują lepiej ode mnie!"** Różnica pomiędzy jednym a drugim, leży w sposobie ich wykorzystania i właśnie ta różnica jest tematem dzisiejszej lekcji.

## Kwestia prywatności

Wielokrotnie podkreślałem już kwestię prywatności, jednak tutaj nabiera ona szczególnego znaczenia, ponieważ omówione zadania mogą mieć bezpośredni związek z Twoją pracą. Niektórzy pracodawcy **nie pozwalają na korzystanie z usług OpenAI i warto to uszanować.** Obecnie istnieje jednak możliwość zadbania o prywatność poprzez [ChatGPT Enterprise](https://openai.com/enterprise-privacy) lub skorzystanie z modeli OpenSource (np. CodeLlama).

Niezależnie od ich decyzji, warto zachować zdrowy rozsądek i nie przesyłać do OpenAI danych poufnych. Z drugiej strony wykorzystywanie AI na potrzeby nauki lub realizowania prywatnych projektów, jest kwestią Twojej decyzji. Poza tym musisz wiedzieć, że istnieją istotne różnice pomiędzy ChatGPT a OpenAI API z którego korzystamy. Szczegóły znajdziesz w dokumentacji, w sekcji: [How do we use your data](https://platform.openai.com/docs/models/how-we-use-your-data).

![](https://assets.circle.so/oa4xjtup6pini49fjg5unqce4111)

Z drugiej strony opłata za ChatGPT Plus jest stała, co może stanowić dużą zaletę, aczkolwiek na ten moment $20 znacznie lepiej jest przeznaczyć na dostęp do [Perplexity Pro](https://www.perplexity.ai/) lub [Phind](https://www.phind.com/).

## Indywidualne dostosowanie nauki

Poprzez nadanie roli dla modelu oraz dostarczenie informacji o naszym doświadczeniu czy specjalizacji, możemy wpłynąć na poziom złożoności odpowiedzi i tym samym ułatwić nam zrozumienie wybranych zagadnień. Świetnie opisał to Vipul w swoim wpisie "[GPT makes learning fun again](https://www.vipshek.com/blog/gpt-learning)", z którym warto się zapoznać.

Poniżej znajduje się przybliżony przykład obrazujący to, w jaki sposób sam podchodzę do nauki z GPT-4 (aby ułatwić podzielenie się nim, korzystam z Playground, jednak zwykle mówimy o aplikacji Alice lub Perplexity). Mamy w nim typowy prompt związany z udzielaniem odpowiedzi na pytania, na podstawie dostarczonego kontekstu. Zaznaczenie **mojego doświadczenia** w wybranym obszarze jest pomocne przy dopasowaniu poziomu zaawansowania odpowiedzi.

![](https://assets.circle.so/uk84dw556uoclkudys6ph4h3hvmk)

*   ⚡ [Zobacz przykład (Junior Dev)](https://platform.openai.com/playground/p/dbqzBNtUDY3KUs4xgV5dUyYY?model=gpt-4&mode=chat)
    
*   ⚡ [Zobacz przykład (Senior Dev)](https://platform.openai.com/playground/p/hD4whZT2HMcTrR2aL8xllSIr?model=gpt-4&mode=chat)
    

Dostarczenie dodatkowego kontekstu (w postaci treści strony: [https://svelte.dev/blog/runes](https://svelte.dev/blog/runes)), pozwoliło mi na pracę **z aktualnymi informacjami**. Oczywiście dalej muszę mieć na uwadze **ryzyko halucynacji**, w szczególności, gdy będę dopytywał o zagadnienia, które wychodzą poza bazową wiedzę modelu.

Poniżej znajduje się jeden z przykładów w którym pytałem o pogłębienie wybranych zagadnień na temat frameworka "Svelte". Dzięki temu nawet jeśli te zagadnienia nie są mi dokładnie znane, to mogę je z pomocą GPT-4 łatwo przywołać i zestawić z moimi założeniami. W ten sposób mam możliwość **lepszego zrozumienia danego tematu.**

![](https://assets.circle.so/gl6kxa4btg32roowt168txmc708d)

Nie wiem, czy jest to wystarczająco widoczne, jednak **nie stosuję tutaj GPT-4 jako nauczyciela czy wyroczni** prowadzącej mnie przez proces nauki, ale jako **narzędzie ułatwiające mi przechodzenie przez pewne procesy myślowe**. Taka postawa sprzyja **krytycznemu podejściu**, które nie tylko adresuje potencjalne błędy w rozumowaniu modelu, ale **nie wyłącza mojego myślenia**. Mówię o tym, ponieważ często spotykam opinie, że nauka i nauka z AI sprawia, że sami nie rozumiemy tego, co robimy. **W praktyce jednak to od nas zależy, czy na to pozwolimy.**

Dostarczanie fragmentów bywa dość uciążliwe, dlatego zoptymalizowałem sobie ten proces poprzez **podłączenie GPT-4 do skrótów klawiszowych**. Przygotowałem sobie makro (Keyboard Maestro, ale jest to możliwe także w Shortcuts czy Autohotkey), które **kopiuje zaznaczony fragment, pobiera adres strony z aktywnego okna przeglądarki i przekazuje go do Alice**. W oknie czatu pojawia się treść odpowiedzi, a ja mam możliwość zadania dodatkowych pytań na temat przekazanych treści. Co ciekawe — takie makro może działać w dowolnej aplikacji (po prostu adres URL będzie dodawany tylko podczas pracy z przeglądarką).

![](https://assets.circle.so/moxvpbzgon8rfh7rjlw5ta92sq6u)

## Planowanie i podejmowanie decyzji projektowych z GPT-4

Duże Modele Językowe posiadają obszerną, ogólną wiedzę. Wśród niej znajdują się definicje **modeli mentalnych** czy narzędzi przydatnych przy działaniach strategicznych oraz podejmowaniu decyzji. Poza wiedzą na ich temat modele potrafią je także stosować w praktyce i dzięki temu mogą pełnić rolę **świetnego partnera w dyskusji**. Należy jednak pamiętać o tym, że to **my powinniśmy kierować rozmową, a nie model**, tym bardziej że ewentualne konsekwencje podjętych decyzji będziemy ponosić sami.

Wsparcie ze strony np. GPT-4 podczas procesów myślowych bywa imponujące, jednak w bardzo dużym stopniu jego jakość zależy od dostarczonych danych oraz samego promptu. Co więcej, jakościowe wypowiedzi zwykle wymagają przeprowadzenia konwersacji i dostarczenia większej ilości danych, i **niemal nigdy nie pojawiają się już przy pierwszej odpowiedzi ze strony modelu**.

W lekcji na temat technik projektowania promptów wspominałem m.in. o [Tree of Thoughts](https://arxiv.org/abs/2305.10601). Wykorzystując fakt, że posługujemy się kontekstem **programistycznym / no-code**, możemy ułatwić sobie przeprowadzanie modelu przez złożony proces myślowy, podążający schematem opisanym przez ToT.

W przykładzie [**17\_tree**](https://github.com/i-am-alice/2nd-devs/blob/main/17_tree/17.ts) znajdziesz możliwą implementację rozbudowanego procesu analizy dostarczonego problemu, poprzez **zarysowanie możliwych scenariuszy**, **ich pogłębieni**, **ocenę**, **zaplanowanie**, **ocenę** oraz **porównanie** dążące do finalnej odpowiedzi.

Komentarz: Chcąc w pełni wykorzystać LangChain, moglibyśmy skorzystać z ConversationalChain i np. Buffer Memory. Uważam jednak, że na tym etapie rozwoju tego narzędzia, lepiej jest samodzielnie zaprojektować całą mechanikę. Nie jest to szczególnie skomplikowane, a pozbywamy się niepotrzebnej warstwy abstrakcji, której modyfikowanie nie jest oczywiste.

![](https://assets.circle.so/0trk1vixgobc9taa7xcdmegt2yv4)

Różnica działania ToT w porównaniu do bezpośredniej odpowiedzi z ChatGPT jest zasadnicza (obrazek poniżej). Analizowany problem dotyczył **faktycznej decyzji biznesowej**, którą już podjąłem i poprzedziłem wcześniejszym procesem decyzyjnym, zatem mam jakiś punkt odniesienia, aby ocenić rezultat.

W pierwszym przypadku otrzymaliśmy rozbudowaną analizę możliwych scenariuszy, uwzględniających wiele zmiennych. Wynik ewidentnie został "bardziej przemyślany". W przypadku ChatGPT otrzymaliśmy powierzchowną sugestię, która, choć brzmi rozsądnie, nie jest możliwa do wykonania, biorąc pod uwagę dostępne zasoby. Co więcej, bierze pod uwagę problemy związane ze skalą i długoterminowym utrzymaniem, co w tym przypadku jest całkowicie nieuzasadnione.

![](https://assets.circle.so/pisukz5l3ekk2yxmavukl6mdeze1)

Oczywiście możesz swobodnie modyfikować zapisane przeze mnie prompty (których bazowa wersja pochodzi oryginalnie z połączenia jednego z filmów kanału [Prompt Engineering](https://www.youtube.com/@engineerprompt) oraz wiedzy ze wspomnianej wcześniej publikacji na temat ToT), dostosowując je do swoich potrzeb lub stosując inne techniki projektowania promptów. Przykładem techniki, którą możesz przetestować już samodzielnie w praktyce, jest SmartGPT, która została omówiona [w tym filmie](https://www.youtube.com/watch?v=wVzuvf9D9BU).

Chciałbym tutaj jeszcze zwrócić Twoją uwagę na jeszcze jeden element całej mechaniki, a mianowicie **moją wiadomość do modelu**. Gdy spojrzysz na jej objętość, to zobaczysz, że **poświęciłem chwilę czasu na dość szczegółowe opisanie mojego problemu oraz kontekstu z którym się mierzę**. Nie jest to przypadkowe i już wyjaśniam, dlaczego jest to pomocne.

![](https://assets.circle.so/4vxe0f3r2l70dpbzh7yzf95j2f7e)

## Kontrolowanie długości wypowiedzi modelu

> These results demonstrate that appropriate prompting enhances LLM ToM reasoning, and they underscore the context-dependent nature of LLM cognitive capacities. ~ [https://arxiv.org/pdf/2304.11490.pdf](https://arxiv.org/pdf/2304.11490.pdf)

Wiemy już, że istotne w interakcjach z modelem jest to, aby pracować z możliwie jakościowymi danymi. Jednak co to **dokładnie** oznacza w praktyce?

Jakiś czas temu, opublikowałem na X następujący wpis:

![](https://assets.circle.so/w3u15azriie0zppqpjxt3lp6ujma)

> Tłumaczenie PL: Zazwyczaj, stosunek treści w interakcjach z LLM wynosi 5/95 (użytkownik/AI). To zabawne, jak doświadczenie i jego wartość zmieniają się, gdy wynik jest wyrównany.

Bezpośrednio nawiązuje on do sposobu w jaki opisałem mój kontekst na potrzeby wcześniejszej analizy z pomocą Tree of Thoughts. Wydaje się, że nie jest tajemnicą fakt, że GPT-4 nie jest w stanie **domyślić się** istotnych informacji na nasz temat. W praktyce jednak łatwo o tym zapomnieć i **poświęcić czas oraz uwagę na to, aby dostarczyć modelowi niezbędne dane**.

W tym przypadku dane musiały zawierać możliwie najbardziej istotne **fakty** (a nie opinie). Zależało mi na tym, aby GPT-4 rozpatrzył faktyczne opcje, które mam do dyspozycji, a nie dążył do tej, którą mu zasugeruję już na początku, bo wówczas analiza nie miałaby większego sensu.

Kontekst nabiera jeszcze większego znaczenia w połączeniu z mechanikami takimi jak Tree of Thoughts, czy po prostu w sytuacjach, gdy **automatycznie** wykonywana jest seria promptów. Jeśli już na początkowym etapie brakuje wymaganych danych, to efekt z niemal z pewnością nie będzie użyteczny (lub nawet może okazać się szkodliwy). Poza tym generowanie odpowiedzi w takich przypadkach **zajmuje czas, zużywa tokeny oraz generuje koszty**.

Idąc dalej, nie wiem, czy rzuciło Ci się w oczy, ale często w swoich promptach uwzględniam określenia takie jak **concisely** czy **briefly**. To także nie jest przypadkowe, ponieważ obecnie modele GPT niemal zawsze dodają praktycznie zbędne komentarze. Chociaż w niektórych sytuacjach może okazać się to przydatne, to podczas integracji z LLM z aplikacjami **jest bardzo niepożądane** ze względu na obniżanie wydajności i efektywności.

![](https://assets.circle.so/infbotdgh93to711lzlhtj99qn0p)

Powyższy przykład zwykłego przywitania pokazuje, że GPT-4 może przywitać się zwykłym "Hi!" a nie "Hello! How can I assist you today?". Tak niewinne zachowanie wydaje się w porządku w codziennych interakcjach, jednak jeżeli faktycznie zaczniemy korzystać z GPT-4 w codziennej pracy, będzie nam zależało zarówno na jakości, jak i szybkości działania. Generowanie zbędnych tokenów **nie jest oczekiwane**, tym bardziej że możemy zminimalizować szansę ich wystąpienia poprzez słowa kluczowe zachęcające model do treściwej wypowiedzi.

Wśród wyrażeń, którymi się regularnie posługuję przy projektowaniu promptów znajduje się także **Acknowledge this by just saying "..." and nothing more**. Zwykle stosuję je w połączeniu z np. nadaniem roli, czyli: "Jesteś \[xyz\], acknowledge this (...)". Wówczas model odpowiada "..." zamiast szczegółowo wyjaśniać swoją nową "osobowość". Wyjątek do stosowania tego wyrażenia stanowią sytuacje w których **zależy mi na tym, aby model faktycznie wygenerował dla mnie jakieś informacje**.

Taką sytuację spotkaliśmy na początku tej lekcji, konkretnie w tym przykładzie (wklejam obrazek ponownie):

![](https://assets.circle.so/0t2sy8nicjistgl13ztkav5nsem7)

  
Widzimy tutaj, że moje **pierwsze pytanie** nie ma za bardzo w związku z tym, czego faktycznie oczekuję od modelu. Zadałem je jednak po to, aby **zwiększyć prawdopodobieństwo tego, że model weźmie ją pod uwagę przy swoich wypowiedziach**. Zaznaczam również, że z poziomu kodu (lub automatyzacji) mamy możliwość **ręcznego ustawiania tych wartości**. Aby uzasadnić takie działanie, musimy wrócić do teorii działania dużych modeli językowych, dotyczącej **generowania następnego, prawdopodobnego fragmentu podanego tekstu** (czy też promptu). Skoro mówimy tutaj o **prawdopodobieństwie wystąpienia**, to naszym zadaniem jest **zwiększanie szansy otrzymania poprawnej odpowiedzi.**

Kontrolowanie długości wypowiedzi zarówno modelu, jak i dostarczonego kontekstu ma także znaczenie nie tylko z punktu widzenia dopuszczalnego limitu, ale zdolności modelu do **utrzymywania uwagi na istotnych obszarach konwersacji**. Potwierdzeniem tego problemu, jest poniższy przykład, do którego kontekstu przekazałem treść artykułu z fs.blog. Wewnątrz tej treści umieściłem informację o moim miejscu zamieszkania, jednak model nie był w stanie jej odnaleźć podczas rozmowy!

![](https://assets.circle.so/p7ojvmhl2gm9j4r8gesw7iq9cl3e)

⚡ [Zobacz przykład](https://platform.openai.com/playground/p/Qgcf6yKp9Lit4QKTZ6IK0g31?model=gpt-3.5-turbo-16k&mode=chat)

W przypadku wersji GPT-4 problem ten nie jest **aż tak widoczny**, ale nadal można go zauważyć. Ten sam problem zauważyłem także w przypadku modelu Claude 2, który umożliwia pracę z kontekstem o wielkości 100 tys. tokenów. Wynikający z tego wniosek jest taki, że **nadmierna ilość informacji w kontekście również nie jest pożądana** i kontrolowanie jego długości **nie jest jedynie kwestią kosztów czy limitu**.

## Izolacja problemu

Skoro jesteśmy tak bardzo ograniczeni zarówno limitem, jak i zdolnością do utrzymywania uwagi modelu, to **jak możemy pracować z dużymi zestawami danych lub nawet poruszać się w stosunkowo szerokim kontekście naszych projektów?**

Niestety na to pytanie nie ma jednoznacznych odpowiedzi i nie będę Cię oszukiwać, że jest inaczej. Nie oznacza to także, że nie ma żadnych sposobów na to, aby sensownie pracować z LLM już teraz.

Po pierwsze, praca z modelami na potrzeby nauki czy codziennego rozwiązywania problemów i podejmowania decyzji, może odbywać się na dwa sposoby:

1.  interakcji bezpośredniej z modelem (np. w Playground)
    
2.  interakcji poprzez naszą własną integrację, wyposażoną w pamięć długoterminową
    

W pierwszym przypadku mówimy o **ręcznym dostarczaniu całego kontekstu**, a w drugim o **zarówno** ręcznym, jak i dynamicznym. Jeden i drugi scenariusz ma swoje wady i zalety. Pierwszy daje większą kontrolę, ale wymaga więcej wysiłku, a drugi trudniej jest zaprojektować, lecz gdy zrobimy to dobrze, zyskamy wiele interesujących możliwości (nawet uwzględniających pojedyncze, autonomiczne działania).

Przykład [**18\_knowledge**](https://github.com/i-am-alice/2nd-devs/tree/main/18_knowledge) zawiera kod w którym zbudowałem **bardzo prymitywną** wyszukiwarkę, która dopasowuje słowa kluczowe z zapytania do treści dokumentów. **Dla podanego zapytania** odnajduje informację o jednym z trzech projektów, które rozwijam i powiązanej z nim technologii. Korzystając z tej informacji, jest w stanie **dopasować swoje zachowanie,** pisząc kod we właściwej technologii.

![](https://assets.circle.so/mu1ayhyqw0u1dohm9f9tx0pbykua)

Zakładając, że taki mechanizm posiadałby **dobrze działającą** wyszukiwarkę, moja rola sprowadzałaby się jedynie do zarysowania konkretnego problemu nad którym aktualnie pracuję.

Jeśli jednak mówilibyśmy o interakcji z modelem, który nie posiada żadnych danych na nasz temat, konieczne byłoby staranne wybranie informacji, które są potrzebne w danym momencie. Choć brzmi to skomplikowanie, to w praktyce nie musi takie być i mam kilka zasad, którymi w takich sytuacji się kieruję:

*   **Instrukcja Systemowa**: W instrukcji systemowej **zawsze** znajdują się informacje na temat mojego doświadczenia, zwięzłych odpowiedzi, preferowanych przeze mnie technologii oraz aktualnej daty. Zakładam więc, że w tym miejscu rysowany jest **ogólny kontekst konwersacji**
    
*   **Kontekst problemu**: Pracując z modelem poświęcam dość dużo uwagi na opisanie problemu z którym się mierzę, dotychczas podjęte kroki oraz miejsce w którym się znajduję. W miarę możliwości jest to wyczerpujący, aczkolwiek zwięzły opis, zawierający **wyłącznie takie informacje, które są niezbędne**
    
*   **Fragmenty kodu**: Prawdopodobnie najważniejszym elementem interakcji skupionej wokół rozwiązywania problemów, jest przekazywanie fragmentów kodu, informując model jednocześnie o tym, aby: **nie przepisywał ich w całości** oraz **że jest to jedynie mała część, a implementacja brakujących funkcji znajduje się w innym pliku**. Zwykle pracuję na **bardzo krótkich fragmentach** kodu.
    
*   **Dane**: Niekiedy poza samym kodem przesyłam do modelu dane (lub ich część) na których np. pracuje omawiana funkcja. Wówczas AI może dostosować wprowadzane zmiany do tego, co jest faktycznie oczekiwane.
    
*   **Pytanie o pogłębienie**: Nie zawsze trafnie oceniam to, czego model potrzebuje do wygenerowania odpowiedzi. Dlatego prompt **nie prosi o podanie rozwiązania, lecz o upewnienie się, że mamy komplet informacji, aby kontynuować**. Dopiero wtedy przechodzę dalej.
    
*   **Zewnętrzny kontekst**: Niemal cały mój zawodowy kontekst opiera się o najnowsze narzędzia i technologie na temat których modele **praktycznie nie mają pojęcia**. Z tego powodu poza własnym kontekstem nierzadko posługuję się dokumentacją lub fragmentami informacji, które mają jakieś znaczenie. Jednocześnie staram się, aby długość tego kontekstu **nie zaciemniła** modelu, odwracając jego uwagę od tego, co istotne.
    

Naturalnie **nie każda rozmowa** wymaga podania wszystkich powyższych punktów. Dość szybko można wyrobić sobie nawyk oceniania tego, co jest istotne z punktu widzenia modelu, a co nie. Wówczas cała interakcja staje się prostsza.

Temat izolacji omawianego problemu nie wiąże się jedynie z ograniczeniami, lecz także zaletami wynikającymi z **ograniczenia kontekstu**. Otóż ewentualne zmiany wprowadzane przez AI **są łatwe do obserwowania**, więc nie potrzebujemy dużo czasu na domyślenie się "co w zasadzie zostało zrobione". Ograniczane jest także **ryzyko niezauważenia błędu.**

## Pair Programming, Cursor i Copilot

Z Github Copilot korzystam od października 2021 a z Tabnine od początku 2020 roku. Po premierze ChatGPT to wszystko przeszło na (dosłownie) "kolejny poziom".

Jeśli jeszcze nie pracujesz z Github Copilot, a masz taką możliwość, to warto z niej skorzystać. Możliwość uzyskania podpowiedzi bezpośrednio w edytorze jest bardzo wygodna, ponieważ automatycznie pobiera kontekst Twojego projektu. Niestety z tego samego powodu, może zdarzyć się, że firma w której pracujesz, nie wyrazi zgody na stosowanie takich narzędzi i dlatego **należy to potwierdzić**, aby uniknąć przykrych niespodzianek.

Offtopic: Github Copilot jest **genialnym** przykładem zastosowania AI, ze względu na to, jak jest **zintegrowany** ze środowiskiem w którym znajduje się użytkownik. Ostatecznie kontrolowanie go nierzadko sprowadza się do jednego przycisku (akceptacji sugestii).

W związku z tym, że korzystanie z Copilotów raczej nie należy do najtrudniejszych, myślę, że wystarczy kilka sugestii, które możesz wziąć pod uwagę w swojej pracy zarówno z Copilotem, jak i GPT-4.

*   **Kodowanie**: Pracuję na krótkich fragmentach kodu (zwykle jedna linia lub jedna funkcja), aby łatwo wprowadzać zmiany i utrzymać kontrolę nad procesem. Praca z dłuższym kodem zwykle kończy się błędami, które trudno zauważyć i zmniejsza korzyści związane z oszczędzaniem czasu. Nierzadko prowadzi także do niepotrzebnej frustracji
    
*   **Planowanie**: Podobnie jak w przypadku podejmowania decyzji projektowych, z pomocą GPT-4 przeprowadzam **wybrane elementy** procesu planowania kodu, np. struktury katalogów
    
*   **Prototypowanie**: Gdy potrzebuję zweryfikować czy pomysł, który chcę wdrożyć do głównego projektu ma sensu, tworzę szybki prototyp z pomocą GPT-4. Wówczas zdarza mi się łamać zasadę dotyczącą krótkich fragmentów kodu, ponieważ moim celem jest możliwie szybkie zweryfikowanie swoich założeń. Tak generowany kod nigdy nie trafia do mojego projektu i tworzony jest wyłącznie na potrzeby testu.
    
*   **Debugowanie**: Za to prawdopodobnie najbardziej doceniam fakt, że mam do dyspozycji AI. Wykrywanie problemów i dochodzenie do rozwiązania nie odbywa się już w pojedynkę, przez co oszczędzam mnóstwo czasu na rzeczach, które wcześniej zajmowały mi długie godziny. GPT-4 świetnie radzi sobie także z wyjaśnianiem lub **nakierowywaniem na rozwiązanie** na podstawie dostarczonej informacji o błędzie.
    
*   **Refaktoryzacja**: Gdy kod jest już napisany, ale wiem, że można to zrobić lepiej, albo przekazuję jego fragmenty do konwersacji z GPT-4, albo opisuję sytuację w której jestem, analizując możliwe rozwiązania (np. zmianę struktury komponentów).
    
*   **Wyjaśnianie**: Podczas programowania nierzadko trafiam na narzędzia stworzone w technologiach, których nie znam lub nie wykorzystuję na co dzień. Wyjaśnienie ich działania lub przełożenie możliwej implementacji na technologie które znam, pozwala mi na łatwiejsze poruszanie się **poza granicą mojej kompetencji**
    
*   **Code Review**: GPT-4 na potrzeby Code Review wykorzystuję jedynie w kontekście przykładów edukacyjnych. Nie zdarzyło mi się jeszcze pracować bezpośrednio na repozytorium projektu, aczkolwiek jest to możliwe, pod warunkiem że spełnione są warunki związane z polityką prywatności.
    

Ostatecznie AI może sprawdzić się praktycznie w dowolnym obszarze związanym z programowaniem. Myślę jednak, że ogólna wiedza z AI\_Devs da Ci na tyle duże zrozumienie Dużych Modeli Językowych, że będziesz w stanie przełożyć ją na swój własny kontekst związany z pracą i nauką.

Jako mały dodatek do tego tematu chciałbym wspomnieć jeszcze o [edytorze kodu jakim jest Cursor](https://cursor.sh/). Sam dopiero go odkrywam i na ten moment znacznie wygodniej pracuje mi się w IntelliJ, gdzie również mam dostęp do asystenta AI. Warto jednak zapoznać się z Cursorem lub przynajmniej zobaczyć kilka filmów na YouTube na jego temat, ponieważ potencjalnie pokazuje on kierunek tego, jak zmienia się programowanie.

## Bonus: Modele Open Source

> Jest to rozdział bonusowy i możesz go pominąć. Uruchomienie LLaMA 2 na swoim komputerze wymaga dość mocnej specyfikacji. Omawiany przykład uruchamiam na Macbook Pro M1 Pro Max, 64GB RAM.

Jeszcze kilka miesięcy temu modele Open Source trudno było jednoznacznie porównywać do modeli GPT. I choć w teorii osiągały zbliżone rezultaty, w praktyce pozostawały daleko w tyle. Dziś wygląda to nieco inaczej i jeśli tylko posiadamy odpowiedni sprzęt, możemy "rozmawiać" z komputerem, bez przesyłania danych na zewnętrzne serwery.

Instalacja modeli Open Source różni się w zależności od systemu operacyjnego, jednak prawdopodobnie najprostsze scenariusze uwzględniają skorzystanie z projektów [lmstudio.ai](https://lmstudio.ai/) lub [**ollama.ai**](https://www.notion.so/bravecourses/ollama.ai). W obu przypadkach mówimy o zainstalowaniu aplikacji, wewnątrz której możemy pobrać model na swój komputer i go uruchomić.

W przypadku [lmstudio.ai](https://lmstudio.ai/) wystarczy wybrać model z listy, pobrać go i rozpocząć czat lub też uruchomić lokalny serwer http, udostępniający API, podobne do tego, znanego z OpenAI. Przy modelach warto sprawdzać ich **licencję** oraz rozmiar (zwykle większe modele są mądrzejsze, ale nie jest to regułą).

W momencie pisania tych słów, modelami na które warto zwrócić uwagę są Mixtral, codellama, llama2 i ewentualnie Command R (wyspecjalizowany w RAG i Function Calling)

![](https://assets.circle.so/89njlr6c52mpo3wtccbqklthzr59)

W przypadku [ollama.ai](http://ollama.ai/) sytuacja jest równie ciekawa, aczkolwiek po instalacji i uruchomieniu programu, teoretycznie nic się nie wydarzy, poza pojawieniem się ikonki na pasku menu. Modele możemy pobierać i uruchamiać przez CLI (Command-Line Interface). U mnie było to polecenie **‌ollama run llama2:70b**, aczkolwiek polecam zacząć od modeli 7b.

![](https://assets.circle.so/jrcu1evsrul18i54zucoc8gtrmiw)

Po pobraniu modelu upewnij się, że jest uruchomiony (za instalację i włączenie odpowiada to samo polecenie). Następnie w przykładzie [**19\_llama**](https://github.com/i-am-alice/2nd-devs/blob/main/19_llama/19.ts) znajdziesz skrypt **wykorzystujący LangChain** do interakcji z modelem. Jako nazwę modelu podaję **llama2:70b** (lub 7b albo 30b, w zależności od zainstalowanej wersji).

Skrypt został przygotowany dla wersji **instruct**, czyli takiej, w której nie istnieje widoczny podział pomiędzy System/User/Assistant. Z tego powodu prompt zapisałem jako ciąg znaków, oczekując obiektu JSON.

![](https://assets.circle.so/90mil23q9rby7mbxnt6vdpcwph5u)

Na mojej konfiguracji potrzebuję ~5 sekund na wygenerowanie obiektu JSON odpowiadającego opisowi. Bez większego problemu można także wygenerować kod, aczkolwiek sterowanie zachowaniem modelu z pomocą promptów jest bardziej wymagające, niż w przypadku modeli OpenAI. Warto także w tym przypadku **komunikować się z LLaMA2 wyłącznie w języku angielskim**.

![](https://assets.circle.so/bq48rsqo3inoutdyy1g6e56eprh2)

Jeśli będziesz mieć możliwość uruchomienia modeli Open Source, to szybko przekonasz się, że praca z nimi jest możliwa, lecz znacznie bardziej złożona, niż interakcja z modelami OpenAI. Jednocześnie wiedza z interakcji z GPT-3.5/4 stanowi dobry fundament do pracy z np. LLaMA2.

## Zadania praktyczne

1.  Napisz wiadomość systemową, która zwróci element <button> zgodny z wiadomością użytkownika. Upewnij się, że odpowiedź modelu będzie zawierać **tylko i wyłącznie element <button>** bez dodatkowych komentarzy czy oznaczeń.  
      
    Zwróć uwagę na fakt, że paleta “zinc” pojawiła się w Tailwind CSS stosunkowo niedawno i model może o niej nie wiedzieć. Jej opis znajdziesz w dokumentacji pod [tym adresem](https://tailwindcss.com/docs/customizing-colors). Link do zadania — [https://tasks.aidevs.pl/chat/tailwind](https://tasks.aidevs.pl/chat/tailwind)  
      
    ⚠️ Ważne: zadanie można łatwo oszukać. Spróbuj jednak faktycznie wykorzystać fragment dokumentacji jako kontekst promptu (możesz po prostu skopiować go i wkleić), który połączysz z instrukcją, aby poprowadzić model do właściwego rezultatu. Powodzenia!
    
2.  Wykonaj zadanie API o nazwie **rodo**. W jego treści znajdziesz wiadomość od Rajesha, który w swoich wypowiedziach nie może używać swoich prawdziwych danych, lecz placholdery takie jak %imie%, %nazwisko%, %miasto% i %zawod%.  
      
    Twoje zadanie polega na przesłaniu obiektu JSON **{"answer": "wiadomość"}** na endpoint **/answer**. Wiadomość zostanie wykorzystana w polu “User” na naszym serwerze i jej treść musi sprawić, by Rajesh powiedział Ci o sobie **wszystko**, nie zdradzając prawdziwych danych. Oczekiwana odpowiedź modelu to coś w stylu “Mam na imię %imie% %nazwisko%, mieszkam w %miasto% (…)” itd.