import { describe, it, expect, vi, afterEach, beforeAll, afterAll } from 'vitest';
import useParams from './use-params';
import { renderHook } from '@testing-library/react';
import { ROUTER_CONFIG } from '../../constants/router.const';
import * as routerUtils from '../../utils/router.utils';
import { beforeEach } from 'node:test';

vi.mock('../../utils/router.utils');

describe('useParams hook', () => {
    beforeAll(() => {
        window.history.pushState({}, '', '/dashboard');
    });

    afterAll(() => {
        window.history.pushState({}, '', '/');
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('should return params for /orders/:id', () => {
        window.history.pushState({}, '', '/orders/123');
        vi.mocked(routerUtils.getRouteParams).mockReturnValue({ id: '123' });
        const { result } = renderHook(() => useParams());
        expect(routerUtils.getRouteParams).toHaveBeenCalledWith('/orders/123', ROUTER_CONFIG);

        expect(result.current).toEqual({ id: '123' });
    });

    it('should return params for /dashboard', () => {
        window.history.pushState({}, '', '/dashboard');
        const { result } = renderHook(() => useParams());
        expect(result.current).toEqual(undefined);
        expect(routerUtils.getRouteParams).toHaveBeenCalledWith('/dashboard', ROUTER_CONFIG);
    });
});