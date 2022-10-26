import './Space.css';

function Space({children, 
    top=2, 
    bottom=0, 
    right=0, 
    left=0
 }) {

        const spaceVal = (val)=> {
            return `${val} rem`;
        }



        // const spaceStyle = ()=> {
        //     return ({
        //         'marginTop': spaceVal(top),
        //         'marginBottom': spaceVal(bottom),
        //         'marginRight': spaceVal(right),
        //         'marginLeft': spaceVal(left),
        //     });
        // };

    return ( 
        <div className='space' style={{
            marginTop: spaceVal(top),
            marginBottom: spaceVal(bottom),
            marginRight: spaceVal(right),
            marginLeft: spaceVal(left),
        }}>
            {children}
        </div>
     );
}

export default Space;