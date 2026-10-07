## Overview

EverySub brings subscription costs, renewal dates, and billing history into one place. It helps you see what you're committed to each month, which charges are coming up, and how your spending changes over time.

I built it to make recurring expenses easier to understand, especially when weekly, monthly, and annual plans all bill on different schedules. It's an open source project in active development, built with TanStack Start, React, and PostgreSQL.

## What you can do

- Track weekly, monthly, yearly, and biennial subscriptions, with effective monthly and yearly totals.
- Separate personal, household, or project expenses into collections, each with its own dashboard and categories.
- Compare spending trends and category breakdowns, then check upcoming charges in a calendar or table.
- Review recorded invoice history while keeping it separate from projected renewals.
- Import and export subscriptions as JSON or CSV. Smart import also finds subscriptions in PDF statements, receipts, and screenshots for you to review before saving.
- Receive renewal reminders and monthly overviews by email, Discord, or webhook. Choose destinations per collection and exclude individual subscriptions.
- Deactivate and reactivate subscriptions without erasing their history, or move them between collections.

## Inside the app

### Spending dashboard

The dashboard puts recurring totals beside upcoming charges and recorded history. Mixed billing schedules become comparable monthly costs, while the spending chart shows when charges actually fall.

![EverySub dashboard showing monthly cost, active subscriptions, spending trends, category totals, and upcoming invoices using sample data.](/assets/everysub/dashboard.jpg)

### Smart import

Upload a statement, receipt, or screenshot to find subscription candidates. Review their names, amounts, billing schedules, and confidence before choosing what to add.

![EverySub smart import review showing subscription candidates extracted from a sample statement.](/assets/everysub/smart-import.webp)

## Product decisions

EverySub tracks expected billing. Upcoming invoices are projections, and recorded invoices preserve the schedule as it came due; neither confirms that a payment succeeded. Making that distinction visible keeps the dashboard honest about what it knows.

Imports follow the same approach: suggestions need review before they become subscriptions. JSON and CSV exports keep the data portable. The app currently supports USD, with manual entry and reviewed imports as the core workflows.
