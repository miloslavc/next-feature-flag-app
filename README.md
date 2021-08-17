# Next Feature Flags API

This package uses [upstash](https://upstash.com/), a key-value store for storage, and [ioredis](https://github.com/luin/ioredis) as nodejs redis client. The internal api request are done by [swr](https://swr.vercel.app/).

## What are feature flags?

Feature flags let you enable or disable some api/flags of your application. It allows teams to modify system behavior without changing code.

If you want to learn more about feature flags, check out [this article](http://martinfowler.com/articles/feature-toggles.html).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the feature flag landing page.

## Usage

Feature flags can be added via [http://localhost:3000](http://localhost:3000) or directly using provided endpoints.

## Authentication

This API does not ship with an authentication layer. You **should not** expose the API to the Internet. This API should be deployed behind a firewall, only your application servers should be allowed to send requests to the API.

### API Documentation

#### `/api/flags`

Get a list of available feature flags.

- Endpoint: `/api/flags`
- Responses:
  - 200 OK
  ```json
  [
    {
      "FEATURE_FLAG_ONE": false
    },
    {
      "FEATURE_FLAG_TWO": true
    }
  ]
  ```
  - `key` is the name of the feature flag
  - `enabled`: tell if the feature flag is enabled. If `true`, everybody has access to the feature flag.

#### `/api/flags/:flagName/enable`

Create a new feature flag and sets it as `enabled`.

- Endpoint: `/api/flags/:flagName/enable`
- Input:
  The `Content-Type` HTTP header should be set to `application/json`

- Responses:
  - 200 Created
  ```json
  {
    ":flagName": "enabled"
  }
  ```

#### `/api/flags/:flagName/check`

Get a specific feature flag.

- Endpoint: `/api/flags/:flagName/check`
- Responses:
  - 200 OK
  ```json
  {
    ":flagName": "enabled"
  }
  ```

#### `/api/flags/:flagName/remove`

Remove a feature flag.

- Endpoint: `/api/falgs/:flagName/remove`
- Responses:
  - 200 OK
  ```json
  {
    "status": "flag_removed"
  }
  ```

#### `/api/flags/:flagName/disable`

Update a feature flag.

- Endpoint: `/api/flags/:flagName/disable`
- Input:
  The `Content-Type` HTTP header should be set to `application/json`

- Responses:
  - 200 OK
  ```json
  {
    ":flagName": "enabled"
  }
  ```
