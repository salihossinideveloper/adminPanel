export const ChildSelector = [
    //parent id 1 in child
    {
        id: 1,
        parentId: 1,
        name: 'آدرسهای فعال',
        value: 'active_count'
    },
    {
        id: 2,
        parentId: 1,
        name: 'آدرسهای ارسال کننده',
        value: 'sending_count'
    },
    {
        id: 3,
        parentId: 1,
        name: 'آدرسهای دریافت کننده',
        value: 'receiving_count'
    },
    {
        id: 4,
        parentId: 1,
        name: 'آدرسهای جدید',
        value: 'new_non_zero_count'
    },
    {
        id: 5,
        parentId: 1,
        name: 'کل آدرسها',
        value: 'count'
    },
    {
        id: 6,
        parentId: 1,
        name: 'آدرسها با موجودی غیر صفر',
        value: 'non_zero_count'
    },
    {
        id: 7,
        parentId: 1,
        name: 'آدرس‌های با موجودی بیش از ۰.۰۱ بیت‌کوین',
        value: 'min_point_zero_1_count'
    },
    {
        id: 8,
        parentId: 1,
        name: 'آدرس‌های با موجودی بیش از ۰.۱ بیت‌کوین',
        value: 'min_point_1_count'
    },
    {
        id: 9,
        parentId: 1,
        name: 'آدرس‌های با موجودی بیش از ۱ بیت‌کوین',
        value: 'min_1_count'
    },
    {
        id: 10,
        parentId: 1,
        name: 'آدرس‌های با موجودی بیش از ۱۰ بیت‌کوین',
        value: 'min_10_count'
    },
    {
        id: 11,
        parentId: 1,
        name: 'آدرس‌های با موجودی بیش از ۱۰۰ بیت‌کوین',
        value: 'min_100_count'
    },
    {
        id: 12,
        parentId: 1,
        name: 'آدرس‌های با موجودی بیش از هزار بیت‌کوین',
        value: 'min_1k_count'
    },
    {
        id: 13,
        parentId: 1,
        name: 'آدرس‌های با موجودی بیش از ده‌هزار بیت‌کوین',
        value: 'min_10k_count'
    },
    {
        id: 14,
        parentId: 1,
        name: 'آدرس‌های با موجودی بیش از ۳۲ اتریوم',
        value: 'min_32_count'
    },
    //parent id 2 in child
    {
        id: 15,
        parentId: 2,
        name: 'سایز بلاک',
        value: 'block_height'
    },
    {
        id: 16,
        parentId: 2,
        name: 'بلاک‌های استخراج شده',
        value: 'block_count'
    },
    {
        id: 17,
        parentId: 2,
        name: 'میانگین زمان تشکیل بلاک جدید',
        value: 'block_interval_mean'
    },
    {
        id: 18,
        parentId: 2,
        name: 'حدفاصل زمان تشکیل بلاک جدید',
        value: 'block_interval_median'
    },
    {
        id: 19,
        parentId: 2,
        name: 'اندزه هر بلاک',
        value: 'block_size_sum'
    },
    {
        id: 20,
        parentId: 2,
        name: 'میانگین اندازه بلاک‌ها',
        value: 'block_size_mean'
    },
    {
        id: 21,
        parentId: 2,
        name: 'تراکنش‌های خرج نشده',
        value: 'utxo_created_count'
    },
    {
        id: 22,
        parentId: 2,
        name: 'تراکنش‌های خرج شده',
        value: 'utxo_spent_count'
    },
    {
        id: 23,
        parentId: 2,
        name: ' کل تراکنش‌های خرج نشده',
        value: 'utxo_count'
    },
    {
        id: 24,
        parentId: 2,
        name: 'ارزش کل تراکنش‌های خرج نشده',
        value: 'utxo_created_value_sum'
    },
    {
        id: 25,
        parentId: 2,
        name: 'میانگین ارزش تراکنش‌های خرج نشده',
        value: 'utxo_created_value_mean'
    },
    {
        id: 26,
        parentId: 2,
        name: 'حدفاصل ارزش تراکنش‌های خرج نشده',
        value: 'utxo_created_value_median'
    },
    {
        id: 27,
        parentId: 2,
        name: 'ارزش کل تراکنش‌های خرج شده',
        value: 'utxo_spent_value_sum'
    },
    {
        id: 28,
        parentId: 2,
        name: 'میانگین ارزش تراکنش‌های خرج شده',
        value: 'utxo_spent_value_mean'
    },
    {
        id: 29,
        parentId: 2,
        name: 'حدفاصل ارزش تراکنش های خرج شده',
        value: 'utxo_spent_value_median'
    },
    {
        id: 30,
        parentId: 2,
        name: 'UTXO Value Spent (Median)',
        value: 'utxo_spent_value_median'
    },
    {
        id: 31,
        parentId: 2,
        name: 'درصد تراکنش‌های خرج نشده در سود',
        value: 'utxo_profit_relative'
    },
    {
        id: 32,
        parentId: 2,
        name: 'حجم تراکنش‌های خرج نشده در سود',
        value: 'utxo_profit_count'
    },
    {
        id: 33,
        parentId: 2,
        name: 'حجم تراکنش‌های خرج نشده در ضرر',
        value: 'utxo_loss_count'
    },
    //parent id 3 in child
    {
        id: 34,
        parentId: 3,
        name: 'ارزش کل سرمایه قفل شده در دیفای (TVL)',
        value: 'total_value_locked'
    },
    //parent id 4 in child
    {
        id: 35,
        parentId: 4,
        name: 'فاندینگ ‌قراردادهای پرپچوال فیوچرز',
        value: 'futures_funding_rate_perpetual'
    },
    {
        id: 36,
        parentId: 4,
        name: 'فاندینگ ‌قراردادهای پرپچوال فیوچرز',
        value: 'futures_funding_rate_perpetual'
    },
    //parent id 5 in child
    {
        id: 36,
        parentId: 5,
        name: 'موجودی صرافی‌ها به درصد',
        value: 'balance_exchanges_relative'
    },
    {
        id: 36,
        parentId: 5,
        name: 'تغییرات خالص جریان صرافی‌ها',
        value: 'exchange_net_position_change'
    },
    {
        id: 36,
        parentId: 5,
        name: 'WBTC میزان موجودی',
        value: 'balance_wbtc'
    },
    {
        id: 36,
        parentId: 5,
        name: 'موجودی آدرس‌های کابوکی کابویاشی',
        value: 'balance_mtgox_trustee'
    },
    {
        id: 36,
        parentId: 5,
        name: 'موجودی به تفکیک صرافی',
        value: 'balance_exchanges_all'
    },
    {
        id: 36,
        parentId: 5,
        name: 'کوین موجود در قراردادهای هوشمند',
        value: 'supply_contracts'
    },
    {
        id: 36,
        parentId: 5,
        name: 'میزان موجودی در درصد آدرس‌های برتر',
        value: 'balance_1pct_holders'
    },
    {
        id: 36,
        parentId: 5,
        name: 'ضریب جینی',
        value: 'gini'
    },
    {
        id: 36,
        parentId: 5,
        name: 'شاخص هرفیندال',
        value: 'herfindahl'
    },
    //parent id 6 in child
    {
        id: 36,
        parentId: 6,
        name: 'activecount',
        value: 'active_count'
    },
    {
        id: 36,
        parentId: 6,
        name: 'min1kcount',
        value: 'net_growth_count'
    },
    {
        id: 36,
        parentId: 6,
        name: 'newcount',
        value: 'new_count'
    },
    {
        id: 36,
        parentId: 6,
        name: 'profitrelative',
        value: 'profit_relative'
    },
    {
        id: 36,
        parentId: 6,
        name: 'receivingcount',
        value: 'receiving_count'
    },
    {
        id: 36,
        parentId: 6,
        name: 'sendingcount',
        value: 'sending_count'
    },
    {
        id: 36,
        parentId: 6,
        name: 'supply_balance_0001_001',
        value: 'supply_balance_0001_001'
    },
    {
        id: 36,
        parentId: 6,
        name: 'supply_balance_001_01',
        value: 'supply_balance_001_01'
    },
    {
        id: 36,
        parentId: 6,
        name: 'supply_balance_01_1',
        value: 'supply_balance_01_1'
    },
    {
        id: 36,
        parentId: 6,
        name: 'supply_balance_1_10',
        value: 'supply_balance_1_10'
    },
    {
        id: 36,
        parentId: 6,
        name: 'supply_balance_10_100',
        value: 'supply_balance_10_100'
    },
    {
        id: 36,
        parentId: 6,
        name: 'supply_balance_100_1k',
        value: 'supply_balance_100_1k'
    },
    {
        id: 36,
        parentId: 6,
        name: 'supply_balance_10k_100k',
        value: 'supply_balance_10k_100k'
    },
    {
        id: 36,
        parentId: 6,
        name: 'supply_balance_1k_10k',
        value: 'supply_balance_1k_10k'
    },
    {
        id: 36,
        parentId: 6,
        name: 'supply_balance_less_0001',
        value: 'supply_balance_less_0001'
    },
    {
        id: 36,
        parentId: 6,
        name: 'supply_balance_more_100k',
        value: 'supply_balance_more_100k'
    },
    {
        id: 36,
        parentId: 6,
        name: 'supply_distribution_relative',
        value: 'supply_distribution_relative'
    },
    //parent id 7 in child
    {
        id: 37,
        parentId: 7,
        name: 'تعداد کل واریزها',
        value: 'staking_total_deposits_count'
    },
    {
        id: 38,
        parentId: 7,
        name: 'ارزش کل کوین‌های استیک شده',
        value: 'staking_total_volume_sum'
    },
    {
        id: 39,
        parentId: 7,
        name: 'تعداد اعتبارسنج‌ها',
        value: 'staking_total_validators_count'
    },
    {
        id: 40,
        parentId: 7,
        name: 'میزان فاز صفر سپرده‌گذاری',
        value: 'staking_phase_0_goal_percent'
    },
    //parent id 8 in child
    {
        id: 41,
        parentId: 8,
        name: 'میانگین فی تراکنش‌ها',
        value: 'volume_mean'
    },
    {
        id: 42,
        parentId: 8,
        name: 'میانه فی تراکنش‌ها',
        value: 'volume_median'
    },
    {
        id: 43,
        parentId: 8,
        name: 'میزان گس استفاده شده',
        value: 'gas_used_sum'
    },
    {
        id: 44,
        parentId: 8,
        name: 'میانگین گس استفاده شده',
        value: 'gas_used_mean'
    },
    {
        id: 45,
        parentId: 8,
        name: 'میانه گس استفاده شده',
        value: 'gas_used_median'
    },
    {
        id: 46,
        parentId: 8,
        name: 'میانگین قیمت گس',
        value: 'gas_price_mean'
    },
    {
        id: 47,
        parentId: 8,
        name: 'میانه قیمت گس',
        value: 'gas_price_median'
    },
    {
        id: 48,
        parentId: 8,
        name: 'میانگین نهایت گس تراکنش',
        value: 'gas_limit_tx_mean'
    },
    {
        id: 49,
        parentId: 8,
        name: 'میانه نهایت گس تراکنش',
        value: 'gas_limit_tx_median'
    },
    {
        id: 50,
        parentId: 8,
        name: 'نسبت فی چندگانه(FRM)',
        value: 'fee_ratio_multiple'
    },
    //parent id 9 in child
    {
        id: 50,
        parentId: 9,
        name: 'Accumulation Trend Score',
        value: 'accumulation_trend_score'
    },
    {
        id: 50,
        parentId: 9,
        name: 'ASOL',
        value: 'asol'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity-Adjusted ASOL',
        value: 'asol_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Dormancy',
        value: 'average_dormancy'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Supply-Adjusted Dormancy',
        value: 'average_dormancy_supply_adjusted'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Balanced Price',
        value: 'balanced_price_usd'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Bitcoin Volatility Index (BVIN)',
        value: 'bvin'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Coin Days Destroyed (CDD)',
        value: 'cdd'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity Adjusted CDD',
        value: 'cdd_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Supply Adjusted CDD',
        value: 'cdd_supply_adjusted'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Binary CDD',
        value: 'cdd_supply_adjusted_binary'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity Adjusted 90D Coin Days Destroyed (eCDD-90)',
        value: 'cdd90_account_based_age_adjusted'
    },
    {
        id: 50,
        parentId: 9,
        name: '90D Coin Days Destroyed (CDD-90)',
        value: 'cdd90_age_adjusted'
    },
    {
        id: 50,
        parentId: 9,
        name: 'CVDD',
        value: 'cvdd'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Coin Years Destroyed (CYD)',
        value: 'cyd'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity Adjusted CYD',
        value: 'cyd_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity and Supply Adjusted CYD',
        value: 'cyd_account_based_supply_adjusted'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Supply-Adjusted CYD',
        value: 'cyd_supply_adjusted'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Difficulty Ribbon',
        value: 'difficulty_ribbon'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Difficulty Ribbon Compression',
        value: 'difficulty_ribbon_compression'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity Adjusted Dormancy',
        value: 'dormancy_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity Adjusted Dormancy Flow',
        value: 'dormancy_flow'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Hash Ribbon',
        value: 'hash_ribbon'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Hodled or Lost Coins',
        value: 'hodled_lost_coins'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Hodler Net Position Change',
        value: 'hodler_net_position_change'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Investor Capitalization',
        value: 'investor_capitalization'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Liveliness',
        value: 'liveliness'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity Adjusted Liveliness',
        value: 'liveliness_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'MSOL',
        value: 'msol'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity Adjusted MSOL',
        value: 'msol_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity Adjusted MVRV',
        value: 'mvrv_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Net Realized Profit/Loss',
        value: 'net_realized_profit_loss'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Net Unrealized Profit/Loss (NUPL)',
        value: 'net_unrealized_profit_loss'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity Adjusted NUPL',
        value: 'net_unrealized_profit_loss_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'STH NUPL',
        value: 'nupl_less_155'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity-Adjusted STH-NUPL',
        value: 'nupl_less_155_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'LTH NUPL',
        value: 'nupl_more_155'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity-Adjusted LTH-NUPL',
        value: 'nupl_more_155_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'NVT Ratio',
        value: 'nvt'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity-Adjusted NVT',
        value: 'nvt_entity_adjusted'
    },
    {
        id: 50,
        parentId: 9,
        name: 'NVT Signal',
        value: 'nvts'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Pi Cycle Top Indicator',
        value: 'pi_cycle_top'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Puell Multiple',
        value: 'puell_multiple'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity-Adjusted Realized Cap',
        value: 'rcap_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Realized Loss',
        value: 'realized_loss'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Realized Profit',
        value: 'realized_profit'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Realized P/L Ratio',
        value: 'realized_profit_loss_ratio'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Realized Profits-to-Value (RPV) Ratio',
        value: 'realized_profits_to_value_ratio'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Reserve Risk',
        value: 'reserve_risk'
    },
    {
        id: 50,
        parentId: 9,
        name: 'RHODL Ratio',
        value: 'rhodl_ratio'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Seller Exhaustion Constant',
        value: 'seller_exhaustion_constant'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity Adjusted LTH NUPL',
        value: 'nupl_more_155_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Output Age Bands',
        value: 'soab'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs 1d-1w',
        value: 'sol_1d_1w'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity Adjusted LTH NUPL',
        value: 'nupl_more_155_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs < 1h',
        value: 'sol_1h'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs 1h-24h',
        value: 'sol_1h_24h'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs 1m-3m',
        value: 'sol_1m_3m'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs 1w-1m',
        value: 'sol_1w_1m'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs 1y-2y',
        value: 'sol_1y_2y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs 2y-3y',
        value: 'sol_2y_3y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs 3m-6m',
        value: 'sol_3m_6m'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs 3y-5y',
        value: 'sol_3y_5y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs 5y-7y',
        value: 'sol_5y_7y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs 6m-12m',
        value: 'sol_6m_12m'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs 7y-10y',
        value: 'sol_7y_10y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Outputs > 10y',
        value: 'sol_more_10y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'SOPR',
        value: 'sopr'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity-Adjusted SOPR',
        value: 'sopr_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'aSOPR',
        value: 'sopr_adjusted'
    },
     {
        id: 50,
        parentId: 9,
        name: 'STH-SOPR',
        value: 'sopr_less_155'
    },
     {
        id: 50,
        parentId: 9,
        name: 'LTH-SOPR',
        value: 'sopr_more_155'
    },
    {
        id: 50,
        parentId: 9,
        name: 'SOPD (ATH-Partitioned)',
        value: 'spent_output_price_distribution_ath'
    },
    {
        id: 50,
        parentId: 9,
        name: 'SOPD (Percent-Partitioned)',
        value: 'spent_output_price_distribution_percent'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Stablecoin Supply Ratio (SSR)',
        value: 'ssr'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Stablecoin Supply Ratio (SSR) Oscillator',
        value: 'ssr_oscillator'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Stock-to-Flow Deflection',
        value: 'stock_to_flow_deflection'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Stock-to-Flow Ratio',
        value: 'stock_to_flow_ratio'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume Age Bands (SVAB)',
        value: 'svab'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume 1d-1w',
        value: 'svl_1d_1w'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume < 1h',
        value: 'svl_1h'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume 1h-24h',
        value: 'svl_1h_24h'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume 1m-3m',
        value: 'svl_1m_3m'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume 1w-1m',
        value: 'svl_1w_1m'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume 1y-2y',
        value: 'svl_1y_2y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume 2y-3y',
        value: 'svl_2y_3y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume 3m-6m',
        value: 'svl_3m_6m'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume 3y-5y',
        value: 'svl_3y_5y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume 5y-7y',
        value: 'svl_5y_7y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume 6m-12m',
        value: 'svl_6m_12m'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume 7y-10y',
        value: 'svl_7y_10y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Spent Volume > 10y',
        value: 'svl_more_10y'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Relative Unrealized Loss',
        value: 'unrealized_loss'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity-Adjusted Unrealized Loss',
        value: 'unrealized_loss_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Relative Unrealized Profit',
        value: 'unrealized_profit'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity-Adjusted Unrealized Profit',
        value: 'unrealized_profit_account_based'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Entity-Adjusted URPD',
        value: 'urpd_entity_adjusted'
    },
    {
        id: 50,
        parentId: 9,
        name: 'URPD (ATH-Partitioned)',
        value: 'utxo_realized_price_distribution_ath'
    },
    {
        id: 50,
        parentId: 9,
        name: 'URPD (Percent-Partitioned)',
        value: 'utxo_realized_price_distribution_percent'
    },
    {
        id: 50,
        parentId: 9,
        name: 'Velocity',
        value: 'velocity'
    },
    //parent id 10 in child
    {
        id: 51,
        parentId: 10,
        name: ' تعداد بیت‌کوین‌های هولد شده در صندوق قابل معامله',
        value: 'purpose_etf_holdings_sum'
    },
    {
        id: 52,
        parentId: 10,
        name: 'تعداد بیت‌کوین‌های ورودی به صندوق قابل معامله',
        value: 'purpose_etf_flows_sum'
    },
    {
        id: 53,
        parentId: 10,
        name: 'Purpose Bitcoin ETF Flows',
        value: 'purpose_etf_flows_sum'
    },
    {
        id: 54,
        parentId: 10,
        name: 'QBTC.U)بیت‌کوین‌های هولد شده در بنیاد بیت‌کوین',
        value: '3iq_qbtc_holdings_sum'
    },
    {
        id: 55,
        parentId: 10,
        name: '(QBTC.U)ورودی بیت‌کوین‌های بنیاد بیت‌کوین ',
        value: '3iq_qbtc_flows_sum'
    },
    {
        id: 56,
        parentId: 10,
        name: ' (QBTC.U)تعداد واحد‌های در حال خروج بنیاد بیت‌کوین',
        value: '3iq_qbtc_outstanding_units_sum'
    },
    {
        id: 57,
        parentId: 10,
        name: '(QBTC.U)دارایی تحت مدیریت بنیاد بیت‌کوین',
        value: '3iq_qbtc_aum_sum'
    },
    {
        id: 58,
        parentId: 10,
        name: '(QBTC.U)شاخص ویژه بنیاد بیت‌کوین',
        value: '3iq_qbtc_premium_percent'
    },
    {
        id: 59,
        parentId: 10,
        name: ' (QBTC.U) قیمت بازارر بنیاد بیت‌کوین',
        value: '3iq_qbtc_market_price_usd'
    },
    {
        id: 60,
        parentId: 10,
        name: '3iQ CoinShares بیت‌کوین‌های هولد شده در صندوق',
        value: '3iq_btcq_holdings_sum'
    },
    {
        id: 61,
        parentId: 10,
        name: '3iQ CoinShares میزان ورودی صندوق ',
        value: '3iq_btcq_flows_sum'
    },
    {
        id: 62,
        parentId: 10,
        name: '3iQ CoinShares واحدهای درحال خروج صندوق',
        value: '3iq_btcq_outstanding_units_sum'
    },
    {
        id: 63,
        parentId: 10,
        name: '3iQ CoinShares Bitcoin ETF (BTCQ.U) AUM',
        value: '3iq_btcq_aum_sum'
    },
    {
        id: 64,
        parentId: 10,
        name: '3iQ CoinShares دارایی تحت مدیریت صندوق',
        value: '3iq_btcq_premium_percent'
    },
    {
        id: 65,
        parentId: 10,
        name: 'The Ether ارتریوم هولد شده در بنیاد',
        value: '3iq_qeth_holdings_sum'
    },
    {
        id: 66,
        parentId: 10,
        name: 'The Ether ورودی اتریوم بنیاد',
        value: '3iq_qeth_flows_sum'
    },
    {
        id: 67,
        parentId: 10,
        name: 'The Ether واحدهای درحال خروج بنیاد',
        value: '3iq_qeth_outstanding_units_sum'
    },
    {
        id: 68,
        parentId: 10,
        name: 'The Ether دارایی تحت مدیریت بنیاد',
        value: '3iq_qeth_aum_sum'
    },
    {
        id: 69,
        parentId: 10,
        name: 'The Ether شاخص ویژه بنیاد',
        value: '3iq_qeth_premium_percent'
    },
    {
        id: 70,
        parentId: 10,
        name: 'The Ether قیمت بازار بنیاد',
        value: '3iq_qeth_market_price_usd'
    },
    {
        id: 71,
        parentId: 10,
        name: '3iQ CoinShares اتریوم‌های هولد شده در صندوق',
        value: '3iq_ethq_holdings_sum'
    },
    {
        id: 72,
        parentId: 10,
        name: '3iQ CoinShares میزان ورودی صندوق',
        value: '3iq_ethq_flows_sum'
    },
    {
        id: 73,
        parentId: 10,
        name: '	3iQ CoinShares واحدهای درحال خروج صندوق',
        value: '3iq_ethq_outstanding_units_sum'
    },
    {
        id: 74,
        parentId: 10,
        name: '	3iQ CoinShares دارایی تحت مدیریت صندوق',
        value: '3iq_ethq_aum_sum'
    },
    {
        id: 75,
        parentId: 10,
        name: '3iQ CoinShares شخص ویژه صندوق',
        value: '3iq_ethq_premium_percent'
    },
    {
        id: 76,
        parentId: 10,
        name: '	3iQ CoinShares قیمت بازار صندوق',
        value: '3iq_ethq_market_price_usd'
    },
    //parent id 11 in child
    {
        id: 77,
        parentId: 11,
        name: 'ظرفیت شبکه لایتنینگ بیت‌کوین',
        value: 'network_capacity_sum'
    },
    {
        id: 78,
        parentId: 11,
        name: 'میانگین اندازه کانال شبکه لایتنینگ',
        value: 'channel_size_mean'
    },
    {
        id: 79,
        parentId: 11,
        name: 'حدفاصل اندازه کانال شبکه لایتنینگ',
        value: 'channel_size_median'
    },
    {
        id: 80,
        parentId: 11,
        name: 'تعداد نودهای شبکه لایتنینگ',
        value: 'nodes_count'
    },
    {
        id: 81,
        parentId: 11,
        name: 'تعداد کانال‌های شبکه لایتنینگ',
        value: 'channels_count'
    },
    //parent id 12 in child
    {
        id: 82,
        parentId: 12,
        name: 'حجم بازار',
        value: 'marketcap_usd'
    },
    {
        id: 83,
        parentId: 12,
        name: 'قیمت',
        value: 'price_usd_close'
    },
    {
        id: 84,
        parentId: 12,
        name: 'قیمت با الگوی کندلی',
        value: 'price_usd_ohlc'
    },
    {
        id: 85,
        parentId: 12,
        name: 'میزان کاهش قیمت از سقف قیمت',
        value: 'price_drawdown_relative'
    },
    {
        id: 86,
        parentId: 12,
        name: 'MVRV شاخص',
        value: 'mvrv'
    },
    {
        id: 87,
        parentId: 12,
        name: 'MVRV Z-Scoreشاخص ',
        value: 'mvrv_z_score'
    },
    {
        id: 88,
        parentId: 12,
        name: 'حجم بازار طبق قیمت اکتسابی',
        value: 'marketcap_realized_usd'
    },
    {
        id: 89,
        parentId: 12,
        name: 'Delta شاخص حجم',
        value: 'deltacap_usd'
    },
    {
        id: 90,
        parentId: 12,
        name: 'قیمت اکتسابی',
        value: 'price_realized_usd'
    },
    //parent id 13 in child
    {
        id: 91,
        parentId: 13,
        name: 'Mempool تعداد تراکنش‌های استخر',
        value: 'txs_count_sum'
    },
    {
        id: 92,
        parentId: 13,
        name: 'به تفکیک گروه‌ها Mempoolتعداد تراکنش‌های استخر',
        value: 'txs_count_distribution'
    },
    {
        id: 93,
        parentId: 13,
        name: 'Mempool سایز تراکنش‌های استخر',
        value: 'txs_size_sum'
    },
    {
        id: 94,
        parentId: 13,
        name: 'به تفکیک گروه‌ها Mempoolسایز تراکنش‌های استخر',
        value: 'txs_size_distribution'
    },
    {
        id: 95,
        parentId: 13,
        name: 'Mempool تعداد کل توکن‌های استخر',
        value: 'txs_value_sum'
    },
    {
        id: 96,
        parentId: 13,
        name: 'به تفکیک گروه‌ها Mempoolتعداد کل توکن‌های استخر',
        value: 'txs_value_distribution'
    },
    {
        id: 97,
        parentId: 13,
        name: 'Mempool هزینه استخر',
        value: 'fees_sum'
    },
    {
        id: 98,
        parentId: 13,
        name: '	به تفکیک گروه‌ها Mempoolهزینه استخر',
        value: 'fees_distribution'
    },
    {
        id: 99,
        parentId: 13,
        name: 'Mempool میانگین هزینه نسبی استخر',
        value: 'fees_average_relative'
    },
    {
        id: 100,
        parentId: 13,
        name: 'Mempool میانه هزینه نسبی استخر',
        value: 'fees_median_relative'
    },
    //parent id 14 in child
    {
        id: 101,
        parentId: 14,
        name: 'سختی شبکه',
        value: 'difficulty_latest'
    },
    {
        id: 102,
        parentId: 14,
        name: 'هش ریت',
        value: 'hash_rate_mean'
    },
    {
        id: 103,
        parentId: 14,
        name: 'درآمد کلی ماینرها',
        value: 'revenue_sum'
    },
    {
        id: 104,
        parentId: 14,
        name: 'درآمد ماینرها از هزینه تراکنش',
        value: 'revenue_from_fees'
    },
    {
        id: 105,
        parentId: 14,
        name: 'درآمد ماینرها از استخراج',
        value: 'volume_mined_sum'
    },
    {
        id: 106,
        parentId: 14,
        name: 'Thermocap شاخص',
        value: 'thermocap'
    },
    {
        id: 107,
        parentId: 14,
        name: 'Thermocapنسبت حجم بازار به شاخص ',
        value: 'marketcap_thermocap_ratio'
    },
    //parent id 15 in child
    {
        id: 108,
        parentId: 15,
        name: 'Uniswapتعداد تراکنش‌ها در صرافی',
        value: 'uniswap_transaction_count'
    },
    {
        id: 109,
        parentId: 15,
        name: 'Uniswapحجم در صرافی ',
        value: 'uniswap_volume_sum'
    },
    {
        id: 110,
        parentId: 15,
        name: 'Uniswapnدر صرافیLiquidity',
        value: 'uniswap_liquidity_latest'
    },
    //parent id 16 in child
    {
        id: 111,
        parentId: 16,
        name: 'عرضه در گردش',
        value: 'current'
    },
    {
        id: 112,
        parentId: 16,
        name: 'عرضه با فعالیت بیش از یکسال گذشته',
        value: 'active_more_1y_percent'
    },
    {
        id: 113,
        parentId: 16,
        name: 'عرضه تظمین شده',
        value: 'current_adjusted'
    },
    {
        id: 114,
        parentId: 16,
        name: 'کوین‌های جدید عرضه شده',
        value: 'issued'
    },
    {
        id: 115,
        parentId: 16,
        name: 'نسبت تورم',
        value: 'inflation_rate'
    },
    {
        id: 116,
        parentId: 16,
        name: 'عرضه سوزانده شده',
        value: 'burned'
    },
    {
        id: 117,
        parentId: 16,
        name: 'تعداد کل کوین‌های عرضه شده',
        value: 'minted'
    },
    {
        id: 118,
        parentId: 16,
        name: 'تفکیک زمانی کوین‌های هولد شده',
        value: 'hodl_waves'
    },
    {
        id: 119,
        parentId: 16,
        name: 'ارزش اکتسابی کوین‌های هولد شده',
        value: 'rcap_hodl_waves'
    },
    {
        id: 120,
        parentId: 16,
        name: 'عرضه با آخرین‌گردش بیش از ۲سال',
        value: 'active_more_2y_percent'
    },
    {
        id: 121,
        parentId: 16,
        name: 'عرضه با آخرین‌گردش بیش از ۳سال',
        value: 'active_more_3y_percent'
    },
    {
        id: 122,
        parentId: 16,
        name: 'عرضه با آخرین‌گردش بیش از ۵سال',
        value: 'active_more_5y_percent'
    },
    {
        id: 123,
        parentId: 16,
        name: 'عرضه با آخرین گردش کمتر از ۲۴ساعت',
        value: 'active_24h'
    },
    {
        id: 124,
        parentId: 16,
        name: 'عرضه با آخرین گردش بین ۱تا ۷روز',
        value: 'active_1d_1w'
    },
    {
        id: 125,
        parentId: 16,
        name: 'عرضه با آخرین گردش بین ۱هفته تا ۱ماه',
        value: 'active_1w_1m'
    },
    {
        id: 126,
        parentId: 16,
        name: 'عرضه با آخرین گردش بین ۱تا ۳ماه',
        value: 'active_1m_3m'
    },
    {
        id: 127,
        parentId: 16,
        name: 'عرضه با آخرین گردش بین ۳تا ۶ماه',
        value: 'active_3m_6m'
    },
    {
        id: 128,
        parentId: 16,
        name: 'عرضه با آخرین گردش بین ۶تا ۱۲ماه',
        value: 'active_6m_12m'
    },
    {
        id: 129,
        parentId: 16,
        name: 'عرضه با آخرین گردش بین ۱تا ۲سال',
        value: 'active_1y_2y'
    },
    {
        id: 130,
        parentId: 16,
        name: 'عرضه با آخرین گردش بین ۲تا ۳سال',
        value: 'active_2y_3y'
    },
    {
        id: 131,
        parentId: 16,
        name: 'عرضه با آخرین گردش بین ۳تا ۵سال',
        value: 'active_3y_5y'
    },
    {
        id: 132,
        parentId: 16,
        name: 'عرضه با آخرین گردش بین ۵تا ۷سال',
        value: 'active_5y_7y'
    },
    {
        id: 133,
        parentId: 16,
        name: 'عرضه با آخرین گردش بیش از ۱۰سال',
        value: 'active_more_10y'
    },
    {
        id: 134,
        parentId: 16,
        name: 'درصد عرضه در سود',
        value: 'profit_relative'
    },
    {
        id: 135,
        parentId: 16,
        name: 'عرضه در ضرر',
        value: 'loss_sum'
    },
    //parent id 17 in child
    {
        id: 136,
        parentId: 17,
        name: 'تعداد تراکنش‌ها',
        value: 'count'
    },
    {
        id: 137,
        parentId: 17,
        name: 'نسبت تراکنش‌ها',
        value: 'rate'
    },
    {
        id: 138,
        parentId: 17,
        name: 'تعداد انتقال ها',
        value: 'transfers_count'
    },
    {
        id: 139,
        parentId: 17,
        name: 'نسبت انتقال‌ها',
        value: 'transfers_rate'
    },
    {
        id: 140,
        parentId: 17,
        name: 'حجم کل تراکنش‌ها',
        value: 'size_sum'
    },
    {
        id: 141,
        parentId: 17,
        name: 'میانگین حجم تراکنش‌ها',
        value: 'size_mean'
    },
    {
        id: 142,
        parentId: 17,
        name: 'حجم کل انتقال‌ها',
        value: 'transfers_volume_sum'
    },
    {
        id: 143,
        parentId: 17,
        name: 'میانگین حجم انتقال ها',
        value: 'transfers_volume_mean'
    },
    {
        id: 144,
        parentId: 17,
        name: 'میانه حجم انتقال‌ها',
        value: 'transfers_volume_median'
    },
    {
        id: 145,
        parentId: 17,
        name: 'حجم کل ورودی به صرافی',
        value: 'transfers_volume_to_exchanges_sum'
    },
    {
        id: 146,
        parentId: 17,
        name: 'حجم کل خروجی از صرافی',
        value: 'transfers_volume_from_exchanges_sum'
    },
    {
        id: 147,
        parentId: 17,
        name: 'حجم خالص جریان صرافی‌ها',
        value: 'transfers_volume_exchanges_net'
    },
    {
        id: 148,
        parentId: 17,
        name: 'تعداد واریزی به صرافی‌ها',
        value: 'transfers_to_exchanges_count'
    },
    {
        id: 149,
        parentId: 17,
        name: 'تعداد تراکنش‌های برداشت از صرافی',
        value: 'transfers_from_exchanges_count'
    },
    {
        id: 150,
        parentId: 17,
        name: 'میانگین حجم ورودی به صرافی‌ها',
        value: 'transfers_volume_to_exchanges_mean'
    },
    {
        id: 151,
        parentId: 17,
        name: 'میانه حجم ورودی به صرافی‌ها',
        value: 'transfers_volume_from_exchanges_mean'
    },
    {
        id: 152,
        parentId: 17,
        name: 'حجم انتقال داخلی صرافی‌ها',
        value: 'transfers_volume_within_exchanges_sum'
    },
    {
        id: 153,
        parentId: 17,
        name: 'انتقال‌های داخل صرافی',
        value: 'transfers_between_exchanges_count'
    },
    {
        id: 154,
        parentId: 17,
        name: 'حجم داخل صرافی',
        value: 'transfers_volume_between_exchanges_sum'
    },
    {
        id: 155,
        parentId: 17,
        name: 'قراردادهای خرید خارجی',
        value: 'contract_calls_external_count'
    },
    {
        id: 156,
        parentId: 17,
        name: 'قراردادهای خرید خارجی',
        value: 'contract_calls_internal_count'
    },
    {
        id: 157,
        parentId: 17,
        name: 'SegWit Adoption',
        value: 'segwit_adoption'
    },
    {
        id: 158,
        parentId: 17,
        name: 'Taproot Adoption',
        value: 'taproot_adoption'
    },
    {
        id: 159,
        parentId: 17,
        name: 'انواع خروجی مصرف شده',
        value: 'spent_output_types_share'
    },
    {
        id: 160,
        parentId: 17,
        name: 'حجم کل تغییرات تنظیم شده',
        value: 'transfers_volume_adjusted_sum'
    },
    {
        id: 161,
        parentId: 17,
        name: 'میانگین حجم تغییرات تنظیم شده',
        value: 'transfers_volume_adjusted_mean'
    },
    {
        id: 162,
        parentId: 17,
        name: 'میانه حجم تغییرات تنظیم شده',
        value: 'transfers_volume_adjusted_median'
    },
]