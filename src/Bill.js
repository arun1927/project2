import React from "react";
import "./Bill.css";
import { useEffect, useState } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

function Bill(props) {
  const [total, setTotal] = useState();
  const [quantity, setQuantity] = useState(0);
  const [Num, setNum] = useState(0);
  const [itotal, setItotal] = useState(0);
  const [data, setData] = useState(false);

  /// time and date
  let time = new Date().toLocaleTimeString();
  let date =
    new Date().getDate() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear();
  const [ctime, setCtime] = useState(time);

  // interval 1sec to update time
  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);

  // pdf export
  const pdfExportComponent = React.useRef(null);

  // print button
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  const namedata = (val) => {
    setData(val.target.value);
  };
  // clear button to refresh

  const refresh = () => {
    window.location.reload();
  };

  // total with tax
  useEffect(() => {
    let final = 0;
    let tax = 6.25;
    props.cart.forEach((i) => {
      final = final + Number(i.price * i.qty) + tax;
    });
    setTotal(final);
  }, [props]);

  // total without tax

  useEffect(() => {
    let ifinal = 0;

    props.cart.forEach((i) => {
      ifinal = ifinal + Number(i.price * i.qty);
    });
    setItotal(ifinal);
  }, [props]);

  // no.of.items

  useEffect(() => {
    let count = 0;

    props.cart.forEach((i) => {
      count = i.qty+count;
    });
    setQuantity(count);
  }, [props]);

  // no.of.qunatity

  useEffect(() => {
    let all = 0;
    props.cart.forEach((i) => {
      all = all + i.qty;
    });
    setNum(all);
  }, [props]);

  return (
    <>
      <PDFExport
        ref={pdfExportComponent}
        paperSize="auto"
        margin={40}
        fileName={`Bill for ${new Date().getFullYear()}`}
      >
        <div className="bill">
          <div className="bill_right">
            <h5> TIME : {ctime} </h5>
          </div>

          <div className="bill_left">
            <h5> DATE :{date} </h5>
          </div>
        </div>

        <>
          {props?.cart?.map((item, index) => {
            return (
              <div className="bill">
                <div className="bill_right">
                  <h5>
                    {" "}
                    {item?.title} x {item.qty}
                  </h5>
                </div>

                <div className="bill_left">
                  <h5> ₹ {item?.price} </h5>
                </div>
              </div>
            );
          })}

          <div className="bill">
            <div className="bill_left">
              <h5>
                {" "}
                NO.of.items / No.of.quantity {quantity} / {Num}{" "}
              </h5>
            </div>
            <div className="bill_right">
              <h4> ₹ {itotal} </h4>
            </div>
          </div>

          <div className="bill">
            <div className="bill_left">
              <h2> TAX </h2>
            </div>

            <div className="bill_right">
              <h2> ₹ 6.25 </h2>
            </div>
          </div>
          <div className="bill">
            <div className="bill_left">
              <h2> TOTAL </h2>
            </div>

            <div className="bill_right">
              <h2> ₹ {total} </h2>
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
