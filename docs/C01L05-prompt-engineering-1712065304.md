W lekcji **C01L03** poznaliśmy różne techniki projektowania promptów oraz związane z tym zasady. Można to określić jako "Prompt Design". Teraz wykorzystamy wiedzę na ten temat **w połączeniu z programowaniem/automatyzacją**, czyli realnie wchodzimy w obszar "Prompt Engineering".

## Projektowanie logiki aplikacji integrującej LLM

Myślę, że widzisz już, że integrowanie kodu z dużymi modelami językowymi nie sprowadza się do prostych zapytań API. Na obecnym etapie rozwoju technologii i powiązanych z nią narzędzi, **nie powinniśmy stosować jej w krytycznych obszarach aplikacji**.

Dlatego niekoniecznie najlepszym pomysłem jest ich stosowanie przy systemach, które:

*   Przyjmują niezweryfikowane dane wejściowe
    
*   Generują treści bez nadzoru człowieka
    
*   Realizują złożone zadania bez dodatkowej weryfikacji
    
*   Obejmują krytyczne procesy lub ich elementy
    
*   Wymagają precyzji oraz wysokiej wydajności
    
*   Nie uzasadniają kosztów związanych ze stworzeniem i rozwojem integracji z LLM
    

To jednak nie oznacza, że integracja z LLM nie może **wspierać, optymalizować, czy rozszerzać** wybranych obszarów. Na przykład, zastosowanie GPT-4 w procesach korekty treści jest wysoce zalecane, pod warunkiem że finalnej weryfikacji dokonuje człowiek. Z własnego doświadczenia wiem, że **drastycznie skraca to czas wykonania takiego zadania** i nawet **zwiększa jego ogólną jakość**, ponieważ GPT-4 jest w stanie bardzo precyzyjnie wyłapywać błędy.

Posługując się przykładami z lekcji **C01L02**, mam na myśli to, że AI jest w stanie realizować nawet bardzo żmudne, czasochłonne zadania z taką skutecznością:

