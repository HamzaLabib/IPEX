# Backend Payment Plan

- Node.js + Express APIs for quotes, contact, tracking, and payment endpoints.
- Database options: MongoDB or PostgreSQL.
- Core collections/tables: users, quoteRequests, shipments, invoices, paymentRequests, contactMessages.
- Stripe Checkout for card payments.
- Interac e-Transfer and bank transfer as manual/offline payment options.
- Stripe webhooks for trusted payment confirmation updates.
- HTTPS required in production.
- Never store full card numbers.
- Validate payment amounts server-side for every request.
- Store only safe payment metadata (references, invoice IDs, status, timestamps).
