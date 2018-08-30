import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const post = this.store.createRecord('special-post');
    return this.store.createRecord('user', {posts: [post]});
  }
});
