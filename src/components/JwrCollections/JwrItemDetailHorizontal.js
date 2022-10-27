import { FaHeart } from 'react-icons/fa';
import Button from '../UI/Button';
import JwrItemPrice from './JwrItemPrice';
import JwrItemTitle from './JwrItemTitle';
import './JwrItemDetailHorizontal.css';
import JwrItemLabel from './JwrItemLabel';

function JwrItemDetailHorizontal() {
    return (
        <div className='jwr-item-horizontal'>
            <div className='jwr-item-horizontal__top'>
                <JwrItemTitle>Bracelet {`<<anbarin>>`} in gilded silver and blue amber</JwrItemTitle>
                <span className='jwr-item-horizontal__icon'><FaHeart /></span>
            </div>
            <JwrItemPrice className='jwr-item-horizontal__price'>$ 435.00</JwrItemPrice>
            <div className='jwr-item-horizontal__bottom'>
                <div className='jwr-item-horizontal__labels'>
                    <JwrItemLabel label='Size of the stone' value='20X12X8' />
                    <JwrItemLabel label='Product weight' value='10.6' />
                    <JwrItemLabel label='Materials' value='Natural / amber/Silver 925&deg;/Gliding/Fianites' />
                </div>
                <Button className='jwr-item-horizontal__btn'>BUY</Button>
            </div>
        </div>
    );
}

export default JwrItemDetailHorizontal;