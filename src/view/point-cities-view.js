export const createPointCitiesTemplate = (cities) => cities.map((city) => `<option value="${city}">${city}</option>`).join('\n');
