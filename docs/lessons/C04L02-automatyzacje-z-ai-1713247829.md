![](https://assets.circle.so/2tfuywiv6d3v4hu0d7l8dffrxief)

» [Lekka wersja przeglądarkowa](https://cloud.overment.com/C04L02-automatyzacje-z-ai-1712830689.html) «

Wersja [YouTube](https://youtu.be/5oldzdd_oy4)

[Link do wspomnianej w filmie pracy związanej z ochroną Defendera.](https://i.blackhat.com/us-18/Thu-August-9/us-18-Parikh-Protecting-the-Protector-Hardening-Machine-Learning-Defenses-Against-Adversarial-Attacks.pdf)

Korzystam z [make.com](http://make.com/) niemal od samego początku jego istnienia (ID konta poniżej 1000) i choć automatyzacja obecna jest w niemal każdym obszarze mojej codzienności. Pojawienie się GPT-3 a chwilę później GPT-4 całkowicie zmieniło zasady gry, ponieważ nie tylko mój kod, ale także scenariusze wyszły poza sztywno definiowane schematy. Nawet tak proste rzeczy, jak system powiadomień dziś wygląda zupełnie inaczej.

## Scenariusze do wielu zadań

Podobnie jak w przypadku kodu, scenariusze automatyzacji warto projektować tak, aby ta sama logika możliwie nie powtarzała się w wielu miejscach. Oczywiście nie chodzi tutaj także o rozbijanie prostych automatyzacji na kilkanaście różnych scenariuszy, ale o zachowanie balansu.

Przykładem może być mój system wgrywania plików na serwer z którego korzystam nawet podczas pisania tych słów. Jednocześnie korzystają z niego także moje automatyzacje.

![](https://assets.circle.so/2b4xtkmkncma8mwf8ulcy7xs67g4)

Z punktu widzenia użytkownika nie widać w tym sensu, ponieważ wszystkie komunikatory, poczta e-mail czy edytory tekstu umożliwiają nam łatwe wgrywanie plików. **Sytuacja zmienia się jednak w momencie, gdy wychodzimy z roli typowego użytkownika i zaczynamy ułatwiać sobie pracę różnymi skryptami i automatyzacjami.** Linki załączników wgrywanych do Airtable szybko wygasają, z kolei załączniki wgrywane do komunikatorów, niemal zawsze wymagają zalogowania, aby móc skorzystać z ich treści.

Sama logika odpowiadająca za wgranie pliku jest niezwykle prosta i uwzględnia jedynie proste zabezpieczenia oraz wygenerowanie unikatowej nazwy pliku. Na potrzeby automatyzacji zależało mi wyłącznie na obsłudze obrazków, dlatego scenariusz uwzględnia także ich optymalizację z pomocą [tinyPNG](https://tinypng.com/).

Wywoływanie scenariusza z poziomu innych scenariuszy jest niezwykle proste, ponieważ wystarczy wykonanie zapytania z pomocą modułu HTTP. **WAŻNE:** warto w tym module zaznaczyć opcję **‌Parse response**, aby natychmiast otrzymać gotowy do wykorzystania obiekt.

![](https://assets.circle.so/qz3xiumhljjki8j2ek1kk9ida4qd)

Nietrudno zauważyć, że powyższy scenariusz ma niewiele wspólnego z AI. Jednak obecna w nim koncepcja jest niezwykle ważna w naszych kolejnych scenariuszach, dotycząca łączenia ze sobą automatyzacji. Co więcej, **warto ten sam schemat wykorzystywać w kodzie**. W API które projektuję na swoje potrzeby, znajdują się przeróżne mniejsze i większe narzędzia, po które sięgam w razie potrzeby.

## Połączenie automatyzacji z AI

Rezultat połączenia **automatyzacji, narzędzi no-code, programowania oraz AI** prezentuje jeden z moich scenariuszy, którego zadaniem jest obsługa mojej listy zadań. Każda z gałęzi odpowiada za jedną z akcji CRUD, czyli: Utwórz zadania, Pobierz listę zadań z wyznaczonego zakresu czasu oraz Zaktualizuj wskazane zadania. Pomijam tutaj usuwanie wpisów, ponieważ wystarcza mi oznaczanie ich jako zakończone i jednocześnie nie chcę także przypadkowo czegoś usunąć (modyfikacja jest w porządku, bo historia zmian się zachowuje, aczkolwiek nie miałem jeszcze powodu, aby z niej korzystać).

![](https://assets.circle.so/0500htm6m6g0vde80w5laf9611nz)

W lekcji **C02L05** również pokazywałem zarówno kod, jak i scenariusz odpowiedzialny za zarządzanie zadaniami. Pokazuję jednak kolejny przykład, ponieważ tutaj mówimy o bardzo wysokiej personalizacji. Zadania zostają przypisywane do konkretnych kategorii, tagów czy projektów. Dodatkowo w ich opisie zapisuję **oryginalne** polecenie, aby upewnić się, że w razie potrzeby będę mieć do niego łatwy dostęp. Mechanika działania tego scenariusza jest niemal taka sama jak w kodzie ze wspomnianej lekcji, dlatego tylko krótko powiem, że:

*   Górny rząd odpowiada za dodawanie zadań. Prompt opisujący zadania uwzględnia krótkie opisy kategorii, aktualną datę (wygenerowaną programistycznie), oraz ogólne zasady dotyczące klasyfikacji i opisywania zadań. Wygenerowana lista jest dodawana do Notion, a dodatkowo główna treść zadania zamieniona jest na [obiekty opisujące bloki](https://developers.notion.com/reference/block), dzięki czemu łatwo mogą być dopisane do treści strony. Kod umożliwiający zamianę zwykłego tekstu na takie bloki pokazywałem już w lekcji
    
    Ze względu na popularność Notion, niewykluczone, że również korzystasz z tej aplikacji. Dlatego przygotowałem zestaw dwóch funkcji Netlify, które można wykorzystać do zamiany tekstu na bloki oraz bloków na tekst. Schemat uruchomienia jest bardzo podobny jak w przypadku funkcji Splitter z poprzednich lekcji. W kodzie znajdziesz dwie funkcje: **notion-to-markdown** i **markdown-to-notion**. Ta pierwsza będzie wymagała podania pageId oraz Twojego klucza API Notion, który możesz wygenerować, tworząc integrację [tutaj](https://www.notion.so/my-integrations). Pamiętaj jednak, że będzie ona powiązana **wyłącznie ze stronami, które wskażesz**.
    
    *   ⚡ [Pobierz Notion Netlify Function](https://cloud.overment.com/aidevs_notion-1696511398.zip)
        
*   Drugi rząd pobiera listę zadań i nie ma w nim nic szczególnego poza faktem, że polecam stosować format dat: MM/DD/YYYY hh:mm. Warto unikać mieszania formatów przy pracy z GPT-4 lub parsować je programistycznie.
    
*   Trzecia oraz czwarta ścieżka odpowiadają za aktualizację zadań i realizuję niemal taką samą logikę polegającą na pobraniu bieżących zadań, oraz decydują o tym, które z nich (i w jaki sposób) mają zostać zaktualizowane.
    
*   No i czwarta ścieżka uruchamiana jest zawsze w celu parafrazy wykonanych akcji.
    

Nie udostępniam schematu tego scenariusza, ponieważ najbardziej istotne jest w nim **dostosowanie do naszego indywidualnego kontekstu** oraz **połączenie programowania, automatyzacji oraz AI**. Podobnie też funkcje Netlify nie muszą dotyczyć Notion, ale dowolnej innej operacji, której z jakiegoś powodu nie opłaca się lub nie warto realizować z pomocą narzędzi no-code. Na tym jednak nie koniec.

## Wykonywanie scenariuszy z pomocą AI

Do tej pory przechodziliśmy przez mechaniki uwzględniające posługiwanie się wyłącznie jednym narzędziem. W praktyce jednak GPT-4 stać na znacznie więcej, ponieważ możemy stosunkowo łatwo wyposażyć model nawet w kilkadziesiąt różnych akcji.

Przynajmniej kilkukrotnie padało już określenie "Agent" w naszych lekcjach, jednak teraz nadszedł moment, aby przyjrzeć się mu bliżej.

W ciągu ostatnich miesięcy pojawiło się kilka projektów, które dążą do budowania aplikacji zdolnych do samodzielnego podejmowania decyzji, planowania i wykonywania złożonych akcji. Przykładem może być [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT), [crewAI](https://www.crewai.com/) [AutoGen](https://github.com/microsoft/autogen). Dodatkowo koncepcja agentów dostępna jest także bezpośrednio w [LangChain](https://js.langchain.com/docs/modules/agents/).

Chociaż koncepcja autonomicznych agentów, potrafiących pracować w zespołach (!) nad skomplikowanymi zadaniami brzmi niezwykle imponująco, to na ten moment nadal jesteśmy jeszcze w fazie eksperymentów z takim podejściem. **Dlatego osobiście nadal zgadzam się z rekomendacją "State of GPT" o tym, że aktualnie GPT-4 sprawdzi się bardziej w roli copilota niż autonomicznego agenta.** Oczywiście możemy to wykorzystać.

Poniższy prompt powstał na przykładzie tego, z którego sam korzystałem. Jego zadaniem jest właśnie **wykrycie intencji** pomiędzy **pytaniem a poleceniem** oraz wybór listy narzędzi, z których należy skorzystać, aby wykonać zadanie.

![](https://assets.circle.so/kudm349lh0ihbzhjqhuh6vqomfiy)

*   🔗 [Zobacz przykład](https://platform.openai.com/playground/p/WinlaN0ZBZf9BdU1FJsTGLko?model=gpt-4)
    

Obecnie do takich promptów wykorzystamy Function Calling i najlepiej JSON Mode. Co więcej, potrzebny nam będzie możliwie najlepszy model (idealnie GPT-4-turbo lub Claude 3 Opus). Pozostałe modele mogą nie poradzić sobie z poprawną klasyfikacją oraz wykrywaniem intencji.

Poza tym zaprojektowanie takich promptów jest szczególnie trudne, ponieważ musimy mieć wobec nich pewne założenia. Przykładowo:

*   Ile jest 23 \* 15 / 9 — to pytanie, jednak związane z obliczeniami. Powinno być zaklasyfikowane jako "akcja" z narzędziem "kalkulator"
    
*   Kim jest John Galt — to pytanie, nie wymagające podejmowania żadnych akcji, powinno więc być zaklasyfikowane jako "query" bez dodatkowych narzędzi
    
*   Sprawdź moją listę zadań — to polecenie, które powinno być zaklasyfikowane jako "akcja" z narzędziem "tasks"
    

Jednak spotkałem się z jednym przykładem wyspecjalizowanego asystenta, który na wiadomość "wypiłem kawę" miał zapisywać tę informację na liście dietetycznej. Mówię o tym, ponieważ **sposób rozpoznawania intencji i doboru narzędzi będzie różnił się w zależności od celu, który chcemy osiągnąć**. Niby jest to oczywiste, ale regularnie spotykam się z problemami osób, które oczekują, że GPT-4 "domyśli się" o co im chodzi. W praktyce musimy **odwzorować nasze założenia w prompcie** lub przygotować zestaw danych i przeprowadzić fine-tuning, który dopasuje model do sposobu klasyfikacji zapytań.

W każdym razie takimi promptami dochodzimy do interesującego punktu, w którym zarówno nasze skrypty, jak i automatyzacje, mogą stać się bezpośrednio **narzędziami, którymi posługuje się model** podczas interakcji. Uproszczony schemat tego, o czym mówimy, wygląda następująco:

![](https://assets.circle.so/qym5n8c1u6clz72d5tbio15zfos6)

Rozszerzamy tym samym temat, który zapoczątkowaliśmy w lekcji **C02L05**. Tym razem wychodzimy jednak poza obsługę jednego narzędzia. Jednocześnie wykorzystujemy tutaj także elementy **autonomicznych agentów**, jednak w tym przypadku, mechanika jest bliższa "copilota" niż "agenta", ponieważ większość kontroli i tak pozostaje w naszych rękach.

W przykładzie [**28\_intent**](https://github.com/i-am-alice/2nd-devs/blob/main/28_intent/28.ts) znajdziesz kod, który jest analogiczny do [**14\_agent**](https://github.com/i-am-alice/2nd-devs/blob/main/14_agent/14.ts), jednak jego specjalizacja polega na wykryciu intencji według zasad wymienionych powyżej. Analogiczny prompt / strukturę możesz rozbudować, czy nawet wykorzystać w automatyzacji [make.com](http://make.com/).

![](https://assets.circle.so/2wldhwo2ibfvlecjcwta90ucckbg)

Cel rozpoznawania intencji może być inny niż odróżnianie zwykłej wiadomości na którą model ma odpowiedzieć bezpośrednio, od akcji, którą ma wykonać. Poprzednie przykłady pokazały nam, że możemy w ten sposób decydować o sposobie interakcji z API, korzystaniem ze wskazanych funkcji, czy wybranych obszarów pamięci. Inaczej mówiąc, **jest to element logiki aplikacji, decydujący o dalszych krokach**. Warto o tym pomyśleć i zastanowić się **w jaki sposób można wykorzystywać takie mechaniki do tworzenia copilotów lub elementów logiki aplikacji oraz automatyzacji**.

## Połączenie z OpenAI i Pinecone w [make.com](http://make.com/)

Myślę, że jesteśmy gotowi na to, aby wykorzystać nieco więcej mechanik no-code w celu zbudowania prostego (bardzo proste) mechanizmu odpowiadającego na nasze pytania, na podstawie bazy wiedzy. Pominiemy tutaj wszelkie techniki produkcyjne i skupimy się wyłącznie na fundamentach mechaniki systemu RAG.

Przede wszystkim w naszej bazie Airtable dodałem kilka kolumn związanych z synchronizacją rekordów. Jedną z nich jest checkbox (działający z widokami analogicznie jak ten, który budowaliśmy ostatnio) oraz przycisk, którego zadaniem będzie **otworzenie w przeglądarce adresu webhooka** do którego dołączony będzie **identyfikator bieżącego rekordu**. Pozwoli nam to wywołać scenariusz odpowiadający za zapamiętywanie informacji lub mówiąc wprost — za synchronizowanie rekordów z bazą wektorową.

Zasada więc jest następująca: rekordy, które trafiają do tej tabeli, mogą zostać opisane, a następnie zsynchronizowane z bazą wektorową. Podobnie też to z tej bazy będą pobierane treści rekordów na potrzeby dynamicznego kontekstu.

![](https://assets.circle.so/n1fn0vl4ibbfs10h3ha20meybel5)

Scenariusz realizuje dwie ścieżki. Pierwsza z nich uruchamiana jest z pomocą przycisku w bazie Airtable (ale możemy ją także wywoływać z poziomu innych automatyzacji czy skryptów). Z kolei druga ścieżka odpowiada za wyszukiwanie w bazie wektorowej, gromadzenie treści wpisów oraz generowanie odpowiedzi.

Przy konfiguracji scenariusza należy utworzyć Data Structure w modułach o nazwie "Embedding JSON", na podstawie takiego obiektu: **{"input":"where does Adam live?","model":"text-embedding-3-large"}**. Z kolei w module "Answer JSON" strukturę można utworzyć na podstawie np. **‌{"data": "..."}**.

![](https://assets.circle.so/r8brrf1hoir9qcz9y1rg7f56wgke)

*   ⚡ [Pobierz blueprint scenariusza](https://cloud.overment.com/aidevs_chatbot-1696525639.json)
    

Powyższy scenariusz możemy uruchomić np. z pomocą polecenia CURL: **curl -X POST -H "Content-Type: application/json" -d '{"query":"Who is Adam?"}'** [**https://hook.eu1.make.com/WEBHOOK\_ID**](https://hook.eu1.make.com/WEBHOOK_ID**). Jak widać poniżej, faktycznie powiązane z zapytaniem dane zostały znalezione, dołączone do kontekstu i wykorzystane do wygenerowania odpowiedzi.

![](https://assets.circle.so/20voc3ovf5tshgfalkh0tklo43mg)

Wyraźnie teraz widać, jak w praktyce wygląda połączenie bazy SQL/noSQL z bazą wektorową. Gdy przeanalizujesz schemat automatyzacji, zobaczysz, że identyfikatory Airtable są wykorzystywane także w Pinecone. Dzięki temu możemy łatwo kojarzyć ze sobą wpisy i wykonywać proste wyszukiwanie typu "Similarity Search" o którym już mówiliśmy.

Najbardziej istotny wniosek z tej lekcji dotyczy **łączenia ze sobą koncepcji**, które omawialiśmy do tej pory. Celowo poruszam się jednak po stosunkowo prostych, izolowanych przykładach, ponieważ kluczowe jest zrozumienie elementów na pograniczu programowania, automatyzacji i AI, które będziemy mogli wykorzystywać w praktycznie dowolnych konfiguracjach.

Aby to zobrazować, podam kilka przykładów:

*   Scenariusz czatbota może być rozbudowany o rozpoznawanie intencji
    
*   Możemy wyposażyć go w narzędzia, które również samodzielnie będzie wybierać
    
*   Narzędzia mogą być zewnętrznymi skryptami lub scenariuszami automatyzacji
    
*   Czatbot może być w pełni zbudowany w kodzie i działać na serwerze jako API
    
*   Zapytania do czatbota mogą być kierowane nie tylko bezpośrednio przez Ciebie, ale także przez inne scenariusze automatyzacji, działające w tle
    
*   Z pomocą no-code (ale i nie tylko) możesz zbudować integracje z komunikatorami (np. Slack) i podłączyć do własnej wiedzy
    
*   Czatbot może także odwoływać się sam do siebie (i np. zapamiętywać wskazane informacje)
    
*   Odpowiedzi czatbota mogą być czytane przez np. ElevenLabs
    

Na tym etapie powinno być już jasne to, jak elastyczne narzędzie mamy w swoich rękach. Jednak jego prawdziwa użyteczność leży w problemie, który będzie rozwiązywać. Jak widać, nie sztuką jest zbudować prostego czatbota. Jednak nieoczywiste jest budowanie narzędzi na których można polegać i które faktycznie będą pomagać nam w pracy. Dlatego warto rozejrzeć się wokół siebie i spojrzeć na usługi, narzędzia, aplikacje i urządzenia z których korzystamy oraz zadać sobie pytanie: jakie z aktywności mogą zostać **wspierane** przez AI?

* * *

## Zadanie praktyczne

Rozwiąż zadanie API o nazwie ‘**tools**’. Celem zadania jest zdecydowanie, czy podane przez API zadanie powinno zostać dodane do listy zadań (ToDo), czy do kalendarza (jeśli ma ustaloną datę). Oba narzędzia mają lekko różniące się od siebie definicje struktury JSON-a (różnią się jednym polem). Spraw, aby Twoja aplikacja działała poprawnie na każdym zestawie danych testowych.

* * *

## Sprawdź swoją wiedzę

[Rozpocznij Quiz](https://tasks.aidevs.pl/quiz/c04l02_frgo)

* * *

## Podsumowanie Audio