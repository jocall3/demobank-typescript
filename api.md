# Users

## Me

Types:

- <code><a href="./src/resources/users/me/me.ts">MeRetrieveResponse</a></code>

Methods:

- <code title="get /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">retrieve</a>() -> MeRetrieveResponse</code>

### Preferences

Types:

- <code><a href="./src/resources/users/me/preferences.ts">PreferenceRetrieveResponse</a></code>
- <code><a href="./src/resources/users/me/preferences.ts">PreferenceUpdateResponse</a></code>

Methods:

- <code title="get /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">retrieve</a>() -> PreferenceRetrieveResponse</code>
- <code title="put /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">update</a>({ ...params }) -> PreferenceUpdateResponse</code>

### Devices

Types:

- <code><a href="./src/resources/users/me/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /users/me/devices">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">list</a>({ ...params }) -> DeviceListResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountLinkResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveDetailsResponse</a></code>

Methods:

- <code title="post /accounts/link">client.accounts.<a href="./src/resources/accounts.ts">link</a>({ ...params }) -> AccountLinkResponse</code>
- <code title="get /accounts/{accountId}/details">client.accounts.<a href="./src/resources/accounts.ts">retrieveDetails</a>(accountID) -> AccountRetrieveDetailsResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionCategorizeResponse</a></code>

Methods:

- <code title="get /transactions/{transactionId}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(transactionID) -> TransactionRetrieveResponse</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>
- <code title="put /transactions/{transactionId}/categorize">client.transactions.<a href="./src/resources/transactions.ts">categorize</a>(transactionID, { ...params }) -> TransactionCategorizeResponse</code>

# AI

## Advisor

Types:

- <code><a href="./src/resources/ai/advisor.ts">AdvisorListToolsResponse</a></code>
- <code><a href="./src/resources/ai/advisor.ts">AdvisorSendMessageResponse</a></code>

Methods:

- <code title="get /ai/advisor/tools">client.ai.advisor.<a href="./src/resources/ai/advisor.ts">listTools</a>({ ...params }) -> unknown</code>
- <code title="post /ai/advisor/chat">client.ai.advisor.<a href="./src/resources/ai/advisor.ts">sendMessage</a>({ ...params }) -> unknown</code>

## Oracle

### Simulate

Types:

- <code><a href="./src/resources/ai/oracle/simulate.ts">SimulateRunResponse</a></code>
- <code><a href="./src/resources/ai/oracle/simulate.ts">SimulateRunAdvancedResponse</a></code>

Methods:

- <code title="post /ai/oracle/simulate">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">run</a>() -> SimulateRunResponse</code>
- <code title="post /ai/oracle/simulate/advanced">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">runAdvanced</a>({ ...params }) -> unknown</code>

## Incubator

### Pitch

Types:

- <code><a href="./src/resources/ai/incubator/pitch.ts">PitchGetDetailsResponse</a></code>
- <code><a href="./src/resources/ai/incubator/pitch.ts">PitchSubmitResponse</a></code>

Methods:

- <code title="get /ai/incubator/pitch/{pitchId}/details">client.ai.incubator.pitch.<a href="./src/resources/ai/incubator/pitch.ts">getDetails</a>(pitchID) -> PitchGetDetailsResponse</code>
- <code title="post /ai/incubator/pitch">client.ai.incubator.pitch.<a href="./src/resources/ai/incubator/pitch.ts">submit</a>({ ...params }) -> unknown</code>

## Ads

Types:

- <code><a href="./src/resources/ai/ads/ads.ts">AdGetGenerationStatusResponse</a></code>

Methods:

- <code title="get /ai/ads/operations/{operationId}">client.ai.ads.<a href="./src/resources/ai/ads/ads.ts">getGenerationStatus</a>(operationID) -> unknown</code>

### Generate

Types:

- <code><a href="./src/resources/ai/ads/generate.ts">GenerateCreateResponse</a></code>

Methods:

- <code title="post /ai/ads/generate">client.ai.ads.generate.<a href="./src/resources/ai/ads/generate.ts">create</a>() -> unknown</code>

# Corporate

## Cards

Types:

