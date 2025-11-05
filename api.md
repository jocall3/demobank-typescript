# Users

## Me

Types:

- <code><a href="./src/resources/users/me/me.ts">MeRetrieveResponse</a></code>

Methods:

- <code title="get /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">retrieve</a>() -> MeRetrieveResponse</code>

### Preferences

Types:

- <code><a href="./src/resources/users/me/preferences.ts">UserPreferences</a></code>

Methods:

- <code title="get /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">retrieve</a>() -> UserPreferences</code>
- <code title="put /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">update</a>({ ...params }) -> UserPreferences</code>

### Devices

Types:

- <code><a href="./src/resources/users/me/devices.ts">Device</a></code>
- <code><a href="./src/resources/users/me/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /users/me/devices">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">list</a>() -> DeviceListResponse</code>
- <code title="delete /users/me/devices/{deviceId}">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">deregister</a>(deviceID) -> void</code>
- <code title="post /users/me/devices">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">register</a>({ ...params }) -> Device</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">LinkedAccount</a></code>
- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountLinkResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveDetailsResponse</a></code>

Methods:

- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>() -> AccountListResponse</code>
- <code title="post /accounts/link">client.accounts.<a href="./src/resources/accounts.ts">link</a>({ ...params }) -> AccountLinkResponse</code>
- <code title="get /accounts/{accountId}/details">client.accounts.<a href="./src/resources/accounts.ts">retrieveDetails</a>(accountID) -> AccountRetrieveDetailsResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">Transaction</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionDisputeResponse</a></code>

Methods:

- <code title="get /transactions/{transactionId}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(transactionID) -> Transaction</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>
- <code title="put /transactions/{transactionId}/categorize">client.transactions.<a href="./src/resources/transactions.ts">categorize</a>(transactionID, { ...params }) -> Transaction</code>
- <code title="post /transactions/{transactionId}/dispute">client.transactions.<a href="./src/resources/transactions.ts">dispute</a>(transactionID, { ...params }) -> TransactionDisputeResponse</code>

# AI

## Advisor

Types:

- <code><a href="./src/resources/ai/advisor.ts">AIInsight</a></code>
- <code><a href="./src/resources/ai/advisor.ts">AIToolCall</a></code>
- <code><a href="./src/resources/ai/advisor.ts">AdvisorListToolsResponse</a></code>
- <code><a href="./src/resources/ai/advisor.ts">AdvisorSendMessageResponse</a></code>

Methods:

- <code title="get /ai/advisor/tools">client.ai.advisor.<a href="./src/resources/ai/advisor.ts">listTools</a>() -> AdvisorListToolsResponse</code>
- <code title="post /ai/advisor/chat">client.ai.advisor.<a href="./src/resources/ai/advisor.ts">sendMessage</a>({ ...params }) -> AdvisorSendMessageResponse</code>

## Oracle

### Simulate

Types:

- <code><a href="./src/resources/ai/oracle/simulate.ts">SimulateRunResponse</a></code>
- <code><a href="./src/resources/ai/oracle/simulate.ts">SimulateRunAdvancedResponse</a></code>

Methods:

- <code title="post /ai/oracle/simulate">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">run</a>({ ...params }) -> SimulateRunResponse</code>
- <code title="post /ai/oracle/simulate/advanced">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">runAdvanced</a>({ ...params }) -> SimulateRunAdvancedResponse</code>

## Incubator

### Pitch

Types:

- <code><a href="./src/resources/ai/incubator/pitch.ts">QuantumWeaverState</a></code>
- <code><a href="./src/resources/ai/incubator/pitch.ts">PitchGetDetailsResponse</a></code>

Methods:

- <code title="get /ai/incubator/pitch/{pitchId}/details">client.ai.incubator.pitch.<a href="./src/resources/ai/incubator/pitch.ts">getDetails</a>(pitchID) -> PitchGetDetailsResponse</code>
- <code title="post /ai/incubator/pitch">client.ai.incubator.pitch.<a href="./src/resources/ai/incubator/pitch.ts">submit</a>({ ...params }) -> QuantumWeaverState</code>

## Ads

Types:

- <code><a href="./src/resources/ai/ads/ads.ts">AdGetGenerationStatusResponse</a></code>

Methods:

- <code title="get /ai/ads/operations/{operationId}">client.ai.ads.<a href="./src/resources/ai/ads/ads.ts">getGenerationStatus</a>(operationID) -> AdGetGenerationStatusResponse</code>

### Generate

Types:

- <code><a href="./src/resources/ai/ads/generate.ts">GenerateVideo</a></code>
- <code><a href="./src/resources/ai/ads/generate.ts">GenerateCreateResponse</a></code>
- <code><a href="./src/resources/ai/ads/generate.ts">GenerateCreateAdvancedResponse</a></code>

Methods:

- <code title="post /ai/ads/generate">client.ai.ads.generate.<a href="./src/resources/ai/ads/generate.ts">create</a>({ ...params }) -> GenerateCreateResponse</code>
- <code title="post /ai/ads/generate/advanced">client.ai.ads.generate.<a href="./src/resources/ai/ads/generate.ts">createAdvanced</a>({ ...params }) -> GenerateCreateAdvancedResponse</code>

# Corporate

## Cards

Types:

- <code><a href="./src/resources/corporate/cards.ts">CorporateCard</a></code>
- <code><a href="./src/resources/corporate/cards.ts">CorporateCardControls</a></code>
- <code><a href="./src/resources/corporate/cards.ts">CardListResponse</a></code>

Methods:

- <code title="get /corporate/cards">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">list</a>() -> CardListResponse</code>
- <code title="post /corporate/cards/{cardId}/freeze">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">freeze</a>(cardID, { ...params }) -> CorporateCard</code>
- <code title="post /corporate/cards/virtual">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">issueVirtual</a>({ ...params }) -> CorporateCard</code>
- <code title="put /corporate/cards/{cardId}/controls">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">updateControls</a>(cardID, { ...params }) -> CorporateCard</code>

