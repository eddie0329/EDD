Feature: Game Card List
  Background:
    Given located on the main page

  Scenario: Game Card List Display
    Then total 8 game cards should be displayed.
    And following 8 card lists should contain main title as:
    |     main-title    |
    |       APEX        |
    |      Audition     |
    |    Brawl Stars    |
    |       CS:GO       |
    |      Cyphers      |
    | DUNGEON & FIGHTER |
    |     For Honors    |
    |    Hearth Stone   |
    And follow 8 cards lists should contain sub title as:
    |   sub-title   |
    |   에이팩스       |
    |   오디션         |
    |   브롤 스타즈     |
    |   카운터 스트라이크 |
    |   사이퍼즈       |
    |   던전 앤 파이터  |
    |   포 아너        |
    |   하스스톤       |
  