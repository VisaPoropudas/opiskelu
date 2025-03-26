import Layout from "../Layout";
import NameBanner from "./NameBanner";
import {menu} from '../index';
import SpecialsCard from "./SpecialsCard";
export default function Menu() {
    return (
        <Layout>
            <NameBanner/>
            <div className="page-content">
            <h2 className="section-title">Menu</h2>
            { menu.map((dish, index) => {
                return (
                    <p>
                        <SpecialsCard key={index} name={dish.name} price={dish.price} imageUrl={dish.imgUrl} description={dish.description}/>
                    </p>
                )
            })}
            </div>
            
        </Layout>
    )
}