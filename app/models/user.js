import DS from 'ember-data';
import { hasMany } from '@ember-decorators/data';
const { Model } = DS;

export default class UserModel extends Model {
  @hasMany() posts;
}
