import type * as Kit from '@sveltejs/kit';

type RouteParams = {
	id: number;
};

export type RequestHandler = Kit.RequestHandler<RouteParams>;
export type PageLoad = Kit.Load<RouteParams>;
export type PageServerLoad = Kit.Load<RouteParams>;
export type Actions = Kit.Actions;
