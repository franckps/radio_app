export default class Controller {
  constructor({ view, service }) {
    this.view = view;
    this.service = service;
  }

  static initialize({ view, service }) {
    const controller = new Controller({ view, service });
    controller.onLoad();
    return controller;
  }

  async commandReceived(text) {
    return this.service.makeRequest({
      command: text.toLowerCase(),
    });
  }

  onLoad() {
    this.view.configureOnBtnClick(this.commandReceived.bind(this));
    this.view.onLoad();
  }
}
