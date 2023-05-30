Feature: Searching for dogs on Google

  Scenario: Simple Google Test
    Given I navigate to Google
    When I search for dogs
    Then I expect to see results for dogs
