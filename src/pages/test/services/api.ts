import request from '../../utils/request';

export function fetch() {
    return request(`/api/tools/dishes/list`, {});
}

export function fetchIngredients() {
    return request('/api/tools/ingredients/list', {});
}

export function addIngredients(values) {
    return request('/api/tools/ingredients/add', {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(values)
    });
}

export function remove(id: string) {
  return request(`/api/tools/dishes/${id}`, {
    method: 'DELETE'
  });
}

export function edit(id: string, values: Object) {
  return request(`/api/tools/dishes/${id}`, {
    method: 'PUT',
    body: JSON.stringify(values),
  });
}

export function create(values: any) {
  return request('/api/tools/dishes/add', {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
        'content-type': 'application/json;charset=utf-8',
    }
  });
}