- <code><a href="./src/resources/corporate/cards.ts">CardListResponse</a></code>
- <code><a href="./src/resources/corporate/cards.ts">CardFreezeResponse</a></code>
- <code><a href="./src/resources/corporate/cards.ts">CardIssueVirtualResponse</a></code>
- <code><a href="./src/resources/corporate/cards.ts">CardUpdateControlsResponse</a></code>

Methods:

- <code title="get /corporate/cards">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">list</a>({ ...params }) -> unknown</code>
- <code title="post /corporate/cards/{cardId}/freeze">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">freeze</a>(cardID) -> CardFreezeResponse</code>
- <code title="post /corporate/cards/virtual">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">issueVirtual</a>({ ...params }) -> CardIssueVirtualResponse</code>
- <code title="put /corporate/cards/{cardId}/controls">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">updateControls</a>(cardID) -> CardUpdateControlsResponse</code>

## Anomalies

Types:

- <code><a href="./src/resources/corporate/anomalies.ts">AnomalyListResponse</a></code>
- <code><a href="./src/resources/corporate/anomalies.ts">AnomalyUpdateStatusResponse</a></code>

Methods:

- <code title="get /corporate/anomalies">client.corporate.anomalies.<a href="./src/resources/corporate/anomalies.ts">list</a>({ ...params }) -> unknown</code>
- <code title="put /corporate/anomalies/{anomalyId}/status">client.corporate.anomalies.<a href="./src/resources/corporate/anomalies.ts">updateStatus</a>(anomalyID) -> unknown</code>

## Compliance

Types:

- <code><a href="./src/resources/corporate/compliance.ts">ComplianceRequestAuditResponse</a></code>

Methods:

- <code title="post /corporate/compliance/audits">client.corporate.compliance.<a href="./src/resources/corporate/compliance.ts">requestAudit</a>() -> unknown</code>

## Treasury

### CashFlow

Types:

- <code><a href="./src/resources/corporate/treasury/cash-flow.ts">CashFlowGetForecastResponse</a></code>

Methods:

- <code title="get /corporate/treasury/cash-flow/forecast">client.corporate.treasury.cashFlow.<a href="./src/resources/corporate/treasury/cash-flow.ts">getForecast</a>({ ...params }) -> CashFlowGetForecastResponse</code>

## Risk

### Fraud

#### Rules

Types:

- <code><a href="./src/resources/corporate/risk/fraud/rules.ts">RuleListResponse</a></code>

Methods:

- <code title="get /corporate/risk/fraud/rules">client.corporate.risk.fraud.rules.<a href="./src/resources/corporate/risk/fraud/rules.ts">list</a>({ ...params }) -> unknown</code>

# Web3

Types:

- <code><a href="./src/resources/web3/web3.ts">Web3ListNFTsResponse</a></code>

Methods:

- <code title="get /web3/nfts">client.web3.<a href="./src/resources/web3/web3.ts">listNFTs</a>({ ...params }) -> unknown</code>

## Wallets

Types:

- <code><a href="./src/resources/web3/wallets.ts">WalletListResponse</a></code>
- <code><a href="./src/resources/web3/wallets.ts">WalletConnectResponse</a></code>

Methods:

- <code title="get /web3/wallets">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">list</a>({ ...params }) -> unknown</code>
- <code title="post /web3/wallets">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">connect</a>() -> unknown</code>

# Payments

## International

## Fx

Types:

- <code><a href="./src/resources/payments/fx.ts">FxGetRatesResponse</a></code>

Methods:

- <code title="get /payments/fx/rates">client.payments.fx.<a href="./src/resources/payments/fx.ts">getRates</a>({ ...params }) -> FxGetRatesResponse</code>

# Sustainability

Types:

- <code><a href="./src/resources/sustainability/sustainability.ts">SustainabilityRetrieveCarbonFootprintResponse</a></code>

Methods:

- <code title="get /sustainability/carbon-footprint">client.sustainability.<a href="./src/resources/sustainability/sustainability.ts">retrieveCarbonFootprint</a>() -> unknown</code>

## Investments

Types:

- <code><a href="./src/resources/sustainability/investments.ts">InvestmentAnalyzeImpactResponse</a></code>

Methods:

- <code title="get /sustainability/investments/impact">client.sustainability.investments.<a href="./src/resources/sustainability/investments.ts">analyzeImpact</a>() -> InvestmentAnalyzeImpactResponse</code>

# Lending

## Applications

# Developers

## Webhooks

# Identity

## KYC
