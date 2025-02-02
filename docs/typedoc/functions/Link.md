[**senior-fe-routing-test**](../README.md)

***

[senior-fe-routing-test](../README.md) / Link

# Function: Link()

> **Link**\<`T`\>(`props`): `Element`

Defined in: [src/components/Link/Link.tsx:26](https://github.com/yuriiprokop/senior-fe-routing-test-master/blob/944b090b4b6ba5c0f10f5cb408d140195a0d925e/src/components/Link/Link.tsx#L26)

A React component that renders a link with dynamic route parameters.

This component accepts a route path that may include parameter placeholders (prefixed with `:`)
and replaces these placeholders with the corresponding values provided via the `params` prop.
When the link is clicked, it prevents the default navigation behavior, updates the browser's history
using `window.history.pushState`, and dispatches a custom pop state event.

## Type Parameters

• **T** *extends* `"/dashboard"` \| `"/orders/:id"`

A type extending `RouterPaths` representing a valid route path.

## Parameters

### props

`LinkProps`\<`T`\>

The properties for the Link component.

## Returns

`Element`

A rendered `<a>` element that, when clicked, updates the URL without reloading the page.

## Throws

If a route parameter is missing from `params` or if a parameter name is not a string.
