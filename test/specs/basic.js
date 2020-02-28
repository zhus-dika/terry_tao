const fs = require('fs');
const assert = require('assert')
describe('portfolio page', () => {
    it('should detect if element auth button is existing', () => {
        browser.url('http://localhost:8080/admin#/login')
            let elem = $('.login__send-data')
            let isExisting = elem.isExisting()
            assert.strictEqual(isExisting, true)
    })
})