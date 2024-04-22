Charakter wymaganych zadań oraz potrzeba optymalizacji kosztów czy zwiększania wydajności **może wymagać od nas rozważenia skorzystania z innych modeli niż GPT-4.** Ze względu na to, że poruszamy się już w obszarach, w których łączymy ze sobą różne prompty, możemy także połączyć modele. Zasadniczo, wykorzystanie całej dotychczasowej wiedzy na temat modeli oraz programistycznych technik, pozwala na osiąganie lepszych rezultatów. Jest tu jednak mnóstwo przestrzeni do eksperymentów i przecierania nowych ścieżek, ponieważ obecnie nie ma jeszcze uniwersalnych technik i wzorców, którymi można podążać, aczkolwiek obserwujemy ich kształtowanie.

## Wybór pomiędzy modelami GPT-3.5 i GPT-4

OpenAI obecnie oferuje dostęp do wielu wersji modeli. Jednak z naszego punktu widzenia, najbardziej istotne są:

*   gpt-3.5-turbo (+snapshoty)
    

*   gpt-3.5-turbo-16k (+snapshoty)
    

*   gpt-3.5-turbo-instruct
    
*   gpt-4 (+snapshoty)
    
*   gpt-4-turbo-preview (model z największym oknem kontekstowym)
    

*   text-embedding-ada-002
    
*   text-embedding-3-small
    
*   text-embedding-3-large
    
*   text-moderation-latest
    
*   whisper
    
*   i ewentualnie Dall-E (służy do generowania obrazów, ale nie będziemy się nim zajmować)
    

Na ich temat musisz wiedzieć tyle, że wersje 3.5 **są znacznie szybsze** i **tańsze**, lecz ich zdolność rozumowania jest **znacznie niższa**, w porównaniu do GPT-4. W dodatku wersja 16k pozwala na przetwarzanie **obszernego kontekstu 16 000 tokenów**, co daje ~25 stron tekstu w języku angielskim. W praktyce wersje 3.5 sprawdzają się do stosunkowo prostych klasyfikacji, transformacji czy nawet niektórych podsumowań. Wymagają także **znacznie bardziej precyzyjnych promptów, nierzadko uwzględniających przykłady oczekiwanych zachowań**.

Na początku września OpenAI opublikowało także model GPT-3.5-Turbo-Instruct, który zastępuje starsze modele (davinci, curie itd.). Różni się sposobem interakcji, który **nie wykorzystuje ChatML**, a jego obecność uzasadniona jest głównie chęcią aktualizacji wcześniejszych wersji. W AI\_Devs raczej nie będziemy z niego korzystać.

Wersja GPT-4 jest odwrotnością wymienionych wyżej cech. Jest wolniejsza i droższa, ale sprawdza się nawet w przypadku trudnych zadań. Dla mnie jest to domyślny model, z którym pracuję, jednak nierzadko zaczynam od wersji 3.5 (lub przełączam się na nią później).

Wersje oznaczone końcówką **\-0613 czy -0125** to tzw. **snapshoty**, które **nie otrzymują aktualizacji**, przez co są bardziej stabilne w przypadku zastosowań produkcyjnych. Oferują także tzw. Function Calling (o czym powiemy w kolejnych lekcjach). Należy jednak mieć na uwadze, że czas wsparcia dla tych wersji modelu wynosi (w teorii) około 3 miesiące.

Model text-embedding-ada-002 służy do generowania embeddingów, o czym mieliśmy już okazję się przekonać. O jego praktycznym zastosowaniu będziemy mówić w kolejnych lekcjach.

Whisper to model specjalizowany w **zamianie audio na tekst** i obecnie jest to najlepszy model z tej kategorii, z jakim miałem do czynienia. Jego szczególną cechą w porównaniu do innych narzędzi rozpoznawania mowy (aczkolwiek niebawem się to zmieni) jest doskonałe radzenie sobie z **nagraniami, w których przeplatają się różne języki**, np. angielski z polskim. W dalszych lekcjach również będziemy z nim pracować. Co ważne, Whisper to model, który możemy uruchomić **lokalnie, na naszym komputerze**.

Podsumowując, w praktyce wygląda to tak:

*   Modele GPT-3.5 / GPT-4 wykorzystujemy w większości przypadków. W miarę możliwości, lepiej jest korzystać z wersji 3.5.
    
