import React from 'react'
import styled from 'styled-components'

function Return() {
    return (
        <>
            <Wrapper>
                {/* ======= Overview */}
                <h4>Overview</h4>
                <p>
                    Our refund and returns policy lasts 7 days. If 7 days have passed since your purchase, we can’t offer you a full refund or exchange.
                    <br /><br />
                    To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.
                    <br /><br />
                    To complete your return, we require a receipt or proof of purchase.
                    <br /><br />
                    Please do not send your purchase back to the manufacturer.
                </p>

                {/* ======== Refunds */}
                <h4>Refunds</h4>
                <p>
                    Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
                    <br /><br />
                    If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
                </p>
                <h5>Late or missing refunds</h5>
                <p>
                    If you haven’t received a refund yet, first check your bank account again.
                    <br /><br />
                    Then contact your credit card company, it may take some time before your refund is officially posted.
                    <br /><br />
                    Next contact your bank. There is often some processing time before a refund is posted.
                    <br /><br />
                    If you’ve done all of this and you still have not received your refund yet, please contact us at binyousafclothing@gmail.com
                </p>
                <h5>Sale items</h5>
                <p>
                    Only regular priced items may be refunded. Sale items cannot be refunded.
                </p>

                {/* ========= Exchanges */}
                <h4>Exchanges</h4>
                <p>
                    We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at binyousafclothing@gmail.com and send your item to:
                    <br /><br />
                    96-a Butt plaza near Wazir market Lahore block Azam cloth market Lahore
                </p>

                {/* ========= Shipping returns */}
                <h4>Shipping returns</h4>
                <p>
                    To return your product, you should mail your product to:
                    <br /><br />
                    96-a Butt plaza near Wazir market Lahore block Azam cloth market Lahore.
                    <br /><br />
                    You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                    <br /><br />
                    Depending on where you live, the time it may take for your exchanged product to reach you may vary.
                    <br /><br />
                    If you are returning more expensive items, you may consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.
                </p>

                {/* Need help? */}
                <h4>Need help?</h4>
                <p>
                    Contact us at binyousafclothing@gmail.com for questions related to refunds and returns.
                </p>
            </Wrapper>
        </>
    )
};

const Wrapper = styled.section`
            padding: 8rem 10rem ;
            text-align: justify;

            h4 {
                color: #8490FF;
                font-size: 2rem;
                letter-spacing: 0.5px;
                padding: 5rem 0 1rem 0;
                text-decoration-line: underline;
            }

            h5 {
                color: #8490FF;
                font-size: 1.5rem;
                padding: 3rem 0 0.5rem 0;
                text-decoration-line: underline; 
            }
`;

export default Return