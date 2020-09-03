const _foo = 'value for foo',
      _bar = 'value for bar',
      _nestedObject = {
  foo: 'foo'
};

/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class DirectAccess {
  setProps() {
    _foo;
    somethingSomething(_bar);
    tacos(_nestedObject.baz);
  }

  unsetProps() {
    return undefined;
  }

  propsSetToIds() {
    return _scopedId;
  }

}

import { DirectAccess as _DirectAccess } from './input-base-class';
const _scopedId = 'value for scopedId';
foo(_DirectAccess);
