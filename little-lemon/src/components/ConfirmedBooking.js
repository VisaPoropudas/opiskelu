import { Link, useLocation } from "react-router-dom";
import Layout from "../Layout";
import NameBanner from "./NameBanner";

export default function ConfirmedBooking(props) {
    const { date, time, numberOfGuests, occasion, name, email, comment } = props;
    const location = useLocation();
    const formData = location.state;

    return (
        <Layout>
            <NameBanner/>
            <div className="page-content">
            <h2 className="section-title">Booking Confirmation</h2>
            <p>Your reservation on <b>{formData.date}</b> at <b>{formData.time}</b> for <b>{formData.numberOfGuests}</b> has been booked by name <b>{formData.name}</b>. Please state your name on arrival.</p>
            {(formData.occasion && formData.occasion.length > 0) && (
                <p>We wish you'll have a great {formData.occasion.toLowerCase()} with us.</p>
            )}
            <p>In case of cancellation, please contact us 773-000-0000</p>
            <p>Welcome!</p>
            <Link to="/"><button>Back to Homepage</button></Link>
            </div>
        </Layout>
    )
}