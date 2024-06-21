---
title: SubTrack
description: >
  An intuitive subscriptions tracking utility.
live: https://subtrack.cbuff.dev
github: https://github.com/C41M50N/SubTrack
isFeatured: true
images:
  - /assets/subtrack/dashboard.png
---

## Product Description
SubTrack is an intuitive subscriptions tracking utility. The goal of SubTrack is to facilitate a streamlined, non-invasive process of tracking your digital subscriptions. There is an optional integration with the Todoist platform that is used for creating cancel reminders for subscriptions.

## Technical Description
SubTrack is a web based system that consists of a web server, a database, a few cron jobs, and a couple third-party APIs. ...

## Features
- Organize subscriptions in a dynamic table
- Statistics on how much your digital subscriptions are costing you
- Monthly review emails that inform you of which subscriptions have renewed recently and which subscriptions will renew soon
- [Todoist](https://todoist.com/) integration for handling cancel reminders

## System Design
### System Components
- Web Server ([Next.js](https://nextjs.org/)) for serving HTML to clients and hosting tRPC endpoints
- Database (PostgreSQL) for storing user data
- Cron Jobs ([Vercel Cron Jobs](https://vercel.com/docs/cron-jobs)) that create serverless functions for updating subscription invoices and sending monthly review emails
- [Todoist API](https://developer.todoist.com/rest/) for creating tasks that act as cancel reminders
- [Resend API](https://resend.com/) for sending emails

### Data Models
```prisma
model User {
    id            String    @id @default(cuid())
    name          String
    email         String    @unique
    emailVerified DateTime?
    image         String?
    accounts      Account[]
    sessions      Session[]

    categories    String[] @default(["entertainment", "productivity", "finance"])
    subscriptions Subscription[]
    todoistAPIKey String @default("")
    todoistProjectId String @default("")
}

model Subscription {
    id              String @id @default(cuid())
    name            String
    amount          Float
    frequency       String
    category        String
    next_invoice    DateTime
    last_invoice    DateTime?
    icon_ref        String @default("default")
    send_alert      Boolean @default(true)

    user    User @relation(fields: [userId], references: [id])
    userId  String
}
```

### tRPC Endpoints
```typescript
/**
 * 
 */
function _(): boolean
```
