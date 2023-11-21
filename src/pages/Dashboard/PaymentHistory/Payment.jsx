import PropTypes from 'prop-types';

const Payment = ({payment}) => {
    const {email, price, date, transactionId} =payment || {};

    return (
        <tr className='text-center'>
            <td>{email}</td>
            <td>$ {price}</td>
            <td>{transactionId}</td>
            <td>{date.slice(0, 10)}</td>
        </tr>
    )
};

Payment.propTypes = {
    payment : PropTypes.object,
}

export default Payment;