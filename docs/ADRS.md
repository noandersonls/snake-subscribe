# ADRs (Architecture Decision Records)

## ADR-001: Pure engine, thin UI

Context: Determinism, testability.
Decision: /game holds pure logic; React renders and captures input.
Consequences: Easy to test and refactor; UI swap possible.

## ADR-002: DOM Grid over Canvas

Context: 20×20 board and dev time.
Decision: CSS Grid rendering.
Consequences: Simpler code/tests; changeable if board scales.

## ADR-003: Set + Array for snake

Context: Need O(1) collision + easy growth.
Decision: Store both; Array for head/tail ops, Set for membership.
Consequences: Slight duplication, clear and fast operations.

## ADR-004: O(n) food spawn

Context: 400 cells total.
Decision: Scan empties and pick random.
Consequences: Simpler & reliable; can optimize later if needed.