## Anomalies

Types:

- <code><a href="./src/resources/corporate/anomalies.ts">FinancialAnomaly</a></code>
- <code><a href="./src/resources/corporate/anomalies.ts">AnomalyListResponse</a></code>

Methods:

- <code title="get /corporate/anomalies">client.corporate.anomalies.<a href="./src/resources/corporate/anomalies.ts">list</a>({ ...params }) -> AnomalyListResponse</code>
- <code title="put /corporate/anomalies/{anomalyId}/status">client.corporate.anomalies.<a href="./src/resources/corporate/anomalies.ts">updateStatus</a>(anomalyID, { ...params }) -> FinancialAnomaly</code>

## Compliance

Types:

- <code><a href="./src/resources/corporate/compliance.ts">ComplianceRequestAuditResponse</a></code>

Methods:

- <code title="post /corporate/compliance/audits">client.corporate.compliance.<a href="./src/resources/corporate/compliance.ts">requestAudit</a>({ ...params }) -> ComplianceRequestAuditResponse</code>

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

- <code><a href="./src/resources/corporate/risk/fraud/rules.ts">FraudRule</a></code>
- <code><a href="./src/resources/corporate/risk/fraud/rules.ts">RuleListResponse</a></code>

Methods:

- <code title="post /corporate/risk/fraud/rules">client.corporate.risk.fraud.rules.<a href="./src/resources/corporate/risk/fraud/rules.ts">create</a>({ ...params }) -> FraudRule</code>
- <code title="get /corporate/risk/fraud/rules">client.corporate.risk.fraud.rules.<a href="./src/resources/corporate/risk/fraud/rules.ts">list</a>() -> RuleListResponse</code>

# Web3

Types:

- <code><a href="./src/resources/web3/web3.ts">Web3ListNFTsResponse</a></code>

Methods:

- <code title="get /web3/nfts">client.web3.<a href="./src/resources/web3/web3.ts">listNFTs</a>() -> Web3ListNFTsResponse</code>

## Wallets

Types:

- <code><a href="./src/resources/web3/wallets.ts">CryptoWalletConnection</a></code>
- <code><a href="./src/resources/web3/wallets.ts">WalletListResponse</a></code>

Methods:

- <code title="get /web3/wallets">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">list</a>() -> WalletListResponse</code>
- <code title="post /web3/wallets">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">connect</a>({ ...params }) -> CryptoWalletConnection</code>

# Payments

## International

Types:

- <code><a href="./src/resources/payments/international.ts">InternationalInitiateResponse</a></code>

Methods:

- <code title="post /payments/international/initiate">client.payments.international.<a href="./src/resources/payments/international.ts">initiate</a>({ ...params }) -> InternationalInitiateResponse</code>

## Fx

Types:

- <code><a href="./src/resources/payments/fx.ts">FxGetRatesResponse</a></code>

Methods:

- <code title="get /payments/fx/rates">client.payments.fx.<a href="./src/resources/payments/fx.ts">getRates</a>({ ...params }) -> FxGetRatesResponse</code>

# Sustainability

Types:

- <code><a href="./src/resources/sustainability/sustainability.ts">SustainabilityRetrieveCarbonFootprintResponse</a></code>

Methods:

- <code title="get /sustainability/carbon-footprint">client.sustainability.<a href="./src/resources/sustainability/sustainability.ts">retrieveCarbonFootprint</a>() -> SustainabilityRetrieveCarbonFootprintResponse</code>

## Investments

Types:

- <code><a href="./src/resources/sustainability/investments.ts">InvestmentAnalyzeImpactResponse</a></code>

Methods:

- <code title="get /sustainability/investments/impact">client.sustainability.investments.<a href="./src/resources/sustainability/investments.ts">analyzeImpact</a>() -> InvestmentAnalyzeImpactResponse</code>

# Lending

## Applications

Types:

- <code><a href="./src/resources/lending/applications.ts">LoanApplicationStatus</a></code>

Methods:

- <code title="get /lending/applications/{applicationId}">client.lending.applications.<a href="./src/resources/lending/applications.ts">retrieve</a>(applicationID) -> LoanApplicationStatus</code>
- <code title="post /lending/applications">client.lending.applications.<a href="./src/resources/lending/applications.ts">submit</a>({ ...params }) -> LoanApplicationStatus</code>

# Developers

## Webhooks

Types:

- <code><a href="./src/resources/developers/webhooks.ts">WebhookSubscription</a></code>
- <code><a href="./src/resources/developers/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="post /developers/webhooks">client.developers.webhooks.<a href="./src/resources/developers/webhooks.ts">create</a>({ ...params }) -> WebhookSubscription</code>
- <code title="put /developers/webhooks/{subscriptionId}">client.developers.webhooks.<a href="./src/resources/developers/webhooks.ts">update</a>(subscriptionID, { ...params }) -> WebhookSubscription</code>
- <code title="get /developers/webhooks">client.developers.webhooks.<a href="./src/resources/developers/webhooks.ts">list</a>() -> WebhookListResponse</code>
- <code title="delete /developers/webhooks/{subscriptionId}">client.developers.webhooks.<a href="./src/resources/developers/webhooks.ts">delete</a>(subscriptionID) -> void</code>

# Identity

## KYC

Types:

- <code><a href="./src/resources/identity/kyc.ts">KYCSubmitResponse</a></code>

Methods:

- <code title="post /identity/kyc/submit">client.identity.kyc.<a href="./src/resources/identity/kyc.ts">submit</a>({ ...params }) -> KYCSubmitResponse</code>
