
## Technical Architecture
TODO: COMING SOON

## Data Models
```typescript
type Subscription = {
	id: string;
	name: string;
	amount: number;
	frequency: "weekly" | "bi-weekly" | "monthly" | "bi-monthly" | "yearly" | "bi-yearly";
	category: string;
	next_invoice: Date;
	last_invoice: Date | undefined;
	icon_ref: string;
	send_alert: boolean;
	collection_id: string;
}

type Collection = {
	id: string;
	title: string;
	subscriptions: Array<Subscription>;
}

type CreateSubscription = Omit<Subscription, 'id'>
type UpdateSubscription = Omit<Subscription, 'id'>
```

## Procedures
```typescript
/**
 * Creates a new subscription 
 * @param {CreateSubscription} data - The subscription data to create
 * @returns {Promise<void>} Promise that resolves when subscription is created
 */
function createSubscription(data: CreateSubscription): Promise<void>

/**
 * Updates an existing subscription
 * @param {UpdateSubscription} data - The subscription data to update
 * @returns {Promise<void>} Promise that resolves when subscription is updated
 */
function updateSubscription(data: UpdateSubscription): Promise<void>

/**
 * Deletes a subscription by its ID
 * @param {string} subscriptionId - The unique identifier of the subscription to delete
 * @returns {Promise<void>} Promise that resolves when subscription is deleted
 */
function deleteSubscription(subscriptionId: string): Promise<void>

/**
 * Retrieves all subscriptions within a specified collection
 * @param {string} collectionId - The unique identifier of the collection
 * @returns {Promise<Subscription[]>} Promise that resolves with an array of subscriptions
 */
function getSubscriptionsInCollection(collectionId: string): Promise<Subscription[]>

/**
 * Retrieves all available subscription categories
 * @returns {Promise<string[]>} Promise that resolves with an array of category names
 */
function getCategories(): Promise<string[]>

/**
 * Updates the list of available subscription categories
 * @param {string[]} categories - Array of category names to set
 * @returns {Promise<void>} Promise that resolves when categories are updated
 */
function setCategories(categories: string[]): Promise<void>

/**
 * Retrieves all collections belonging to the current user
 * @returns {Promise<Collection[]>} Promise that resolves with an array of collections
 */
function getCollections(): Promise<Collection[]>

/**
 * Creates a new empty collection
 * @param {string} title - The title for the new collection
 * @returns {Promise<void>} Promise that resolves when collection is created
 */
function createCollection(title: string): Promise<void>

/**
 * Updates the title of an existing collection
 * @param {string} collectionId - The unique identifier of the collection
 * @param {string} title - The new title for the collection
 * @returns {Promise<void>} Promise that resolves when title is updated
 */
function editCollectionTitle(collectionId: string, title: string): Promise<void>

/**
 * Deletes a collection belonging to the current user
 * @param {string} collectionId - The unique identifier of the collection to delete
 * @returns {Promise<void>} Promise that resolves when collection is deleted
 */
function deleteCollection(collectionId: string): Promise<void>

/**
 * Creates a reminder to cancel a subscription on a specific date
 * @param {string} subscriptionId - The unique identifier of the subscription
 * @param {Date} date - The date when the subscription should be cancelled
 * @returns {Promise<void>} Promise that resolves when reminder is created
 */
function createCancelReminder(subscriptionId: string, date: Date): Promise<void>
```

## Feature Discussions
<!-- Describe notable features and discuss how they were implemented, be technical. -->
### Update Subscription `Next Invoice`
In order to update all subscriptions' `next_invoice` field, a cron job is used to periodically hit the `/api/functions/updateNextInvoice` endpoint. The endpoint is secured via a secret bearer token in the authorization header.
### Monthly Subscription Alert Emails
In order to send monthly emails to users about their upcoming and recently renewed subscriptions, a cron job is used to periodically hit the `/api/functions/sendAlerts` endpoint. The endpoint is secured via a secret bearer token in the authorization header.
