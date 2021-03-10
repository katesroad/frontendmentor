// eslint-disable-next-line
import styled from "styled-components/macro";
import * as React from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import UserAddress from "components/UserAddress";
import Datepicker from "components/Datepicker";
import { FormControl, Label, Input, Button } from "components/lib";
import ItemList, { BillItem } from "../ItemList";
import { invoice, getItem } from "./invoice.template";

const InvoiceBasic = ({ values }) => (
  <>
    <UserAddress type="senderAddress" address={values.senderAddress} />
    <UserAddress type="clientAddress" address={values.clientAddress}>
      <FormControl>
        <Label>Client Name</Label>
        <Input name="clientName" />
      </FormControl>
      <FormControl>
        <Label>Client Email</Label>
        <Input name="clientEmail" />
      </FormControl>
    </UserAddress>
  </>
);

function InvoiceForm({ children }) {
  return (
    <Formik
      initialValues={invoice}
      render={({ values, setFieldValue, ...rest }) => (
        <>
          <Form>
            <InvoiceBasic values={values} />
            <Datepicker
              label="Invoice Date"
              name="paymentDue"
              onChange={setFieldValue}
              value={values.paymentDue}
            />
            <FieldArray
              name="items"
              render={(arrayHelpers) => (
                <ItemList onAddItem={() => arrayHelpers.push(getItem())}>
                  {values.items?.map((item, index) => (
                    <li key={index}>
                      <BillItem
                        {...item}
                        index={index}
                        onDelete={() => arrayHelpers.remove(index)}
                      />
                    </li>
                  ))}
                </ItemList>
              )}
            />
            {/* to place discard button */}
            <p>
              {children}
              <Button type="submit">Save and Send</Button>
            </p>
          </Form>
        </>
      )}
      onSubmit={(values) => console.log(new Date(values.paymentDue).getTime())}
    />
  );
}

export default InvoiceForm;
