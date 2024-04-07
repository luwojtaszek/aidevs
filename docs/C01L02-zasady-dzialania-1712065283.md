Łatwo spotkać się z opinią, że **nie wiemy, jak LLMy działają**. Do pewnego stopnia jest to prawda, ale nie do końca, ponieważ oczywiście posiadamy wiedzę na temat ich projektowania, trenowania oraz rozwijania. Po prostu nie jest do końca jasne, **co dokładnie** dzieje się pomiędzy przesłaniem wiadomości a otrzymaniem odpowiedzi.

Niebawem stanie się dla Ciebie bardziej zrozumiałe, dlaczego taka sytuacja ma miejsce oraz to, w jaki sposób możemy wykorzystać ją do pracy z modelami. Aby dać Ci pełny obraz, w pierwszej kolejności przyjrzymy się modelom językowym nieco bliżej.

## Sieci Neuronowe

Jak wiesz, **funkcje przyjmują dane (wejście) i zwracają wynik (wyjście) dopasowany do nich, uzależniony od ich definicji**. Korzystając z nich, możemy rozwiązywać różne problemy, poprzez **kontrolowanie przepływu danych oraz sposobu ich transformacji** w celu osiągnięcia pożądanego rezultatu. Przykładem może być prosta funkcja mnożąca przekazaną do niej liczbę razy dwa.

