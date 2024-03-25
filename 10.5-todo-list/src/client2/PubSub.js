export class PubSub {
  constructor() {
    this.subscribers = {};
  }

  // Subscribe to an event
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  // Unsubscribe from an event
  unsubscribe(event, callback) {
    if (!this.subscribers[event]) return;

    this.subscribers[event] = this.subscribers[event].filter(
      subscriber => subscriber !== callback
    );
  }

  // Publish an event
  publish(event, data) {
    if (!this.subscribers[event]) return;

    this.subscribers[event].forEach(callback => callback(data));
  }
}
