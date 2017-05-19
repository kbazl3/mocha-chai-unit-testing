const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');
const expect = chai.expect;

chai.use(chaiHttp);

const fakeProduct = {
    name: "bikessss",
    price: "$3.9",
    description: "a good biked"
}


describe("productsCtrl", () => {

    it('expects true to equal true', () => {
        expect(true).to.equal(true);
        expect(2 + 2).to.equal(4);
    })

    it('should return foo', (done) => {
        chai.request(server)
        .get('/test')
        .end((err, res) => {

            expect(res).to.be.ok;
            expect(res.body).to.be.a('object');
            expect(res).to.have.status(200);
            expect(res.body.message).to.equal("foo");
            console.log(res.body);
            done();
        })
    }),

    it('should return a product', (done) => {
        chai.request(server)
        .post('/products')
        .send(fakeProduct)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.ok;
            expect(res.body.name).to.equal(fakeProduct.name)

            done()
        })


    })

})
