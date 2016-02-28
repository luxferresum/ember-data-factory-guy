import FactoryGuy from './factory-guy';
import { isEquivalent } from './utils/helper-functions';
import MockGetRequest from './mock-get-request';

export default class MockQueryRequest extends MockGetRequest {

  constructor(modelName, queryParams = {}) {
    super(modelName);
    this.setResponseJson(FactoryGuy.getFixtureBuilder().convertForBuild(modelName, []));
    this.setValidReturnsKeys('models json ids headers'.w());
    this.currentQueryParams = queryParams;
  }

  withParams(queryParams) {
    this.currentQueryParams = queryParams;
    return this;
  }

  paramsMatch(settings) {
    return isEquivalent(this.currentQueryParams, settings.data);
  }

}
