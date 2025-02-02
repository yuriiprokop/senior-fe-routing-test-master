[**senior-fe-routing-test**](../README.md)

***

[senior-fe-routing-test](../README.md) / useParams

# Function: useParams()

> **useParams**(): `object`

Defined in: [src/hooks/use-params/use-params.tsx:12](https://github.com/yuriiprokop/senior-fe-routing-test-master/blob/944b090b4b6ba5c0f10f5cb408d140195a0d925e/src/hooks/use-params/use-params.tsx#L12)

A custom React hook that returns the route parameters extracted from the current window location.

This hook utilizes the `getRouteParams` function along with a globally defined router configuration (`ROUTER_CONFIG`)
to determine and return the dynamic parameters embedded in the current URL.

## Returns

`object`

An object containing the route parameters derived from the current URL.

### id

> **id**: `string`
