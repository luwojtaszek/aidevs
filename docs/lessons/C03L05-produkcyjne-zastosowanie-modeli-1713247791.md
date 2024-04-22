![](https://assets.circle.so/h4v2ekof83f114191ezclw03rtdc)

» [Lekka wersja przeglądarkowa](https://cloud.overment.com/C03L05-produkcyjne-zastosowanie-1712586552.html) «

> **Kilka słów na początek**  
>   
> **—** Ze względu na charakter tematu tej lekcji, potraktuj ją jako **zarys szerokiej perspektywy** tworzenia produkcyjnych aplikacji w oparciu o modele OpenAI. Pomijam w niej przykłady kodu, zadania czy konkretne wizualizacje, ponieważ te omawialiśmy i będziemy omawiać w pozostałych lekcjach. Celem tej, jest skupienie się na **połączeniu wszystkiego, o czym się uczymy** i przeniesieniu się na moment w obszar produkcyjny.

Wersja [YouTube](https://youtu.be/sHudKtPUWzs)

Budowanie aplikacji produkcyjnych, w których część logiki realizuje nowoczesny LLM, jest bardzo świeżym tematem i na ten moment trudno wskazać wzorce projektowe czy konkretne narzędzia (np. frameworki), które sprawdzą się w różnych scenariuszach. Co więcej, nawet wśród osób związanych od lat z AI da się odczuć, że wszyscy mamy do czynienia z zupełnie nowymi możliwościami i to, co wcześniej wymagało miesięcy pracy, dziś można zbudować w kilka dni.

Sam buduję dwa rozwiązania działające już na produkcji: **aplikację Alice** oraz **asystenta** [**eduweb.pl**](http://eduweb.pl/)**.** Poza nimi tworzę także szereg narzędzi, które stosujemy wewnętrznie w naszej firmie, więc częściowo również mówimy tutaj o działaniu na produkcji. W tej lekcji przejdziemy przez poszczególne fazy budowania tych projektów, skupiając się na ogólnych zasadach, charakterystycznych dla większości wdrożeń LLM.

## Faza #1: Działający prototyp aplikacji AI

Zbudowanie działającego prototypu aplikacji wykorzystującej duże modele językowe, zwykle jest dość proste. Wystarczy połączenie kilku promptów z podstawową logiką aplikacji i otrzymujemy coś, co nierzadko robi bardzo dobre pierwsze wrażenie. Chociaż budowanie prototypów nie jest nowym zagadnieniem i często jest wykorzystywane **do weryfikacji istotnych tez**, to w przypadku LLM może pojawić się **mylne wrażenie**, że "jesteśmy już bardzo blisko" oddania aplikacji w ręce użytkowników.

Zwracam na to uwagę, ponieważ już kilkukrotnie spotkałem się z **wycenami firmowych chatbotów na poziomie 1500 zł brutto**, no w końcu to kwestia kilku promptów i paru linii kodu. Myślę jednak, że na tym etapie AI\_Devs już nikt spośród nas nie ma wątpliwości, że to źle wyceniony projekt.

Wracając jednak do prototypu, sam uwzględniałem następujące kroki:

*   Ogólny zarys projektu uwzględniający raczej luźne pomysły niż konkretny zakres funkcjonalności. Na tym etapie dążyłem do tego, aby mniej więcej zorientować kierunek oraz naszkicować wizję projektu
    
*   Rozpoznanie typowo technicznych możliwości związanych z **rozpoznaniem API integrowanych usług oraz sposobem dostępu do danych.** W przypadku asystenta [eduweb.pl](http://eduweb.pl/) chodziło o zgromadzenie plików transkrypcji oraz skojarzenie ich nie tylko z powiązanymi lekcjami, ale całym kontekstem uwzględniającym rozbudowane kategorie. Sytuacja nie była oczywista, ponieważ za transkrypcje odpowiada zupełnie inna aplikacja i domyślnie w serwisie nie ma potrzeby aż tak mocno wiązać ze sobą treści. Zatem pierwszym krok to: **Rozpoznanie tego, co mamy do dyspozycji** i co ewentualnie musi zostać zbudowane.
    
*   Następnie **zgromadziłem testowy, ale różnorodny zestaw danych**, który umożliwił mi zbudowanie prototypu uwzględniającego: podział treści na mniejsze fragmenty, klasyfikowanie i tagowanie, wyszukiwanie z pomocą bazy wektorowej oraz zaprojektowanie wstępnych promptów. Dzięki pobraniu danych testowych mogłem swobodnie pracować, bez czekania na API, które umożliwiłoby mi do nich dostęp.
    
*   Gdy miałem już działającą pierwszą wersję prototypu zdolną do odpowiadania na pytania na podstawie dostarczanej treści, przeszedłem do dalszych elementów mechaniki uwzględniających: kontekst konwersacji danego użytkownika, klasyfikowanie i wzbogacanie zapytania, dostęp do stron www oficjalnych dokumentacji i mechaniki ich przeszukiwania, cytowanie źródeł oraz ostatecznie mechaniki moderacji, flagowania niepożądanych zachowań oraz ostatecznie optymalizacja promptów i przełączenie części z mechaniki na GPT-3.5-Turbo.
    
*   Po zbudowaniu działającego prototypu konieczne było podłączenie pełnej bazy wiedzy, która w tym przypadku obejmowała ~25 milionów znaków. W większości były to transkrypcje, ale także opisy kategorii, kursów oraz powiązane z nimi metadane (linki, tagi itd.). Należało także odfiltrować komentarze użytkowników, których nie chciałem wykorzystywać jako kontekst. W przypadku transkrypcji konieczne było usunięcie znaczników czasu.
    
*   Na tym etapie okazało się, że transkrypcje wygenerowane automatycznie posiadają błędy, **szczególnie w przypadku słów kluczowych, które są najbardziej istotne z punktu wyszukiwania**. Konieczne było więc uruchomienie procesu **manualnej korekty**, który trwał przez kilka miesięcy.
    
*   Nie czekając na korektę treści, opublikowałem wczesną wersję asystenta. Pozwoliło mi to już na faktycznych zapytaniach od użytkowników obserwować jego zachowanie i wprowadzać modyfikacje i planować kolejne wersje oraz **docelową wizję projektu**
    

Ze względu na fakt, że rozpoczynając pracę nad budową asystenta, posiadałem już dość dużą wiedzę na temat modeli, to zbudowanie samej mechaniki nie wymagało ode mnie zbyt dużo czasu. 80% mojej pracy było poświęcone przygotowaniu treści oraz podłączeniem do istniejącej logiki.

W przypadku projektu Alice ścieżka wyglądała dość podobnie i ujmując ten temat z szerokiej perspektywy mówimy o:

1.  Zarysowaniu projektu
    
2.  Rozpoznaniu dostępnych zasobów i możliwości
    
3.  Zbudowaniu prototypu
    
4.  Wykorzystaniu danych testowych do budowy wersji beta
    
5.  Publikacji i zebraniu feedbacku oraz monitorowaniu aplikacji
    
6.  Wprowadzanie zmian i zrealizowanie kolejnych iteracji
    
7.  Oficjalnej premiery i przekroczenia bariery 4000 użytkowników
    

Patrząc na powyższe punkty, prawdopodobnie rozumiesz już, dlaczego rok 2023 był rokiem **list oczekujących** oraz **zapowiedzi produktów**. Zwyczajnie zbudowanie sensownego produktu wymaga kontaktu z użytkownikami i stopniowego kształtowania funkcjonalności. Dzięki udostępnianiu produktu mniejszej liczbie użytkowników na początkowym etapie, jest zwyczajnie łatwiej wdrażać ich sugestie oraz zauważać i naprawiać błędy.

## Faza #2: Przygotowanie na produkcję

Dotychczas wspominałem o wybranych zagadnieniach dotyczących przygotowania aplikacji "na produkcję". Teraz przyjrzymy się temu bliżej.

*   **Bezpieczeństwo:** Priorytetem jest dla mnie zadbanie o bezpieczeństwo zarówno użytkowników, jak i moich aplikacji. Poza typowymi dla aplikacji webowej zabezpieczeniami wprowadziłem: **identyfikowanie użytkowników** wysyłających zapytania, **moderację treści** zarówno pod kątem polityki OpenAI, jak i moich założeń, **mechaniki zmniejszające ryzyko nadpisania zachowania modelu** oraz **pełny monitoring aplikacji**. Dodatkowo w przypadku Alice zadbałem także o zwiększenie bezpieczeństwa kluczy wprowadzanych przez użytkowników (nawet pomimo faktu, że są zapisywane lokalnie na ich komputerach).
    
*   **Skuteczność:** Zarówno prototyp asystenta eduweb, jak i Alice na etapie developmentu, pozostawiały wiele do życzenia. Z jednej strony realizowały część zadań bardzo dobrze, a z drugiej częstotliwość pomyłek i nieoczekiwanego zachowania były zbyt wysokie. **Kluczowym elementem w obu przypadkach okazała się struktura promptów oraz jakość dostarczanego kontekstu.** Na tym etapie wiem także, że w przypadku takich rodzajów danych jak transkrypcje, znacznie lepiej jest dokonać jakiegoś rodzaju kompresji, ponieważ są obszerne, ale zawierają wiele informacji nieistotnych dla modelu (np. omawianie kontekstu o który użytkownik niemal nigdy nie zapyta)
    
*   **Wydajność:** LLM jest obecnie najsłabszym elementem aplikacji w kontekście wydajności. Warto minimalizować jego udział na różnych etapach i wykorzystywać jedynie tam, gdzie jest to niezbędne, aczkolwiek sytuacja jest pod tym względem niezwykle dynamiczna. Istnieje też kilka dodatkowych sposobów optymalizacji. Są nimi: ograniczenie kontekstu, ograniczenie ilości generowanych treści, strumieniowanie odpowiedzi, przeniesienie ciężaru przetwarzania danych na kod, czy skorzystanie ze słabszych, ale szybszych modeli. Należy także pamiętać, że szybkość działania modeli wzrasta, nawet w przypadku tych, które pracują lokalnie na komputerze użytkownika.
    
*   **Optymalizacja:** Nawet w działaniach na stosunkowo małej skali, korzystanie z modelu GPT-4-turbo potrafi szybko generować zauważalne koszty. Dlatego, nawet jeśli limit dla tego modelu wynosi obecnie 128k tokenów, to i tak zawsze będzie nam zależało na tym, aby dostarczać mu **niezbędne minimum** informacji oraz zwykle zachęcać także do tego, aby ograniczał swoje wypowiedzi. Optymalizacja kosztów uwzględnia głównie programistyczną pracę w obszarze organizacji, oczyszczania oraz wyszukiwania danych. Drugim, bardzo istotnym aspektem jest także sama instrukcja, ponieważ jej objętość oraz treść również wpływa na koszty związane zarówno z przetwarzaniem przesłanych tokenów, jak i tym, ile z nich jest generowane.
    

## Faza #3: Monitorowanie aplikacji, debugowanie oraz rozwój

W chwili, gdy nasza aplikacja trafia w ręce pierwszych użytkowników, warto mieć wygodny dostęp do logów pozwalających wygodnie prześledzić każdą interakcję. Tutaj również we wcześniejszych omawiałem (oraz będę omawiał w przyszłych) bezpośrednie techniki i narzędzia, które w tym pomagają. Jednak tym razem ponownie skupimy się na wątkach, na które nie będzie miejsca w pozostałych lekcjach.

*   **Logi aplikacji:** Zwykle w aplikacjach wykorzystuję logi na potrzeby ewentualnych błędów lub obserwowania istotnych dla mnie elementów logiki. W przypadku aplikacji integrującej LLM monitorowanie uwzględnia praktycznie każdy obszar, ponieważ w ten sposób gromadzimy dane pozwalające na **debugowanie** poprzez prześledzenie ścieżki użytkownika (ale i nie tylko). Obecnie nie ma bezpośrednich technik i narzędzi związanych z debugowaniem promptów, więc pozostaje nam jedynie samodzielne dochodzenie do ewentualnych problemów. Aczkolwiek [Large Language Models are Optimizers](https://arxiv.org/abs/2309.03409) pokazuje nam, że w proces pracy nad promptem możemy zaangażować sam model.
    
*   **Flagowanie:** Prompty wykrywające niepożądane zachowania na etapie interakcji (lub zaraz po niej) powinny być flagowane i wysyłane jako powiadomienie, np. na kanale Slack lub w wiadomości Gmail. Powiadomienia pozwalają na szybką reakcję nie tylko w przypadku naruszeń, ale także błędnie działającego systemu. Przykładowo zdarza się, że zapytania w których nie ma nic złego, oznaczane są jako niebezpieczne.
    
*   **Debugowanie:** Proces debugowania zwykle powinien odbywać się bezpośrednio w Playground (a nie ChatGPT) z ustawieniami, które stosujemy w aplikacji. Zwykle już na pierwszy rzut oka jesteśmy w stanie domyślić się, co jest przyczyną nieoczekiwanego zachowania. W sytuacji, gdy nie jest to oczywiste, zwykle pomaga dodanie przykładów prowadzących model w oczekiwanym przez nas kierunku. Wprowadzone zmiany zawsze należy testować na różnych zestawach danych, a w sytuacji, gdy prompt zaczyna być zbyt obszerny, bardzo pomocne jest przeanalizowanie go wspólnie z samym modelem (GPT-4).
    
*   **Rozwój:** Ze względu na to, że możemy jedynie sterować zachowaniem modelu, istotne jest to, aby możliwie na każdym kroku **zwiększać prawdopodobieństwo tego, że otrzymamy to, czego chcemy** oraz **zmniejszać ryzyko, że wprowadzane przez nas zmiany wpłyną negatywnie na inne obszary aplikacji**. Istnieje jednak szereg sposobów na to, aby sobie z tym radzić. są to m.in.: **przejrzysta struktura promptów**, **ograniczenie długości promptów** (np. rozbicie złożonych zadań na mniejsze), **wsparcie kodem** (szczególnie w obszarach w których skuteczność LLM może nie być wystarczająca), **staranna obsługa błędów** (oraz techniki uwzględniające próby automatycznego ich naprawienia z pomocą LLM), **poszerzanie swojej wiedzy** (często pojawiają się nowe techniki pracy oraz narzędzia), **łamanie schematów** (projektowanie promptów zwykle uwzględnia podążanie za schematami, ale w wielu sytuacjach warto je łamać i szukać rozwiązań, które sprawdzają się nam lepiej)
    

Wymienione punkty stanowią **dopełnienie** wiedzy z pozostałych lekcji AI\_Devs. Pomimo faktu, że są stosunkowo ogólne, powinny zarysować obraz tego, jak wygląda projektowanie aplikacji wykorzystujących Duże Modele Językowe.

## Ogólne rekomendacje związane z pracą LLM w kodzie oraz automatyzacjach

Zbierając w całość wszystkie dotychczasową wiedzę, doświadczenia oraz obserwacje, zebrałem listę rekomendacji, które warto wziąć pod uwagę przy: **rozwijaniu swoich projektów, realizowaniu zleceń dla klientów czy budowaniu produktów i rozwijania ich funkcjonalności.**

1.  **Wiedza**
    
    Poszerzanie wiedzy osób zaangażowanych w projekty wykorzystujące narzędzia AI (nie tylko LLM) stanowi absolutną podstawę. Nie jest to jednak oczywiste, ponieważ mamy do czynienia z nową technologią, która pobudza wyobraźnię i zwraca uwagę wielu ludzi. W rezultacie nawet na blogach produktów oferujących rozwiązania AI zauważam rażące, merytoryczne błędy wynikające, chociażby z powtarzanie niezweryfikowanych informacji. Dlatego najlepszym sposobem zdobywania wiedzy, jest **łączenie jakościowych źródeł z własnym doświadczeniem**. W szybkim eksperymentowaniu pomagają narzędzia no-code, np. [make.com](http://make.com/) (z którego korzystamy) czy [LangFlow](https://github.com/logspace-ai/langflow).
    
    Paradoksalnie wiedza na temat LLM może wprost odwieść nas od pomysłu ich wykorzystania. Każdego tygodnia dostaję zapytania związane z wdrożeniami LLM od różnych firm. W przypadku wielu z nich, AI nie jest potrzebne, lub może być wykorzystane zaledwie jako element wspierający mały fragment procesu, lub być całkowicie przeniesione w inny obszar. Warto więc zadawać sobie pytanie: **Czy na pewno potrzebuję AI w tym projekcie?**
    
2.  **Doświadczenie**
    
    OpenAI otworzyło nowy rozdział technologii i niewykluczone, że zapoczątkowało tym samym kolejną rewolucję przemysłową. Oczywiście jest dość wcześnie, aby to jednoznacznie rozstrzygać, jednak już na tym etapie wszystkie raporty i własne doświadczenia pokazują realne zmiany w wielu obszarach naszej codzienności. Nieustanne eksperymentowanie, budowanie prototypów, kwestionowanie powszechnych wzorców czy szukanie powiązań pomiędzy pozornie niepowiązanymi ze sobą obszarami, sprawdzają się świetnie w jeszcze tak nieodkrytym obszarze, jak Generative AI. Tutaj określenie "Build Fast and Break Things" sprawdza się bardzo dobrze, szczególnie jeżeli weźmiemy pod uwagę do serca sugestie Andreja Karpathy z prezentacji State of GPT, która wyraźnie podkreślała unikanie stosowania LLM dla krytycznych procesów.
    
3.  **Upraszczanie**
    
    Myślenie zasadami pierwszego rzędu (First-principles thinking) i brzytwa Ockhama to modele mentalne sprzyjające innowacji oraz także eksplorowaniu możliwości AI. **Upraszczanie wynikające ze zrozumienia** Dużych Modeli Językowych pozwala na lepszą optymalizację promptów, zwiększanie ich skuteczności oraz redukcję kosztów.
    
    Świetnym przykładem, który często stosuję, jest wykorzystywanie faktu, że model **uzupełnia dotychczasową treść**. Oznacza to, że warto ją pisać w taki sposób, aby rzeczywiście dopełnienie było niemal całkowicie oczywiste. W poniższym prompcie **połączyłem przykłady z instrukcją**, ale dodatkowo zaprezentowałem to, jak model ma się zachowywać w sytuacjach w których najczęściej popełniał błędy.
    
    Konkretnie poniższy prompt ma generować obiekt JSON. Taki prompt, szczególnie w przypadku modelu GPT-3.5-Turbo przestaje działać np. dla zapytań zawierających polecenie, pytanie, czy wyglądających jakby miały zostać dopełnione (np. kończą się dwukropkiem). W tej sytuacji, dla wszystkich podjętych przeze mnie prób, model GPT-3.5-Turbo poprawnie generował odpowiedź (co nie oznacza, że jego skuteczność wynosi 100%). Co więcej, wersja promptu budowana według typowego schematu, była 2-3 razy dłuższa, a jej skuteczność dla tego modelu była niższa.
    
      
    
    ![](https://assets.circle.so/x3m79j555vy5ykdrsuylvyjctp5z)
    
      
    
4.  **Sterowanie zachowaniem**
    
    Domyślnie modele wykazują zachowania trudne do nadpisania. Chociażby w przypadku dłuższych konwersacji wracają do początkowej roli (odwracając uwagę od początkowego polecenia) lub informują o swoich ograniczeniach. Jest to niepożądane zachowanie zarówno w przypadku czatbotów, jak i wykonywania stosunkowo prostych zadań. Z programistycznego punktu widzenia można to kontrolować poprzez, chociażby zmniejszanie długości interakcji (ponieważ zwykle uwaga modelu rozprasza się przy obszernej treści) lub także programistyczne wstrzykiwanie wiadomości systemowej w trakcie konwersacji.
    
    Przykładowo w aplikacji Alice posiadam system snippetów, który modyfikuje zachowanie asystenta w trakcie konwersacji. Zauważyłem, że skuteczność podążania za instrukcjami znacznie rośnie, gdy dodam drugą wiadomość systemową, tuż nad wiadomością której ma dotyczyć dodatkowa instrukcja. Poniższą technikę odkryłem samodzielnie i nie mam żadnych źródeł potwierdzających jej skuteczność, poza własnym doświadczeniem.
    
      
    
    ![](https://assets.circle.so/ylcgz55kuvhnhw84zv7v89ur860o)
    
    (komentarz: powyższa technika nie zadziała w przypadku modeli Anthropic, ponieważ tam wiadomość systemowa jest oddzielną właściwością).
    
5.  **Limity API**
    
    Obecnie w produkcyjnym zastosowaniu OpenAI API, [krytycznym problemem są limity API](https://platform.openai.com/docs/guides/rate-limits/overview) i przed wdrożeniem aplikacji produkcyjnej, należy wypełnić formularz zgłoszeniowy z prośbą o ich zwiększenie.
    
    Poza typowymi dla aplikacji webowych technikami kolejkowania zapytań czy korzystania z pamięci podręcznej (o ile to możliwe), w przypadku zastosowań LLM (konkretnie od OpenAI), do gry wchodzą następujące zagadnienia:
    
    *   Przede wszystkim należy zapoznać się z rozpiską limitów dla tokenów oraz liczby zapytań: [platform.openai.com/account/rate-limits](https://platform.openai.com/account/rate-limits).
        
    *   Pierwszy nasuwający się wniosek (poza zwiększeniem limitów przez OpenAI) dotyczy zastosowania modelu GPT-3.5-Turbo. To wymaga zwiększani precyzji promptów. W tym celu polecam szczególnie zwrócić uwagę na technikę few-shot, ponieważ podanie przykładów świetnie prowadzi wersję 3.5. Poza tym można rozważyć także przeniesienie wiadomości **system** do roli **user**, ponieważ nadal zauważalnie ta wersja modelu lepiej podąża za poleceniami użytkownika. Tutaj trzeba pamiętać, że przeniesienie wiadomości systemowej zwiększa ryzyko przechwycenia promptu, zatem można ją stosować jedynie w sytuacji, gdy mamy kontrolę nad danymi wejściowymi.
        
    *   W przypadku aplikacji działających na dużej skali, należy uwzględnić przełączenie się na Azure OpenAI i/lub skorzystać z fine-tuningu modeli open source w celu wyspecjalizowania ich w konkretnych zadaniach.
        
    
    Z całą pewnością kwestię limitów warto uwzględnić już na wczesnym etapie developmentu, ponieważ proces uzyskania dostępu do np. Azure jest złożony i może długo trwać.
    
6.  **Bezpieczeństwo**
    
    No i ostatnim, aczkolwiek najważniejszym punktem wdrożenia LLM produkcyjnie, jest bezpieczeństwo, zarówno użytkowników, jak i samej aplikacji oraz przetwarzanych danych. Aby jednak móc wprowadzać zabezpieczenia, trzeba wiedzieć, przed czym próbujemy się ochronić. Mówimy więc tutaj m.in. o:
    
    *   Wygenerowaniu zbyt wysokich kosztów poprzez zarówno błędy oprogramowania, błędy użytkowników czy przez bezpośrednie ataki. Tutaj obrona odbywa się niemal w pełni po stronie programistycznej i serwerowej.
        
    *   Niepożądanym zachowaniu modelu, uwzględniającym wprowadzanie w błąd czy prowadzącym rozmowę w tonie niesprzyjającym wizerunkowi firmy
        
    *   Możliwości nadpisania zachowania modelu, w celu realizowania zadań wykraczających poza zakres aplikacji
        
    *   Podejrzenia promptu systemowego, który **pod żadnym pozorem** nie może zawierać informacji, którymi nie możemy się podzielić (tutaj do gry wchodzą także kwestie prywatności i bezpieczeństwa danych)
        
    *   Przesłaniu danych poufnych, które z różnych powodów nie mogą opuszczać serwerów firmowych i nawet polityka OpenAI API jest niewystarczająca. W ogóle przed wdrożeniem i stosowaniem narzędzi AI działających w chmurze należy zaadresować kwestie prawne
        
    *   W skrajnych przypadkach źle zaprojektowanego systemu możemy także mówić o nadpisaniu lub usunięciu danych. Co do zasady wszystkie akcje powinny być potwierdzone. Dodatkowo (już nawet bez względu na obecność LLM) należy zadbać o automatyczne wykonywanie kopii zapasowych oraz łatwego skorzystania z nich w razie potrzeby
        

  

Myślę, że z powyższych punktów naturalnie wynikają różne strategie, które możemy zastosować. Jednak ogólną sugestią jest **ograniczanie dowolności danych wejściowych oraz monitorowanie generowanych przez model odpowiedzi**. Tam, gdzie to możliwe LLM powinien być wspierany kodem, aby adresować swoje ograniczenia (np. związane z obliczeniami).

Ostatecznie warto patrzeć na LLM jako narzędzie stanowiące **element** logiki aplikacji, adresujący problemy, które trudno rozwiązać z pomocą kodu. **GPT-4 to nie tylko czatboty — warto o tym pamiętać.**

* * *

## Zadanie praktyczne

*   Wygeneruj tablicę JSON składającą się z 9 nazw planet układu słonecznego (przyjmij, że Pluton to także planeta). Wszystkie nazwy muszą być **zapisane małymi literami w języku polskim**. Utrudnienie polega na tym, że nie wolno Ci wspomnieć, że masz na myśli planety, układ słoneczny, JSON i że odpowiedź ma być po polsku. Musisz inaczej wytłumaczyć to modelowi. Metoda poznana w tej lekcji może być bardzo przydatna. [https://tasks.aidevs.pl/chat/planets](https://tasks.aidevs.pl/chat/planets)
    
*   Rozwiąż zadanie o nazwie “**people**”. Pobierz, a następnie zoptymalizuj odpowiednio pod swoje potrzeby bazę danych [https://tasks.aidevs.pl/data/people.json](https://tasks.aidevs.pl/data/people.json). Twoim zadaniem jest odpowiedź na pytanie zadane przez system. Uwaga! Pytanie losuje się za każdym razem na nowo, gdy odwołujesz się do **/task**. Spraw, aby Twoje rozwiązanie działało za każdym razem, a także, aby zużywało możliwie mało tokenów. Zastanów się, czy wszystkie operacje muszą być wykonywane przez LLM-a - może warto zachować jakiś balans między światem kodu i AI?
    

## Sprawdź swoją wiedzę

[Rozpocznij Quiz](https://tasks.aidevs.pl/quiz/c03l05_shsa)

* * *

## Podsumowanie Audio