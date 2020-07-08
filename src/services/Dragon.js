import axiosInstance from '.';

export default class {
  constructor() {
    this.instance = axiosInstance('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/');
  }

  getAll = () =>
    this.instance({
      url: '/dragon',
      method: 'GET',
    });

  getById = (id) =>
    this.instance({
      url: `/dragon/${id}`,
      method: 'GET',
    });

  newDragon = (data) =>
    this.instance({
      url: `/dragon`,
      method: 'POST',
      data,
  });

  editDragon = (id, data) =>
    this.instance({
      url: `/dragon/${id}`,
      method: 'PUT',
      data,
  });

  deleteDragon = (id) =>
    this.instance({
      url: `/dragon/${id}`,
      method: 'DELETE',
      data: {},
});
}
