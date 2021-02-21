
const Sres = (props) => {
    const source = `https://unsplash.com/s/photos/${props.imgg}`;
    return(
        <div>
            <img src={source} alt="something" />
        </div>  
    );
};

export default Sres;