![](https://assets.circle.so/4lp9j8mbxhak8yjrv71vx4ipcj34)

  
Wraz ze wzrostem złożoności rozwiązywanego problemu, zazwyczaj rośnie również złożoność definicji funkcji, aż do momentu, w którym implementacja staje się zbyt skomplikowana lub wręcz niemożliwa do zrealizowania. Takie sytuacje mogą mieć miejsce nawet dla stosunkowo prostych dla człowieka zadań, których przełożenie na kod nie jest oczywiste. Przykładem może być **rozpoznawanie obiektów, dźwięków** czy **posługiwanie się naturalnym językiem (NLP — natural language processing)**. Uwzględnienie wszystkich zmiennych biorących udział w takich procesach **wymaga zaprojektowania matematycznego modelu reprezentującego ich realizację w uproszczony sposób**.

Aby Ci to lepiej zobrazować, przygotowałem prosty kod JavaScript ([zobacz gist](https://gist.github.com/iceener/2626f66078f8d52d72448e1663e577d9)), który rysuje wykres funkcji falowej. W tym przypadku znamy dokładnie zasady rysowania takiego wykresu i jesteśmy w stanie rysować jego kolejne fragmenty poprzez **obliczanie kolejnych punktów**.

![](https://assets.circle.so/7jp4x488hrt0iwh5rj1otro07pik)

Zakładając jednak, że nie znamy tych zasad, musielibyśmy zaprojektować model, który w uproszczony sposób realizowałby zadanie polegające na rysowaniu wykresu. Początkowo **jego parametry** byłyby raczej losowe i taki też byłby wynik jego działania. Obrazek poniżej pokazuje, że nasz model nie działa.

![](https://assets.circle.so/d3oyk2pf3g6dlt2zck45uad26h9s)

Jeżeli jednak zaczniemy modyfikować niektóre parametry, z chaosu zacznie wyłaniać się pewien kształt przypominający wykres funkcji falowej. Nie jest to rezultat, którego oczekujemy, jednak idziemy w dobrym kierunku.

![](https://assets.circle.so/rb5xvp69a8e538de6c22atvnizsx)

Konieczne jest dalsze dostosowanie parametrów, jednak **tym razem wprowadzane zmiany nie mogą być już tak drastyczne, ponieważ niektóre z czerwonych punktów znajdują się we właściwych miejscach**. Dobrze byłoby, gdyby tak pozostało. Uzyskany rezultat bez wątpienia przypomina wykres funkcji falowej.

![](https://assets.circle.so/gkbcmzwlo9bej14m5ui9o0snyaef)

Jeśli teraz nałożymy nasz wynik na początkowy wykres, zobaczymy, że niemal wszystkie punkty znajdują się na białej linii. Jednocześnie widoczne są także punkty, które znajdują się delikatnie poza linią. **Nawet jeśli kontynuowalibyśmy dostosowywanie parametrów, nie osiągniemy 100% dopasowania i będziemy poruszać się w obszarze prawdopodobieństwa.** Co więcej, na pewnym etapie trenowanie staje się nieefektywne w kontekście samego treningu, jak i późniejszego działania modelu.

![](https://assets.circle.so/95unve0fjh5gzlpz8sjp7icbw5s4)

Akurat w przypadku powyższych przykładów, zmiany parametrów są bardzo proste i z powodzeniem można wprowadzać je ręcznie. Zresztą, możesz spróbować samodzielnie, modyfikując zmienną **randomness** [w kodzie dostępnym tutaj](https://codepen.io/iceener/pen/VwqpoOO?editors=0010) (wartości bliższe 0 przybliżą punkty do wykresu funkcji).

Dla bardziej skomplikowanych procesów, takich jak np. rozumienie i generowanie języka naturalnego, liczba parametrów i wariantów ich ustawień drastycznie rośnie. Nie znamy także definicji funkcji, które są w stanie opisać taki proces. Wówczas konieczne staje się zastosowanie automatycznych mechanizmów zdolnych do kształtowania modelu tak, aby stał się możliwie dokładny i jednocześnie wydajny. Przykładem takiego mechanizmu są sieci neuronowe, inspirowane ludzkim mózgiem.

Bez wchodzenia w szczegóły dotyczące sieci neuronowych, **mówimy tutaj o strukturze zdolnej do dostosowania się do realizacji różnych zadań.** Jednak, aby to było możliwe, konieczny jest **trening polegający na dostosowaniu jej parametrów.** Zwykle odbywa się to poprzez ogromne ilości powtórzeń przeprowadzonych na zestawach danych treningowych w postaci wejścia (input) i wyjścia (output) \[istnieją także inne formy treningu\]. Zadaniem sieci jest stopniowe dostrajanie swoich ustawień tak, aby dla dostarczonej informacji generować dopasowany do niej wynik.

## Duże Modele Językowe

Duże modele językowe, takie jak GPT-4, wykorzystują sieci neuronowe do przetwarzania języka naturalnego. **W prostych słowach — uczą się mówić.** Co więcej, u podstaw treningu sieci do realizacji takiego zadania leży absurdalnie prosta idea **przewidywania kolejnego fragmentu wypowiedzi** poprzez nieustanne odpowiadanie na pytanie: **"Biorąc pod uwagę ten tekst, co powinno być dalej?"**.

**Tokenizacja**

Projektowanie modeli językowych wymaga zamiany tekstu na ich reprezentację liczbową. Obecnie najpopularniejszą strategią jest tzw. **subword tokenization**, czyli zapisywanie za pomocą liczb fragmentów słów. Podczas generowania odpowiedzi, model generuje kolejne tokeny (fragmenty słów), odpowiadając na wspomniane wyżej pytanie, które w takiej sytuacji brzmi: "Biorąc pod uwagę dotychczasowy tekst, **jaki token stanowi jego kontynuację?**".

Bardzo wyraźnie możemy to zaobserwować na tej stronie: [platform.openai.com/tokenizer](https://platform.openai.com/tokenizer) lub [https://tiktokenizer.vercel.app](https://tiktokenizer.vercel.app/). Kolejne tokeny zostały tutaj wyróżnione kolorami i wyraźnie widać, że np. słowo "overment" składa się z dwóch tokenów: "over" i "ment", które model zamienia sobie na liczby. Można więc powiedzieć, że np. GPT-4 właśnie tak widzi tekst.

![](https://assets.circle.so/eoaw3wktx498jwpnjnh798xqlcb1)

Decyzja o tym, które fragmenty słów stają się tokenami, zależy od algorytmu tokenizacji oraz zestawu danych, na których pracujemy. W ten sposób powstaje słownik (eng. vocabulary), stanowiący element modelu językowego. **Głównym językiem dla modeli GPT jest angielski, dlatego tokeny dobierane są w taki sposób, aby możliwie efektywnie wykorzystywać je podczas generowania treści.** Samo wygenerowanie słownika nie jest jednak wystarczające, ponieważ konieczne jest także uwzględnienie dodatkowych informacji, takich jak chociażby znaczenie słów, które także należy zamienić na zestawy liczb, które w tym przypadku nazywamy embeddingiem.

**Embedding**

Embedding to proces podobny do tokenizacji, ponieważ także polega na reprezentowaniu słów za pomocą liczb, a konkretnie tablicy liczb, czyli tzw. wektorów. Modele językowe wykorzystują tzw. "word embedding", który umożliwia im "rozumienie" znaczenia słów, co jest wykorzystywane między innymi na etapie generowania odpowiedzi.

Jeżeli weźmiemy teraz trzy słowa: samochód, motocykl oraz laptop, to jako ludzie wiemy, że pierwsze dwa są do siebie zbliżone znaczeniem (opisują pojazd). Embedding dąży do opisania tej zależności za pomocą liczb, co obrazuje poniższy, uproszczony przykład. Jeśli porównasz wartości liczbowe, zauważysz podobieństwo, o którym mówię. W praktyce jednak oddanie znaczenia słów jest znacznie bardziej złożone i ilość wymiarów wektora stworzonego podczas procesu embeddingu zależna jest od użytego modelu.

OpenAI aktualnie oferuje trzy modele:

*   text-embedding-ada-002 = 1536 wymiarów
    
*   text-embedding-3-small = 1536 wymiarów
    
*   text-embedding-3-large = 3072 wymiary
    

UWAGA: nawet jeśli dwa modele mają taką samą liczbę wymiarów, to nie oznacza to, że są ze sobą jakkolwiek kompatybilne.

![](https://assets.circle.so/xrvmeftnyuvfy33cl409slgzi555)

  
Drugim rodzajem embeddingu, z którym mamy do czynienia przy okazji LLM, jest tzw. "sentence embedding", który, jak nazwa wskazuje, oddaje znaczenie dłuższych treści. Wówczas uwzględnione jest nie tylko znaczenie słów, ale także kontekst, w którym zostały użyte. Tutaj również podobieństwo wartości wektorów oznacza podobieństwo powiązanych z nimi informacji.

Taki embedding będziemy wykorzystywać podczas pracy z bazami wektorowymi, które mogą nam posłużyć do odnajdywania powiązanych ze sobą danych (np. na potrzeby rekomendacji) czy wręcz przeciwnie — ujawniać odchylenia (np. na potrzeby analizy). Rola baz wektorowych polega więc zarówno na przechowywaniu embeddingów, powiązanych z nimi metadanych umożliwiających identyfikację zapisanych danych, jak i wykonywaniu różnych operacji, takich jak np. Similarity Search, o którym powiem więcej w późniejszych lekcjach.

Sentence-embedding często charakteryzuje także większa liczba wymiarów, a dla modelu text-embedding-ada-002 (z którego będziemy korzystać), mówimy konkretnie o liczbie 1536. Obecnie do dyspozycji mamy także nowszy i większy model **text-embedding-3-large** dla którego liczba wymiarów wynosi 3072. Poza tym do gry wchodzą także modele Open Source, których obecny ranking można zobaczyć na [HuggingFace](https://huggingface.co/spaces/mteb/leaderboard). Tymczasem fragment takiego embeddingu widać na obrazku poniżej.

![](https://assets.circle.so/og7a26gc1lr23jfw948iu74bkve5)

Embedding można także wygenerować z pomocą platformy make.com. W tym celu wystarczy skorzystać z akcji “Custom API Call” do której przekazujemy parametry **input** oraz **model.**

![](https://assets.circle.so/g65qfzqksdss47yz1ux0660fxnde)

Jeśli chcesz, możesz zaimportować powyższy scenariusz, korzystając ze schematu dostępnego tutaj:

*   ⚡ [Pobierz Schemat Automatyzacji](https://cloud.overment.com/aidevs_embedding-1698128103.json)
    

❗❗ Do uruchomienia scenariusza konieczne jest ustawienie **struktury danych w drugim module.** Po zaimportowaniu kliknij na ten moduł, następnie na przycisk "Add", a później "Generate". Tam do generatora należy poniższy obiekt:

```
{
           "model": "text-embedding-3-large",                 
           "input": "{{1.prompt}}"
}
```

Na ten moment jego użyteczność jest wyłącznie edukacyjna, a sam embedding będziemy wykorzystywać w dalszych lekcjach.

**Prompt**

Z punktu widzenia osoby korzystającej z LLM, nasza rola zaczyna się mniej więcej na etapie bezpośredniej interakcji z modelem. W tym celu wykorzystujemy już dokładnie ten sam język, którym posługujemy się na co dzień. Jednak w związku z tym, że mamy do czynienia z modelem, który posiada mechanizmy "rozumienia" przekazanych mu informacji, nadal musimy pamiętać, że jest to jedynie zaawansowany model.

Pomimo tego, że np. GPT-4 świetnie radzi sobie z nieustrukturyzowanym tekstem oraz potrafi realizować nawet złożone zadania opisane prostymi słowami, to przydatne okazują się techniki wydawania instrukcji (tzw. promptów), których zadaniem jest **wpływanie na zachowanie modelu.**

Wspomniałem, że działanie modeli opiera się na przewidywaniu kolejnego tokenu na podstawie **prawdopodobieństwa wystąpienia kolejnego fragmentu**. Coś takiego można bardzo wyraźnie zaobserwować [pod tym adresem](https://platform.openai.com/playground/p/3aygR2WOaEXgz6f4l2zA9Kbq?mode=complete&model=gpt-3.5-turbo-instruct), ponieważ Playground dla starszych modeli daje nam dostęp do informacji o tym, **jakie tokeny były brane pod uwagę przy generowaniu odpowiedzi**.

![](https://assets.circle.so/4odwug1qe5zz7v2db34ulgwdyklo)

Tryb "Completion", który widzisz na obrazku powyżej, zawiera tylko jedno pole na prompt. **Wpisany tam tekst zostanie uzupełniony, dążąc do wygenerowania sensownej odpowiedzi.** Taki mechanizm obowiązuje także w modelach GPT-3.5-Turbo i GPT-4, chociaż interakcja z nimi odbywa się w formie konwersacji. Jak niebawem się przekonasz, prowadzenie rozmowy z modelem każdorazowo wymaga przesłania jej całej treści, a odpowiedź nadal jest uzupełnieniem przesłanego tekstu. Podobnie też o technikach interakcji z modelem, będziemy jeszcze mówić.

## Wnioski

Zbierzmy w całość kilka zagadnień:

*   **Modele pozwalają w przybliżony sposób** opisywać procesy, których nie potrafimy jasno definiować (np. rozpoznawanie obiektów na zdjęciach).
    
*   Sieci neuronowe mogą być wytrenowane w celu realizacji bardzo złożonych zadań, **których nie potrafimy opisać kodem**.
    
*   Duże modele językowe wykorzystują sieci neuronowe do przetwarzania i generowania języka naturalnego.
    
*   Działanie modeli językowych wymaga (w uproszczeniu) zamiany tekstu na liczby opisujące różne cechy niezbędne do "zrozumienia" i generowania treści.
    
*   Modele trenowane są na dużych zestawach danych. Podczas treningu model kształtuje zdolności związane z przetwarzaniem języka naturalnego oraz buduje swoją "bazową wiedzę", która w przypadku modeli GPT ma różny zakres
    
*   Duże modele językowe (np. GPT-4) skupiają się wyłącznie na generowaniu kolejnego tokenu na podstawie dotychczasowej treści i robią to na podstawie statystyki występowania słów w zbiorze danych, na których były trenowane (np. treściach z Internetu)
    
*   W związku ze złożonością LLM **nie wiemy dokładnie, co się dzieje pomiędzy przesłaniem wiadomości do modelu a generowaniem kolejnych tokenów**. Nie są jasne także wszystkie zachowania i umiejętności modeli.
    
*   Interakcja z modelem odbywa się poprzez naturalny język i aktualnie mówimy jedynie o **sterowaniu** zachowaniem modelu, a nie pełnej kontroli, co stwarza wyzwania związane z realizowaniem precyzyjnych zadań.
    
*   Generowanie kolejnych tokenów opiera się o prawdopodobieństwo występowania słów w danych treningowych. **Mechanizm dobierania tokenów nie jest jednak deterministyczny**, co oznacza, że dla dokładnie tego samego zestawu danych, możemy otrzymywać różne rezultaty.
    
*   **Architektura dużych modeli językowych nakłada na nas limit tokenów**, który może zostać przetworzony w ramach pojedynczego zapytania, co wymaga podejmowania dodatkowych działań związanych z np. koniecznością podsumowań dłuższych interakcji.
    

W wyniku tego:

*   Trening LLM wymaga ogromnych zestawów danych.
    
*   Ich bazowa wiedza nie obejmuje aktualnych danych.
    
*   Architektura oraz skala modeli utrudniają ich zrozumienie.
    
*   Nie posiadamy pełnej kontroli nad zachowaniem modeli.
    
*   Nie znamy wszystkich możliwości modeli.
    
*   LLM potrafią realizować zadania, do których nie były trenowane.
    
*   Nie mamy pełnej kontroli nad generowaniem treści.
    
*   Architektura modeli narzuca na nas limity.
    
*   Generowanie treści odbywa się na podstawie statystyki.
    
*   Treści generowane są poprzez **uzupełnianie / kontynuowanie** dotychczasowego tekstu.
    
*   Wyniki zwracane przez model są niedeterministyczne.
    
*   Mechanizm przewidywania kolejnego fragmentu nie sprawdza się najlepiej w przypadku złożonych obliczeń czy nawet przeliczania dat, ale modele mogą posługiwać się narzędziami, które wykonają te obliczenia
    
*   Strategia tokenizacji wpływa na wydajność modelu w różnych językach. Np. modele GPT działają szybciej i generują mniejsze koszty dla języka angielskiego, ze względu na niższą liczbę tokenów koniecznych do przetworzenia.
    
*   Uwaga modelu skupia się jedynie na kolejnym tokenie, przez co nie posiada informacji o potencjalnych dalszych fragmentach wypowiedzi.
    
*   Z pomocą promptów możemy sterować zachowaniem modelu.
    
*   Modele na swój sposób potrafią "rozumieć" przekazane treści i wykorzystywać ten fakt podczas generowania odpowiedzi i rozwiązywania nawet złożonych zadań.
    
*   W związku z mechanizmem "dopełniania" wskazane jest stworzenie **przestrzeni** w postaci dłuższego fragmentu tekstu dostarczonego przez nas lub wygenerowanego przez model, ponieważ sprzyja to lepszemu wybieraniu kolejnych fragmentów.
    
*   Podczas pracy z modelami nasza rola w dużym stopniu sprowadza się do **zwiększenia prawdopodobieństwa uzyskania pożądanej odpowiedzi**.
    

Zatrzymaj się teraz na chwilę nad powyższymi punktami. Uwzględniłem w nich szereg istotnych zagadnień, które będą pojawiać się na przestrzeni wszystkich przyszłych lekcji. Jeśli niektóre z nich na tym etapie nie są dla Ciebie jasne, to prawdopodobnie zmieni się to nieco później. Daj sobie jednak przestrzeń do zapoznania się z nimi.

## Playground

Mamy już wystarczająco dużo wiedzy na temat samych modeli, jednak zanim przejdziemy do kolejnych lekcji, chciałbym zatrzymać się na moment na narzędziu Playground, a konkretnie jego ustawieniach. Aktualnie praktycznie w 100% przypadków, będziesz korzystać z trybu "Chat" i to na nim skupimy swoją uwagę.

![](https://assets.circle.so/xlrda9p18e6qg3yajkc2sqt8mupv)

Tryb czatu charakteryzuje się **podziałem promptu na trzy role**, z którymi będziemy się spotykać także podczas pracy z API:

*   **System** — Instrukcja określająca zachowanie asystenta
    
*   **User** — Wiadomości użytkownika
    
*   **Assistant** — Wiadomości AI
    

W przypadku Playground (oraz połączenia przez API) możesz swobodnie sterować zawartością każdego pola i testować zachowanie modelu w różnych sytuacjach. Jest to szczególnie przydatne na etapie kształtowania promptów i ewentualnego debugowania (nie mamy typowego debuggera, ale możemy stosunkowo łatwo dostrzec, co negatywnie wpływa na generowanie odpowiedzi).

Po prawej stronie znajdują się ustawienia:

*   **Model**: Obecnie dostępne są GPT-3.5-Turbo, GPT-3.5-Turbo-16k oraz GPT-4, GPT-4-turbo-preview (to ten mający okno kontekstu do 128k tokenów), gpt-4-vision-preview (ten z możliwością pracy z obrazem, ale z nim możemy połączyć się przez API), a także ich snapshoty, czyli wcześniejsze wersje, które z czasem są wyłączane i nie obejmują ich aktualizacje. Korzystanie z nich może być przydatne ze względu na to, że wprowadzane przez OpenAI zmiany, mogą negatywnie wpływać na zachowanie Twojego systemu.
    
*   **Temperature**: To parametr wpływający na sposób wybierania tokenów, określany wskaźnikiem "kreatywności" modelu. W praktyce jednak **im niższa wartość temperature**, tym bardziej prawdopodobne tokeny zostaną wybrane. Nie gwarantuje to jednak pełnej przewidywalności, ale po prostu zmniejsza losowość, co może być przydatne przy zadaniach wymagających precyzji. Z kolei zwiększenie temperatury może sprawdzić się np. przy generowaniu kreatywnych tekstów.
    
*   **Max Length**: Wartość ta określa **maksymalną liczbę tokenów generowanych przez model**. Wiesz już, że modele są w stanie pracować jednorazowo na uzależnionej od wersji liczbie tokenów. **Suma tokenów w prompcie oraz "max length" nie może przekraczać dopuszczalnego limitu**. Inaczej mówiąc, im dłuższy prompt, tym mniej miejsca zostaje na generowanie odpowiedzi. Co ważne, ustawianie **niskiej wartości max length, gdy spodziewasz się krótkiej wypowiedzi, zwiększa wydajność modelu**. Z drugiej strony, ustawienie tego wskaźnika wysoko **nie jest związane z faktyczną długością generowanej odpowiedzi**.
    

![](https://assets.circle.so/5vqddw6e15v06p8hebdvw3gqthh4)

*   **Stop sequences:** Możesz tutaj przekazać ciągi znaków, które spowodują **zatrzymanie generowania odpowiedzi** (one same nie zostaną uwzględnione w odpowiedzi). Mowa tutaj np. o znakach nowej linii czy nawet konkretnych słowach. Warto zachować ostrożność przy dobieraniu takich sekwencji, aby przypadkowo nie zatrzymać odpowiedzi wcześniej, niż tego potrzebujemy. Przykładem w którym sam korzystałem z tej opcji, była praca z fine-tuningowanym modelem (fine-tuning to proces wyspecjalizowania modelu do realizacji konkretnych zadań), którego dane treningowe uwzględniały "stop sequence" w postaci np. "-->". Wówczas wiedziałem, że pojawienie się takiej sekwencji zawsze powinno zakończyć generowanie odpowiedzi.
    

![](https://assets.circle.so/g36z8vyge3wme7ehfiv8276ma7g6)

*   **Top P:** Wskaźnik znany także jako "nucleus sampling" wpływający na dobieranie tokenów poprzez skupienie się na **najmniejszym zestawie tokenów, których łączne prawdopodobieństwo jest co najmniej równe P (P to liczba pomiędzy 0 a 1)**. Przykładowo, jeśli mamy zdanie "Hey, how" i kontynuacje: **"are you?" (0.5), "is it going?" (0.3),** "can I help?" (0.1) i "much is it" (0.1), a wartość Top P ustawiona jest na 0.8, to pod uwagę będą wzięte wyłącznie dwa pierwsze fragmenty, ponieważ ich łączne prawdopodobieństwo wynosi 0.8. Ostatecznie wskaźnik Top P sprzyja zwiększeniu kreatywności wypowiedzi modelu, ponieważ nie skupia się wyłącznie na najbardziej prawdopodobnych tokenach. Z drugiej strony zredukowanie jego wartości, zmniejszy losowość dobierania tokenów.
    
*   **Frequency Penalty**: To kara dla tokenów za częstotliwość występowania. Gdy token pojawi się w odpowiedzi generowanej przez model, następnym razem jego prawdopodobieństwo zostanie obniżone. Ustawienie tej wartości zbyt wysoko, w przypadku dłuższych wypowiedzi doprowadzi do generowania tekstu niemającego sensu, ponieważ tokeny, które normalnie powinny się pojawić, będą miały na to zbyt małą szansę. Jednocześnie umiarkowane zwiększenie tego wskaźnika może być pomocne w zmniejszeniu szansy na wystąpienia powtórzeń.
    
*   **Presence Penalty**: To kara tokenów za pojawienie się w wypowiedzi modelu. Jest to bardziej agresywny wskaźnik, ponieważ kara narzucana jest za samo pojawienie, a nie za ponowne występowanie. Zastosowanie i ryzyka są podobne jak w przypadku Frequency Penalty.
    

Podsumowując wymienione ustawienia, większość Twojej uwagi przy pracy z modelami będzie skupiona na parametrach **temperature** oraz **max length**. Ustawienia Top P, Frequency Penalty oraz Presence Penalty będą pomocne w przypadku zadań wymagających kontrolowania różnorodności tekstu. Zastosowanie tych parametrów od strony praktycznej obrazuje poniższa tabelka z wątku z [Forum OpenAI](https://community.openai.com/t/cheat-sheet-mastering-temperature-and-top-p-in-chatgpt-api-a-few-tips-and-tricks-on-controlling-the-creativity-deterministic-output-of-prompt-responses/172683):

![](https://assets.circle.so/urgelo5kygc7xgk4jkte7wqm22cf)

## Wartościowe źródła wiedzy na temat LLM

Oto lista źródeł wiedzy oraz profili, które mogę Ci polecić. Pozostawanie na bieżąco oraz docieranie do najlepszych możliwych źródeł wiedzy jest ogólnie istotne w każdej branży. W przypadku AI, ze względu na przytłaczające tempo zmian, warto zwracać szczególną uwagę skupienie się na "sygnale" i pomijaniu "szumu".

*   Prompt Engineering Guide od [OpenAI](https://platform.openai.com/docs/guides/prompt-engineering), [Anthropic](https://docs.anthropic.com/claude/docs/prompt-engineering)
    
*   [OpenAI CookBook](https://cookbook.openai.com/)
    
*   [OpenAI Research](https://openai.com/research)
    
*   [Anthropic Research](https://www.anthropic.com/research)
    
*   [Społeczność AI Explained](https://www.youtube.com/@aiexplained-official/videos)
    
*   [Generative AI od Google](https://www.cloudskillsboost.google/paths/118)
    

*   [Stephen Wolfram Writings](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/)
    
*   [ML Papers](https://github.com/dair-ai/ML-Papers-of-the-Week)
    
*   [AemonAlgiz](https://www.youtube.com/@AemonAlgiz)
    

*   [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide)
    
*   [Andrej Karpathy (ex OpenAI)](https://www.youtube.com/@AndrejKarpathy)
    

*   [Geoffrey Hinton](https://twitter.com/geoffreyhinton)
    
*   [Yann Lecun](https://twitter.com/ylecun)
    
*   [CS50 (Harvard)](https://www.youtube.com/@cs50)
    
*   [Newsletter Chain of Thought (CEO @ Every)](https://every.to/chain-of-thought)
    
*   [Lil'Log (OpenAI)](https://lilianweng.github.io/)
    
*   [Radek Osmulski (Nvidia)](https://radekosmulski.com/)
    
*   [Riley Goodside](https://twitter.com/goodside)
    
*   [Andrew Mayne (OpenAI)](https://andrewmayneblog.wordpress.com/)
    
*   [James Briggs (Pinecone)](https://www.youtube.com/@jamesbriggs)
    
*   [AI Explained](https://www.youtube.com/@aiexplained-official)
    
*   [All About AI](https://www.youtube.com/@AllAboutAI)
    
*   [Cognitive Revolution](https://open.spotify.com/show/6yHyok3M3BjqzR0VB5MSyk?si=93e84305d31a48bb)
    
*   [Elizabeth M. Reneiris](https://twitter.com/hackylawyER)
    
*   [Harrison Chase](https://twitter.com/hwchase17)
    
*   [Aakash Gupta](https://twitter.com/aakashg0)
    
*   [Georgi Gerganov (llama.cpp)](https://twitter.com/ggerganov)
    
*   [Fabric](https://github.com/danielmiessler/fabric/tree/main/patterns) (jakościowe prompty)
    
*   [Matthew Berman (modele Open Source)](https://www.youtube.com/@matthew_berman)
    

  

* * *

## Zadanie praktyczne

Zadanie na dziś to "Max Tokens". Zapisz wiadomość systemową tak, aby zarówno jej treść, jak i wygenerowana odpowiedź modelu nie przekroczyły dopuszczalnego rozmiaru kontekstu.

🔗 [https://tasks.aidevs.pl/chat/maxtokens](https://tasks.aidevs.pl/chat/maxtokens)
