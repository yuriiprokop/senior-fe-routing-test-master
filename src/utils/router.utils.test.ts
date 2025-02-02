import { describe, it, expect } from "vitest";
import { getRouteParams, isSameRoutePath } from "./router.utils";

describe("router.utils.ts", () => {
    it('isSameRoutePath', () => {
        expect(isSameRoutePath('/dashboard', '/dashboard')).toBe(true);
        expect(isSameRoutePath('/dashboard', '/dashboard/1')).toBe(false);
        expect(isSameRoutePath('/dashboard', '/dashboard/1/2')).toBe(false);
        expect(isSameRoutePath('/dashboard', '/dashb')).toBe(false);
        expect(isSameRoutePath('/dashboard', '/order/:id')).toBe(false);

        expect(isSameRoutePath('/orders/:id', '/orders/1')).toBe(true);
        expect(isSameRoutePath('/orders/:id', '/orders/awdaw')).toBe(true);
        expect(isSameRoutePath('/orders/:id', '/orders/51')).toBe(true);
        expect(isSameRoutePath('/orders/:id', '/orders/51/12')).toBe(false);
        expect(isSameRoutePath('/orders/:id', '/orders')).toBe(false);
        expect(isSameRoutePath('/orders/:id', '/')).toBe(false);
        expect(isSameRoutePath('/orders/:id', '/dashboard')).toBe(false);
    });

    it('getRouteParams', () => {
        expect(getRouteParams('/dashboard', [{ path: '/dashboard', element: () => null }])).toEqual({});
        expect(getRouteParams('/dashboard', [{ path: '/dashboard', element: () => null }])).toEqual({});
        expect(getRouteParams('/orders', [{ path: '/orders/:id', element: () => null }])).toEqual({});
        expect(getRouteParams('/orders/1', [{ path: '/orders/:id', element: () => null }])).toEqual({ id: '1' });
        expect(getRouteParams('/orders/awdaw', [{ path: '/orders/:id', element: () => null }])).toEqual({ id: 'awdaw' });
        expect(getRouteParams('/orders/51', [{ path: '/orders/:id', element: () => null }])).toEqual({ id: '51' });
        expect(getRouteParams('/orders/51/12', [{ path: '/orders/:id', element: () => null }])).toEqual({});
    })
});