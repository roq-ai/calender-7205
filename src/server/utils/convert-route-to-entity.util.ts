const mapping: Record<string, string> = {
  calendars: 'calendar',
  days: 'day',
  meetings: 'meeting',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
