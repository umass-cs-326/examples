/**
 * Creates a PubSub object for managing event subscriptions and publishing.
 * @returns {Object} The PubSub object with `subscribe`, `unsubscribe`, and
 * `publish` methods.
 */
const PubSub = () => {
  let subscribers = {};

  const subscribe = (event, callback) => {
    subscribers[event] = subscribers[event] || [];
    subscribers[event].push(callback);
  };

  const unsubscribe = (event, callback) => {
    if (!subscribers[event]) return;
    subscribers[event] = subscribers[event].filter(
      subscriber => subscriber !== callback
    );
  };

  const publish = (event, data) => {
    if (!subscribers[event]) return;
    subscribers[event].forEach(callback => callback(data));
  };

  return { subscribe, unsubscribe, publish };
};

export default PubSub;
