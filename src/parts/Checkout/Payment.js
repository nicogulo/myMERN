import React from 'react';
import Fade from 'react-reveal/fade';
import { InputText, InputFile } from 'elements/Form';
import logoBca from 'assets/images/logo-bca.jpg';
import logoMandiri from 'assets/images/logo-mandiri.jpg';

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;
  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = ((subTotal * tax) / 100) * subTotal;
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={600}>
              <p className="mb-4">Transnfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub Total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>

              <div className="row mt-4">
                <div className="col-text-right">
                  <img src={logoBca} alt="Bank cenetral asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>18 101998</dd>
                    <dd>Dev Nic</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="Bank Mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>18 101998</dd>
                    <dd>Dev Nic</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>

          <div className="col-5 py-5">
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <inputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <inputFile
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
