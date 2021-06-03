import React from "react";
import "./Bill.css";
import { useEffect, useState } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function Bill(props) {
  const [total, setTotal] = useState(0);
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  const refresh = () => {
    window.location.reload();
  };
  useEffect(() => {
    let final = 0;
    let tax = 6.25;
    props.cart.forEach((i) => {
      final = final + Number(i.price*i.qty) + tax;
    });
    setTotal(final);
  }, [props]);
  return (
    <>
      <PDFExport
        ref={pdfExportComponent}
        paperSize="auto"
        margin={40}
        fileName={`Bill for ${new Date().getFullYear()}`}
      >
        <>
          {props?.cart?.map((item, index) => {
            return (
              <div className="bill">
                <div className="bill_right">
                  <h5> {item?.title} x {item.qty}</h5>
                </div>

                <div className="bill_left">
                  <h5> {item?.price} </h5>
                </div>
              </div>
            );
          })}
          <div className="bill">
            <div className="bill_left">
              <h2> TAX </h2>
            </div>

            <div className="bill_right">
              <h2> 6.25 </h2>
            </div>
          </div>
          <div className="bill">
            <div className="bill_left">
              <h2> TOTAL </h2>
            </div>

            <div className="bill_right">
              <h2> {total} </h2>
            </div>
          </div>
        </>
      </PDFExport>
      <div className="button">
        <button
          className="button_save"
          onClick={() => {
            exportPDFWithComponent();
          }}
        >
          print
        </button>

        <button
          className="button_charge"
          onClick={() => {
            refresh();
          }}
        >
          clear
        </button>
      </div>
    </>
  );
}

export default Bill;
