import React, { useState } from 'react';
import S from './Orders.module.css';

const Orders = (props) => {
    return (
        <div>
            {!props.orders ? (
                <>
                    No orders in this account yet, make your first purchase to see it here
                </>
            ) : (
                <>
                    {props.orders.map((o) => (
                        <div className={S.OrderBox}>
                            name: {o.fullName}
                            <div>
                                From: {o.DateOfPurchase.substring(0, 10)}
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Orders;
