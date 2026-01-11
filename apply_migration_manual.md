# Manual Migration Guide

Since the Cloudflare API key needs to be configured, here are 3 ways to apply the migration:

## Option 1: Via Cloudflare Dashboard (Easiest)

1. Go to https://dash.cloudflare.com/
2. Navigate to: **Workers & Pages** → **D1** → **gold-trader-db**
3. Click **Console** tab
4. Run these SQL commands:

```sql
-- Add hybrid system fields
ALTER TABLE micro_trade_signals ADD COLUMN grade TEXT DEFAULT 'B';
ALTER TABLE micro_trade_signals ADD COLUMN filters_passed INTEGER DEFAULT 0;
ALTER TABLE micro_trade_signals ADD COLUMN position_multiplier REAL DEFAULT 1.0;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_micro_signals_grade ON micro_trade_signals(grade);
CREATE INDEX IF NOT EXISTS idx_micro_signals_quality ON micro_trade_signals(grade, created_at) WHERE grade IN ('A+', 'A');
```

5. Click **Execute**

## Option 2: Configure API Key Then Use Wrangler

1. Go to **Deploy** tab in the sidebar
2. Create Cloudflare API token:
   - Visit: https://dash.cloudflare.com/profile/api-tokens
   - Click **Create Token**
   - Use template: **Edit Cloudflare Workers**
   - Add permissions: **Account.D1 Database** (Edit)
   - Copy the token
3. Save token in Deploy tab
4. Run migration:
   ```bash
   cd /home/user/webapp
   npx wrangler d1 migrations apply gold-trader-db --remote
   ```

## Option 3: Use Wrangler with Direct SQL

```bash
cd /home/user/webapp

# After configuring API key in Deploy tab:
npx wrangler d1 execute gold-trader-db --remote --file=migrations/0003_add_hybrid_fields.sql
```

---

## Verification After Migration

Check if migration worked:

```bash
# List all columns (should include grade, filters_passed, position_multiplier)
npx wrangler d1 execute gold-trader-db --remote \
  --command="PRAGMA table_info(micro_trade_signals);"
```

Or via Dashboard:
```sql
PRAGMA table_info(micro_trade_signals);
```

Look for these columns:
- `grade` (TEXT)
- `filters_passed` (INTEGER)
- `position_multiplier` (REAL)

---

## After Migration: Test the Alert

Once migration is complete:

```bash
curl https://gold-trading-system.pages.dev/api/hybrid-micro/test-alert
```

Should return:
```json
{
  "success": true,
  "message": "Test Grade A hybrid alert sent to Telegram and stored in database!",
  ...
}
```

Check your Telegram @mygoldusdnews_bot for the alert!
