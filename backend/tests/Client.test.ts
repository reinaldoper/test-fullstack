import chai from 'chai';
import { Response } from 'superagent';
import chaiHttp from 'chai-http';
import app from '../src/index';
const expect = chai.expect;
import { clients } from './mock/mockClients';
import { describe, it } from 'mocha';


chai.use(chaiHttp);
let responseHttp: Response;


describe("Should return a list clients", () => {
  it("Deve retornar lista de clientes.", async () => {
    responseHttp = await chai
      .request(app)
      .get('/api/clients')
      .send(clients)
    const { status, body } = responseHttp;
    const result = body.message;
    expect(status).to.be.equal(200);
    expect(body.message).to.deep.equal(result);
  });

  it("Deve retornar aluno id='1'.", async () => {
    const id = 1
    responseHttp = await chai
      .request(app)
      .get(`/api/clients/${id}`)
      .send(clients[0])
    const { status, body } = responseHttp;
    const result = body.message;
    expect(status).to.be.equal(200);
    expect(body.message).to.deep.equal(result);
  });
})