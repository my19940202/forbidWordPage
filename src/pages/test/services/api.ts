import request from '../../utils/request';

export function fetch() {
      return request(`/api/dishes/list`, {});
}

export function remove(id: string) {
  return request(`/api/dishes/${id}`, {
    method: 'DELETE'
  });
}

export function edit(id: string, values: Object) {
  return request(`/api/dishes/${id}`, {
    method: 'PUT',
    body: JSON.stringify(values),
  });
}

export function create(values: any) {
  return request('/api/dishes/add', {
    method: 'POST',
    body: JSON.stringify(values),
  });
}
