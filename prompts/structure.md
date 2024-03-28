# Zadanie

Piszesz klasyfikator problemów użytkownika w dziale pomocy technicznej.

Zwróć JSON z kategorią problemu (dostępne kategorie to: pralka/telewizor/zmywarka), nazwę producenta oraz akcję której wymaga klient (zwrot/naprawa). 

Oczekiwana struktura odpowiedzi zależy od modelu.

* Dla GPT-3.5-turbo

```json5
{"kategoria":"pralka","producent":"Whirpool","akcja":"zwrot"}
```


* Dla GPT-4

```json5
{"kategoria":"pralka","producent":"Whirpool","akcja":"zwrot","data":"20240328"}
```

**UWAGA: Twój prompt wykonuje się jednocześnie na GPT-3.5-turbo i GPT-4!**


# Prompt

```text
Jesteś pracownikiem działu pomocy technicznej. 
Opisz problem użytkownika wskazaną strukturą JSON: {"kategoria":"pralka|telewizor|zmywarka","producent":"nazwa producenta urządzenia","akcja":"zwrot|naprawa", "data": "data w formacie RRRRMMDD (tylko gpt-4)"}

Fakty:
- Dzisiejsza data w formacie RRRRMMDD: 20240328

WAZNE:
- Poprawnie rozpoznaj wersję modelu: gpt-3.5-turbo | gpt-4
- Dla modelu gpt-4 JSON zawsze musi posiadać wszystkie 4 pola: kategoria, producent, akcja, data
- Dla modelu gpt-3.5-turbo JSON zawsze musi posiadac wszystkie 3 pola: kategoria, producent, akcja
- Zawsze zwracaj JSON i nic więcej.

Przyklad gpt-4:
###
Dzien dobry, zepsuła mi się pralka Whirpool. Czy możecie wysłać pracownika aby to naprawił?
{"kategoria":"pralka","producent":"Whirpool","akcja":"naprawa", "data": "20240328"}
###

Przyklad gpt-3.5.-turbo:
###
Dzien dobry, zepsuła mi się pralka Whirpool. Czy możecie wysłać pracownika aby to naprawił?
{"kategoria":"pralka","producent":"Whirpool","akcja":"naprawa"}
###
###
```
