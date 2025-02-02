[**senior-fe-routing-test**](../README.md)

***

[senior-fe-routing-test](../README.md) / Router

# Function: Router()

> **Router**(`props`, `deprecatedLegacyContext`?): `ReactNode`

Defined in: [src/components/Router/Router.tsx:21](https://github.com/yuriiprokop/senior-fe-routing-test-master/blob/944b090b4b6ba5c0f10f5cb408d140195a0d925e/src/components/Router/Router.tsx#L21)

A React functional component that handles client-side routing based on a configuration routes object.

This component listens for custom pop state events (triggered when the URL changes) and updates its
internal state to reflect the current path. It then renders the corresponding route component from the
provided configuration. If no matching route is found, a fallback "404 Not Found" element is displayed.

## Parameters

### props

`RouterProps`

The props for the Router component.

### deprecatedLegacyContext?

`any`

**Deprecated**

**See**

[React Docs](https://legacy.reactjs.org/docs/legacy-context.html#referencing-context-in-lifecycle-methods)

## Returns

`ReactNode`

The rendered route component corresponding to the current path, or a "404 Not Found"
element if no matching route is found.
