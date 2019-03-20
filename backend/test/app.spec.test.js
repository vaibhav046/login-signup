const chai = require('chai');
const nock = require('nock');
const chaiHttp = require('chai-http');
const API_URL = 'http://localhost:3000/default';
let response = null;
chai.should();
chai.use(chaiHttp);

describe('Login the user', () => {
    beforeEach('Fetch user', () => {
        response = {
            'email': 'vaibhav046@gmail.com',
            'password': 'abc',
            'username': 'vaibhav046',
        };
        nock(API_URL)
            .post('/login', response)
            .reply(200, response);
    });
    it('login the user with correct credentials', (done) => {
        chai.request(API_URL)
            .post('/login')
            .send(response)
            .then((res) => {
                console.log(res.status);
                res.should.have.status(200);
            })
            .catch((err) => {
                console.log(`error occured ${err}`);
            });
        done();
    });
});
describe('Register the user', () => {
    beforeEach('populate user', () => {
        // eslint-disable-next-line max-len
        response = {
            '_id': 'test1',
            'email': 'abc@gmail.com',
            'password': 'test',
            'username': 'test',
        };
        nock(API_URL)
            .post('/signup')
            .reply(200, response);
    });
    it('registers user and populates database', (done) => {
        chai.request(API_URL)
            .post('/signup')
            .send(response)
            .then((res) => {
                res.should.have.status(200);
                res.should.have(res.body).equals(response);
            })
            .catch((err) => {
                console.log(`error occured ${err}`);
            });
        done();
    });
});
