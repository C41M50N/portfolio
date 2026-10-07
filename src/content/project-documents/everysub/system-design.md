## Technical stack

| Area | Technology |
| --- | --- |
| Application | TanStack Start, React, TypeScript |
| Routing and data fetching | TanStack Router and Query |
| Interface | Tailwind CSS, shadcn/ui with Base UI, Recharts |
| Authentication | Better Auth with Google sign-in |
| Database | PostgreSQL with Drizzle ORM |
| Smart import | OpenAI with the AI SDK |
| Email | React Email and Resend |
| Hosting and scheduled jobs | Railway |

## Application and data

The code is organized by feature: subscriptions, collections, invoices, dashboards, imports, and notifications. Each feature keeps its interface, validation, queries, and server operations together.

TanStack Router loaders and TanStack Query share a query client with server rendering. TanStack Start server functions validate inputs and require authentication before calling database operations. Reads and writes use the authenticated user's ID, with ownership checks for collections and categories.

PostgreSQL stores subscriptions, collection-specific categories, invoice snapshots, and notification state. Drizzle provides the schema, migrations, and transactional queries. Subscription amounts are stored as integer cents, and billing dates are date-only values interpreted in the user's time zone.

## Billing model

Effective monthly and yearly costs make different billing schedules comparable. Upcoming invoice projections answer a separate question: what amount is expected to come due within a particular window?

A scheduled job records due invoices and advances subscription schedules in one database transaction. It locks subscription rows while processing and uses unique invoice records to avoid duplicates when a job runs again. Each invoice preserves the subscription name, amount, category, and billing date at the time it became due.

That separation lets the interface show recorded history alongside future projections without presenting either as a verified payment.

## Reviewed imports

JSON and CSV imports use validated subscription data. Smart import sends selected PDFs or images to OpenAI and requests structured subscription candidates. The extraction step groups repeated charges and flags uncertain billing schedules for review.

Candidates pass through validation and a review screen before the app writes subscriptions. EverySub does not store the uploaded files; it records operational usage metadata separately. Smart import is optional and available when the OpenAI integration is configured.

## Notification delivery

One job runs every five minutes. It records due invoices first, schedules renewal reminders and monthly overviews for 9 a.m. in each user's time zone, then delivers pending notifications.

Collections route notifications to email, Discord, or signed webhooks. A subscription can be excluded from notification content. Events are unique per destination, notification type, and period, so rerunning the scheduler does not create another event for the same slot.

Workers claim events with row locks and a short lease, then release the database transaction before sending. Delivery attempts, retry times, and outcomes persist in PostgreSQL. Generic webhooks use HMAC signatures, while Resend delivery events let the app pause email after bounces or complaints.