![](https://assets.circle.so/sdong9803tsw5ff2y8r071qtsyky)

W przypadku człowieka, do gry wchodzą takie czynniki jak utrzymanie uwagi, zmęczenie czy różne cechy charakteru. Pomimo tego, że **ogólna skuteczność** będzie znacznie wyższa, pojawią się odchylenia i zwykłe pomyłki.

![](https://assets.circle.so/8tgfaf80bvjsxnr6lvttfgcp6whx)

Należy tu jednak pamiętać o jeszcze jednej, kluczowej zmiennej — **czasie realizacji**. Na moim przykładzie, **przetłumaczenie treści AI Devs #2 zajęłoby mi kilka tygodni. GPT-4 zrobiłby to w ciągu 1-2 godzin.** Zweryfikowanie jego tłumaczenia to dla mnie dodatkowe 2-3 dni pracy. Ze względu na ogromną skuteczność AI w takich zadaniach, poprawki zwykle obejmują pojedyncze wyrażenia.

Połączenie LLM z logiką aplikacji jest do pewnego stopnia analogiczne. Różnica polega jednak na tym, że **kod jest w stanie precyzyjnie realizować zadanie według opisanych założeń**. Model nie potrafi tego zrobić tak dokładnie, ponieważ **opiera się na prawdopodobieństwie i** [**przewidywaniu**](https://youtu.be/SjhIlw3Iffs?t=524). Przewaga modelu zaczyna być widoczna dla zadań, **których sposobu realizacji nie potrafimy precyzyjnie opisać**.

Gdy się nad tym przez moment zastanowisz, zauważysz, że **integracja aplikacji z LLM wymaga zdefiniowania oraz odróżnienia obszarów, które mogą być wykonane programistycznie, a które wymagają zaangażowania modelu**. Ten podział **nie jest jednoznaczny** i interakcja pomiędzy logiką opisaną kodem a AI może pojawiać się punktowo w trakcie realizowania danego zadania.

Załóżmy, że mamy zadanie polegające na **przeliczaniu dat** i chcielibyśmy otrzymać **konkretną datę** dla wyrażenia "ostatni piątek miesiąca w formacie YYYY/MM/DD". Prompt realizujący takie zadanie może przydać się na potrzeby **dodawania zadań, wydarzeń w kalendarzu, czy zarządzania systemami CRM**. Jeśli jednak zdarzyło ci się realizować takie zadania nawet z GPT-4, to wiesz, że nie radzi sobie z nim najlepiej (aczkolwiek ostatnie aktualizacje wprowadziły tutaj sporo pozytywnych zmian).

Dla wyrażeń typu "jutro", "piątek" czy "za tydzień w środę", GPT-4 powinien wygenerować poprawne daty. Jednak "za dwa tygodnie we wtorek" może czasem stanowić wyzwanie, **ponieważ w przypadku poniższego promptu, poprawna odpowiedź to 26 września** (zrzut ekranu był wykonany kilka miesięcy temu).

![](https://assets.circle.so/igdt5m5p39euzm3jqonm7ev7on6y)

W repozytorium [Prompt Engineering Guide](https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main) znajduje się przykład adresujący taki problem, który przetłumaczyłem na język JavaScript. Mowa konkretnie o technice [PAL (Program-Aided Language Models)](https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/guides/prompts-applications.md), polegającej na **generowaniu przez model odpowiedzi będącej kodem JavaScript, w którym rozumowanie modelu zapisane jest w postaci komentarzy**.

![](https://assets.circle.so/te5fvncoqavkbn6mvh04b25fypze)

Przetestowałem działanie powyższego promptu ([06\_external](https://github.com/i-am-alice/2nd-devs/tree/main/06_external)) dla różnych scenariuszy, które przyszły mi do głowy, łącznie z tymi, uwzględniającymi różnicę na poziomie kilkunastu miesięcy. **Wynik był poprawny za każdym razem** (co nie oznacza, że mamy tutaj 100% pewności).

I teraz — czy oddałbym kod korzystający z funkcji eval() w ręce użytkowników? Oczywiście, że nie. Czy zrealizowałbym nim wyizolowane zadania, w przypadku których mam kontrolę nad danymi wejściowymi? Być może.

Dla swoich potrzeb związanych z realizacją zadań **obliczeniowych** czy innych podobnych aktywności, do których GPT-4 nie został stworzony, korzystam z bezpłatnej wersji WolframAlpha ([Conversational API](https://products.wolframalpha.com/conversational-api/documentation)). WolframAlpha to model **wyspecjalizowany** w obszarach **nauk ścisłych**, dysponujący aktualnymi danymi geograficznymi, finansowymi, a nawet z branży rozrywkowej. O integracji go z GPT-4 porozmawiamy w późniejszych lekcjach. Na razie zapamiętaj, że **zazwyczaj istnieje więcej niż jeden sposób na pokonanie ograniczeń Dużych Modeli Językowych**.

Podsumowując, integracja Dużych Modeli Językowych z kodem aplikacji wymaga **wiedzy na ich temat**, **zdefiniowania zakresu samej aplikacji**, **wskazania obszarów, w których LLM może się sprawdzić**, **adresowania ograniczeń modeli**, **zgromadzenia i przetworzenia danych dla modelu**, **precyzyjnych promptów** oraz wszystkich omówionych do tej pory zagadnień związanych z bezpieczeństwem i stabilnością systemu.

## Przygotowywanie zestawów danych

Łatwo można spotkać się z opinią, że praca z LLM to w 80% praca nad zestawami danych, ich organizacją, przetwarzaniem, wzbogacaniem i wyszukiwaniem. **Niemal wszystkie moje dotychczasowe doświadczenia to potwierdzają.**

**Organizacja danych**

Praktycznie w każdym przypadku, potrzebne nam dane są **rozproszone** i zazwyczaj przechowywane są w różnych formatach (.html, .pdf, .docx, .xlsx) lub bazach danych (np. PostgreSQL). Pierwsze zadanie przy wdrażaniu LLM zazwyczaj polega na **zbudowaniu jednego źródła prawdy** lub **stworzeniu mechanizmów umożliwiających bezpośredni dostęp do danych**, zwykle w formie tekstowej.

Jednak samo zebranie danych w jednym miejscu nie wystarczy, ze względu na limity kontekstu modeli oraz fakt, że zazwyczaj chcemy pracować na możliwie małej ilości danych, aby obniżyć koszty związane z przetwarzaniem tokenów. Aby to było możliwe, do gry wchodzą następujące aktywności:

*   Organizacja danych według kategorii (nierzadko wielokrotnie zagnieżdżonych, wykorzystujących struktury drzewiaste)
    
*   **Podział** treści na mniejsze fragmenty, opisane metadanymi
    
*   Wygenerowanie **podsumowań** dla posiadanych dokumentów
    
*   **Wzbogacenie** danych za pomocą LLM i zewnętrznych źródeł (np. wyszukiwania w Internecie)
    
*   Opisanie danych za pomocą **metadanych** uwzględniających cechy pomocne przy **filtrowaniu**, **przeszukiwaniu** oraz **odzyskiwaniu (np. łączeniu fragmentów wcześniej podzielonych dokumentów)**.
    
*   Zapewnienie mechanizmów pozwalających na **stały dostęp do aktualnych danych** bez konieczności aktualizowania całej bazy, a jedynie jej fragmentów. Mowa, chociażby o możliwości zidentyfikowania treści dokumentu poprzez metadane identyfikujące ich pochodzenie.
    

Każda z tych aktywności może się różnić zarówno pod względem samych danych, zależności pomiędzy nimi, jak i celu, który chcemy osiągnąć. Co ciekawe, część z tych aktywności może angażować LLM (np. w związku z tagowaniem czy wzbogacaniem). Na koniec dnia, mówimy tutaj o **łatwym dostępie do aktualnych wersji informacji, z którymi pracujemy**.

**Dostosowanie danych**

Pomimo tego, że LLM z założenia są w stanie pracować z naturalnym językiem, a nawet nieustrukturyzowanymi danymi, to szybko przekonasz się, że **dane, z którymi pracuje model, zwykle będą różnić się od tych, z którymi pracuje człowiek**. Konkretnie mam na myśli ich formę, sposób prezentacji, oraz sposób wykorzystania.

Dobrym przykładem jest następujący fragment:

> Zostało mi jeszcze 37 minut wykupionych w danym miesiącu. Oczywiście, jeśli nie wykorzystam wszystkich, one się wyzerują. Właśnie jest 13 maja. No i cóż, wygląda na to, że jeszcze mogę sobie tutaj sporo porobić, tym bardziej, że do końca miesiąca jeszcze trochę zostało. W moim przypadku, w momencie nagrywania tego materiału, zostało jeszcze 5 dni.

Wyrwana z kontekstu, nie ma najmniejszego sensu nawet dla człowieka, prawda? **Tak właśnie model ją widzi.** Zobacz jednak, jak wygląda wersja, którą możemy uznać za użyteczną z punktu widzenia LLM.

> The following is a fragment of a transcription from the "Midjourney v5" workshop: Zostało mi jeszcze 37 minut wykupionych w danym miesiącu. Oczywiście jeśli nie wykorzystam wszystkich, one się wyzeruje. Właśnie 13 13. Maja. No i cóż, wygląda na to, że jeszcze mogę sobie tutaj sporo porobić, tym bardziej, że do końca miesiąca zostało. W moim przypadku jeszcze w momencie nagrywania tego materiału zostało jeszcze 5 dni.

Samo nadanie kontekstu bardzo mocno zmieniło treść zarówno z punktu widzenia człowieka, jak i modelu. Teraz nie ma problemu z tym, aby GPT-4 było w stanie wykorzystywać ten fragment w swoich wypowiedziach. Jest to jedna ze wspomnianych różnic pomiędzy danymi dla człowieka a danymi dla modelu. Człowiek, oglądając kurs i słuchając jego treści, posiada informację o kontekście, w którym się znajduje. Modelowi trzeba go dostarczyć.

Pomimo tego, że powyższy fragment może być już użyty, to nierzadko dobrym pomysłem jest jego **transformacja**. Jego oryginalna forma to ~202 tokeny (z powyższym kontekstem). Natomiast po przetworzeniu to już zaledwie ~84 tokeny. Z punktu widzenia pojedynczego zapytania, **nie ma to żadnego znaczenia**. Jednak z punktu widzenia systemu, który pracuje produkcyjnie, **jest to przepaść**.

![](https://assets.circle.so/7q9z6e6y8x1bygil9815o37nh13i)

  
Oczywiście powyższy prompt to tylko przykład, stworzony na potrzeby tej chwili, jednak **oddaje realne transformacje**, których dokonywałem na potrzeby swoich projektów. Problem w tym, że nie zawsze będziemy mieli możliwość przetworzenia w ten sposób naszej bazy danych, chociażby ze względu na ewentualną konieczność jej regularnej aktualizacji. Wyraźnie podkreśla to, że **należy dobrać strategię do rozwiązywanego projektu** i (przynajmniej obecnie) nie ma jednoznacznych odpowiedzi na niektóre pytania.

Myślę jednak, że wiesz już, co mam na myśli, mówiąc o różnicy pomiędzy treściami, na których pracuje człowiek, a tymi, na których pracują LLM.

## Techniki sterowania zachowaniem modelu

Zachowanie modelu w dużym stopniu można kontrolować za pomocą promptów. Zdarzają się jednak zadania, w których będziemy oczekiwali **konkretnego formatu**, **dopasowania do naszych reguł** czy **automatycznej weryfikacji**. Tym bardziej że niejednokrotnie rezultat zwrócony przez model będzie przetwarzany przez kod oczekujący precyzyjnych danych.

**Stosunek długości wypowiedzi Człowiek — AI**

Ograniczenie długości odpowiedzi generowanych przez model jest istotne z punktu widzenia **czasu**, **kosztów** oraz **kontroli**. Zwykle stosunek długości treści w konwersacji z modelem wynosi 95/5 dla modelu. Inaczej mówiąc, człowiek zadaje krótkie pytania, a model obszerne, szczegółowe odpowiedzi.

Wiesz już, że API OpenAI jest bezstanowe i w trakcie konwersacji przesyłana jest cała treść dotychczasowej rozmowy. Oznacza to, że większy wpływ na jej przebieg ma model, a nie człowiek. Jeśli jednak zmienisz stosunek długości swoich wypowiedzi do długości samego kontekstu, **naturalnie zwiększysz kontrolę** nad jego zachowaniem.

Wiesz także, że techniki takie jak Chain of Thoughts czy Tree of Thoughts są dowodem na to, że **jakościowe prowadzenie konwersacji znacząco zwiększa skuteczność modelu**. Z kolei dostarczanie **istotnych dla konwersacji informacji zmniejsza ryzyko wystąpienia halucynacji**. Oznacza to mniej więcej tyle, że nie zawsze będzie Ci zależało na tym, aby interakcje z modelem były jak najkrótsze, ale raczej, aby były **możliwie najbardziej jakościowe**.

Korzystając z interfejsów takich jak ChatGPT, mamy bardzo ograniczoną kontrolę nad tym, co już zostało powiedziane. Od strony programistycznej, zasady gry stają się zupełnie inne. Po pierwsze, możesz **dostosować prompt systemowy oraz manipulować jego treścią w trakcie konwersacji**. Po drugie, możesz kontrolować **samą konwersację** poprzez stosowanie kompresji (podsumowań), realizowanych na Twoich zasadach.

Patrząc na to wszystko, dochodzimy do prostego wniosku, że **zwiększenie kontroli nad zachowaniem modelu** wymaga... po prostu przejęcia nad nim kontroli! I aby nie brzmiało to zbyt oczywiste, konkretnie mam tutaj na myśli:

*   Budowanie dynamicznego kontekstu **istotnego dla całej konwersacji, a nie tylko bieżącego zapytania do modelu**.
    
*   **Ograniczanie instrukcją** zachowań modelu, które nie są pożądane, np. wyjaśnianie podstawowych zagadnień, czy budowanie obszernych opisów zrealizowanego zadania. Zatem mówimy nie tylko o frazach "odpowiadaj zwięźle", ale także "pomiń wyjaśnienia" czy "zwróć i nic więcej".
    
*   **Zastosowanie kompresji** polegającej na podsumowaniu lub wprost ucinaniu wcześniejszych interakcji czy po prostu rozbijanie realizowanego zadania na mniejsze pojedyncze zapytania do modelu.
    
*   **Manipulowanie przebiegiem interakcji** poprzez dodawanie wiadomości systemowych lub poprzez modyfikowanie wypowiedzi modelu. Przykładowo w Alice, chcąc zmienić jej zachowanie w trakcie konwersacji, dodaję dodatkowy, systemowy prompt nad najnowszą wiadomością użytkownika.
    
*   **Wzbogacanie danych wejściowych** poprzez dodawanie słów kluczowych czy wprost przeciwnie, usuwanie zbędnego szumu z wyrażeń, które mogą mieć negatywny wpływ na wydajność modelu. Przykładowo warto rozważyć stosowanie wyrażeń regularnych w celu **usuwania linków z promptu**, które nierzadko zawierają długie parametry znacząco zwiększające liczbę tokenów.
    
*   **Weryfikowanie odpowiedzi** poprzez programistyczne parsowanie lub zastosowanie promptów weryfikujących. Takie prompty mogą korzystać z zewnętrznych danych (np. z Internetu) aby nawet **wykrywać halucynacje**.
    

  

**Guardrails**

Wspomniałem już o koncepcji "guardrails", dążącej do sterowania i korygowania interakcji z modelem. Z technicznego punktu widzenia, jest to pewien rodzaj **warstwy** pomiędzy modelem a światem zewnętrznym, zbudowanej z mechanizmów w postaci **wyspecjalizowanych promptów** czy **funkcji pomocniczych**. Można też o tym myśleć jako o **zautomatyzowanych narzędziach kontrolujących zachowanie modelu**.

Guardrails obecne są zarówno w LangChain (np. w LLMChain czy narzędziach parsowania odpowiedzi). Powstają także zewnętrzne toolkity (głównie w ekosystemie Python), oferujące szereg gotowych narzędzi, które możemy w całości lub częściowo stosować. Obecnie ze względu na ich wczesny etap rozwoju, bardziej rozsądne wydaje się **podglądanie koncepcji** (np. [tutaj](https://github.com/NVIDIA/NeMo-Guardrails/tree/main/examples)) i implementowanie własnych wersji. Uzasadnieniem jest tutaj **elastyczność** wynikająca ze swobodnego wprowadzania zmian, ponieważ w przypadku wspomnianego LLMChain, nie jest to takie oczywiste.

Weźmy prosty przykład zastosowania Guardrails w celu ochrony przed atakiem mającym na celu wydobycie sekretnego hasła. W tym przypadku atak polega na **prostym kontynuowaniu / uzupełnieniu promptu poprzez zasugerowanie przetłumaczenia na język angielski**. W związku z tym, że nie podaliśmy żadnego tekstu, model uznaje, że chodzi nam o anglojęzyczną wersję tego, co znajduje się "wyżej" (mówiliśmy już, że model pracuje na połączonej treści system/user/assistant).

![](https://assets.circle.so/sxmyp50o3uth2tuds192ri3a01r2)

Ochrona przed takim atakiem za pomocą samego promptu jest niezwykle trudna, ponieważ nie możemy powiedzieć, że "tłumaczenia są zakazane", bo zablokujemy w ten sposób pożądane umiejętności chatbota. Poza tym można dość łatwo nadpisać takie zachowanie, na przykład, poprzez odwrócenie uwagi modelu za pomocą rozbudowanego opisu tego, czego potrzebujemy.

W poniższym przykładzie ([07\_output](https://github.com/i-am-alice/2nd-devs/tree/main/07_output)) zastosowałem dodatkowy prompt, którego zadaniem jest porównanie **instrukcji systemowej** z **wygenerowaną odpowiedzią**, aby zweryfikować, czy **prompt został ujawniony**. Jeśli tak się dzieje, guard zwraca 1, a dalsze wykonanie promptu nie ma miejsca ze względu na **programistyczne zabezpieczenie**.

![](https://assets.circle.so/c37bxu28wceho0ca5y45dctkcf68)

Taka technika nie sprawdzi się jednak w przypadku streamingu. Co więcej, stosowanie dodatkowych promptów generuje koszty oraz wydłuża czas potrzebny na wygenerowanie odpowiedzi. Niestety, sprawdzenie programistycznie, czy nasz prompt został ujawniony, także **nie wchodzi w grę**, ponieważ zwykłe zastosowanie tłumaczenia sprawi, że ktoś będzie mógł go odczytać w innym języku. W tej chwili myślę, że zrozumiała jest dla Ciebie koncepcja guardrails oraz jej praktyczne zastosowanie.

## Praktyczne zastosowanie technik projektowania promptów

W lekcji **C01L03** wskazałem popularne techniki promptów oraz źródła, w których możesz znaleźć ich więcej. Miej jednak na uwadze, że nieustannie powstają sposoby interakcji z modelami, jak chociażby ostatnia publikacja "[Large Language Models are Optimizers](https://arxiv.org/abs/2309.03409)", mówiąca o możliwości wykorzystywania LLM do optymalizacji swoich własnych zachowań.

Z programistycznego (lub no-code) punktu widzenia, generowanie odpowiedzi na podstawie **procesu realizowanego przez kilka zapytań** może odbywać się automatycznie, a użytkownicy takiego systemu, mogą widzieć jedynie ostateczną odpowiedź.

Poniżej znajduje się przykład kodu ([**08\_cot**](https://github.com/i-am-alice/2nd-devs/tree/main/08_cot)) prezentującego **natychmiastowe zwrócenie odpowiedzi przez model** (zero-shot) oraz **staranne wyjaśnienie swojego rozumowania (zero-shot chain of thought)**. W tym drugim przypadku **model miał więcej czasu do "namysłu"**, po którym miał **dołączyć separator, a następnie podać wynik w formie liczby**. Dzięki unikatowemu separatorowi mogłem programistycznie pobrać rezultat i wykorzystać go w dalszym fragmencie aplikacji.

![](https://assets.circle.so/doc2kx9qn9sozfjuajx0q5hmn44i)

Na kilkanaście prób, **zero-shot CoT** **generował poprawny wynik za każdym razem** (model GPT-4), podczas gdy zero-shot **mylił się za każdym razem!** Analogicznie, możesz tutaj skorzystać z Chain of Thought, Tree of Thought, czy Reflexion. Oczywiście, Duże Modele Językowe nie są przeznaczone do dokonywania obliczeń, jednak mówimy tutaj o ogólnym zwiększeniu zdolności do logicznego myślenia i starannym generowaniu odpowiedzi.

Tutaj widać, że uzasadnione staje się zastosowanie guardrails, dzięki którym mógłbym się upewnić, że faktycznie otrzymam oczekiwaną przeze mnie odpowiedź w postaci liczby. Nie będziemy tego teraz robić, ale zwracam uwagę na to, **w jaki sposób te wszystkie koncepcje się ze sobą łączą.**

## Testowanie promptów i monitorowanie aplikacji

Pracując z promptami, które są elementami aplikacji, poważnym wyzwaniem jest **utrzymanie ich w możliwie stabilnym stanie**. Tym bardziej, że jak świetnie [obrazuje ten artykuł](https://www.jonstokes.com/p/chatgpt-explained-a-guide-for-normies), wprowadzenie nawet najmniejszych zmian w strukturze promptu, może znacząco zaburzyć jego działanie.

Warto więc zadbać o automatyczne testy, które weryfikują działanie promptów wykorzystywanych w aplikacji. Do prywatnych zastosowań nie jest to krytyczne, jednak trudno sobie wyobrazić stabilną, produkcyjną aplikację, która tego nie uwzględnia. Obecnie na rynku jest kilka wyróżniających się narzędzi, które warto brać pod uwagę. [Eval](https://github.com/openai/evals) jest projektowany bezpośrednio przez OpenAI, aczkolwiek jest jeszcze na dość wczesnym etapie rozwoju. [Promptfoo](https://github.com/promptfoo/promptfoo) jest niezwykle proste w konfiguracji i użyciu, ponieważ opiera się o opisanie naszych testów w pliku .yaml.

![](https://assets.circle.so/t5y7hw6ornrnmeaklxkpt55yh9wt)

  
Sposoby testowania promptu uwzględniają:

*   Dosłowne dopasowanie odpowiedzi do oczekiwanego rezultatu
    
*   Obecność (lub jej brak) słów kluczowych w odpowiedzi
    
*   Dopasowanie do wyrażenia regularnego
    
*   Wskaźnik podobieństwa określany na podstawie embeddingu
    
*   Weryfikację poprzez kod JavaScript / Python
    
*   Zweryfikowanie zachowania promptu zawierającego dynamiczne fragmenty / zmienne
    

Obecnie jednak znacznie wygodniejszym rozwiązaniem produkcyjnym jest [LangSmith](https://smith.langchain.com/), którego rola nie sprowadza się wyłącznie do testowania promptów, ale **automatycznego monitorowania całej aplikacji pod kątem interakcji z dużymi modelami językowymi**. Aby z niego skorzystać, konieczne jest wykorzystanie frameworka LangChain oraz podłączenie zmiennych środowiskowych, według instrukcji dostępnej podczas tworzenia projektu.

![](https://assets.circle.so/hvx8qlgqnhvrz2oc9kkqigi99f4a)

Dzięki LangSmith możesz mieć swobodny wgląd w wykonane prompty, uwzględniając możliwość łatwego wprowadzania zmian w celu debugowania za pomocą interfejsu przypominającego Playground OpenAI. Możliwe jest także testowanie promptów poprzez wykonanie ich (Python) na dostarczonych zestawach danych oraz ewaluację wyników.

![](https://assets.circle.so/uhs47fb2uxncq4h95w6awq8ue1w6)

Warto pamiętać, że monitorowanie zachowania LLM w aplikacji nie sprowadza się jedynie do treści promptów, ale także do obserwacji przepływu danych w kodzie. Tutaj do gry wchodzą już klasyczne narzędzia do monitorowania (np. Winston). W kontekście LLM należy jednak rozważyć **powiązanie zapytań z konkretnym użytkownikiem**. Przykładowo, w Asystencie na [eduweb.pl](http://eduweb.pl/) zapisuję wszystkie zapytania użytkowników, wiążąc je z **unikatowymi identyfikatorami**, które pozwalają mi dotrzeć do konkretnych osób na wypadek nadużyć. Automatyczne flagowanie potencjalnych niepożądanych zachowań dzięki Guardrails także pomaga w utrzymaniu stabilności "na produkcji".

* * *

## Zadanie praktyczne

1.  **Level Easy**: Korzystając z ataku Prompt Injection, wydobądź z prompta sekretne słowo. [https://tasks.aidevs.pl/chat/injection](https://tasks.aidevs.pl/chat/injection)
    
2.  **Level Medium**: rozwiąż zmodyfikowaną wersję pierwszego zadania pracującą na modelu GPT-4. Cel zadania pozostaje bez zmian - wypisz na ekran sekretne słowo. [https://tasks.aidevs.pl/chat/injection2](https://tasks.aidevs.pl/chat/injection2)
    
3.  **Level Hard**: Jeśli jeszcze nie miałeś okazji zagrać w naszą grę ”Risky AI Game”, to możesz zrobić to teraz. Celem gry jest wydobycie z prompta sekretnego słowa poprzez podstawienie do systemu odpowiednio spreparowanej strony WWW zawierającej atak typu prompt injection. [https://game.aidevs.pl](https://game.aidevs.pl/) \[**to zadanie z gwiazdką - nie jest liczone do statystyk**\]
    
4.  **API**: wykonaj zadanie o nazwie **liar**. Jest to mechanizm, który mówi nie na temat w 1/3 przypadków. Twoje zadanie polega na tym, aby do endpointa **/task/** wysłać swoje pytanie w języku angielskim (dowolne, np “What is capital of Poland?’) w polu o nazwie ‘question’ (metoda POST, jako zwykłe pole formularza, **NIE JSON**). System API odpowie na to pytanie (w polu ‘answer’) lub zacznie opowiadać o czymś zupełnie innym, zmieniając temat. Twoim zadaniem jest napisanie systemu filtrującego (Guardrails), który określi (YES/NO), czy odpowiedź jest na temat. Następnie swój werdykt zwróć do systemu sprawdzającego jako pojedyncze słowo YES/NO. Jeśli pobierzesz treść zadania przez API bez wysyłania żadnych dodatkowych parametrów, otrzymasz komplet podpowiedzi. Skąd wiedzieć, czy odpowiedź jest ‘na temat’? Jeśli Twoje pytanie dotyczyło stolicy Polski, a w odpowiedzi otrzymasz spis zabytków w Rzymie, to odpowiedź, którą należy wysłać do API to **NO**.