*   Wersje **0613/0125** wykorzystujemy w przypadku zastosowań produkcyjnych oraz na potrzeby wywoływania funkcji.
    
*   text-embedding-3-large jest pierwszym wyborem w kontekście pracy z bazami wektorowymi, jednak może być zastąpiony przez modele Open Source (ich ranking znajdziesz na [HuggingFace](https://huggingface.co/spaces/mteb/leaderboard))
    

## Techniki skracające czas pisania promptów

Sam proces projektowania promptów omawiałem już w lekcji **Prompt Design**. Teraz wejdziemy w temat nieco głębiej, poruszając także kwestię organizacji promptów oraz przydatnych narzędzi. Prompty zwykle posiadają zbliżoną strukturę lub wspólne fragmenty (np. wyrażenia). Pisanie ich od początku za każdym razem jest możliwe, ale niepotrzebnie zajmuje czas. Z tego powodu warto rozważyć zastosowanie kilku dodatkowych narzędzi.

**TextExpander**

Niewykluczone, że znana jest Ci koncepcja Text Expandera. Jeśli nie, to chodzi w niej o zastosowanie skrótów, które trudno wpisać przypadkiem, np. ".em", a których wpisanie rozszerza je do powiązanego z nimi tekstu. W moim przypadku wspomniana fraza **zamienia się na mój adres e-mail**. Taką funkcjonalność stosuję nie tylko na potrzeby promptów, ale także do codziennej komunikacji.

W przypadku systemu macOS nie ma potrzeby instalowania dodatkowych aplikacji, ponieważ Text Expander jest dostępny jako opcja "Text Replacement" w ustawieniach klawiatury. Dla pozostałych systemów, polecanym rozwiązaniem jest [textexpander.com](http://textexpander.com/).

Lista moich popularnych rozszerzeń:

*   .ack — Acknowledge this by just saying "..." and nothing more. ([źródło](https://www.youtube.com/@engineerprompt) — ogólnie cały kanał)
    
*   .truth — Answer questions as truthfully as possible using the context below and nothing else. If you don't know the answer, say, "I don't know."
    
*   .guess — using your best guess to be sure you've got the right answer.
    
*   .cot — Let’s work this out in a step by step way to be sure we have the right answer.
    
*   .skip — always skip any additional comments.
    
*   .ver — Let’s work this out in a step by step way to be sure we have the right answer. ([źródło](https://arxiv.org/pdf/2305.02897.pdf))
    
*   .rules — Strict rules you're obligated to follow throughout the conversation:
    
*   .check — Now you're a researcher investigating what you've just said. List the flaws and faulty logic of your previous message in light of my last question. Let's work this out in a step by step way to be sure we have all the errors ([źródło](https://www.youtube.com/watch?v=wVzuvf9D9BU))
    
*   .rocket — Now act as if you were a rocket scientist investigating provided solution to a problem. Your job is to find all flaws and faulty in logic in a given approach and provide me with the simplest way to achieve the results. Let's work this out in a step by step way to be sure we have all the errors.
    

  

**Snippety**

Samo pisanie promptów nierzadko wymaga parafrazy, rozszerzenia, analizy, synonimu, czy nawet sięgnięcia po modele mentalne czy inne zagadnienia z obszaru psychologii (np. Theory of Mind). Pomimo moich zainteresowań powiązanych z tymi tematami, pomoc ze strony AI okazuje się bardzo istotna.

Mowa tutaj zarówno o budowaniu promptu, ale także jego analizie (co już pokazywałem na przykładzie Playground), dobieraniu słów kluczowych, parafrazie, wyjaśnianiu koncepcji, generowaniu przykładów, czy formatowaniu. Naturalnie, chodzi tutaj o **wsparcie**, ponieważ i tak ostateczne decyzje zależały ode mnie i to ja byłem w stanie je przetestować w praktyce.

Przez pierwsze miesiące pracy z LLM, prompty projektowałem bezpośrednio w ChatGPT. Schemat rozmowy wyglądał tak, że **za każdym razem** rozpoczynałem ją od nadania roli, a następnie przekazywałem prompt z prośbą o jego analizę. W trakcie rozmowy, koncepcje, które uznawałem za wartościowe, implementowałem samodzielnie lub zlecałem to modelowi.

  

![](https://assets.circle.so/jrlc7dwqpqw8zi1hwb32cjd54ws9)

  
Obecnie ze względu na dostęp do GPT-4 z poziomu skrótów klawiszowych i interfejsu aplikacji Alice, tworzenie promptów nie wymaga już przełączania się do ChatGPT. W zamian, cały proces realizuję bezpośrednio w Playground lub w Alice i edytorze kodu.

Do skrótów klawiszowych posiadam przypisane następujące snippety:

*   Korekta / Tłumaczenie języka angielskiego, poprawa składni, unikanie dwuznaczności
    
*   Parafraza przekazanego zdania
    
*   Generowanie listy synonimów
    
*   Generowanie przykładów na podstawie instrukcji, zestawu danych i opisu struktury (tym promptem realizowałem także fine-tuning modelu text-davinci-003)
    
*   Rozbicie złożonej koncepcji na małe części poprzez First Principles Thinking (myślenie kategoriami pierwszego rzędu)
    
*   Wykrycie dwuznaczności, niskiej precyzji lub sprzeczności
    
*   Analiza promptu i zasugerowanie potencjalnych zmian wraz z uzasadnieniem
    

Takie snippety pozwalają mi na projektowanie promptu w sposób, jaki widać na animacji poniżej.

![](https://assets.circle.so/j5pry00sy8bpsk3q35odw97f1yhv)

Warto poświęcić trochę czasu na przygotowanie pierwszych snippetów, jednak w praktyce i tak **będziesz je rozwijać oraz dodawać nowe**. Przygotowanie dużej liczby promptów, czy tym bardziej kopiowanie gotowych, **nie jest dobrym pomysłem**, ponieważ istotny jest także nawyk ich wykorzystywania oraz rozumienie działania. Przykład jednego z moich promptów wygląda następująco:

![](https://assets.circle.so/hrtukmseu3d0y5ill2ichhg7iky3)

*   ⚡ [Pobierz prompt w wersji tekstowej](https://cloud.overment.com/aidevs_writer-1698647914.txt)
    

## Optymalizacja dojścia do poprawnego rozwiązania

Załóżmy, że mamy już prompt, który poprawnie realizuje swoje zadanie w połączeniu z GPT-4, ale zależy nam na wykorzystaniu GPT-3.5-Turbo ze względu na optymalizację kosztów i wydajności. Inny scenariusz może uwzględniać sytuację, w której **Twój prompt nie działa poprawnie w niektórych przypadkach**. Konieczne jest zatem wprowadzenie zmian lub nawet całkowita zmiana strategii.

Wykorzystamy tutaj pewien przykład **niezoptymalizowanej wersji promptu** odpowiedzialnego za **opisywanie zapytania kierowanego do asystenta AI** (który może przydać Ci się w ostatnim module AI\_Devs). Konkretnie zależy nam tutaj na **wyborze kategorii, grupy oraz wygenerowaniu semantycznych tagów**. Założenie promptu polega więc na tym, aby w trakcie rozmowy asystent "decydował" o tym, czy udzielić odpowiedzi, czy wykonać akcję, oraz aby wybierał obszary swojej długoterminowej pamięci w celu zwiększenia precyzji wypowiedzi (w końcu kontekst jest kluczowy).

![](https://assets.circle.so/s59vipad61d9cbevkc16owu3l06m)

*   ⚡ [zobacz przykład](https://platform.openai.com/playground/p/c9zhTg2HdYWLFjgAUtyRpIuH?model=gpt-4&mode=chat)
    

Niestety, prompt w praktyce sprawdza się przeciętnie. Po pierwsze, jest obszerny, po drugie, wymaga GPT-4, a po trzecie, często niepoprawnie klasyfikuje zapytania.

Pracę nad optymalizacją takiego promptu **bardzo ułatwia jego praktyczne zastosowanie przez jakiś czas**, ponieważ daje nam to zrozumienie sytuacji, w których model nie realizuje poprawnie swojego zadania. Alternatywnie, konieczne jest opracowanie zróżnicowanych przykładów weryfikujących jego zachowanie.

W każdym razie, zidentyfikowałem następujące problemy, takie jak między innymi:

*   Struktura obiektu opisującego zadanie jest zbyt niejasna i zawiera błąd logiczny. Obecnie, dla wydanego polecenia, otrzymuję **"group": "action"** oraz **"action": "action"**. Oznacza to, że asystent wykonuje polecenie, przeszukując listę swoich umiejętności. Problem w tym, że niektóre akcje mogą dotyczyć na przykład jego "wspomnień". Chociażby polecenie "zapisz w Notion wszystko, co wiem na temat X" powinno zwrócić "**group": "action**" i **"action": "action"**.
    
*   Ogólna struktura promptu jest nieefektywna i zawiera powtórzenia związane z opisem obiektu JSON.
    
*   Sterowanie uwagą modelu nie jest tutaj widoczne. W treści dzieje się dużo, a istotne informacje są rozproszone.
    

Postanowiłem więc zmienić strategię, przepisując cały prompt na nowo. Wprowadzone zmiany uwzględniały chociażby:

*   Zmianę **narracji**. W związku z tym, że model **uzupełnia dotychczasową wypowiedź**, przepisałem go w taki sposób, jakby **była to instrukcją opisywania zapytania za pomocą obiektu JSON**.
    
*   Zmianę sposobu opisania **struktury obiektu** poprzez **uwzględnienie wewnątrz niej opisu właściwości**.
    
*   Zapisanie **wyraźnych zasad** określających sposób generowania obiektu.
    
*   **Przykłady** prezentujące **istotne zachowania** związane z klasyfikacją zapytania.
    
*   Określenie persony dwoma słowami "Alice here", które pozwalają mi wykorzystywać zwroty takie jak: "skierowane do mnie" lub połączyć słowa "Ty, Twoja" z imieniem "Alice".
    

Efektem jest znacznie skrócony prompt, który poprawnie realizuje swoje zadanie w trakcie konwersacji. Aczkolwiek **w połączeniu z kodem, nie będziemy mieć do czynienia z konwersacją, lecz wymianą pojedynczych wiadomości**.

![](https://assets.circle.so/7zufjqbo8zybdi3htm4nyhuxsgdq)

*   [⚡ zobacz przykład](https://platform.openai.com/playground/p/eNSeVoKRte7wPkpHW1Pi1t49?model=gpt-4&mode=chat)
    

Prompt przeszedł test zgodnie z oczekiwaniem. W przyszłych lekcjach pokażę Ci jego rozszerzenie oraz to, jak można go wykorzystać na potrzeby systemu RAG. Tymczasem spójrzmy na techniki optymalizacji takiego promptu pod kątem modelu w wersji 3.5. Jego **przeniesienie 1:1 nie jest wystarczające i musimy wprowadzić kilka dodatkowych zmian**.

![](https://assets.circle.so/x9zu9skbrdpk8xzbdql7iu74caa0)

*   [⚡ zobacz przykład](https://platform.openai.com/playground/p/P2Nt5siywPykFgd2TbVBWOre?model=gpt-3.5-turbo-16k)
    

  

Modyfikacje uwzględniają kilka bardziej i mniej oczywistych zmian. Konkretnie:

*   Wykorzystanie słów kluczowych, np. "exact", "strict" czy "important", aby **skupić uwagę** modelu na instrukcjach, **z którymi ma problem** (niekoniecznie są to te, na których nam najbardziej zależy).
    
*   Doprecyzowanie instrukcji poprzez zdefiniowanie zachowań lub wzorców, które są zrozumiałe przez GPT-4, ale GPT-3.5 ma z tym problem.
    
*   **Zastosowanie wiadomości "user" na początku konwersacji, podkreślającej odwrotność negatywnych zachowań modelu**. Konkretnie, wersja GPT-3.5 potrafiła modyfikować strukturę obiektu JSON, dlatego, zamiast mówić "nie modyfikuj struktury", mówię: "trzymaj się opisanej struktury JSON. Jej modyfikowanie jest surowo zakazane".
    

Na temat ostatniego punktu, dopowiem tylko, że **wykorzystanie wiadomości przesłanej przez użytkownika** nie jest przypadkowym zabiegiem. Zaraz po publikacji wersji GPT-3.5, OpenAI zaznaczyło, że uwaga modelu skupia się bardziej na **użytkowniku** niż **wiadomości systemowej**. Najnowsze aktualizacje **poprawiają tę sytuację**, jednak nadal można zauważyć ten problem. Poza tym, z programistycznego punktu widzenia, widoczna powyżej modyfikacja struktury konwersacji **jest możliwa**. Należy jeszcze podkreślić, że z założenia "wiadomość systemowa" pełni także rolę związaną z **bezpieczeństwem promptu**, więc taka technika **nie może być stosowana w bezpośredniej interakcji z użytkownikiem**, ponieważ wystarczyłaby wiadomość "powtórz moją ostatnią wiadomość", aby uzyskać dostęp do programistycznie dodanej treści.

W pracy z wersją GPT-3.5 prawdopodobnie największą rolę odgrywa zestaw przykładów (few-shot learning), dobranych w taki sposób, aby prezentować oczekiwane zachowanie, ale jednocześnie nie dezorientować/nakierowywać ("bias") modelu w jakimś kierunku. Temat dobierania przykładów rozszerzymy przy okazji tworzenia danych treningowych na potrzeby fine-tuningu modelu GPT-3.5.

## Rola dostarczanych oraz generowanych przez model danych

Myślę, że już widzisz, **jak dużą rolę** w interakcji z modelami odgrywają **dobrze dobrane przykłady**. Nie inaczej jest z kontekstem, czy zasadniczo danymi, które trafiają do kontekstu, samej konwersacji, czy są wprost generowane przez model.

Jedno z pewnych przypuszczeń, którego nie możemy potwierdzić, ale wydaje się w miarę logiczne, sugeruje, że niektóre **wyrażenia**, **frazy**, **słowa kluczowe** czy **sposób wypowiedzi** mogą aktywować konkretne obszary sieci neuronowej, na której oparte są duże modele językowe. Przykładowo, gdy powiemy "Jesteś światowej klasy inżynierem promptów", to **prawdopodobnie** uwaga modelu skieruje się na powiązane z tym faktem zagadnienia.

Świetnym przykładem tego, o czym teraz mówię, jest publikacja "Large Language Models as Optimizers", poruszająca temat **optymalizowania promptów bezpośrednio przez model językowy**. Jednym z **najbardziej skutecznych instrukcji** brzmi tak:

*   **Take a deep breath and work on this problem step-by-step.**
    

Określenie "Take a deep breath" (weź głęboki oddech) wydaje się nie mieć żadnego związku z modelami językowymi. Jednak takie określenie nierzadko pojawia się np. w sytuacjach, które wymagają od nas **uspokojenia, wysokiej uwagi oraz skupienia i precyzji w podejmowanym działaniu**. Poza tym sama fraza "**Let's break this problem step by step**" zazwyczaj pojawia się **w jakościowych źródłach wiedzy, np. tutorialach czy książkach**. Podkreślam jednak, że są to jedynie przypuszczenia, lecz regularnie spotykam się z nimi w różnych publikacjach, które popierają je faktycznym zwiększeniem skuteczności.

Samo dostarczanie dodatkowych treści (w dowolnej formie) do interakcji z modelem również ma swoje uzasadnienie w charakterystycznych dla ludzi zachowaniach i sposobach myślenia. Chain of Thought (lub też [Train of Thought — Wikipedia](https://en.wikipedia.org/wiki/Train_of_thought)) to jeden z nich. Zapewne kojarzysz sytuację, w której podczas rozmowy pojawiały Ci się w głowie **kolejne, powiązane tematy**. Podobnie jest w przypadku szukania rozwiązania problemu — proces odnalezienia odpowiedzi polega na **przejściu przez zagadnienia, które prowadzą nas do kolejnych**. Należy jednak brać pod uwagę także to, że **Chain of Thought** może nas również prowadzić w niepożądane miejsca i sugerować niepoprawne rozwiązania.

To wszystko ma bezpośrednie przełożenie na pracę z Dużymi Modelami Językowymi. Poniższy przykład pochodzi z publikacji [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903) i oddaję ideę "prowadzenia modelu" przez konkretny schemat myślowy.

![](https://assets.circle.so/884t2huzs34t0dgdbmcsnv0a3n37)

Pomimo tego, że w wielu przypadkach zależy nam na tym, aby model udzielał **krótkiej, treściwej odpowiedzi**, to nie oznacza, że **programistycznie** nie możemy uwzględnić logiki, która **przeprowadzi** lub **pozwoli mu przeprowadzić** proces myślowy, którego rezultatem będzie poprawne rozwiązanie. Rolę czegoś takiego doskonale opisuje Andrej Karpathy na swoim profilu [x.com](http://x.com/), porównując krótkie interakcje do **człowieka, który mówi szybko i nie ma czasu na myślenie**.

![](https://assets.circle.so/lp3f4gf4xb9q46te8mvguhagxbx9)

Celem powyższego wyjaśnienia jest zwrócenie Twojej uwagi na fakt, że **chęć przetwarzania jak najmniejszej liczby tokenów możliwie szybko** może okazać się złym doradcą, szczególnie w przypadku zadań **wymagających złożonego rozumowania**.

Na zakończenie tej lekcji, chciałem jeszcze zwrócić uwagę na pewne **spostrzeżenie**, które wydaje się bardzo trafne i faktycznie okazuje się przydatne przy pracy z Dużymi Modelami Językowymi. Mowa o "[Latent Space Activation](https://github.com/daveshap/latent_space_activation)", które łączy ze sobą praktycznie wszystkie znane nam techniki projektowania promptów i która bezpośrednio nawiązuje do sposobu kompresji informacji danych, jaką wykorzystują sieci neuronowe.

Nie wgłębiając się zbytnio w teorię, jeśli teraz napiszę "Occam's Razor", to jeśli koncepcja ta jest Ci znana, od razu skieruję Twoje myśli w obszar możliwie "najprostszych rozwiązań". Podobnie jest z LLM, gdzie również wiele wskazuje na to, że konkretne pojęcia czy zwroty aktywują powiązany z nimi obszar wiedzy i umiejętności, **wpływając na sposób zrealizowania zadania**.

Przykładami takich określeń, z którymi sam się spotkałem, są:

*   Let's verify step by step
    
*   Let's break this down
    
*   Let's explain this step by step
    
*   Answer using your best guess
    
*   Explain your reasoning step-by-step to make sure you've got the right answer
    
*   Nazwy mentalnych czy znanych modelowi pojęć i technik
    
*   Nawiązania do znanych postaci czy platform (np. styl komentarzy z YouTube)
    
*   Nawiązania do konkretnych rodzajów wypowiedzi, charakterystycznych np. dla tutoriali wideo (w których zwykle znajduje się wartościowa, dopracowana wiedza, z którą model miał kontakt)
    

Poza określeniami mówimy także o technikach "prowadzenia" konwersacji przez konkretne schematy myślowe, co już widzieliśmy na przykładzie, chociażby Tree of Thoughts. Kolejny przykład pochodzi z wyżej wspomnianego repozytorium Davida Shapiro, który nagrał na ten temat także [film na swoim kanale YouTube](https://www.youtube.com/watch?v=N8p6u1OtARs)

  

![](https://assets.circle.so/fhwuyyf8vi8klfdi31lyxksvxery)

  
To wszystko jeszcze bardziej podkreśla fakt, że jeszcze bardzo mało wiemy na temat interakcji z modelami i dotychczasowe techniki nierzadko są wynikiem przypadku. Dlatego tym bardziej wprost świetnym pomysłem jest eksperymentowanie i eksplorowanie ścieżek, które **wykraczają poza ogólnie przyjęte standardy**.

* * *

## Zadanie praktyczne

1.  Rozwiąż zadanie API o nawie **embedding** ([instrukcja połączenia, jeśli dopiero zaczynasz](https://tasks.aidevs.pl/))  
      
    Korzystając z modelu **text-embedding-ada-002** wygeneruj embedding dla frazy **Hawaiian pizza** — upewnij się, że to dokładnie to zdanie. Następnie prześlij wygenerowany embedding na endpoint /answer. Konkretnie musi być to format {"answer": \[0.003750941, 0.0038711438, 0.0082909055, -0.008753223, -0.02073651, -0.018862579, -0.010596331, -0.022425512, ..., -0.026950065\]}. Lista musi zawierać dokładnie 1536 elementów.
    

2.  Przygotuj prompt działający **zarówno** z modelem GPT-3.5-Turbo, jak i GPT-4. Poproś model o przygotowanie opisanej struktury obiektu JSON, ale zauważ, że każdy model musi zwrócić nieco różniące się od siebie dane.
    
    Do wykonania zadania skorzystaj z wiedzy na temat mocnych i słabych stron GPT-3.5-Turbo. Wskazówka: Ten model "lubi" pewien sposób zapisu. Wiesz jaki? [https://tasks.aidevs.pl/chat/structure](https://tasks.aidevs.pl/chat/structure)