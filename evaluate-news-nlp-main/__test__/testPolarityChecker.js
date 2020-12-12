
import "babel-polyfill";

import { CheckPolarity } from "../src/client/js/formHandler"

describe('Testing polarity ', () => {
  

    test('Testing the polarityChecker() function', () => {
        expect(CheckPolarity).toBeDefined();
    })

});