import "./Footer.css";

function Footer(): JSX.Element {

    const year = new Date().getFullYear();
    return (
        <div className="Footer center">
            <p>All rights reserves to Kobi Shasha {year} &copy;</p>
        </div>
    );
}

export default Footer;
