---
title: Fuuty.gg
description: >
  A next-gen soccer knowledge gaming platform.
thumbnailImage: /src/assets/default-thumbnail.jpg
images:
 - /assets/fuuty/landing.png
 - /assets/fuuty/game.png
techstack:
 - nextjs
 - typescript
 - tailwind
 - aws
---

## Product Description
Fuuty.gg is a next-gen soccer knowledge games platform. Fuuty hosts a variety of games.

## Technical Description
Fuuty.gg is a web based system that consists of a web server, cache, and CDN. It is designed to support tens-of-thousands of concurrent users. All requests between the client and server happen via tRPC.

## Features
- Single and Multi-player Gameplay.
- Thousands of players. Tens of the most popular clubs.
- Hundreds of game boards.

## System Design
### System Components
- Web Server ([Next.js](https://nextjs.org/)) for serving HTML to clients and hosting tRPC endpoints
- LRU Cache ([Redis](https://redis.io/)) for storing responses to game-related requests (searching, guessing, etc.)
- CDN based on storage bucket ([AWS S3](https://aws.amazon.com/s3/)) for serving player and club images

### tRPC Endpoints
```typescript
/**
 ** checks if the given player has played for all given clubs
 * @param {string[]}  club_ids - array of club ids
 * @param {string}    player_id - id of player guess
 * @returns {boolean} returns true if the given player belongs to both clubs, false otherwise
 */
function checkGuess(club_ids: string[], player_id: string): boolean
```

```typescript
/**
 ** gets a random board based on the difficulty
 * @param {Difficulty} difficulty - board difficulty
 * @returns {Board} returns board data
 */
function getBoard(difficulty: Difficulty): Board
```

```typescript
/**
 ** gets a list of players whose name contains the search term
 * @param {string} searchTerm - search term
 * @returns {Player[]} returns list of players
 */
function searchPlayers(searchTerm: string): Player[]
```
