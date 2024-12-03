## Technical Architecture
### Frontend
- **Framework**: [Next.js](https://nextjs.org/) with TypeScript
- **State Management**: [tRPC](https://trpc.io/) for type-safe API communication
- **UI/UX**:
    - Responsive design for desktop and mobile gameplay
    - Real-time game state updates
    - Interactive game board visualization
### Backend Infrastructure
- **Web Server**: [Next.js](https://nextjs.org/) server with integrated API routes
- **Caching Layer**: [Redis](https://redis.io/) LRU cache for:
    - Frequent game-related queries
    - Player search results
    - Game state management
- **Content Delivery**: [AWS S3](https://aws.amazon.com/s3/)-based CDN serving:
    - Player profile images
    - Club logos and badges
    - Static assets
- **Database**: [PostgreSQL](https://www.postgresql.org/) storing:
    - Player-club relationship graphs
    - Game board configurations
    - User progression data

## Data Models
```ts
type Player = {
	id: string;
	name: string;
	english_name: string;
	nationality_name: string;
	nationality_img_ref: string;
	clubs_played_for: string[];
}

type Club = {
	id: string;
	name: string;
}

type Board = {
	id: string;
	club_id1: string;
	club_id2: string;
	club_id3: string;
	club_id4: string;
	club_id5: string;
	club_id6: string;
}

type Difficulty = "EASY" | "MEDIUM" | "HARD";
```

## Procedures
```typescript
/**
 * Validates if a player has played for the specified clubs
 * @param {string[]}  club_ids - Array of club identifiers to check against
 * @param {string}    player_id - Unique identifier of the guessed player
 * @returns {boolean} Boolean indicating if the player has played for all specified clubs
 */
function checkGuess(club_ids: string[], player_id: string): boolean

/**
 * Retrieves a randomized game board based on difficulty setting
 * @param {Difficulty} difficulty - Desired difficulty level for the board
 * @returns {Board} Complete board configuration with club mappings
 */
function getBoard(difficulty: Difficulty): Board

/**
 * Performs a fuzzy search for players based on partial name matching
 * @param {string} searchTerm - Player name search query
 * @returns {Player[]} Array of matching player profiles
 */
function searchPlayers(searchTerm: string): Player[]
```
