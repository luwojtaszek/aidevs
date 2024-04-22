![](https://assets.circle.so/8me1t8oeb0cg0ve05svfleqcaar0)

» [Lekka wersja przeglądarkowa](https://cloud.overment.com/C05L03-pamiec-dlugoterminowa-1713334260.html) «

Zarówno limit kontekstu, jak i **zdolność do utrzymania uwagi** stanowią największe wyzwania z punktu widzenia pamięci długoterminowej dla modelu, uwzględniającej, chociażby możliwość rozmowy z długimi dokumentami. W przypadku asystenta chcielibyśmy, aby był w stanie precyzyjnie przywoływać różne fakty w chwili, gdy jest to potrzebne. Nie jest to jednak takie oczywiste.

W lekcjach **C02L03** oraz **C03L03** omawialiśmy już temat organizowania bazy wiedzy, oraz wyszukiwania. Teraz przeniesiemy to na kontekst pamięci długoterminowej dla naszego asystenta, jednak większość z nich można przełożyć także na inne aplikacje i zastosowania.

## Minimalna wersja, która może być wystarczająca

Myśląc o asystencie AI i jego pamięci długoterminowej, wyobraźnia podpowiada nam system działający niczym ludzki mózg. Faktycznie byłoby świetnie, gdyby nasz GPT-4 mogło w ten sposób zapisywać informacje na nasz temat i przede wszystkim **posługiwać się nimi w praktyce**. Jednak czy rzeczywiście jest to nam potrzebne?

Odpowiedź na pytanie o złożoność mechanik jest bezpośrednio związana z tym, w jakich zadaniach nasz asystent będzie nas wspierać. W sieci spotkasz obecnie opinie o tym, że bazy wektorowe nie realizują założonych obietnic. I choć faktycznie dobrze jest wspierać odzyskiwanie informacji poprzez **właściwą organizację bazy wiedzy oraz dodatkowe mechaniki wyszukiwania**, to nic nie wskazuje na to, że Similarity Search jest bezużyteczny. Wprost przeciwnie.

Na tym etapie AI\_Devs wizja Twojego asystenta powinna być przynajmniej zarysowana. Co więcej, z tej wizji warto wybrać niezbędne minimum i najbardziej przydatne akcje na początek.

Załóżmy więc, że na początek asystent będzie Ci potrzebny do organizacji dokumentów, zadań, wydarzeń i maili w prywatnej skrzynce. Wówczas nie ma potrzeby, aby zastanawiać się, jak zorganizować wspomnienia dotyczące np. książek które czytasz. W zamian nasza uwaga może być skupiona zaledwie na pojedynczych informacjach na temat realizowanych przez nas projektów czy ogólnych faktów na nasz temat. Cała reszta będzie stanowić wyłącznie szum, zmniejszający skuteczność asystenta.

Poza tym mówiliśmy już o tym, jak w przypadku asystenta kluczowy jest podział na **moduły**. Każdy z nich może dysponować swoim obszarem pamięci. Np. moduł odpowiedzialny za transkrypcję głosową, może posiadać zestawy słów i nazw, które mogą być przez Ciebie dyktowane, przez co ogólna jakość transkrypcji będzie wyższa. Jednocześnie takie dane (zwykle) są bezużyteczne z punktu widzenia modułu pomagającego Ci w pracy z dokumentacją konkretnej technologii.

Kilka przykładów takiej "minimalnej wersji" pamięci, omawialiśmy już we wcześniejszych lekcjach, posługując się zarówno kodem, jak i automatyzacją. Chociaż opracowałem je z myślą o prezentacji pojedynczych koncepcji, to nie widzę problemu, aby przynajmniej część z nich została przeniesiona do własnego asystenta.

Sam przechodziłem przez przeróżne scenariusze — od zapamiętywania różnych wpisów czy transkrypcji filmów, po starannie tworzone wpisy dostosowane do sposobu w jaki model wykorzystuje je w trakcie konwersacji. Aktualnie poruszam się gdzieś “pomiędzy”, w obszarze w którym to asystent samodzielnie decyduje o tym, gdzie zapisać dane wspomnienie.

Kluczowym punktem jest jednak to, że na pewnym etapie nawet baza danych może okazać się zbędna, bo ilość informacji będzie tak mała, że wystarczy nam zwykły plik JSON. Oczywiście nie mówimy tutaj o typowym, produkcyjnym zastosowaniu, ale projektowaniu rozwiązań na swoje potrzeby. Z jednej strony zawsze zachęcam do eksperymentów, ponieważ tworzenie nawet mało użytecznych integracji potrafi sprawiać sporo frajdy, a jednocześnie jej elementy mogą w przyszłości przydać się "na produkcji".

## Planowanie pamięci długoterminowej

Temat pamięci długoterminowej dla LLM jest obecnie eksplorowany i bez wątpienia nie ma w nim jednoznacznych odpowiedzi. Zatem z jednej strony nie mamy bezpośrednich wzorców, którymi możemy się sugerować, a z drugiej **wszystkie chwyty są dozwolone**. Tym bardziej że możemy wykorzystać doświadczenie w projektowaniu baz danych czy mniejszych lub większych systemów wyszukiwania, pochodzących z aplikacji niewykorzystujących AI.

Jest jednak jedna **zasadnicza różnica** pomiędzy rzeczywistością w której istnieje GPT-4, a w której musieliśmy polegać wyłącznie na kodzie. Mowa tutaj o sytuacji w której **baza danych organizuje się sama**, a **zapytanie może być wzbogacone i/lub zmodyfikowane** w celu osiągnięcia lepszych rezultatów.

Widzimy to na przykładzie poniżej. Zapytanie użytkownika zostało opisane tagami, które uwzględniały nawet takie słowa, które bezpośrednio nie znalazły się w zapytaniu, ale z powodzeniem mogły zostać skojarzone, chociażby poprzez similarity search.

Następnie mamy przypisanie do kategorii, ponieważ AI\_Devs jeden z opisów AI\_Devs uwzględnia taką informację. Taka klasyfikacja pozwala na **zawężenie przeszukiwanych obszarów pamięci**. Może się jednak zdarzyć, że takie zawężenie w pewnym sensie pomoże, a w innym wprost przeciwnie. Dlatego pomocne jest także generowanie zapytań pomocniczych (to tzw. self-query — sytuacja w której model pyta sam siebie), które mogą pomóc w odszukaniu informacji przydatnych do udzielenia odpowiedzi.

![](https://assets.circle.so/drafrrik885om02fypjtyua62nyx)

W zależności od tego, ile wiedzy mamy zgromadzone na dany temat, możemy otrzymać więcej informacji, niż będziemy w stanie zmieścić w kontekście. Dlatego zwykle konieczne będzie dodatkowe podsumowanie, które zostanie dostarczone do kontekstu przy generowaniu końcowej odpowiedzi.

Nie trzeba podkreślać, że realizowanie tak złożonych operacji przez LLM jest wolne i może generować duże koszty. Do części z nich (zwykle) z powodzeniem możemy wykorzystać model GPT-3.5-Turbo, jednak przede wszystkim należy wziąć pod uwagę fakt, że takie zgromadzenie danych, nawet jeżeli będzie trwało 1-2 minuty, i tak będzie szybsze, niż byśmy wykonali je samodzielnie. Mówimy tutaj także, o zadaniach realizowanych **w tle samodzielnie, uwzględniających jedynie naszą weryfikację**. Dodatkowym istotnym faktem jest także **cytowanie źródeł**, co zwykle można zrealizować programistycznie, w celu zachowania wysokiej precyzji oraz zwykłego odciążenia modelu z przepisywania adresów URL.

Zatem zestaw ogólnych rekomendacji na podstawie głównie moich własnych doświadczeń mówi o:

*   przygotowaniu **początkowego** zestawu bardzo jakościowych informacji na nasz temat (lub dowolny inny, związany z przeznaczeniem systemu), w formie krótkich notatek. Ich treść powinna skupiać się na **użyteczności** z punktu widzenia zadań, które asystent będzie realizować. Pozostałe fakty mogą stanowić jedynie "szum" generujący koszty, wykorzystujący limit kontekstu oraz nawet negatywnie wpływający na skuteczność generowanych odpowiedzi
    
*   unikaniu zapamiętywania **obszernych informacji** pochodzących z książek, dokumentacji czy artykułów, o ile nie jest to uzasadnione i powiązane z konkretną aktywnością asystenta. Ponownie generujemy tutaj koszty, nie otrzymując w zamian istotnych korzyści
    
*   przechowywaniu podsumowań dla dłuższych dokumentów oraz zadawanych już pytań. Jest to obszar na który możemy zwracać szczególną uwagę w kontekście szybkości oraz redukcji kosztów. Co więcej, takie podsumowania mogą być także generowane w tle, na podstawie również generowanych przez model zestawów zapytań. Na potrzeby prywatnego asystenta zwykle nie ma to znaczenia, jednak koncepcja jest godna uwagi
    
*   możliwości aktualizowania oraz usuwania zapamiętanych informacji. Na pewnym etapie uwzględniałem także zapisywanie historii wprowadzanych zmian, co może być przydatne w sytuacjach w których konieczne jest historyczna analiza danych
    
*   wydzielanie obszarów pamięci dla konkretnych kategorii lub nawet tagów ma ogromny sens. W praktyce jednak konieczne jest uwzględnienie zarówno ogólnego dostępu do całej bazy, jak i precyzyjnego wyszukiwania. Przykładowo, jeśli asystent kategoryzuje wpis na temat "AI\_Devs", to powinien mieć możliwość uzyskania dostępu zarówno do informacji na temat projektów, jak i informacji na temat prowadzących, które w moim przypadku przechowywane są w kategorii "relacje / ludzie"
    
*   wykorzystanie mechanizmów autorefleksji (przetwarzania wspomnień w tle) lub przynajmniej połączenia z pamięcią długoterminową w trakcie zapisywania wspomnień. **Inaczej mówiąc, gdy pojawia się nowy wpis, asystent posługuje się swoją dotychczasową pamięcią, aby skuteczniej opisać nową informację**.
    

To wszystko należy osadzić jednak bezpośrednio w kontekście swojego asystenta. Ogólną rekomendacją jest jednak **pozostawianie pamięci długoterminowej tak prostą, jak to możliwe**, szczególnie na początkowym etapie eksploracji LLM i poznawania związanych z nimi mechanik.

## Organizacja, tagowanie i kategoryzowanie

Obecnie napisanie promptu umożliwiającego ustrukturyzowane wygenerowanie kategorii i tagów, nie powinno stanowić większego problemu, niezależnie od tego, czy mówimy o kodzie, czy narzędziach no-code. Dlatego w dużym stopniu wyzwanie nie polega tutaj na technicznej realizacji, ale zaplanowaniu całości w taki sposób, aby system był w stanie działać samodzielnie. Po raz kolejny wracają tu do nas koncepcje "single entry point" oraz "single source of truth".

Zarówno proces zapamiętywania, jak i późniejszego odzyskiwania (raczej) powinien odbywać się poprzez zastosowanie dokładnie tego samego mechanizmu, który jest wykorzystywany w trakcie każdej innej interakcji. Najbardziej oczywistym powodem jest fakt, że dzięki temu zapisywanie czy aktualizacja informacji będzie odbywać się poprzez zwykłe powiedzenie "zapamiętaj, że (...)" lub podobne polecenie nawiązujące do zapamiętania informacji.

![](https://assets.circle.so/5magrh5d51juy8u89pa4079ttund)

Mniej oczywisty powód dotyczy faktu, że ogólna logika promptów będzie zbliżona w każdym ze scenariuszy, a to zmniejsza ryzyko wystąpienia niespójności. Warto też mieć na uwadze fakt, aby nie dawać modelowi bezpośredniej możliwości usuwania informacji, aby nie utracić niczego przez przypadek. Choć w moim przypadku taka sytuacja nie miała miejsca, tak z pewnością jest możliwa. W każdym razie powyższy schemat oddaje kolejne kroki, które można zastosować bezpośrednio lub w jakimś wariancie:

*   **Polecenie**: Kierowane bezpośrednio do głównego endpointu asystenta, podobnie jak wszystkie inne wiadomości
    
*   **Identyfikacja zapytania**: Odbywa się również na takiej samej zasadzie jak w przypadku pozostałych interakcji
    
*   **Skorzystanie z własnego API**: Również polega na tym samym, co korzystanie z każdego innego narzędzia
    
*   **Opisanie**: Proces który również zwykle stosowany jest w każdej interakcji. Jego celem jest lepsze dopasowanie zapytania (w tym przypadku zapisywanej informacji) do aktualnej bazy wiedzy
    
*   **Wzbogacenie**: To kolejny krok opisywania, jednak w tym przypadku mówimy o zestawieniu nowych informacji z aktualnymi, lub z tymi pochodzącymi z zewnętrznych źródeł. Przykładem może być wspomnienie o „Techsistence, jako kolejnym projekcie moim i Grzegorza”, które w przypadku Alice zostanie poprawnie skojarzone z pozostałymi projektami, takimi jak eduweb czy easy\_. Skojarzenie odbywa się poprzez prompt do którego trafia zarówno nowa informacja, jak i obecne wspomnienia. Model swobodnie jest w stanie łączyć ze sobą fakty, co sprzyja zapamiętywaniu.
    
*   **Weryfikacja**: Może odbywać się automatycznie i/lub ręcznie w zależności od tego, jak istotne jest dla nas wykrywanie potencjalnych pomyłek. W moim przypadku weryfikacja odbywa się poprzez **przesłanie treści zapisanego wspomnienia**, jako odpowiedź ze strony asystenta. Jeśli coś jest z nią nie tak, to po prostu proszę o aktualizację.
    

Sam schemat opisywania wspomnień będzie indywidualny, jednak prawdopodobnie ogólne zasady będą do siebie zbliżone. Jeśli jednak znamy już założenia asystenta i ewentualne scenariusze jego rozwoju, większość pojawiających się tutaj pytań, naturalnie będzie podsuwać odpowiedzi.

W związku z tym, że proces zapamiętywania może trwać nieco dłużej, można wykonywać go w tle w całości lub częściowo. Ostatecznie i tak prędzej czy później będzie zależało nam na tym, aby zapamiętywanie informacji odbywało się po części automatycznie, więc konieczne jest zadbanie o to, aby każdy z kroków mógł być realizowany bez naszego udziału.

## Odzyskiwanie treści na potrzeby konwersacji

Podczas rozmowy z asystentem, będzie nam zależało na utrzymaniu możliwie niskiego czasu reakcji, jednak jest co do tego przynajmniej kilka zastrzeżeń:

*   Jeśli generowanie odpowiedzi na podstawie różnych dokumentów i źródeł zajmuje 30 czy nawet 60 sekund, to z boku brzmi to, jak mało efektywny system. Jednak jeśli zestawimy to z czasem jaki sami musielibyśmy poświęcić na wykonanie takiego zadania samodzielnie, to perspektywa znacznie się zmienia
    
*   Pomimo powyższego punktu i tak będzie zależało nam na możliwej optymalizacji. Poza ewentualnym korzystaniem z GPT-3.5-Turbo, mówimy tutaj także o równoległym realizowaniu niepowiązanych ze sobą akcji, oraz utrzymywaniu możliwie jak największej części logiki po stronie kodu. Mowa tutaj, chociażby o **oczyszczaniu źródeł danych**, **kompresji treści**, **ograniczaniu długości generowanych treści**, uzupełnieniu wyszukiwania silnikami wyszukiwania
    
*   Poziom optymalizacji po stronie kodu / LLM jest jednak ograniczony, dlatego warto uwzględnić także dodatkowy obszar związany z **równoległym wykonywaniu wielu zadań**. Mowa tutaj o nawet prostej, prezentowanej już możliwości **przekazywania wielu informacji za jednym razem**. Przykładowo polecenie "dopisz do mojej listy następujące pozycje (...)" sprawia, że nie musimy dodawać ich osobno
    
*   Nie mam bezpośredniej odpowiedzi na to, czy lepiej sprawdzają się krótkie dokumenty czy obszerne. Wiem tylko, że jeśli je ze sobą mieszamy, to Similarity Search domyślnie uzna dłuższy fragment za bardziej zbliżony, nawet jeśli faktycznie tak nie jest. Podobnie wypada to w przypadku mieszania języków. Jeśli nasza baza jest w języku angielskim, a my mówimy po polsku, to skuteczność wyszukiwania będzie zauważalnie niższa **w obszarach w których potrzebujemy precyzji** — warto to zapamiętać
    

Z kolei ogólny schemat odzyskiwania informacji na potrzeby dynamicznego kontekstu, w dużym stopniu sprowadza się do opisania i wzbogacenia zapytania, oraz samego przeszukania bazy danych. Zatem jest on niemal taki sam jak w przypadku **zapisywania danych**.

Aktualnie nie mogę powiedzieć, że mam perfekcyjnie działający system odzyskiwania informacji z bazy wiedzy Alice i lista "poprawek" jest dłuższa niż, lista tych, które zostały wdrożone. Eksperymentuję jednak z różnymi promptami, którymi podzielę się teraz, aby zarysować kierunek w którym układają się moje myśli. Jest to w pewnym sensie związane z różnymi technikami, które spotykam w sieci, również w ramach raczej eksperymentalnych projektów.

Przypomnę tylko o jednym, istotnym problemie związanym z kompleksowym odpowiadaniem na pytania. Dotyczy on sytuacji w której informacja na jakiś temat jest **rozproszona** na przestrzeni dokumentu, a jej opis jest na tyle duży, że nie ma możliwości jednorazowo dodać go do promptu. Wówczas problemem nie tylko jest dla nas odnalezienie tych informacji, ale także złożenie ich w całość w taki sposób, aby mogły być wykorzystane przez model.

Z tego powodu warto rozważyć, **rozszerzanie bazowej pamięci** poprzez tworzenie nowych, skompresowanych treści na ich podstawie. Przykładowo, jeśli mamy rozbudowaną listę dokumentów opisujących książki, które przeczytaliśmy, to, zamiast za każdym razem dążyć do odnalezienia i skondensowania wszystkich informacji, tworzymy zwięzłe dokumenty adresujące konkretny temat. Taką koncepcję przedstawia poniższy schemat, na którym podsumowanie **posiada metadane wskazujące na oryginalne dokumenty** oraz **oryginalne dokumenty posiadają metadane o podsumowaniu**.

![](https://assets.circle.so/5bijrc2fdsmz1rmdqyglw92g5ob5)

Jest to zaledwie jedna technika z wielu i prawdopodobnie jedyną słuszną odpowiedzią na skuteczne organizowanie wiedzy, jest **dopasowanie strategii do rodzaju danych z którymi pracujemy**. W końcu może okazać się, że takie transformacje w ogóle nie są potrzebne w kontekście naszego prywatnego asystenta. Z drugiej strony może się okazać, że jest to wręcz niezbędne, aby zrealizować sensownie działający system RAG. Dlatego na początku AI\_Devs mówiłem, że praktycznie wszystkie implementacje narzędzi umożliwiających interakcję z danymi robią to błędnie, ponieważ nie adresują tak podstawowych problemów, jak kompleksowe odszukanie informacji. Z drugiej strony nie dziwię się, że taka sytuacja ma miejsce, ponieważ zwyczajnie **nie jest to proste** i dostosowanie systemu do swoich potrzeb wydaje się fundamentalnie ważne.

Kolejną fazą moich eksperymentów, które także mogą okazać się przydatne w projektowaniu systemów RAG czy własnego asystenta, jest strukturyzowanie zagnieżdżonych wspomnień (w formie drzewa czy mapy myśli). Poniżej wypisałem skróconą wersję listy kategorii tematów, o których rozmawiam z Alice i które **mogą być przydatne w wykonywaniu przez nią różnych zadań**. Istotnym obszarem jest wyróżnienie kategorii wspomnień związanych **bezpośrednio ze mną**. Zauważyłem, że jest to potrzebne, aby nie dochodziło do mieszania ogólnej wiedzy i tej, dotyczącej bezpośrednio mojej osoby.

![](https://assets.circle.so/2tgunpwrufer17xwnbwq5bd5geni)

Posługiwanie się taką strukturą (lub nawet jej dynamiczna rozbudowa) wymaga zaprojektowania promptów, które będą w stanie **klasyfikować zapytania** w sposób umożliwiający zapisanie informacji nie tylko w jednej z wybranych kategorii, ale nawet kilku na raz. Przykładowo, jeśli powiem, że "Czytałem książkę X, która poleciła mi Marta", to chciałbym, aby Alice skojarzyła zarówno osobę, jak i listę moich książek. Przygotowałem więc prompt, który jest jeszcze na etapie eksperymentów, którego rolą jest posługiwanie się powyższą strukturą.

![](https://assets.circle.so/37pesfy1r4mhjh0tnw7mkxxmrppk)

*   [Zobacz przykład](https://platform.openai.com/playground/p/aPArwjcrMVWPM4yIgk79Vcya?model=gpt-4&mode=chat)
    

Taki prompt ma także swoją alternatywną wersję, która służy do **zapisywania wspomnień**. Wówczas jego zadaniem jest wskazanie miejsc w których informacja ma zostać zapisana.

![](https://assets.circle.so/q841x9shff964zx8hj2wls5vu2qf)

*   [Zobacz przykład](https://platform.openai.com/playground/p/FRSeQdEOGv9BpdqqrQYlwMTo?model=gpt-4&mode=chat)
    

Powyższe przykłady mogą posłużyć jako inspiracja i zarysowanie pewnego kierunku. Możliwe jednak, że na potrzeby własnego asystenta, tak złożona struktura nie będzie Ci potrzebna.

Ostatecznie jednak jest to jeszcze koncept, którego nie sprawdziłem w praktyce, ale budowałem go w oparciu o swoje obserwacje tego, co w obecnej logice Alice jest dobre, oraz tego, co mogłoby w niej działać lepiej. Myślę, że nie ma już teraz wątpliwości, że eksperymentowanie z organizowaniem wiedzy, połączone z technikami projektowania baz danych, przetwarzaniem dokumentów czy wyszukiwaniem treści, jest bardzo wskazane.

## Techniki pracy z poufnymi informacjami

Istotnym, niekiedy krytycznym, elementem budowania pamięci długoterminowej dla asystenta, będzie zachowanie pełnej prywatności. Zasadniczo ogólna rekomendacja z mojej strony polega na tym, aby **po prostu unikać pracy z poufnymi danymi w sytuacji, gdy dopiero zaczynamy poznawanie AI**.

Jeśli już jednak bardzo nam na tym zależy, to poza technologią, powinniśmy uwzględnić wszystkie niezbędne kwestie prawne, związane z dokumentami pomiędzy nami, a dostawcą LLM (np. OpenAI). Zwykle jest to temat, którym zajmuje się dział prawny, jednak to na nas spoczywa odpowiedzialność za **poinformowanie o konieczności zaadresowania tych aspektów**, ponieważ na tym etapie nie wszyscy mają jeszcze świadomość na temat bezpiecznego przetwarzania firmowych informacji przez LLM. Wówczas należy bardzo wyraźnie zaznaczyć, że chodzi nam o regulamin i politykę prywatności [https://platform.openai.com](https://platform.openai.com/), a nie ChatGPT. Poza samą ich treścią konieczne jest także określenie **zakresu przesyłanych danych**, ponieważ programistycznie możemy go do pewnego stopnia kontrolować. W rozmowach na temat stosowania modeli OpenAI (a niebawem mogą to być także inni dostawcy) może pomóc także informacja na temat potencjalnych korzyści biznesowych, wynikających z nadal obecnej przewagi modeli takich jak GPT-4 nad dowolną alternatywą.

Moja strategia polega na tym, aby zwyczajnie nie przesyłać do OpenAI danych, którymi nie mogę się podzielić. Jest to dla mnie stosunkowo proste, ponieważ treści z którymi pracuję i tak publikuję w mediach społecznościowych. Wyjątek stanowią dane moich klientów (np. przy wystawianiu faktur). Wówczas narzędzia zaprojektowane są w taki sposób, aby znacząco ograniczać wykorzystanie jakichkolwiek danych (poufne informacje przesyłane są programistycznie, poza interakcją z modelem, który np. przesyła mi zabezpieczony link do umowy, a nie cytuje bezpośrednio jej treść).

Poza tym już teraz wykorzystywanie w systemach RAG modeli Open Source, takich jak Mistral 7B, Zephyr 7B czy LLaVA (wymaga GPU), staje się najbardziej oczywistym rozwiązaniem tego problemu. Jeśli dysponujemy mocniejszym sprzętem, warto także rozważyć sięgnięcie po większe modele, np. LLaMA 70B. Modele Open Source nie wykluczają jednak stosowania innych rozwiązań, bo możemy nadal pozostać przy modelach OpenAI, jednak dawać im dostęp jedynie do **metadanych opisujących dokumenty**. Zatem oryginalne źródło i najważniejsze, poufne treści nawet na chwilę nie opuszczają naszych serwerów (bo zarówno embedding, jak i opisywanie odbywa się lokalnie. OpenAI będzie mieć wtedy dostęp wyłącznie do tych informacji, które są istotne z punktu widzenia generowanych odpowiedzi oraz np. wskazywania miejsc, w których możemy odnaleźć pełne treści.

Ostatecznie, jeśli z jakiegoś powodu firma, w której pracujesz, klienci, dla których realizujesz projekty, czy po prostu Ty nie chcesz wysyłać swoich danych do zewnętrznych firm, to zanim w pełni odrzucisz ideę asystenta AI, zastanów się, czy możliwe jest ograniczenie danych, na których pracujesz, przy jednoczesnym zachowaniu wartości, którą taki asystent może Ci zaoferować.

* * *

## Zadania praktyczne

Rozwiąż zadanie API o nazwie ‘**google**’. Do jego wykonania będziesz potrzebować darmowego konta w usłudze [SerpAPI](https://serpapi.com/). Celem zadania jest samodzielne zaimplementowanie rozwiązania podobnego do tego, znanego z ChatGPT Plus, gdzie po wpisaniu zapytania na temat, o którym model nie ma pojęcia, uruchamiana jest wyszukiwarka BING. My posłużymy się wyszukiwarką Google, a Twój skrypt będzie wyszukiwał odpowiedzi na pytania automatu sprawdzającego i będzie zwracał je w czytelnej dla człowieka formie. Więcej informacji znajdziesz w treści zadania /task/, a podpowiedzi dostępne są pod [https://tasks.aidevs.pl/hint/](https://tasks.aidevs.pl/hint/google)[google](https://tasks.aidevs.pl/hint/google).

* * *

## Sprawdź swoją wiedzę

[Rozpocznij Quiz](https://tasks.aidevs.pl/quiz/c05l03_trsk)

* * *

## Podsumowanie Audio