const expect = require('chai').expect;

const { get, getById, create } = require('../../routes/productsController');

let req = {
    body: {},
    params: {},
};

const res = {
    jsonCalledWith: {},
    json(arg) {
        this.jsonCalledWith = arg
    }
}

describe('Products Route', function() {
    describe('get() function', function() {
        it('should return list of all registered products ', function() {
            get(req, res);
            expect(res.jsonCalledWith).to.be.have.key('products');
        });
    })

    describe('getById() function', function(){
        it('should receive return by id ', function() {
            const getReq = req;
            getReq.params = {
                id: 1
            };

            getById(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('description', 'id','name', 'price');
        });
    })

    describe('create() function', function(){
        it('should receive return by id ', function() {
            const getReq = req;
            getReq.params = {
                id: 80,
                name: 'Product 80',
                description: 'Product 80 description',
                price: 2759.00
            };            

            create(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('success')
        });
    })
});