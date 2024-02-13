import * as React from 'react';
import data from '../data/receipts.json';
import styled from 'styled-components';

import { TableContainer, Table, TableBody, TableRow, TableCell, TableHead, Paper } from "@mui/material";

function CreateOrder(
    order: {
        CustomerId: number,
        CustomerName: string,
        Date: string,
        Items: {
            Item: string,
            ItemPrice: string,
            Quantity: string,
        }[],
        OrderId: number,
        Total: string
    }
    ) {
    return (
        <TableRow>
            <TableCell>{order.OrderId}</TableCell>
            <TableCell>{order.CustomerId}</TableCell>
            <TableCell>{order.CustomerName}</TableCell>
            <TableCell>{order.Date}</TableCell>
            <TableCell>{order.Total}</TableCell>
        </TableRow>
    );
}

function OrdersTable() {
  return <TableContainer component={Paper}>
      <Table>
          <TableHead>
              <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Total</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {data.map((order: {
                            CustomerId: number,
                            CustomerName: string,
                            Date: string,
                            Items: {
                                Item: string,
                                ItemPrice: string,
                                Quantity: string,
                            }[],
                            OrderId: number,
                            Total: string
                        }
              ) => {
                  return CreateOrder(order);
              })}
          </TableBody>
      </Table>
  </TableContainer>;
}

export default OrdersTable;